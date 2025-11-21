'use client';

import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Waves, Dumbbell, Sparkles, Film, Baby, Wind, Heart } from 'lucide-react';
import amenityPools from '../../Photos ALD/Fichier 3.png';
import amenityGym from '../../Photos ALD/Fichier 23.png';
import amenityYoga from '../../Photos ALD/Fichier 21.png';
import amenitySpa from '../../Photos ALD/Fichier 17.png';
import amenityMassage from '../../Photos ALD/Fichier 10.png';
import amenityCinema from '../../Photos ALD/Fichier 18.png';
import amenityCreche from '../../Photos ALD/Fichier 6.png';

const amenities = [
  {
    title: '5 Piscines Panoramiques',
    description: 'Dont une au 19e étage avec vue sur l\'Atlantique et Dakar',
    image: amenityPools,
    icon: Waves,
    highlight: true,
  },
  {
    title: 'Salle de Sport',
    description: 'Entièrement équipée : musculation & cardio',
    image: amenityGym,
    icon: Dumbbell,
  },
  {
    title: 'Salles de Yoga & Pilates',
    description: 'Espaces dédiés au bien-être et à la méditation',
    image: amenityYoga,
    icon: Wind,
  },
  {
    title: 'Sauna & Hammam',
    description: 'Bain turc et espaces de détente',
    image: amenitySpa,
    icon: Sparkles,
  },
  {
    title: 'Salles de Massage & Relaxation',
    description: 'Espaces de bien-être et de sérénité',
    image: amenityMassage,
    icon: Heart,
  },
  {
    title: 'Salle de Cinéma & Salle d\'Art',
    description: 'Expérience culturelle et audiovisuelle premium',
    image: amenityCinema,
    icon: Film,
  },
  {
    title: 'Crèche',
    description: 'Espace spacieux et sécurisé pour les enfants',
    image: amenityCreche,
    icon: Baby,
  },
];

export function AmenitiesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="amenities" ref={ref} className="min-h-screen bg-gradient-to-b from-[var(--ald-marble)] to-[var(--ald-sand)] py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="text-[var(--ald-gold)] tracking-[0.2em] text-sm mb-4">
            COMMODITÉS
          </div>
          <h2
            className="text-5xl text-[var(--ald-charcoal)] mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Une vie au sommet du confort
          </h2>
          <p 
            className="text-xl text-[var(--ald-ocean)] max-w-2xl mx-auto italic"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Chaque espace est pensé pour le bien-être, la détente et la convivialité
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenities.map((amenity, index) => {
            const Icon = amenity.icon;
            return (
              <motion.div
                key={amenity.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className={`group relative overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-500 ${
                  amenity.highlight ? 'md:col-span-2 lg:col-span-3 ring-2 ring-[var(--ald-gold)]/30' : ''
                }`}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.7 }}
                  >
                    <ImageWithFallback
                      src={amenity.image}
                      alt={amenity.title}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent group-hover:from-black/90 transition-colors duration-500" />
                  
                  {/* Icon */}
                  <motion.div 
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center bg-[var(--ald-gold)]/90 text-white group-hover:bg-[var(--ald-gold)] transition-colors duration-300"
                  >
                    <Icon className="w-6 h-6" />
                  </motion.div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 transform transition-transform duration-300 group-hover:translate-y-0">
                    <h3
                      className="text-3xl text-white mb-2 transition-colors duration-300"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {amenity.title}
                    </h3>
                    <p className="text-[var(--ald-marble)] text-lg opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                      {amenity.description}
                    </p>
                  </div>

                  {/* Decorative line */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-[var(--ald-gold)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
