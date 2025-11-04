'use client';

import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { MapPin, Palmtree, Building2, Anchor, ShieldCheck, Car, Zap } from 'lucide-react';

const highlights = [
  {
    icon: Building2,
    title: 'Triangle des Almadies',
    description: 'Proximité immédiate des ambassades des États-Unis et du Canada',
  },
  {
    icon: Anchor,
    title: 'Point le plus à l\'ouest d\'Afrique',
    description: 'Quartier calme, cosmopolite et sécurisé',
  },
  {
    icon: MapPin,
    title: 'Proximité des Commerces',
    description: 'Restaurants, plages et commerces les plus prisés de Dakar',
  },
  {
    icon: Palmtree,
    title: 'Cadre de Vie Unique',
    description: 'Entre océan et modernité',
  },
];

const securityFeatures = [
  {
    icon: ShieldCheck,
    title: 'Parking Sécurisé 24h/24',
    description: 'Caméras et agents de sécurité',
  },
  {
    icon: Car,
    title: '2 à 4 Places de Stationnement',
    description: 'Par appartement (jusqu\'à 4 pour penthouses)',
  },
  {
    icon: Zap,
    title: '10 Bornes de Recharge',
    description: 'Pour véhicules électriques et hybrides',
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
            Le point le plus à l'ouest du continent africain
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

        {/* Security & Parking Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16"
        >
          <div className="text-center mb-12">
            <h3
              className="text-4xl text-[var(--ald-charcoal)] mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Sérénité au quotidien
            </h3>
            <p className="text-lg text-[var(--ald-charcoal)]/70">
              Sécurité et services premium
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {securityFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="bg-white p-8 border border-[var(--ald-gold)]/20 hover:border-[var(--ald-gold)]/50 transition-colors duration-300"
                >
                  <div className="w-14 h-14 flex items-center justify-center bg-[var(--ald-gold)]/10 text-[var(--ald-gold)] mb-6">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h4 className="text-xl text-[var(--ald-charcoal)] mb-2 font-medium">
                    {feature.title}
                  </h4>
                  <p className="text-[var(--ald-charcoal)]/70">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
