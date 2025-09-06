"use client";
import type { CSSProperties, ReactNode } from "react";
import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";

import "./BubbleMenu.css";

type MenuItem = {
  label: string;
  href: string;
  ariaLabel?: string;
  rotation?: number;
  hoverStyles?: {
    bgColor?: string;
    textColor?: string;
  };
};

export type BubbleMenuProps = {
  logo: ReactNode | string;
  onMenuClick?: (open: boolean) => void;
  className?: string;
  style?: CSSProperties;
  menuAriaLabel?: string;
  menuBg?: string;
  menuContentColor?: string;
  toggleColor?: string; // color for hamburger lines only
  toggleBubbleBg?: string; // background for hamburger bubble only (logo bubble still uses menuBg)
  useFixedPosition?: boolean;
  items?: MenuItem[];
  animationEase?: string;
  animationDuration?: number;
  staggerDelay?: number;
  hideLogo?: boolean;
  bubbleModal?: boolean; // if true, use expanding circular modal backdrop instead of full sheet
};

const DEFAULT_ITEMS: MenuItem[] = [
  { label: "home", href: "#", ariaLabel: "Home", rotation: -8, hoverStyles: { bgColor: "#3b82f6", textColor: "#ffffff" } },
  { label: "about", href: "#", ariaLabel: "About", rotation: 8, hoverStyles: { bgColor: "#10b981", textColor: "#ffffff" } },
  { label: "projects", href: "#", ariaLabel: "Documentation", rotation: 8, hoverStyles: { bgColor: "#f59e0b", textColor: "#ffffff" } },
  { label: "blog", href: "#", ariaLabel: "Blog", rotation: 8, hoverStyles: { bgColor: "#ef4444", textColor: "#ffffff" } },
  { label: "contact", href: "#", ariaLabel: "Contact", rotation: -8, hoverStyles: { bgColor: "#ff4726", textColor: "#ffffff" } }
];

// Simple shade utility: darken (positive factor) or lighten (negative) a hex color
function shade(hex: string, amount: number) {
  if (!/^#?[0-9a-fA-F]{6}$/.test(hex)) return hex;
  const h = hex.replace('#','');
  const num = parseInt(h,16);
  let r = (num >> 16) & 255;
  let g = (num >> 8) & 255;
  let b = num & 255;
  const adj = (c:number) => Math.min(255, Math.max(0, Math.round(c * (1 - amount))));
  if (amount < 0) { // lighten
    const factor = 1 + amount; // amount negative
    const adjL = (c:number)=>Math.min(255, Math.max(0, Math.round(c + (255-c)*( -amount ))));
    r = adjL(r); g = adjL(g); b = adjL(b);
  } else {
    r = adj(r); g = adj(g); b = adj(b);
  }
  return `#${(r<<16 | g<<8 | b).toString(16).padStart(6,'0')}`;
}

export default function BubbleMenu({
  logo,
  onMenuClick,
  className,
  style,
  menuAriaLabel = "Toggle menu",
  menuBg = "#fff",
  menuContentColor = "#111",
  toggleColor = "#111",
  toggleBubbleBg,
  useFixedPosition = false,
  items,
  animationEase = "back.out(1.5)",
  animationDuration = 0.5,
  staggerDelay = 0.12,
  hideLogo = false,
  bubbleModal = false,
}: BubbleMenuProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);

  const overlayRef = useRef<HTMLDivElement>(null);
  const modalBubbleRef = useRef<HTMLDivElement>(null);
  const bubblesRef = useRef<HTMLAnchorElement[]>([]);
  const labelRefs = useRef<HTMLSpanElement[]>([]);

  const menuItems = items?.length ? items : DEFAULT_ITEMS;
  const containerClassName = [
    "bubble-menu",
    (hideLogo && className !== 'align-right') ? "no-logo" : '',
    useFixedPosition ? "fixed" : "absolute",
    className,
  ].filter(Boolean).join(" ");

  const handleToggle = () => {
    const nextState = !isMenuOpen;
    if (nextState) setShowOverlay(true);
    setIsMenuOpen(nextState);
    onMenuClick?.(nextState);
    if (typeof document !== 'undefined') {
      if (nextState) {
        document.body.classList.add('menu-open');
        window.dispatchEvent(new CustomEvent('aurora:pause', { detail: true }));
      } else {
        window.dispatchEvent(new CustomEvent('aurora:pause', { detail: false }));
      }
    }
  };

  useEffect(() => {
    const overlay = overlayRef.current;
    const modalBubble = modalBubbleRef.current;
    const bubbles = bubblesRef.current.filter(Boolean);
    const labels = labelRefs.current.filter(Boolean);
    if (!overlay || !bubbles.length) return;

    if (isMenuOpen) {
      gsap.set(overlay, { display: 'flex' });
      overlay.classList.add('animating');
      gsap.killTweensOf(bubbles);
      gsap.killTweensOf(labels);
      gsap.set(bubbles, { scale: 0, transformOrigin: '50% 50%' });
      gsap.set(labels, { y: 20, autoAlpha: 0 });
      const tl = gsap.timeline({ defaults: { ease: animationEase } });
      if (bubbleModal && modalBubble) {
        gsap.set(modalBubble, { scale: 0, autoAlpha: 0 });
        tl.to(modalBubble, { scale: 1, autoAlpha: 1, duration: animationDuration, ease: 'power3.out' });
      }
      tl.to(bubbles, {
        scale: 1,
        duration: animationDuration * 0.75,
        stagger: staggerDelay * 0.6,
        ease: animationEase,
      }, bubbleModal ? '>-0.25' : 0)
      .to(labels, {
        y: 0,
        autoAlpha: 1,
        duration: animationDuration * 0.6,
        ease: 'power3.out',
        stagger: staggerDelay * 0.6,
        onComplete: () => overlay.classList.remove('animating')
      }, '<0.05');
    } else if (showOverlay) {
      overlay.classList.add('animating');
      const tl = gsap.timeline();
      tl.to(labels, { y: 16, autoAlpha: 0, duration: 0.18, ease: 'power2.in' });
      tl.to(bubbles, { scale: 0, duration: 0.18, ease: 'power2.in', stagger: 0.05 }, '<0.02');
      if (bubbleModal && modalBubble) {
        tl.to(modalBubble, { scale: 0, autoAlpha: 0, duration: 0.18, ease: 'power2.in' }, '>-0.05');
      }
      tl.add(() => {
        gsap.set(overlay, { display: 'none' });
        overlay.classList.remove('animating');
        setShowOverlay(false);
        if (typeof document !== 'undefined') {
          document.body.classList.remove('menu-open');
        }
      });
    }
  }, [isMenuOpen, showOverlay, animationEase, animationDuration, staggerDelay, bubbleModal]);

  useEffect(() => {
    const handleResize = () => {
      if (isMenuOpen) {
        const bubbles = bubblesRef.current.filter(Boolean);
        const isDesktop = window.innerWidth >= 900;
        bubbles.forEach((bubble, i) => {
          const item = menuItems[i];
            const rotation = isDesktop ? (item.rotation ?? 0) : 0;
            gsap.set(bubble, { rotation });
        });
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMenuOpen, menuItems]);

  return (
    <>
      <nav
        className={containerClassName}
        style={style}
        aria-label="Main navigation"
      >
        {!hideLogo && (
          <div
            className="bubble logo-bubble"
            aria-label="Logo"
            style={{ background: menuBg }}
          >
            <span className="logo-content">
              {typeof logo === "string" ? (
                <img src={logo} alt="Logo" className="bubble-logo" />
              ) : (
                logo
              )}
            </span>
          </div>
        )}

        <button
          type="button"
          className={`bubble toggle-bubble menu-btn ${isMenuOpen ? "open" : ""}`}
          onClick={handleToggle}
          aria-label={menuAriaLabel}
          aria-pressed={isMenuOpen}
          style={{
            background: toggleBubbleBg
              ? `linear-gradient(145deg,#1a1a1a,#000000 58%,#000000)`
              : toggleBubbleBg || toggleColor || menuBg,
            border: (toggleBubbleBg || toggleColor) ? '2px solid #000' : undefined,
            boxShadow: (toggleBubbleBg || toggleColor)
              ? '0 8px 18px -6px rgba(0,0,0,0.6), 0 3px 6px -3px rgba(0,0,0,0.45), 0 0 0 2px rgba(0,0,0,0.55) inset, 0 0 0 1px rgba(255,255,255,0.28) inset, 0 0 14px -2px rgba(0,0,0,0.55)'
              : undefined,
            position:'relative'
          }}
        >
          {(() => {
            const lineColor = '#ff4726';
            return (
              <>
                <span className="menu-line" style={{ background: lineColor }} />
                <span className="menu-line short" style={{ background: lineColor }} />
              </>
            );
          })()}
        </button>
      </nav>
      {showOverlay && (
        <div
          ref={overlayRef}
          className={`bubble-menu-items fixed ${bubbleModal ? 'modal-mode' : ''}`}
          aria-hidden={!isMenuOpen}
        >
          {bubbleModal && (
            <div className="bubble-modal" ref={modalBubbleRef} aria-hidden={!isMenuOpen} />
          )}
          <ul className="pill-list" role="menu" aria-label="Menu links">
            {menuItems.map((item, idx) => (
              <li key={idx} role="none" className="pill-col">
                <a
                  role="menuitem"
                  href={item.href}
                  aria-label={item.ariaLabel || item.label}
                  className="pill-link"
                  style={
                    {
                      "--item-rot": `${item.rotation ?? 0}deg`,
                      "--pill-bg": menuBg,
                      "--pill-color": menuContentColor,
                      "--hover-bg": item.hoverStyles?.bgColor || "#f3f4f6",
                      "--hover-color":
                        item.hoverStyles?.textColor || menuContentColor,
                    } as CSSProperties
                  }
                  ref={(el) => {
                    if (el) bubblesRef.current[idx] = el;
                  }}
                >
                  <span
                    className="pill-label"
                    ref={(el) => {
                      if (el) labelRefs.current[idx] = el;
                    }}
                  >
                    {item.label}
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <div className="menu-footer" aria-label="Social media links">
            <div className="follow-label">FOLLOW US ON</div>
            <ul className="social-links" role="list">
              <li>
                <a href="https://twitter.com" aria-label="X (Twitter)" target="_blank" rel="noopener noreferrer">
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3 3h5.63l4.22 6.3L17.5 3H21l-6.9 9.54L21.3 21h-5.63l-4.5-6.73L6.5 21H3l7.27-9.95L3 3Zm3.61 1.5 11.86 16h1.78L8.44 4.5H6.61Z"/></svg>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4.98 3.5a2.5 2.5 0 1 0 0 5.001 2.5 2.5 0 0 0 0-5ZM3 9h4v12H3zM14.25 9c-2.14 0-3.25 1.17-3.81 2V9H6.5v12h3.94v-6.2c0-1.64.31-3.22 2.33-3.22 1.98 0 2.02 1.85 2.02 3.32V21H18v-6.89C18 10.83 16.24 9 14.25 9Z"/></svg>
                </a>
              </li>
              <li>
                <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M13.5 9H16l.5-3h-3V4.75c0-.86.17-1.25 1.38-1.25H16V1.04C15.34.96 14.67.92 14 .92c-2.4 0-3.5 1.1-3.5 3.58V6h-2v3h2v9h4V9Z"/></svg>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7Zm10 2c1.66 0 3 1.34 3 3v10c0 1.66-1.34 3-3 3H7c-1.66 0-3-1.34-3-3V7c0-1.66 1.34-3 3-3h10Zm-5 3.5A5.5 5.5 0 0 0 6.5 13 5.5 5.5 0 0 0 12 18.5 5.5 5.5 0 0 0 17.5 13 5.5 5.5 0 0 0 12 7.5Zm0 2A3.5 3.5 0 0 1 15.5 13 3.5 3.5 0 0 1 12 16.5 3.5 3.5 0 0 1 8.5 13 3.5 3.5 0 0 1 12 9.5Zm4.75-4.25a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Z"/></svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
