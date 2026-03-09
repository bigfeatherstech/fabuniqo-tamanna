import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // 1. Logic to show/hide button
      const scrollY = window.scrollY;
      setIsVisible(scrollY > 500);

      // 2. Logic to calculate page progress for the "Fill" effect
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (scrollY / totalHeight) * 100;
      setProgress(currentProgress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    // We use the browser's native smooth behavior since you have the Butter Engine active
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div 
      className={`fixed bottom-12 right-12 z-[100] transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20 pointer-events-none'
      }`}
    >
      <button 
        onClick={scrollToTop}
        className="group relative flex flex-col items-center gap-4 focus:outline-none"
      >
        {/* The Vertical Progress Line */}
        <div className="relative w-[1px] h-20 bg-white/10 overflow-hidden">
          <div 
            className="absolute top-0 left-0 w-full bg-[rgb(209,167,67)] transition-all duration-100 ease-out"
            style={{ height: `${progress}%` }}
          />
        </div>

        {/* The Button Body */}
        <div className="relative mb-20 overflow-hidden bg-black border border-white/10 w-14 h-14 rounded-full flex items-center justify-center transition-all duration-500 group-hover:border-[rgb(209,167,67)]">
          <ArrowUp 
            size={20} 
            className="text-white group-hover:-translate-y-12 transition-transform duration-500" 
            strokeWidth={1}
          />
          {/* Duplicate arrow that slides in from bottom on hover */}
          <ArrowUp 
            size={20} 
            className="absolute text-[rgb(209,167,67)] translate-y-12 group-hover:translate-y-0 transition-transform duration-500" 
            strokeWidth={1}
          />
        </div>

        {/* Floating Label */}
        <span className="text-[8px] tracking-[0.5em] uppercase text-zinc-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 absolute -top-8 whitespace-nowrap">
          Top
        </span>
      </button>
    </div>
  );
};

export default BackToTop;