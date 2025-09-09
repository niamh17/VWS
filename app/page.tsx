"use client";
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import HeroSection from '../components/HeroSection';
import LogoLoopSection from '../components/LogoLoopSection';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss} from 'react-icons/si';
import AboutTeaser from '../components/AboutTeaser';
import StatsSection from '../components/StatsSection';
import HowItWorksSection from '../components/HowItWorksSection';
import ProjectsSection from '../components/ProjectsSection';
import ServicesSection from '../components/ServicesSection';
import PricingCalculator from '../components/PricingCalculator';
import ProblemSection from '../components/ProblemSection';
import SolutionSection from '../components/SolutionSection';
import CalInlineSection from '../components/CalInlineSection';
import Footer from '../components/Footer';

// Dynamic import to avoid SSR issues with WebGL in Aurora
const Aurora = dynamic(() => import('../components/Aurora'), { ssr: false });

export default function HomePage() {
  const [auroraReady, setAuroraReady] = useState(false);
  const techLogos = [
    { node: <SiReact />, title: 'React', href: 'https://react.dev' },
    { node: <SiNextdotjs />, title: 'Next.js', href: 'https://nextjs.org' },
    { node: <SiTypescript />, title: 'TypeScript', href: 'https://www.typescriptlang.org' },
  { node: <SiTailwindcss />, title: 'Tailwind CSS', href: 'https://tailwindcss.com' },
  { src: '/n8n.svg', alt: 'n8n', title: 'n8n', href: 'https://n8n.io' },
  { src: '/figma.svg', alt: 'Figma', title: 'Figma', href: 'https://www.figma.com' },
  { src: '/make.svg', alt: 'Make', title: 'Make', href: 'https://www.make.com' },
  ];
  return (
    <>
      <div className="top-aurora-wrapper" aria-hidden="true">
        <Aurora
          colorStops={["#FFB871", "#FF6F32", "#FF3A14"]}
          amplitude={0.9}
          blend={0.5}
          speed={0.5}
          fps={40}
          maxDpr={1.1}
          onReady={() => setAuroraReady(true)}
        />
      </div>
      <HeroSection />
  <LogoLoopSection logos={techLogos} title="Technology partners" />
  <AboutTeaser />
  <ProblemSection />
  <SolutionSection />
      <StatsSection />
  <HowItWorksSection />
  <ServicesSection description="" />
      <ProjectsSection />
  <PricingCalculator />
  <CalInlineSection />
  {/* Smart Steps section removed */}
  <Footer />
    </>
  );
}
