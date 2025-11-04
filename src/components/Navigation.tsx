'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Résidence', href: '#about' },
  { label: 'Intérieurs', href: '#interiors' },
  { label: 'Commodités', href: '#amenities' },
  { label: 'Plans', href: '#plans' },
  { label: 'Localisation', href: '#location' },
  { label: 'Contact', href: '#contact' },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();

  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(10, 10, 10, 0)', 'rgba(10, 10, 10, 0.95)']
  );

  const backdropBlur = useTransform(
    scrollY,
    [0, 100],
    ['blur(0px)', 'blur(20px)']
  );

  return (
    <>
      <motion.nav
        style={{ backgroundColor, backdropFilter: backdropBlur }}
        className="fixed top-0 left-0 right-0 z-50 border-b border-white/0"
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.a
              href="#"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white"
            >
              <div
                className="text-2xl tracking-wider"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                ALD
              </div>
              <div className="text-xs tracking-[0.3em] text-[var(--ald-gold)]">
                RESIDENCE
              </div>
            </motion.a>

            {/* Desktop Navigation */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="hidden lg:flex items-center gap-12"
            >
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="group relative text-white/90 hover:text-white transition-colors text-sm tracking-wider"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-[var(--ald-gold)] group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.a
              href="#contact"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="hidden lg:block px-6 py-2.5 bg-[var(--ald-gold)] text-[var(--ald-charcoal)] text-sm tracking-wider hover:bg-[var(--ald-gold)]/90 transition-all duration-300"
            >
              Réserver
            </motion.a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-white p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{
            height: isOpen ? 'auto' : 0,
            opacity: isOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="lg:hidden overflow-hidden bg-[var(--ald-charcoal)]"
        >
          <div className="px-6 py-8 space-y-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-white/90 hover:text-[var(--ald-gold)] transition-colors text-lg"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block w-full py-3 text-center bg-[var(--ald-gold)] text-[var(--ald-charcoal)] tracking-wider"
            >
              Réserver
            </a>
          </div>
        </motion.div>
      </motion.nav>

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[var(--ald-gold)] origin-left z-50"
        style={{
          scaleX: useTransform(scrollY, [0, document.documentElement.scrollHeight - window.innerHeight], [0, 1]),
        }}
      />
    </>
  );
}
