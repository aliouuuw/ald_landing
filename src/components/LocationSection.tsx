'use client';

import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { MapPin, Palmtree, Building2, Anchor } from 'lucide-react';

const highlights = [
  {
    icon: Anchor,
    title: 'Front de Mer',
    description: '5 minutes de l\'Atlantique',
  },
  {
    icon: Building2,
    title: 'Quartier Diplomatique',
    description: 'Environnement prestigieux',
  },
  {
    icon: Palmtree,
    title: 'Nature & Calme',
    description: 'Verdure omniprésente',
  },
  {
    icon: MapPin,
    title: 'Accès Premium',
    description: 'Restaurants & boutiques',
  },
];

export function LocationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="location" ref={ref} className="min-h-screen bg-[var(--ald-sand)] py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="text-[var(--ald-gold)] tracking-[0.2em] text-sm mb-4">
            LOCALISATION
          </div>
          <h2
            className="text-5xl text-[var(--ald-charcoal)] mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Les Almadies
          </h2>
          <p 
            className="text-2xl text-[var(--ald-ocean)] max-w-3xl mx-auto italic"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Située à la pointe des Almadies, entre calme, prestige et horizon
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1712433323535-1be22838d015?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2FzdGFsJTIwZGFrYXIlMjBhZnJpY2F8ZW58MXx8fHwxNzYyMTgzMTMwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Les Almadies coastline"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/10" />
            </div>

            {/* Overlay badge */}
            <div className="absolute top-8 left-8 bg-[var(--ald-charcoal)]/90 text-white px-6 py-4 backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-1">
                <MapPin className="w-5 h-5 text-[var(--ald-gold)]" />
                <span className="tracking-wider">DAKAR</span>
              </div>
              <div className="text-2xl" style={{ fontFamily: "'Playfair Display', serif" }}>
                Les Almadies
              </div>
            </div>
          </motion.div>

          {/* Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 flex items-center justify-center bg-[var(--ald-gold)]/10 text-[var(--ald-gold)] group-hover:bg-[var(--ald-gold)] group-hover:text-white transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl text-[var(--ald-charcoal)] mb-1">
                      {highlight.title}
                    </h3>
                    <p className="text-[var(--ald-charcoal)]/70">
                      {highlight.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Map placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative aspect-[21/9] bg-[var(--ald-marble)] border border-[var(--ald-gold)]/20 overflow-hidden"
        >
          {/* Placeholder for interactive map */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-[var(--ald-gold)] mx-auto mb-4" />
              <p className="text-[var(--ald-charcoal)]/60">
                Carte interactive disponible prochainement
              </p>
            </div>
          </div>

          {/* Decorative grid */}
          <div className="absolute inset-0 opacity-5">
            <div className="grid grid-cols-8 grid-rows-4 h-full">
              {Array.from({ length: 32 }).map((_, i) => (
                <div key={i} className="border border-[var(--ald-charcoal)]" />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
