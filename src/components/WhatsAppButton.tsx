"use client"

import { useState } from 'react';

export const WhatsAppButton: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    // Replace with actual WhatsApp number
    const phoneNumber = '+221770000000';
    const message = encodeURIComponent('Bonjour, je souhaite en savoir plus sur vos services d\'investissement.');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      <style>{`
        .whatsapp-button {
          transition: all 0.3s ease;
        }
        .whatsapp-button:hover {
          transform: scale(1.1);
          box-shadow: 0 10px 25px rgba(37, 211, 102, 0.4);
        }
      `}</style>
      <button
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="fixed right-8 z-50 text-white p-4 rounded-full shadow-lg whatsapp-button focus:outline-none"
        style={{
          bottom: '2rem',
          backgroundColor: isHovered ? '#20BA5A' : '#25D366',
          border: '2px solid #128C7E',
          transform: isHovered ? 'scale(1.1)' : 'scale(1)',
          boxShadow: isHovered 
            ? '0 10px 25px rgba(37, 211, 102, 0.4)' 
            : '0 4px 6px rgba(0, 0, 0, 0.1)',
        }}
        aria-label="Contacter Everest Finance sur WhatsApp"
        title="Discuter sur WhatsApp"
      >
        <img src="/whatsapp.png" alt="WhatsApp" width={36} height={36} />
      </button>
    </>
  );
};

