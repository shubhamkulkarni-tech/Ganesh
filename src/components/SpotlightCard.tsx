import React, { useRef } from 'react';

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function SpotlightCard({ children, className = "" }: SpotlightCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty("--mouse-x", `${x}px`);
    cardRef.current.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={`relative overflow-hidden rounded-2xl border border-gold-500/10 bg-[#0A0A0A]/60 backdrop-blur-xl transition-all duration-300 group hover:border-gold-500/35 hover:shadow-[0_10px_30px_rgba(197,160,89,0.15)] flex flex-col justify-between ${className}`}
    >
      {/* Dynamic Cursor-Following Spotlight Overlay */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"
        style={{
          background: `radial-gradient(350px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(197, 160, 89, 0.12), transparent 80%)`
        }}
      />
      
      {/* Main Inner Border Glow */}
      <div className="absolute top-0 left-0 w-full h-[1.5px] bg-gradient-to-r from-transparent via-luxury-gold/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

      {/* Content wrapper */}
      <div className="relative z-10 w-full h-full flex flex-col justify-between">
        {children}
      </div>
    </div>
  );
}
