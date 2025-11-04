'use client';

import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" ref={ref} className="min-h-screen bg-white py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="text-[var(--ald-gold)] tracking-[0.2em] text-sm mb-4">
            CONTACT
          </div>
          <h2
            className="text-5xl text-[var(--ald-charcoal)] mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Réservez Votre Visite
          </h2>
          <p 
            className="text-xl text-[var(--ald-ocean)] max-w-2xl mx-auto italic"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Notre équipe vous accompagne dans votre projet
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div>
              <h3
                className="text-3xl text-[var(--ald-charcoal)] mb-8"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Elite Group Sénégal S.A.
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-[var(--ald-gold)]/10 text-[var(--ald-gold)]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm text-[var(--ald-charcoal)]/60 mb-1">Téléphone</div>
                    <div className="space-y-1">
                      <a href="tel:+221778838383" className="block text-lg text-[var(--ald-charcoal)] hover:text-[var(--ald-gold)] transition-colors">
                        +221 77 883 83 83
                      </a>
                      <a href="tel:+221338690869" className="block text-lg text-[var(--ald-charcoal)] hover:text-[var(--ald-gold)] transition-colors">
                        +221 33 869 08 69
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-[var(--ald-gold)]/10 text-[var(--ald-gold)]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm text-[var(--ald-charcoal)]/60 mb-1">Email</div>
                    <a href="mailto:commercial@elitegroup-senegal.com" className="text-lg text-[var(--ald-charcoal)] hover:text-[var(--ald-gold)] transition-colors">
                      commercial@elitegroup-senegal.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-[var(--ald-gold)]/10 text-[var(--ald-gold)]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm text-[var(--ald-charcoal)]/60 mb-1">Adresse</div>
                    <p className="text-lg text-[var(--ald-charcoal)]">
                      Les Almadies<br />
                      Dakar, Sénégal
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-[var(--ald-charcoal)]/10">
              <p className="text-sm text-[var(--ald-charcoal)]/60 leading-relaxed mb-4">
                Horaires d'ouverture :<br />
                Lundi - Vendredi : 9h00 - 18h00<br />
                Samedi : 10h00 - 16h00<br />
                Dimanche : Sur rendez-vous
              </p>
              <a 
                href="https://www.elitegroup.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-[var(--ald-gold)] hover:underline"
              >
                www.elitegroup.com
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm text-[var(--ald-charcoal)]/70 mb-2">
                  Nom complet
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-[var(--ald-sand)] border-[var(--ald-charcoal)]/10 focus:border-[var(--ald-gold)] transition-colors"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm text-[var(--ald-charcoal)]/70 mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-[var(--ald-sand)] border-[var(--ald-charcoal)]/10 focus:border-[var(--ald-gold)] transition-colors"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm text-[var(--ald-charcoal)]/70 mb-2">
                  Téléphone
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-[var(--ald-sand)] border-[var(--ald-charcoal)]/10 focus:border-[var(--ald-gold)] transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm text-[var(--ald-charcoal)]/70 mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  required
                  className="w-full bg-[var(--ald-sand)] border-[var(--ald-charcoal)]/10 focus:border-[var(--ald-gold)] transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-[var(--ald-gold)] text-[var(--ald-charcoal)] flex items-center justify-center gap-2 transition-all duration-300 hover:bg-[var(--ald-gold)]/90"
              >
                <span className="tracking-wider">Envoyer le message</span>
                <Send className="w-5 h-5" />
              </button>
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-24 pt-12 border-t border-[var(--ald-charcoal)]/10"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h3
                className="text-3xl text-[var(--ald-charcoal)] mb-2"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                ALD by Elite
              </h3>
              <p className="text-sm text-[var(--ald-charcoal)]/60">
                Designed by Sovereign Studio
              </p>
              <p className="text-xs text-[var(--ald-charcoal)]/50 mt-2">
                Elite Group Sénégal S.A.
              </p>
            </div>

            <div className="flex items-center gap-2 text-[var(--ald-charcoal)]/60 text-sm">
              <span>© 2025 Résidence ALD</span>
              <span>·</span>
              <span>Tous droits réservés</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
