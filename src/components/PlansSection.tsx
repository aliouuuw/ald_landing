'use client';

import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Maximize2, Home, Building } from 'lucide-react';

const plans = [
  {
    type: 'T3',
    size: '120m²',
    rooms: '3 chambres · 2 salles de bain',
    features: ['Salon spacieux', 'Cuisine équipée', 'Terrasse privée'],
    icon: Home,
  },
  {
    type: 'T4',
    size: '160m²',
    rooms: '4 chambres · 3 salles de bain',
    features: ['Double salon', 'Cuisine américaine', 'Grand balcon'],
    icon: Home,
  },
  {
    type: 'Penthouse',
    size: '250m²',
    rooms: '5 chambres · 4 salles de bain',
    features: ['Rooftop privatif', 'Vue panoramique', 'Suite parentale'],
    icon: Building,
  },
];

export function PlansSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="plans" ref={ref} className="min-h-screen bg-[var(--ald-charcoal)] py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="text-[var(--ald-gold)] tracking-[0.2em] text-sm mb-4">
            PLANS ARCHITECTURAUX
          </div>
          <h2
            className="text-5xl text-white mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Votre Espace Sur Mesure
          </h2>
          <p 
            className="text-xl text-white/70 max-w-2xl mx-auto italic"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Du T3 élégant au Penthouse d'exception
          </p>
        </motion.div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <motion.div
                key={plan.type}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                className="relative bg-white/5 border border-white/10 p-8 transition-all duration-500 hover:bg-white/10 hover:border-[var(--ald-gold)]/50"
              >
                {/* Icon */}
                <div className="mb-6">
                  <Icon 
                    className={`w-12 h-12 transition-colors duration-300 ${
                      hoveredIndex === index ? 'text-[var(--ald-gold)]' : 'text-white/50'
                    }`}
                  />
                </div>

                {/* Type */}
                <h3
                  className="text-4xl text-white mb-2"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {plan.type}
                </h3>

                {/* Size */}
                <div className="flex items-center gap-2 text-[var(--ald-gold)] mb-4">
                  <Maximize2 className="w-4 h-4" />
                  <span className="text-xl">{plan.size}</span>
                </div>

                {/* Rooms */}
                <p className="text-white/70 mb-6 pb-6 border-b border-white/10">
                  {plan.rooms}
                </p>

                {/* Features */}
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <motion.li
                      key={feature}
                      initial={{ opacity: 0, x: -10 }}
                      animate={
                        hoveredIndex === index
                          ? { opacity: 1, x: 0 }
                          : { opacity: 0.7, x: 0 }
                      }
                      transition={{ duration: 0.3, delay: i * 0.1 }}
                      className="flex items-center gap-3 text-white/90"
                    >
                      <div className="w-1.5 h-1.5 bg-[var(--ald-gold)]" />
                      {feature}
                    </motion.li>
                  ))}
                </ul>

                {/* Hover overlay */}
                <motion.div
                  initial={false}
                  animate={{
                    opacity: hoveredIndex === index ? 1 : 0,
                  }}
                  className="absolute inset-0 bg-gradient-to-br from-[var(--ald-gold)]/5 to-transparent pointer-events-none"
                />
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <button className="px-10 py-4 bg-transparent border-2 border-[var(--ald-gold)] text-[var(--ald-gold)] transition-all duration-300 hover:bg-[var(--ald-gold)] hover:text-[var(--ald-charcoal)]">
            <span className="tracking-wider">Télécharger les plans détaillés</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
