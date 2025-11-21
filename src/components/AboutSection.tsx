'use client';

import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import aboutImage from '../../Photos ALD/Fichier 4.png';

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" ref={ref} className="min-h-screen flex items-center bg-[var(--ald-sand)] py-32 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left - Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="text-[var(--ald-gold)] tracking-[0.2em] text-xs uppercase">
              Prestige · Élégance · Sérénité
            </div>
            <h2
              className="text-5xl lg:text-6xl text-[var(--ald-charcoal)] leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              L'excellence résidentielle
            </h2>
          </motion.div>

          <motion.div 
            className="space-y-6 text-[var(--ald-charcoal)]/80 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-lg lg:text-xl">
              Nichée à l'ombre des palmiers et à quelques encablures de l'Atlantique, 
              la Résidence ALD redéfinit le luxe à la sénégalaise.
            </p>
            
            <p className="text-lg lg:text-xl">
              Lumières tamisées, hauteurs généreuses, et une vue qui respire l'infini. 
              Chaque détail a été pensé pour sublimer l'instant présent.
            </p>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-2xl text-[var(--ald-ocean)] italic pt-6"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Un refuge où l'architecture rencontre l'océan.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="pt-8"
          >
            <div className="h-px w-24 bg-[var(--ald-gold)] mb-6" />
            <div className="text-xs tracking-[0.3em] text-[var(--ald-charcoal)]/60 uppercase">
              Conçu par @aliouuuw
            </div>
          </motion.div>
        </motion.div>

        {/* Right - Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative group"
        >
          <motion.div 
            className="relative overflow-hidden"
            whileHover={{ scale: 0.98 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              initial={{ scale: 1.2, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 1.2, delay: 0.4 }}
              className="relative w-full"
            >
              <div className="relative">
                <ImageWithFallback
                  src={aboutImage}
                  alt="Modern architecture of ALD Residence"
                  className="w-full h-auto block object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{ display: 'block' }}
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-black/10 pointer-events-none" />
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--ald-charcoal)]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            </motion.div>
          </motion.div>
          
          {/* Decorative elements */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="absolute -bottom-8 -right-8 w-48 h-48 border border-[var(--ald-gold)]/30 -z-10"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="absolute -top-6 -left-6 w-32 h-32 bg-[var(--ald-gold)]/5 -z-10"
          />
        </motion.div>
      </div>
    </section>
  );
}
