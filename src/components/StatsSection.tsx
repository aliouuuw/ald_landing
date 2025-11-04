'use client';

import { motion, useInView } from 'motion/react';
import { useRef, useState, useEffect } from 'react';

const stats = [
  { value: 20, suffix: '', label: 'Étages' },
  { value: 1194, suffix: 'm²', label: 'Surface maximale' },
  { value: 5, suffix: '', label: 'Piscines panoramiques' },
  { value: 16, suffix: '', label: 'Ascenseurs' },
];

function CountUp({ end, duration = 2, suffix = '' }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="relative py-32 bg-[var(--ald-charcoal)] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, var(--ald-gold) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="text-[var(--ald-gold)] tracking-[0.2em] text-sm mb-4">
            EN CHIFFRES
          </div>
          <h2
            className="text-5xl text-white"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            L'Excellence Quantifiée
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="mb-4">
                <div
                  className="text-5xl lg:text-6xl text-[var(--ald-gold)] mb-2 transition-transform duration-300 group-hover:scale-110"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  <CountUp end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="h-px w-16 mx-auto bg-white/20 transition-all duration-300 group-hover:w-24 group-hover:bg-[var(--ald-gold)]" />
              </div>
              <p className="text-white/70 text-sm tracking-wide uppercase">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
