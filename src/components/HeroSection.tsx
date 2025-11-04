'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { VideoBackground } from './VideoBackground';

export function HeroSection() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 500], [1, 1.1]);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div 
        style={{ y, scale }}
        className="absolute inset-0 will-change-transform"
      >
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1673403731036-30ef7a4995f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBvY2VhbiUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NjIxODMxMjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="ALD Residence overlooking the ocean"
          className="h-full w-full object-cover"
        />
        {/* Video-like animated overlay */}
        <VideoBackground />
        {/* Enhanced Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/90" />
        <div className="absolute inset-0 bg-[var(--ald-ocean)]/10" />
      </motion.div>

      {/* Content */}
      <motion.div 
        style={{ opacity }}
        className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="max-w-5xl"
        >
          <motion.div
            initial={{ opacity: 0, letterSpacing: '0.1em' }}
            animate={{ opacity: 1, letterSpacing: '0.3em' }}
            transition={{ duration: 1.2, delay: 1 }}
            className="mb-6 text-sm text-[var(--ald-gold)]"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            LES ALMADIES · DAKAR · 20 ÉTAGES
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="mb-8 text-6xl md:text-7xl lg:text-8xl text-white tracking-wide"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Résidence ALD
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="inline-block mb-12 px-8 py-1 border-t border-b border-[var(--ald-gold)]/30"
          >
            <p
              className="text-xl md:text-2xl text-[var(--ald-marble)] italic py-4"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Entre l'Océan et le Haut de Gamme, il n'y a qu'un pas.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-12 py-4 bg-[var(--ald-gold)] text-[var(--ald-charcoal)] overflow-hidden"
            >
              <motion.span
                className="absolute inset-0 bg-white"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10 tracking-[0.2em] text-sm">DÉCOUVRIR</span>
            </motion.button>
            
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-4 bg-transparent border border-white/50 text-white backdrop-blur-sm hover:bg-white hover:text-[var(--ald-charcoal)] hover:border-white transition-all duration-300"
            >
              <span className="tracking-[0.2em] text-sm">VISITE PRIVÉE</span>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 1, 
            delay: 2,
            y: {
              repeat: Infinity,
              repeatType: 'reverse',
              duration: 1.5,
              ease: 'easeInOut'
            }
          }}
          className="absolute bottom-12 flex flex-col items-center gap-2"
        >
          <span className="text-white/50 text-xs tracking-[0.2em]">DÉFILER</span>
          <ChevronDown className="w-6 h-6 text-white/70" />
        </motion.div>
      </motion.div>
    </section>
  );
}
