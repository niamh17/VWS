"use client";
import dynamic from 'next/dynamic';
import { useState } from 'react';
import HeroSection from '../components/HeroSection';
import AboutTeaser from '../components/AboutTeaser';
import StatsSection from '../components/StatsSection';
import TestimonialSection from '../components/TestimonialSection';
import ProjectsSection from '../components/ProjectsSection';
import ServicesSection from '../components/ServicesSection';
import PricingCalculator from '../components/PricingCalculator';
import LoadingOverlay from '../components/ui/LoadingOverlay';

// Dynamic import to avoid SSR issues with WebGL in Aurora
const Aurora = dynamic(() => import('../components/Aurora'), { ssr: false });

export default function HomePage() {
  const [auroraReady, setAuroraReady] = useState(false);
  return (
    <>
  <LoadingOverlay ready={auroraReady} minDurationMs={3600} />
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
      <AboutTeaser />
      <StatsSection />
      <TestimonialSection />
      <ServicesSection />
      <ProjectsSection />
  <PricingCalculator />
    </>
  );
}
