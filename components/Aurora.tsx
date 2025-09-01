"use client";
// Aurora background animation (orange themed) using OGL.
import { useEffect, useRef } from "react";
import { Renderer, Program, Mesh, Color, Triangle } from "ogl";

const VERT = `#version 300 es\nin vec2 position;\nvoid main() {\n  gl_Position = vec4(position, 0.0, 1.0);\n}`;

// Fragment shader (original vibrant aurora design with vertical noise veil)
const FRAG = `#version 300 es\nprecision highp float;\n\nuniform float uTime;\nuniform float uAmplitude;\nuniform vec3 uColorStops[3];\nuniform vec2 uResolution;\nuniform float uBlend;\n\nout vec4 fragColor;\n\nvec3 permute(vec3 x){ return mod(((x*34.0)+1.0)*x,289.0); }\nfloat snoise(vec2 v){\n  const vec4 C=vec4(0.211324865405187,0.366025403784439,-0.577350269189626,0.024390243902439);\n  vec2 i=floor(v+dot(v,C.yy));\n  vec2 x0=v-i+dot(i,C.xx);\n  vec2 i1=(x0.x>x0.y)?vec2(1.0,0.0):vec2(0.0,1.0);\n  vec4 x12=x0.xyxy+C.xxzz; x12.xy-=i1; i=mod(i,289.0);\n  vec3 p=permute(permute(i.y+vec3(0.0,i1.y,1.0))+i.x+vec3(0.0,i1.x,1.0));\n  vec3 m=max(0.5-vec3(dot(x0,x0),dot(x12.xy,x12.xy),dot(x12.zw,x12.zw)),0.0); m*=m; m*=m;\n  vec3 x=2.0*fract(p*C.www)-1.0; vec3 h=abs(x)-0.5; vec3 ox=floor(x+0.5); vec3 a0=x-ox;\n  m*=1.79284291400159-0.85373472095314*(a0*a0+h*h);\n  vec3 g; g.x=a0.x*x0.x+h.x*x0.y; g.yz=a0.yz*x12.xz+h.yz*x12.yw;\n  return 130.0*dot(m,g);\n}\nstruct ColorStop{ vec3 color; float position; };\n#define COLOR_RAMP(colors,factor,finalColor) { int index=0; for(int i=0;i<2;i++){ ColorStop c=colors[i]; bool keep=c.position<=factor; index=int(mix(float(index),float(i),float(keep))); } ColorStop c=colors[index]; ColorStop n=colors[index+1]; float range=n.position-c.position; float t=(factor-c.position)/range; finalColor=mix(c.color,n.color,t); }\nvoid main(){\n  vec2 uv=gl_FragCoord.xy/uResolution;\n  ColorStop colors[3]; colors[0]=ColorStop(uColorStops[0],0.0); colors[1]=ColorStop(uColorStops[1],0.5); colors[2]=ColorStop(uColorStops[2],1.0);\n  vec3 rampColor; COLOR_RAMP(colors, uv.x, rampColor);\n  // Height field from noise (gives rising curtains)\n  float h = snoise(vec2(uv.x*2.0 + uTime*0.1, uTime*0.25)) * 0.5 * uAmplitude;\n  h = exp(h);\n  h = (uv.y * 2.0 - h + 0.2);\n  float intensity = 0.6 * h;\n  float midPoint = 0.20;\n  float auroraAlpha = smoothstep(midPoint - uBlend*0.5, midPoint + uBlend*0.5, intensity);\n  vec3 auroraColor = intensity * rampColor;\n  fragColor = vec4(auroraColor * auroraAlpha, auroraAlpha);\n}`;

export interface AuroraProps {
  colorStops?: string[]; // three color hex strings
  amplitude?: number; // distortion strength (still used for subtle structure)
  blend?: number; // alpha spread
  time?: number; // manual time override
  speed?: number; // time multiplier
  fps?: number; // target max frames per second (default 45)
  maxDpr?: number; // cap device pixel ratio (default 1.25)
  quality?: number; // 0.4 - 1: internal render resolution scale (default 0.85)
  pauseWhenOffscreen?: boolean; // pause animation when off viewport (default true)
  reduceMotionStatic?: boolean; // force static frame even if user does not prefer reduced motion (for perf)
  className?: string; // extra class for container div
  onReady?: () => void; // callback after first frame painted
}

export default function Aurora({
  colorStops = ["#FFB871", "#FF6F32", "#FF3A14"], // orange gradient default
  amplitude = 1.0,
  blend = 0.5,
  fps = 45,
  maxDpr = 1.25,
  quality = 0.85,
  pauseWhenOffscreen = true,
  reduceMotionStatic = false,
  onReady,
  ...rest
}: AuroraProps) {
  // Clamp quality to avoid invalid values.
  quality = Math.min(1, Math.max(0.35, quality));
  const propsRef = useRef<AuroraProps>({ colorStops, amplitude, blend, fps, maxDpr, quality, pauseWhenOffscreen, reduceMotionStatic, ...rest });
  propsRef.current = { colorStops, amplitude, blend, fps, maxDpr, quality, pauseWhenOffscreen, reduceMotionStatic, ...rest };
  const ctnDom = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctn = ctnDom.current;
    if (!ctn) return;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let externallyPaused = false;
  const staticFrame = prefersReducedMotion || propsRef.current.reduceMotionStatic;
    const dpr = Math.min(window.devicePixelRatio || 1, propsRef.current.maxDpr || 1.25);
    const renderer = new Renderer({ alpha: true, premultipliedAlpha: true, antialias: false, dpr });
    const gl = renderer.gl;
    gl.clearColor(0, 0, 0, 0);
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
    gl.canvas.style.backgroundColor = "transparent";

    let program: Program | undefined;
    function resize() {
      if (!ctn) return;
      const width = ctn.offsetWidth;
      const height = ctn.offsetHeight;
      const q = propsRef.current.quality ?? quality;
      renderer.setSize(width * q, height * q);
      // Maintain CSS size at full container dimensions.
      gl.canvas.style.width = width + 'px';
      gl.canvas.style.height = height + 'px';
      if (program) program.uniforms.uResolution.value = [width * q, height * q];
    }
    window.addEventListener("resize", resize);

  const geometry = new Triangle(gl);
    if (geometry.attributes.uv) delete (geometry.attributes as any).uv; // not used

    const colorStopsArray = colorStops.map(hex => { const c = new Color(hex); return [c.r, c.g, c.b]; });
    program = new Program(gl, {
      vertex: VERT,
      fragment: FRAG,
      uniforms: {
        uTime: { value: 0 },
        uAmplitude: { value: amplitude },
        uColorStops: { value: colorStopsArray },
        uResolution: { value: [ctn.offsetWidth, ctn.offsetHeight] },
        uBlend: { value: blend },
      },
    });
    const mesh = new Mesh(gl, { geometry, program });
    ctn.appendChild(gl.canvas);

    // Render an initial frame immediately so there's no blank gap while waiting for RAF timing.
    try {
      if (program) {
        program.uniforms.uTime.value = 0;
        renderer.render({ scene: mesh });
        // Fire onReady ASAP after first pixels are on screen.
        onReady && queueMicrotask(() => { try { onReady(); } catch { /* noop */ } });
      }
    } catch { /* ignore initial render issues */ }

    // Visibility / intersection based pausing
    let isIntersecting = true;
    let isDocumentVisible = !document.hidden;
    let animateId = 0;
    let lastFrameTime = 0;
    let dynamicFps = fps; // can degrade if slow
    let frameSamples = 0;
    let accumTime = 0;

    const desiredFrame = () => 1000 / (propsRef.current.fps || dynamicFps || 45);

    const update = (t: number) => {
      animateId = requestAnimationFrame(update);
      if (staticFrame) return; // do nothing after first draw
      if (externallyPaused) return;
      if (propsRef.current.pauseWhenOffscreen && (!isIntersecting || !isDocumentVisible)) return;
      const interval = desiredFrame();
      if (t - lastFrameTime < interval) return;
      const delta = t - lastFrameTime;
      lastFrameTime = t;
      // Simple adaptive fps (if >1.8x target interval for several samples, drop dynamicFps)
      frameSamples++;
      accumTime += delta;
      if (frameSamples >= 20) {
        const avg = accumTime / frameSamples;
        const target = 1000 / (propsRef.current.fps || fps);
        if (avg > target * 1.8 && dynamicFps > 25) {
          dynamicFps = Math.max(25, dynamicFps - 5); // step down
        }
        frameSamples = 0; accumTime = 0;
      }
  if (program) {
        const { time = t * 0.01, speed = 1.0 } = propsRef.current;
        program.uniforms.uTime.value = time * speed * 0.1;
        const nextAmp = propsRef.current.amplitude ?? amplitude;
        if (program.uniforms.uAmplitude.value !== nextAmp) program.uniforms.uAmplitude.value = nextAmp;
        const nextBlend = propsRef.current.blend ?? blend;
        if (program.uniforms.uBlend.value !== nextBlend) program.uniforms.uBlend.value = nextBlend;
        const stops = propsRef.current.colorStops ?? colorStops;
        const existing = program.uniforms.uColorStops.value as number[][];
        if (!existing || existing.length !== stops.length) {
          program.uniforms.uColorStops.value = stops.map((hex: string) => { const c = new Color(hex); return [c.r, c.g, c.b]; });
        }
        renderer.render({ scene: mesh });
      }
    };

    const pauseHandler = (e: Event) => {
      const ce = e as CustomEvent;
      externallyPaused = !!ce.detail;
      if (!externallyPaused) lastFrameTime = 0;
    };
    window.addEventListener('aurora:pause', pauseHandler as EventListener);

  if (!staticFrame) {
      animateId = requestAnimationFrame(update);
    }

    // Intersection Observer to pause when offscreen
    let observer: IntersectionObserver | undefined;
    if ('IntersectionObserver' in window && pauseWhenOffscreen) {
      observer = new IntersectionObserver((entries) => {
        entries.forEach(e => { isIntersecting = e.isIntersecting; });
      }, { root: null, threshold: 0 });
      observer.observe(ctn);
    }

    const visHandler = () => { isDocumentVisible = !document.hidden; };
    document.addEventListener('visibilitychange', visHandler);
    resize();

    // Track disposal to guard against double-invocation (React 18 StrictMode mounts -> unmounts -> remounts in dev)
    let disposed = false;

    return () => {
      if (disposed) return; // idempotent
      disposed = true;
      // Stop animation loop first.
      if (animateId) cancelAnimationFrame(animateId);
      document.removeEventListener('visibilitychange', visHandler);
      window.removeEventListener('aurora:pause', pauseHandler as EventListener);
      window.removeEventListener("resize", resize);
      if (observer) observer.disconnect();
      // Safely remove canvas if still attached (avoid parent.removeChild(null) issues in StrictMode/hot-reload).
      try {
        const canvas = gl?.canvas as HTMLCanvasElement | undefined;
        canvas?.parentNode && canvas.remove(); // remove() is no-op if already detached
      } catch { /* ignore */ }
      // Proactively lose context to free GPU resources (ignore if unavailable)
      try { gl?.getExtension("WEBGL_lose_context")?.loseContext(); } catch { /* ignore */ }
    };
  }, [amplitude, blend, fps, maxDpr, quality, pauseWhenOffscreen, reduceMotionStatic, colorStops.join(",")]);

  return <div ref={ctnDom} className={"aurora-layer " + (rest.className || "")} aria-hidden="true" />;
}
