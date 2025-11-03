'use client';

import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

interface SectionDividerProps {
  variant?: 'line' | 'ornament' | 'fade';
  color?: 'gold' | 'ocean' | 'white';
}

export function SectionDivider({ variant = 'line', color = 'gold' }: SectionDividerProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const colorClass = {
    gold: 'var(--ald-gold)',
    ocean: 'var(--ald-ocean)',
    white: 'white',
  }[color];

  if (variant === 'ornament') {
    return (
      <div ref={ref} className="flex items-center justify-center py-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-4"
        >
          <div className="w-2 h-2 rotate-45 border" style={{ borderColor: colorClass }} />
          <div className="w-12 h-px" style={{ backgroundColor: colorClass }} />
          <div className="w-3 h-3 rotate-45 border" style={{ borderColor: colorClass }} />
          <div className="w-12 h-px" style={{ backgroundColor: colorClass }} />
          <div className="w-2 h-2 rotate-45 border" style={{ borderColor: colorClass }} />
        </motion.div>
      </div>
    );
  }

  if (variant === 'fade') {
    return (
      <div ref={ref} className="py-16">
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1 }}
          className="h-px max-w-xs mx-auto"
          style={{
            background: `linear-gradient(to right, transparent, ${colorClass}, transparent)`,
          }}
        />
      </div>
    );
  }

  return (
    <div ref={ref} className="flex items-center justify-center py-16">
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 1 }}
        className="w-24 h-px origin-center"
        style={{ backgroundColor: colorClass }}
      />
    </div>
  );
}
