'use client';

import { motion, HTMLMotionProps } from 'motion/react';
import { forwardRef, ReactNode, useState, useRef } from 'react';

interface LuxuryCardProps extends Omit<HTMLMotionProps<"div">, 'children'> {
  children: ReactNode;
  variant?: 'glass' | 'solid' | 'outline' | 'elevated';
  hover?: boolean;
  tilt?: boolean;
}

export const LuxuryCard = forwardRef<HTMLDivElement, LuxuryCardProps>(
  ({ children, variant = 'glass', hover = true, tilt = false, className = '', ...props }, ref) => {
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);
    const cardRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      if (!tilt || !cardRef.current) return;

      const rect = cardRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const mouseX = e.clientX - centerX;
      const mouseY = e.clientY - centerY;

      const rotateXValue = (mouseY / rect.height) * -10;
      const rotateYValue = (mouseX / rect.width) * 10;

      setRotateX(rotateXValue);
      setRotateY(rotateYValue);
    };

    const handleMouseLeave = () => {
      if (!tilt) return;
      setRotateX(0);
      setRotateY(0);
    };

    const variantClasses = {
      glass: 'bg-white/5 backdrop-blur-xl border border-white/10',
      solid: 'bg-[var(--ald-sand)] border border-[var(--ald-marble)]',
      outline: 'bg-transparent border-2 border-[var(--ald-gold)]/30',
      elevated: 'bg-white border border-gray-100 shadow-[0_20px_70px_rgba(0,0,0,0.1)]',
    };

    const hoverEffects = hover ? {
      scale: 1.02,
      boxShadow: variant === 'glass' 
        ? '0 25px 50px rgba(193, 164, 113, 0.15)'
        : '0 30px 60px rgba(0, 0, 0, 0.2)',
    } : {};

    return (
      <motion.div
        ref={(node) => {
          cardRef.current = node;
          if (typeof ref === 'function') ref(node);
          else if (ref) ref.current = node;
        }}
        className={`
          relative overflow-hidden rounded-sm p-8
          ${variantClasses[variant]}
          ${className}
        `}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        whileHover={hoverEffects}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX: tilt ? rotateX : 0,
          rotateY: tilt ? rotateY : 0,
          transformStyle: 'preserve-3d',
          transition: 'transform 0.3s ease-out',
        }}
        {...props}
      >
        {/* Corner accents */}
        <motion.div
          className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-[var(--ald-gold)]/20"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-[var(--ald-gold)]/20"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
        />

        {/* Gold accent line on hover */}
        <motion.div
          className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-transparent via-[var(--ald-gold)] to-transparent"
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.5 }}
        />

        {/* Content */}
        <div className="relative z-10">{children}</div>
      </motion.div>
    );
  }
);

LuxuryCard.displayName = 'LuxuryCard';

