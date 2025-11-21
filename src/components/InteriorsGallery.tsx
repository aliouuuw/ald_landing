'use client';

import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import interiorSalon from '../../Photos ALD/Fichier 10.png';
import interiorSuite from '../../Photos ALD/Fichier 12.png';
import interiorCuisine from '../../Photos ALD/Fichier 8.png';
import interiorBath from '../../Photos ALD/Fichier 15.png';

const interiors = [
  {
    title: 'Salon',
    image: interiorSalon,
    description: 'Espaces ouverts baignés de lumière naturelle',
  },
  {
    title: 'Cuisine',
    image: interiorCuisine,
    description: 'Finitions en marbre et équipements premium',
  },
  {
    title: 'Suite Principale',
    image: interiorSuite,
    description: 'Sanctuaire de repos et d\'intimité',
  },
  {
    title: 'Salle de Bain',
    image: interiorBath,
    description: 'Design spa avec matériaux nobles',
  },
];

export function InteriorsGallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % interiors.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + interiors.length) % interiors.length);
  };

  return (
    <section id="interiors" ref={ref} className="min-h-screen bg-[var(--ald-charcoal)] py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="text-[var(--ald-gold)] tracking-[0.2em] text-sm mb-4">
            INTÉRIEURS
          </div>
          <h2
            className="text-5xl text-white"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Art de Vivre
          </h2>
        </motion.div>

        {/* Gallery */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative aspect-[16/9] lg:aspect-[21/9] overflow-hidden"
          >
            {interiors.map((interior, index) => (
              <motion.div
                key={interior.title}
                initial={false}
                animate={{
                  opacity: index === currentIndex ? 1 : 0,
                  scale: index === currentIndex ? 1 : 1.1,
                }}
                transition={{ duration: 0.7 }}
                className="absolute inset-0"
                style={{ pointerEvents: index === currentIndex ? 'auto' : 'none' }}
              >
                <ImageWithFallback
                  src={interior.image}
                  alt={interior.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-12">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={index === currentIndex ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <h3
                      className="text-4xl text-white mb-2"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {interior.title}
                    </h3>
                    <p
                      className="text-xl text-[var(--ald-gold)] italic"
                      style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    >
                      {interior.description}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-8 mt-8">
            <button
              onClick={prevSlide}
              className="w-12 h-12 flex items-center justify-center border border-white/30 text-white hover:bg-white hover:text-[var(--ald-charcoal)] transition-all duration-300"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="flex gap-3">
              {interiors.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-px transition-all duration-300 ${
                    index === currentIndex
                      ? 'w-16 bg-[var(--ald-gold)]'
                      : 'w-8 bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="w-12 h-12 flex items-center justify-center border border-white/30 text-white hover:bg-white hover:text-[var(--ald-charcoal)] transition-all duration-300"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
