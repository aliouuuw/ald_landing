'use client';

import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Une architecture qui dialogue avec l'océan. Chaque matin, je me réveille avec cette vue infinie qui redéfinit le luxe.",
    author: "Amadou Diop",
    role: "Résident T4",
  },
  {
    quote: "La résidence ALD incarne l'excellence à la sénégalaise. Un lieu où modernité et sérénité se rencontrent.",
    author: "Sophie Mbaye",
    role: "Résidente Penthouse",
  },
  {
    quote: "Au-delà du prestige, c'est un art de vivre. Les finitions, les espaces, chaque détail respire la qualité.",
    author: "Jean-Pierre Senghor",
    role: "Résident T3",
  },
];

export function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="relative py-32 bg-gradient-to-b from-[var(--ald-sand)] to-white overflow-hidden">
      {/* Decorative element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--ald-gold)]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--ald-ocean)]/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="text-[var(--ald-gold)] tracking-[0.2em] text-sm mb-4">
            TÉMOIGNAGES
          </div>
          <h2
            className="text-5xl text-[var(--ald-charcoal)]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Paroles de Résidents
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative bg-white p-10 hover:shadow-2xl transition-all duration-500"
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <Quote className="w-10 h-10 text-[var(--ald-gold)]/30 group-hover:text-[var(--ald-gold)]/50 transition-colors duration-300" />
              </div>

              {/* Quote */}
              <p
                className="text-[var(--ald-charcoal)]/80 mb-8 leading-relaxed italic"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.125rem' }}
              >
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="pt-6 border-t border-[var(--ald-charcoal)]/10">
                <div className="text-[var(--ald-charcoal)]">
                  {testimonial.author}
                </div>
                <div className="text-sm text-[var(--ald-charcoal)]/50 tracking-wider">
                  {testimonial.role}
                </div>
              </div>

              {/* Hover effect */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--ald-gold)] to-[var(--ald-ocean)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
