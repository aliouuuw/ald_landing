'use client';

import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, memo } from 'react';
import { Home, Building, Download, Maximize2, DoorOpen, Bath, Waves, Dumbbell, Sparkles } from 'lucide-react';

const residences = [
  {
    type: 'Résidence A',
    size: '457.10 m²',
    rooms: '4 chambres',
    bathrooms: '4 salles de bain',
    features: ['1 salon', '2 cuisines', '2 terrasses', '1 dressing', '1 salle d\'étude', 'Chambre domestique'],
    icon: Home,
    isPenthouse: false,
  },
  {
    type: 'Résidence B',
    size: '445.60 m²',
    rooms: '4-5 chambres',
    bathrooms: '4-5 salles de bain',
    features: ['2 cuisines', 'Buanderie', 'Terrasses', 'Dressing'],
    icon: Home,
    isPenthouse: false,
  },
  {
    type: 'Résidence C',
    size: '573.45 m²',
    rooms: '5 chambres',
    bathrooms: '6 salles de bain',
    features: ['2 cuisines', '4 terrasses', '4 dressings', '1 salle d\'étude', '1 salle de massage'],
    icon: Home,
    isPenthouse: false,
    specialBadge: { icon: Sparkles, text: 'Salle de Massage' },
  },
  {
    type: 'Résidence D',
    size: '549.60 m²',
    rooms: '5 chambres',
    bathrooms: '5 salles de bain',
    features: ['Gym privé', 'Sauna', '3 terrasses', 'Piscine privée', 'Ascenseur privatif'],
    icon: Building,
    isPenthouse: false,
    specialBadge: { icon: Waves, text: 'Piscine Privée' },
  },
];

const penthouses = [
  {
    type: 'Penthouse A',
    size: '1194.15 m²',
    rooms: '5 chambres',
    bathrooms: '5 salles de bain',
    features: ['2 cuisines', 'Piscine privée', 'Sauna', 'Salle de massage', 'Ascenseur privatif'],
    icon: Building,
    isPenthouse: true,
    specialBadge: { icon: Waves, text: 'Piscine Privée' },
  },
  {
    type: 'Penthouse B',
    size: '1107.70 m²',
    rooms: '5 chambres',
    bathrooms: '5 salles de bain',
    features: ['Gym privé', 'Sauna', 'Piscine privée', 'Ascenseur privatif'],
    icon: Building,
    isPenthouse: true,
    specialBadge: { icon: Dumbbell, text: 'Gym Privé' },
  },
];

export function PlansSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  // Removed hover state management to prevent re-renders

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/brochures/brochure-appart-3.pdf';
    link.download = 'ALD-Brochure-Complete.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Use memo to prevent unnecessary re-renders
  const PlanCard = memo(({ plan, index }: any) => {
    const Icon = plan.icon;
    const BadgeIcon = plan.specialBadge?.icon;

    return (
      <div 
        className="group relative"
        style={{ 
          animation: isInView ? `fadeIn 600ms cubic-bezier(0.4, 0, 0.2, 1) ${index * 80}ms forwards` : 'none',
          opacity: isInView ? undefined : 0
        }}
      >
        <div className="bg-white border border-[var(--ald-gold)]/20 hover:border-[var(--ald-gold)]/50 transition-all duration-500 p-8 h-full flex flex-col">
          {/* Header with Icon */}
          <div className="flex items-start justify-between mb-6">
            <div className="w-14 h-14 flex items-center justify-center bg-[var(--ald-gold)]/10 text-[var(--ald-gold)] group-hover:bg-[var(--ald-gold)] group-hover:text-white transition-all duration-300">
              <Icon className="w-7 h-7" />
            </div>
            {plan.isPenthouse && (
              <div className="px-3 py-1 bg-[var(--ald-gold)]/20 text-[var(--ald-gold)] text-xs tracking-wider font-medium">
                PENTHOUSE
              </div>
            )}
          </div>

          {/* Type */}
          <h3
            className="text-2xl text-[var(--ald-charcoal)] mb-4 font-medium"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {plan.type}
          </h3>

          {/* Size - Emphasized */}
          <div className="flex items-center gap-2 text-[var(--ald-gold)] mb-6 pb-6 border-b border-[var(--ald-gold)]/20">
            <Maximize2 className="w-5 h-5" />
            <span className="text-xl font-semibold">{plan.size}</span>
          </div>

          {/* Rooms & Bathrooms */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="flex items-center gap-2 text-[var(--ald-charcoal)]/80">
              <DoorOpen className="w-4 h-4 text-[var(--ald-gold)]/60" />
              <div>
                <div className="text-xs text-[var(--ald-charcoal)]/60 uppercase tracking-wider">Chambres</div>
                <div className="font-medium">{plan.rooms}</div>
              </div>
            </div>
            <div className="flex items-center gap-2 text-[var(--ald-charcoal)]/80">
              <Bath className="w-4 h-4 text-[var(--ald-gold)]/60" />
              <div>
                <div className="text-xs text-[var(--ald-charcoal)]/60 uppercase tracking-wider">Salles de bain</div>
                <div className="font-medium">{plan.bathrooms}</div>
              </div>
            </div>
          </div>

          {/* Special Badge */}
          {plan.specialBadge && BadgeIcon && (
            <div className="flex items-center gap-2 text-[var(--ald-gold)] text-sm mb-6 pb-6 border-b border-[var(--ald-gold)]/20">
              <BadgeIcon className="w-4 h-4" />
              <span className="font-medium">{plan.specialBadge.text}</span>
            </div>
          )}

          {/* Features */}
          <div className="flex-grow">
            <div className="text-xs text-[var(--ald-charcoal)]/60 uppercase tracking-wider mb-4">Caractéristiques</div>
            <ul className="space-y-2">
              {plan.features.map((feature: string, i: number) => (
                <li
                  key={feature}
                  className="flex items-center gap-3 text-[var(--ald-charcoal)]/80 text-sm opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <div className="w-1 h-1 bg-[var(--ald-gold)] rounded-full" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Hover overlay - CSS only */}
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--ald-gold)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        </div>
      </div>
    );
  });

  return (
    <section id="plans" ref={ref} className="min-h-screen bg-gradient-to-b from-[var(--ald-marble)] to-[var(--ald-sand)] py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="text-[var(--ald-gold)] tracking-[0.2em] text-sm mb-4 uppercase">
            Plans Architecturaux
          </div>
          <h2
            className="text-5xl lg:text-6xl text-[var(--ald-charcoal)] mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Des Espaces d'Exception
          </h2>
          <p 
            className="text-xl text-[var(--ald-charcoal)]/70 max-w-3xl mx-auto italic"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Des appartements à partir de 445 m² et penthouses dépassant 1100 m²
          </p>
        </motion.div>

        {/* Residences Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <div className="mb-12">
            <h3
              className="text-3xl text-[var(--ald-charcoal)] mb-2"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Résidences
            </h3>
            <div className="w-16 h-1 bg-[var(--ald-gold)]" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {residences.map((plan, index) => (
              <PlanCard
                key={plan.type}
                plan={plan}
                index={index}
              />
            ))}
          </div>
        </motion.div>

        {/* Penthouses Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-20"
        >
          <div className="mb-12">
            <h3
              className="text-3xl text-[var(--ald-charcoal)] mb-2"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Penthouses
            </h3>
            <div className="w-16 h-1 bg-[var(--ald-gold)]" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {penthouses.map((plan, index) => (
              <PlanCard
                key={plan.type}
                plan={plan}
                index={index}
              />
            ))}
          </div>
        </motion.div>

        {/* Download Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 pt-20 border-t border-[var(--ald-gold)]/20"
        >
          <div className="flex flex-col items-center justify-center text-center space-y-8">
            <div>
              <h3
                className="text-3xl text-[var(--ald-charcoal)] mb-3"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Télécharger la Brochure Complète
              </h3>
              <p className="text-[var(--ald-charcoal)]/70 max-w-2xl">
                Découvrez tous les détails de nos plans, caractéristiques et finitions dans notre brochure complète
              </p>
            </div>

            <motion.button
              onClick={handleDownload}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-4 bg-[var(--ald-gold)] text-[var(--ald-charcoal)] flex items-center justify-center gap-3 transition-all duration-300 hover:shadow-lg font-medium tracking-wider"
            >
              <Download className="w-5 h-5" />
              <span>TÉLÉCHARGER PDF</span>
            </motion.button>

            <p className="text-sm text-[var(--ald-charcoal)]/60 italic">
              Format PDF • Haute résolution • Tous les plans inclus
            </p>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-[var(--ald-charcoal)]/70 text-sm">
            Besoin d'informations supplémentaires ?{' '}
            <a
              href="#contact"
              className="text-[var(--ald-gold)] hover:underline font-medium transition-colors duration-300"
            >
              Contactez-nous
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
