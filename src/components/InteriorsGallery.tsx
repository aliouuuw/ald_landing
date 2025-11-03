'use client';

import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const interiors = [
  {
    title: 'Salon',
    image: 'https://images.unsplash.com/photo-1679862342541-e408d4f3ab80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBsaXZpbmclMjByb29tJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzYyMTU4NTUwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Espaces ouverts baignés de lumière naturelle',
  },
  {
    title: 'Cuisine',
    image: 'https://images.unsplash.com/photo-1643034738686-d69e7bc047e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBraXRjaGVuJTIwbWFyYmxlfGVufDF8fHx8MTc2MjExMDMxMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Finitions en marbre et équipements premium',
  },
  {
    title: 'Suite Principale',
    image: 'https://images.unsplash.com/photo-1702411200201-3061d0eea802?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiZWRyb29tJTIwc3VpdGV8ZW58MXx8fHwxNzYyMTgzMTI3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Sanctuaire de repos et d\'intimité',
  },
  {
    title: 'Salle de Bain',
    image: 'https://images.unsplash.com/photo-1760564019103-81cd3c225cd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiYXRocm9vbSUyMHNwYXxlbnwxfHx8fDE3NjIxODMxMjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
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
