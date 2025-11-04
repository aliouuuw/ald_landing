'use client';

import { motion, HTMLMotionProps } from 'motion/react';
import { forwardRef, ReactNode } from 'react';

interface LuxuryButtonProps extends Omit<HTMLMotionProps<"button">, 'children'> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export const LuxuryButton = forwardRef<HTMLButtonElement, LuxuryButtonProps>(
  ({ children, variant = 'primary', size = 'md', fullWidth = false, className = '', ...props }, ref) => {
    const baseClasses = 'relative overflow-hidden font-medium tracking-[0.3em] uppercase transition-all duration-400 disabled:opacity-50 disabled:cursor-not-allowed';
    
    const sizeClasses = {
      sm: 'px-8 py-3 text-xs',
      md: 'px-12 py-4 text-sm',
      lg: 'px-16 py-5 text-sm',
    };
    
    const variantClasses = {
      primary: 'bg-[var(--ald-gold)] text-[var(--ald-charcoal)] hover:shadow-[0_8px_30px_rgba(193,164,113,0.3)]',
      secondary: 'bg-transparent border-2 border-white/60 text-white backdrop-blur-sm hover:bg-white hover:text-[var(--ald-charcoal)] hover:border-white',
      ghost: 'bg-transparent border-2 border-[var(--ald-gold)]/60 text-[var(--ald-gold)] hover:bg-[var(--ald-gold)] hover:text-[var(--ald-charcoal)]',
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`
          ${baseClasses}
          ${sizeClasses[size]}
          ${variantClasses[variant]}
          ${fullWidth ? 'w-full' : ''}
          ${className}
        `}
        {...props}
      >
        {/* Hover overlay effect */}
        <motion.span
          className="absolute inset-0 z-0"
          initial={{ x: variant === 'primary' ? '-100%' : '100%', y: variant === 'secondary' ? '100%' : 0 }}
          whileHover={{ x: 0, y: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          style={{
            background: variant === 'primary' 
              ? 'linear-gradient(to right, rgba(255,255,255,0.95), rgba(255,255,255,0.85))'
              : variant === 'secondary'
              ? 'rgba(255, 255, 255, 1)'
              : 'var(--ald-gold)'
          }}
        />
        
        {/* Shimmer effect on primary */}
        {variant === 'primary' && (
          <motion.span
            className="absolute inset-0 z-0"
            initial={{ x: '-100%' }}
            animate={{ x: '200%' }}
            transition={{
              repeat: Infinity,
              duration: 3,
              ease: 'linear',
              repeatDelay: 2,
            }}
            style={{
              background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent)',
              width: '30%',
            }}
          />
        )}

        {/* Content */}
        <span className="relative z-10">{children}</span>
      </motion.button>
    );
  }
);

LuxuryButton.displayName = 'LuxuryButton';


