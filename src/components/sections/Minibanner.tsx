import React from 'react';
import logoWhite from '../../assets/logo-white.png';

const phrase = [
  <img src={logoWhite} alt="logo" className="h-7 w-7 object-contain mx-1 inline-block" key="logo-1" />,
  <span className="uppercase text-[var(--color-white)] font-bold tracking-wide mx-1 text-base" key="welcome">welcome to</span>,
  <span className="uppercase text-[var(--color-white)] font-bold tracking-wide mx-1 text-base" key="my">my</span>,
  <span className="uppercase text-[var(--color-secondary)] font-bold tracking-wide mx-1 text-base" key="portfolio">portfolio</span>,
  <img src={logoWhite} alt="logo" className="h-7 w-7 object-contain mx-1 inline-block" key="logo-3" />,
  <span className="uppercase text-[var(--color-white)] font-bold tracking-wide mx-1 text-base" key="lets">lets start</span>,
];

const MiniBanner = () => {
  // Repetimos la frase varias veces para el efecto infinito
  const repeatCount = 10;
  const repeated = Array.from({ length: repeatCount }, (_, i) =>
    phrase.map(el => React.cloneElement(el, { key: `${el.key}-${i}` }))
  ).flat();

  return (
    <div className="w-full overflow-hidden bg-[var(--color-primary)]" style={{ backgroundColor: '#000' }}>
      <div className="relative h-12 flex items-center">
        <div className="flex animate-scroll-left whitespace-nowrap">
          {repeated}
        </div>
      </div>
      <style>{`
        @keyframes scroll-left {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-left {
          animation: scroll-left 4s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default MiniBanner;