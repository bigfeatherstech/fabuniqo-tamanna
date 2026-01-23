import React, { useState, useEffect } from 'react';

const LiquidLoading = () => {
  const [progress, setProgress] = useState(0);
  const [isOpeningShutter, setIsOpeningShutter] = useState(false);
  const fabniquoGold = "rgb(209,167,67)";

  useEffect(() => {
    // Lock scroll to prevent shaking
    document.body.style.overflow = 'hidden';

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          // Small pause once full, then slide up
          setTimeout(() => setIsOpeningShutter(true), 600);
          return 100;
        }
        return prev + 1;
      });
    }, 20); 

    return () => {
      // Re-enable scroll when loader unmounts
      document.body.style.overflow = '';
      clearInterval(interval);
    };
  }, []);

  const translateY = 250 - (progress * 3.5); 

  return (
    <div 
      className={`fixed inset-0 z-[10000] bg-[#080808] flex items-center justify-center transition-transform duration-[1200ms] ease-[cubic-bezier(0.85,0,0.15,1)] ${
        isOpeningShutter ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <div className="w-full max-w-[1000px] px-8 relative">
        <svg viewBox="0 0 1000 250" className="w-full h-auto overflow-visible select-none pointer-events-none">
          <defs>
            <mask id="loader-mask">
              <text x="50%" y="70%" textAnchor="middle" className="font-serif font-black text-[150px] tracking-tighter fill-white uppercase">
                FABUNIQO
              </text>
            </mask>

            <filter id="loader-water-waves">
              <feTurbulence type="turbulence" baseFrequency="0.01 0.05" numOctaves="2" result="wave">
                <animate attributeName="baseFrequency" dur="4s" values="0.01 0.05;0.012 0.07;0.01 0.05" repeatCount="indefinite" />
              </feTurbulence>
              <feDisplacementMap in="SourceGraphic" in2="wave" scale="15" />
            </filter>

            <filter id="loader-glitter">
              <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" seed="5">
                <animate attributeName="seed" values="1;50;1" dur="10s" repeatCount="indefinite" />
              </feTurbulence>
              <feComposite operator="in" in2="SourceGraphic" />
              <feColorMatrix type="matrix" values="0 0 0 0 1   0 0 0 0 0.8   0 0 0 0 0.4  0 0 0 1 0" />
            </filter>

            <path id="loaderWavePath" d="M 0 100 C 250 50 400 150 500 100 C 600 50 850 150 1000 100 V 400 H 0 Z">
              <animate 
                attributeName="d" 
                dur="5s" 
                repeatCount="indefinite"
                values="
                  M 0 100 C 250 50 400 150 500 100 C 600 50 850 150 1000 100 V 400 H 0 Z;
                  M 0 100 C 200 150 350 50 500 100 C 650 150 800 50 1000 100 V 400 H 0 Z;
                  M 0 100 C 250 50 400 150 500 100 C 600 50 850 150 1000 100 V 400 H 0 Z" 
              />
            </path>
          </defs>

          {/* GHOST OUTLINE */}
          <text x="50%" y="70%" textAnchor="middle" className="font-serif font-black text-[150px] tracking-tighter fill-white/[0.03] uppercase">
            FABUNIQO
          </text>

          {/* LIQUID FILL */}
          <g mask="url(#loader-mask)">
            <g filter="url(#loader-water-waves)">
              <use href="#loaderWavePath" fill={fabniquoGold} style={{ transform: `translateY(${translateY}px)`, transition: 'transform 0.4s ease-out' }} />
            </g>
            <rect width="1000" height="250" filter="url(#loader-glitter)" opacity="0.3" style={{ transform: `translateY(${translateY}px)`, transition: 'transform 0.4s ease-out' }} />
          </g>
        </svg>

        {/* PROGRESS INFO */}
        <div className={`mt-12 flex flex-col items-center transition-opacity duration-700 ${isOpeningShutter ? 'opacity-0' : 'opacity-100'}`}>
          <div className="w-40 h-[1px] bg-white/5 relative overflow-hidden">
            <div 
              className="absolute h-full bg-[#D1A743] transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="mt-4 text-[8px] tracking-[1em] uppercase text-white/30 font-light">Loading Experience</p>
        </div>
      </div>
    </div>
  );
};

export default LiquidLoading;