'use client';

import { LoadingScreen } from './components/LoadingScreen';
import { Navigation } from './components/Navigation';
import { GrainOverlay } from './components/GrainOverlay';
import { BackToTop } from './components/BackToTop';
import { WhatsAppButton } from './components/WhatsAppButton';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { StatsSection } from './components/StatsSection';
import { InteriorsGallery } from './components/InteriorsGallery';
import { AmenitiesSection } from './components/AmenitiesSection';
import { PlansSection } from './components/PlansSection';
import { LocationSection } from './components/LocationSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';

export default function App() {
  return (
    <>
      <LoadingScreen />
      <GrainOverlay />
      <Navigation />
      <BackToTop />
      <WhatsAppButton />
      <main className="overflow-x-hidden">
        <HeroSection />
        <AboutSection />
        <StatsSection />
        <InteriorsGallery />
        <AmenitiesSection />
        <PlansSection />
        <LocationSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
    </>
  );
}
