"use client";
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
// Above-the-fold components remain eagerly loaded
import HeroSection from '../components/HeroSection';
import LogoLoopSection from '../components/LogoLoopSection';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss} from 'react-icons/si';
import AboutTeaser from '../components/AboutTeaser';
import ProblemSection from '../components/ProblemSection';
import SolutionSection from '../components/SolutionSection';
import Footer from '../components/Footer';

// Below-the-fold components are lazy loaded to reduce initial JS
const StatsSection = dynamic(() => import('../components/StatsSection'), { ssr: true });
const HowItWorksSection = dynamic(() => import('../components/HowItWorksSection'), { ssr: true });
const ServicesSection = dynamic(() => import('../components/ServicesSection'), { ssr: true });
const PricingCalculator = dynamic(() => import('../components/PricingCalculator'), { ssr: true, loading: () => null });
const CalInlineSection = dynamic(() => import('../components/CalInlineSection'), { ssr: true, loading: () => null });


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
  {/* Aurora now embedded directly in HeroSection for reliability */}
      <HeroSection />
  <LogoLoopSection logos={techLogos} title="Technology partners" />
  <AboutTeaser />
  <ProblemSection />
  <SolutionSection />
      <StatsSection />
      <HowItWorksSection />
      <ServicesSection description="" />
      <PricingCalculator />
      <CalInlineSection />
  {/* Smart Steps section removed */}
  <Footer />
    </>
  );
}
