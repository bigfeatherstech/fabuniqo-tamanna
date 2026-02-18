// import React, { useState, useEffect, useRef } from "react";
// import { ChevronRight, Pause, Play } from "lucide-react";
// import video3 from "../../assets/vedio3.mp4";
// import vedio2 from "../../assets/vedio2.mp4";
// import vedio10 from "../../assets/vedio10.mp4";
// import vedio1 from "../../assets/vedio1.mp4";

// export default function HeroSection() {
//   const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
//   const [isLoaded, setIsLoaded] = useState(false);
//   const [isTransitioning, setIsTransitioning] = useState(false);
//   const [isPlaying, setIsPlaying] = useState(true);
//   const [showControls, setShowControls] = useState(false);
//   const [animateTitle, setAnimateTitle] = useState(false);
//   const videoRef = useRef(null);
//   const titleRef = useRef(null);
  
//   const videos = [
//     { 
//       src: vedio2, 
//       title: "HERITAGE", 
//       subtitle: "Timeless elegance redefined",
//       ctaText: "DISCOVER THE COLLECTION",
//       year: "1898"
//     },
//     { 
//       src: vedio1, 
//       title: "ELEVATED", 
//       subtitle: "The art of minimalism",
//       ctaText: "EXPLORE THE EDIT",
//       year: "1913"
//     },
//     { 
//       src: vedio10, 
//       title: "EXCELLENCE", 
//       subtitle: "Craftsmanship meets innovation",
//       ctaText: "VIEW THE COLLECTION",
//       year: "2024"
//     }
//   ];

//   const fabuniqoGold = "rgb(209,167,67)";

//   // Auto-rotate with luxury timing
//   useEffect(() => {
//     let interval;
//     if (isPlaying) {
//       interval = setInterval(() => {
//         handleNext();
//       }, 10000); // 10 seconds for luxury pacing
//     }
//     return () => clearInterval(interval);
//   }, [isPlaying]);

//   // Preload for seamless transitions
//   useEffect(() => {
//     const loadVideo = (src) => {
//       return new Promise((resolve) => {
//         const video = document.createElement('video');
//         video.src = src;
//         video.onloadeddata = () => resolve();
//       });
//     };

//     Promise.all(videos.map(v => loadVideo(v.src))).then(() => {
//       setIsLoaded(true);
//       // Start title animation after video loads
//       setTimeout(() => {
//         setAnimateTitle(true);
//       }, 200);
//     });
//   }, []);

//   // Handle video changes and title animation
//   useEffect(() => {
//     // Reset animation when video changes
//     setAnimateTitle(false);
    
//     // Start animation after transition completes
//     const animationTimer = setTimeout(() => {
//       setAnimateTitle(true);
//     }, isTransitioning ? 1200 : 100);
    
//     return () => clearTimeout(animationTimer);
//   }, [currentVideoIndex, isTransitioning]);

//   const handleNext = () => {
//     setIsTransitioning(true);
//     setTimeout(() => {
//       setCurrentVideoIndex((prev) => (prev + 1) % videos.length);
//       setTimeout(() => {
//         setIsTransitioning(false);
//       }, 800);
//     }, 400);
//   };

//   const handlePrev = () => {
//     setIsTransitioning(true);
//     setTimeout(() => {
//       setCurrentVideoIndex((prev) => (prev - 1 + videos.length) % videos.length);
//       setTimeout(() => {
//         setIsTransitioning(false);
//       }, 800);
//     }, 400);
//   };

//   const handleVideoClick = (index) => {
//     if (index !== currentVideoIndex) {
//       setIsTransitioning(true);
//       setTimeout(() => {
//         setCurrentVideoIndex(index);
//         setTimeout(() => {
//           setIsTransitioning(false);
//         }, 800);
//       }, 400);
//     }
//   };

//   const togglePlay = () => {
//     setIsPlaying(!isPlaying);
//   };

//   return (
//     <div 
//       className="relative w-full h-[70vh] overflow-hidden bg-black"
//       onMouseEnter={() => setShowControls(true)}
//       onMouseLeave={() => setShowControls(false)}
//     >
      
//       {/* Cinematic Video Background with Film Grain Effect */}
//       <div className="absolute inset-0 w-full h-full">
//         <div className={`relative w-full h-full transform transition-all duration-1200 ${
//           isTransitioning ? 'scale-110 opacity-95 blur-[1px]' : 'scale-100 opacity-100 blur-0'
//         }`}>
//           <video
//             ref={videoRef}
//             key={currentVideoIndex}
//             className={`w-full h-full object-cover transition-all duration-1200 ${
//               isLoaded ? 'opacity-100' : 'opacity-0'
//             }`}
//             src={videos[currentVideoIndex].src}
//             autoPlay
//             loop
//             muted
//             playsInline
//             onLoadedData={() => setIsLoaded(true)}
//           />
          
//           {/* Luxury Gradient Overlays */}
//           <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20"></div>
//           <div className="absolute inset-0 bg-gradient-to-r from-black/15 via-transparent to-black/15"></div>
          
//           {/* Subtle Film Grain Texture */}
//           <div className="absolute inset-0 opacity-[0.015] mix-blend-overlay"
//                style={{
//                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
//                }}>
//           </div>
//         </div>
//       </div>

//       {/* Main Content - Royal Centered Layout */}
//       <div className="relative h-full flex items-center justify-center">
//         <div className="text-center px-4 sm:px-8 max-w-7xl mx-auto">
//           {/* Year Indicator - Like Prada's Heritage Display */}
//           <div className={`absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 transform transition-all duration-1200 delay-100 ${
//             isTransitioning ? 'opacity-0 -translate-x-4' : 'opacity-40 translate-x-0'
//           }`}>
//             <span className="font-cormorant text-lg sm:text-xl md:text-2xl text-white/60 tracking-widest vertical-rl rotate-180">
//               {videos[currentVideoIndex].year}
//             </span>
//           </div>

//           {/* Title - Smaller Royal Serif Typography with Animation */}
//           <div className={`mb-6 md:mb-8 transform transition-all duration-1200 ${
//             isTransitioning ? 'translate-y-20 opacity-0' : 'translate-y-0 opacity-100'
//           }`}>
//             <h1 
//               ref={titleRef}
//               className="font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white font-normal tracking-tight leading-[0.9]"
//             >
//               {videos[currentVideoIndex].title.split('').map((letter, idx) => (
//                 <span 
//                   key={`${currentVideoIndex}-${idx}`}
//                   className={`inline-block letter-animation ${animateTitle ? 'letter-visible' : 'letter-hidden'}`}
//                   style={{ 
//                     animationDelay: `${idx * 80}ms`,
//                     transitionDelay: `${idx * 80}ms`
//                   }}
//                 >
//                   {letter}
//                 </span>
//               ))}
//             </h1>
//           </div>

//           {/* Subtitle - Smaller Elegant Spacing with Gold Accent */}
//           <div className={`relative mb-10 md:mb-16 transform transition-all duration-1200 delay-300 ${
//             isTransitioning ? 'translate-y-20 opacity-0' : 'translate-y-0 opacity-100'
//           }`}>
//             <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-24 sm:w-32 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
//             <p className="font-cormorant text-base sm:text-lg md:text-xl lg:text-2xl text-white font-light tracking-[0.2em] sm:tracking-[0.25em] md:tracking-[0.3em] uppercase relative z-10 bg-black/10 sm:bg-black/20 px-4 sm:px-6 md:px-8 py-3 sm:py-4 inline-block">
//               {videos[currentVideoIndex].subtitle}
//             </p>
//             <div className="absolute right-1/2 top-1/2 -translate-y-1/2 w-3 h-3 sm:w-4 sm:h-4 border border-white/30 rotate-45"></div>
//             <div className="absolute left-1/2 top-1/2 -translate-y-1/2 w-3 h-3 sm:w-4 sm:h-4 border border-white/30 rotate-45"></div>
//           </div>

//           {/* CTA Button - Minimal with Gold Hover */}
//           <div className={`transform transition-all duration-1200 delay-500 ${
//             isTransitioning ? 'translate-y-20 opacity-0' : 'translate-y-0 opacity-100'
//           }`}>
//             <button 
//               className="group relative inline-flex items-center gap-4 sm:gap-6 px-6 sm:px-8 py-3 sm:py-4 text-white font-poppins text-xs tracking-[0.4em] sm:tracking-[0.5em] uppercase border border-white/30 hover:border-gold transition-all duration-500 hover:bg-white/5"
//               aria-label={videos[currentVideoIndex].ctaText}
//             >
//               <span className="relative overflow-hidden">
//                 <span className="inline-block transform group-hover:-translate-y-full transition-transform duration-500 text-xs sm:text-xs">
//                   {videos[currentVideoIndex].ctaText}
//                 </span>
//                 <span className="absolute top-full left-0 text-gold transform group-hover:-translate-y-full transition-transform duration-500 text-xs sm:text-xs">
//                   {videos[currentVideoIndex].ctaText}
//                 </span>
//               </span>
//               <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-2 group-hover:text-gold transition-all duration-500" />
//               <div className="absolute inset-0 border border-white/10 group-hover:border-gold/30 transition-all duration-700"></div>
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Navigation Dots - Luxury Watch Inspired */}
//       <div className={`absolute bottom-8 sm:bottom-12 left-1/2 transform -translate-x-1/2 transition-opacity duration-500 ${
//         showControls ? 'opacity-100' : 'opacity-0'
//       }`}>
//         <div className="flex items-center gap-3 sm:gap-4">
//           {videos.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => handleVideoClick(index)}
//               className="group relative focus:outline-none"
//               aria-label={`View ${videos[index].title}`}
//             >
//               <div className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-500 transform group-hover:scale-125 ${
//                 index === currentVideoIndex 
//                   ? 'bg-white' 
//                   : 'bg-white/20 group-hover:bg-white/40'
//               }`}>
//                 {index === currentVideoIndex && (
//                   <div className="absolute inset-0 rounded-full animate-ping bg-white/30"></div>
//                 )}
//               </div>
//               <div className="absolute -top-7 sm:-top-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                 <span className="font-poppins text-[10px] sm:text-xs text-white/80 tracking-widest whitespace-nowrap">
//                   {videos[index].title}
//                 </span>
//               </div>
//             </button>
//           ))}
//         </div>
//       </div>

    

//       {/* Subtle Next/Previous Controls */}
//       <div className="absolute inset-0 flex items-center justify-between px-4 sm:px-8 pointer-events-none">
//         <button 
//           onClick={handlePrev}
//           className={`pointer-events-auto p-3 sm:p-4 focus:outline-none transition-all duration-500 ${
//             showControls ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
//           }`}
//           aria-label="Previous"
//         >
//           <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center border border-white/10 hover:border-white/30 transition-all duration-300 group">
//             <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-white/40 rotate-180 group-hover:text-white transition-all duration-300" />
//           </div>
//         </button>
//         <button 
//           onClick={handleNext}
//           className={`pointer-events-auto p-3 sm:p-4 focus:outline-none transition-all duration-500 ${
//             showControls ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
//           }`}
//           aria-label="Next"
//         >
//           <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center border border-white/10 hover:border-white/30 transition-all duration-300 group">
//             <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-white/40 group-hover:text-white transition-all duration-300" />
//           </div>
//         </button>
//       </div>

   

//       {/* Luxury Loading State */}
//       {!isLoaded && (
//         <div className="absolute inset-0 flex items-center justify-center bg-black">
//           <div className="relative">
//             <div className="w-16 h-16 sm:w-20 sm:h-20 border border-white/5 rounded-full"></div>
//             <div className="absolute inset-0 flex items-center justify-center">
//               <div className="w-12 h-12 sm:w-16 sm:h-16 border-t border-gold/50 rounded-full animate-spin"></div>
//             </div>
//             <div className="absolute inset-0 flex items-center justify-center">
//               <span className="font-playfair text-xs sm:text-sm text-white/40 tracking-widest">FABUNIQO</span>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Subtle Vertical Lines - Royal Framing */}
//       <div className="absolute top-0 left-4 sm:left-8 bottom-0 w-px bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>
//       <div className="absolute top-0 right-4 sm:right-8 bottom-0 w-px bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>

//       {/* Animation Styles */}
//       <style jsx>{`
//         @keyframes letterPop {
//           0% {
//             transform: scale(0.3) translateY(20px);
//             opacity: 0;
//             filter: blur(4px);
//           }
//           50% {
//             transform: scale(1.1) translateY(-5px);
//             opacity: 0.8;
//             filter: blur(0px);
//           }
//           100% {
//             transform: scale(1) translateY(0);
//             opacity: 1;
//             filter: blur(0px);
//           }
//         }

//         @keyframes fadeInScale {
//           0% {
//             transform: scale(0.5);
//             opacity: 0;
//           }
//           60% {
//             transform: scale(1.05);
//             opacity: 0.8;
//           }
//           100% {
//             transform: scale(1);
//             opacity: 1;
//           }
//         }

//         .letter-animation {
//           display: inline-block;
//           will-change: transform, opacity;
//           backface-visibility: hidden;
//           -webkit-font-smoothing: antialiased;
//         }

//         .letter-hidden {
//           opacity: 0;
//           transform: scale(0.5) translateY(20px);
//           filter: blur(4px);
//           transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
//         }

//         .letter-visible {
//           opacity: 1;
//           transform: scale(1) translateY(0);
//           filter: blur(0px);
//           animation: letterPop 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
//         }

//         /* Smooth hover effect */
//         .letter-visible:hover {
//           transform: scale(1.1);
//           transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
//         }

//         /* Responsive adjustments */
//         @media (max-width: 640px) {
//           h1 {
//             letter-spacing: -0.02em;
//           }
//         }

//         @media (min-width: 641px) and (max-width: 1024px) {
//           h1 {
//             letter-spacing: -0.01em;
//           }
//         }

//         @media (min-width: 1025px) {
//           h1 {
//             letter-spacing: 0;
//           }
//         }
//       `}</style>
//     </div>
//   );
// }



import React, { useState, useEffect, useRef } from "react";
import { ChevronRight, Pause, Play } from "lucide-react";
import vedio2 from "../../assets/vedio2.mp4";
import vedio1 from "../../assets/vedio1.mp4";
import vedio10 from "../../assets/vedio10.mp4";

export default function HeroSection() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [showControls, setShowControls] = useState(false);
  const [animateTitle, setAnimateTitle] = useState(false);
  const videoRef = useRef(null);
  const titleRef = useRef(null);
  
  const videos = [
    { 
      src: vedio2, 
      title: "HERITAGE", 
      subtitle: "Timeless elegance redefined",
      ctaText: "DISCOVER THE COLLECTION",
      year: "1898"
    },
    { 
      src: vedio1, 
      title: "ELEVATED", 
      subtitle: "The art of minimalism",
      ctaText: "EXPLORE THE EDIT",
      year: "1913"
    },
    { 
      src: vedio10, 
      title: "EXCELLENCE", 
      subtitle: "Craftsmanship meets innovation",
      ctaText: "VIEW THE COLLECTION",
      year: "2024"
    }
  ];

  const fabuniqoGold = "rgb(209,167,67)";

  // Auto-rotate with luxury timing
  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        handleNext();
      }, 10000); // 10 seconds for luxury pacing
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  // Preload for seamless transitions
  useEffect(() => {
    const loadVideo = (src) => {
      return new Promise((resolve) => {
        const video = document.createElement('video');
        video.src = src;
        video.onloadeddata = () => resolve();
      });
    };

    Promise.all(videos.map(v => loadVideo(v.src))).then(() => {
      setIsLoaded(true);
      // Start title animation after video loads
      setTimeout(() => {
        setAnimateTitle(true);
      }, 200);
    });
  }, []);

  // Handle video changes and title animation
  useEffect(() => {
    // Reset animation when video changes
    setAnimateTitle(false);
    
    // Start animation after transition completes
    const animationTimer = setTimeout(() => {
      setAnimateTitle(true);
    }, isTransitioning ? 1200 : 100);
    
    return () => clearTimeout(animationTimer);
  }, [currentVideoIndex, isTransitioning]);

  const handleNext = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentVideoIndex((prev) => (prev + 1) % videos.length);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 800);
    }, 400);
  };

  const handlePrev = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentVideoIndex((prev) => (prev - 1 + videos.length) % videos.length);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 800);
    }, 400);
  };

  const handleVideoClick = (index) => {
    if (index !== currentVideoIndex) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentVideoIndex(index);
        setTimeout(() => {
          setIsTransitioning(false);
        }, 800);
      }, 400);
    }
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div 
      className="relative w-full h-[70vh] overflow-hidden bg-black"
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      
      {/* Cinematic Video Background with Film Grain Effect */}
      <div className="absolute inset-0 w-full h-full">
        <div className={`relative w-full h-full transition-all duration-1200 ${
          isTransitioning ? 'opacity-95 blur-[1px]' : 'opacity-100 blur-0'
        }`}>
          <video
            ref={videoRef}
            key={videos[currentVideoIndex].src} // Changed key to ensure proper re-render
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-1200 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            src={videos[currentVideoIndex].src}
            autoPlay
            loop
            muted
            playsInline
            onLoadedData={() => setIsLoaded(true)}
          />
          
          {/* Luxury Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/15 via-transparent to-black/15"></div>
          
          {/* Subtle Film Grain Texture */}
          <div className="absolute inset-0 opacity-[0.015] mix-blend-overlay"
               style={{
                 backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
               }}>
          </div>
        </div>
      </div>

      {/* Main Content - Royal Centered Layout */}
      <div className="relative h-full flex items-center justify-center">
        <div className="text-center px-4 sm:px-8 max-w-7xl mx-auto">
          {/* Year Indicator - Like Prada's Heritage Display */}
          <div className={`absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 transform transition-all duration-1200 delay-100 ${
            isTransitioning ? 'opacity-0 -translate-x-4' : 'opacity-40 translate-x-0'
          }`}>
            <span className="font-cormorant text-lg sm:text-xl md:text-2xl text-white/60 tracking-widest vertical-rl rotate-180">
              {videos[currentVideoIndex].year}
            </span>
          </div>

          {/* Title - Smaller Royal Serif Typography with Animation */}
          <div className={`mb-6 md:mb-8 transform transition-all duration-1200 ${
            isTransitioning ? 'translate-y-20 opacity-0' : 'translate-y-0 opacity-100'
          }`}>
            <h1 
              ref={titleRef}
              className="font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white font-normal tracking-tight leading-[0.9]"
            >
              {videos[currentVideoIndex].title.split('').map((letter, idx) => (
                <span 
                  key={`${currentVideoIndex}-${idx}`}
                  className={`inline-block letter-animation ${animateTitle ? 'letter-visible' : 'letter-hidden'}`}
                  style={{ 
                    animationDelay: `${idx * 80}ms`,
                    transitionDelay: `${idx * 80}ms`
                  }}
                >
                  {letter}
                </span>
              ))}
            </h1>
          </div>

          {/* Subtitle - Smaller Elegant Spacing with Gold Accent */}
          <div className={`relative mb-10 md:mb-16 transform transition-all duration-1200 delay-300 ${
            isTransitioning ? 'translate-y-20 opacity-0' : 'translate-y-0 opacity-100'
          }`}>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-24 sm:w-32 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            <p className="font-cormorant text-base sm:text-lg md:text-xl lg:text-2xl text-white font-light tracking-[0.2em] sm:tracking-[0.25em] md:tracking-[0.3em] uppercase relative z-10 bg-black/10 sm:bg-black/20 px-4 sm:px-6 md:px-8 py-3 sm:py-4 inline-block">
              {videos[currentVideoIndex].subtitle}
            </p>
            <div className="absolute right-1/2 top-1/2 -translate-y-1/2 w-3 h-3 sm:w-4 sm:h-4 border border-white/30 rotate-45"></div>
            <div className="absolute left-1/2 top-1/2 -translate-y-1/2 w-3 h-3 sm:w-4 sm:h-4 border border-white/30 rotate-45"></div>
          </div>

          {/* CTA Button - Minimal with Gold Hover */}
          <div className={`transform transition-all duration-1200 delay-500 ${
            isTransitioning ? 'translate-y-20 opacity-0' : 'translate-y-0 opacity-100'
          }`}>
            <button 
              className="group relative inline-flex items-center gap-4 sm:gap-6 px-6 sm:px-8 py-3 sm:py-4 text-white font-poppins text-xs tracking-[0.4em] sm:tracking-[0.5em] uppercase border border-white/30 hover:border-gold transition-all duration-500 hover:bg-white/5"
              aria-label={videos[currentVideoIndex].ctaText}
            >
              <span className="relative overflow-hidden">
                <span className="inline-block transform group-hover:-translate-y-full transition-transform duration-500 text-xs sm:text-xs">
                  {videos[currentVideoIndex].ctaText}
                </span>
                <span className="absolute top-full left-0 text-gold transform group-hover:-translate-y-full transition-transform duration-500 text-xs sm:text-xs">
                  {videos[currentVideoIndex].ctaText}
                </span>
              </span>
              <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-2 group-hover:text-gold transition-all duration-500" />
              <div className="absolute inset-0 border border-white/10 group-hover:border-gold/30 transition-all duration-700"></div>
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Dots - Luxury Watch Inspired */}
      <div className={`absolute bottom-8 sm:bottom-12 left-1/2 transform -translate-x-1/2 transition-opacity duration-500 ${
        showControls ? 'opacity-100' : 'opacity-0'
      }`}>
        <div className="flex items-center gap-3 sm:gap-4">
          {videos.map((_, index) => (
            <button
              key={index}
              onClick={() => handleVideoClick(index)}
              className="group relative focus:outline-none"
              aria-label={`View ${videos[index].title}`}
            >
              <div className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-500 transform group-hover:scale-125 ${
                index === currentVideoIndex 
                  ? 'bg-white' 
                  : 'bg-white/20 group-hover:bg-white/40'
              }`}>
                {index === currentVideoIndex && (
                  <div className="absolute inset-0 rounded-full animate-ping bg-white/30"></div>
                )}
              </div>
              <div className="absolute -top-7 sm:-top-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="font-poppins text-[10px] sm:text-xs text-white/80 tracking-widest whitespace-nowrap">
                  {videos[index].title}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Subtle Next/Previous Controls */}
      <div className="absolute inset-0 flex items-center justify-between px-4 sm:px-8 pointer-events-none">
        <button 
          onClick={handlePrev}
          className={`pointer-events-auto p-3 sm:p-4 focus:outline-none transition-all duration-500 ${
            showControls ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
          }`}
          aria-label="Previous"
        >
          <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center border border-white/10 hover:border-white/30 transition-all duration-300 group">
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-white/40 rotate-180 group-hover:text-white transition-all duration-300" />
          </div>
        </button>
        <button 
          onClick={handleNext}
          className={`pointer-events-auto p-3 sm:p-4 focus:outline-none transition-all duration-500 ${
            showControls ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
          }`}
          aria-label="Next"
        >
          <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center border border-white/10 hover:border-white/30 transition-all duration-300 group">
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-white/40 group-hover:text-white transition-all duration-300" />
          </div>
        </button>
      </div>

      {/* Luxury Loading State */}
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-black">
          <div className="relative">
            <div className="w-16 h-16 sm:w-20 sm:h-20 border border-white/5 rounded-full"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 border-t border-gold/50 rounded-full animate-spin"></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-playfair text-xs sm:text-sm text-white/40 tracking-widest">FABUNIQO</span>
            </div>
          </div>
        </div>
      )}

      {/* Subtle Vertical Lines - Royal Framing */}
      <div className="absolute top-0 left-4 sm:left-8 bottom-0 w-px bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>
      <div className="absolute top-0 right-4 sm:right-8 bottom-0 w-px bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes letterPop {
          0% {
            transform: scale(0.3) translateY(20px);
            opacity: 0;
            filter: blur(4px);
          }
          50% {
            transform: scale(1.1) translateY(-5px);
            opacity: 0.8;
            filter: blur(0px);
          }
          100% {
            transform: scale(1) translateY(0);
            opacity: 1;
            filter: blur(0px);
          }
        }

        @keyframes fadeInScale {
          0% {
            transform: scale(0.5);
            opacity: 0;
          }
          60% {
            transform: scale(1.05);
            opacity: 0.8;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        .letter-animation {
          display: inline-block;
          will-change: transform, opacity;
          backface-visibility: hidden;
          -webkit-font-smoothing: antialiased;
        }

        .letter-hidden {
          opacity: 0;
          transform: scale(0.5) translateY(20px);
          filter: blur(4px);
          transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .letter-visible {
          opacity: 1;
          transform: scale(1) translateY(0);
          filter: blur(0px);
          animation: letterPop 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        /* Smooth hover effect */
        .letter-visible:hover {
          transform: scale(1.1);
          transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        /* Desktop styles */
        @media (min-width: 641px) and (max-width: 1024px) {
          h1 {
            letter-spacing: -0.01em;
          }
        }

        @media (min-width: 1025px) {
          h1 {
            letter-spacing: 0;
          }
        }

        /* Mobile fixes - FIXED CENTER ALIGNMENT */
        @media (max-width: 640px) {
          /* Height for mobile */
          .relative.w-full {
            height: 35vh !important;
            min-height: 320px;
            max-height: 350px;
            overflow: hidden !important;
          }
          
          /* Video on mobile */
          video {
            object-fit: cover !important;
            width: 100% !important;
            height: 100% !important;
            position: absolute;
            top: 0;
            left: 0;
          }
          
          /* Hide decorative elements on mobile */
          .absolute.left-1\/2.top-1\/2.-translate-x-1\/2.-translate-y-1\/2,
          .absolute.right-1\/2.top-1\/2,
          .absolute.left-1\/2.top-1\/2,
          .absolute.top-0.left-4,
          .absolute.top-0.right-4 {
            display: none !important;
          }
          
          /* FIX: Center content properly on mobile */
          .relative.h-full.flex.items-center.justify-center {
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            padding-top: 0 !important;
            padding-bottom: 0 !important;
            height: 100% !important;
          }
          
          /* Center the content container */
          .text-center.px-4 {
            padding-left: 0.75rem !important;
            padding-right: 0.75rem !important;
            transform: none !important;
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            justify-content: center !important;
            width: 100% !important;
            height: 100% !important;
          }
          
          /* Adjust content spacing for mobile center alignment */
          .transform.transition-all.duration-1200 {
            margin-bottom: 0.5rem !important;
            width: 100% !important;
            text-align: center !important;
          }
          
          /* Year indicator positioning for mobile */
          .absolute.left-4 {
            top: 50% !important;
            left: 12px !important;
            transform: translateY(-50%) !important;
            z-index: 20;
          }
          
          .absolute.left-4 .font-cormorant {
            font-size: 0.7rem !important;
          }
          
          /* Title adjustments */
          h1 {
            font-size: 1.75rem !important;
            line-height: 0.9;
            margin-bottom: 0.5rem !important;
            width: 100%;
            text-align: center;
          }
          
          /* Subtitle adjustments */
          .relative.mb-10 {
            margin-bottom: 0.75rem !important;
            width: 100%;
            text-align: center;
          }
          
          .font-cormorant {
            font-size: 0.7rem !important;
            padding: 0.4rem 0.6rem !important;
            background: rgba(0,0,0,0.6) !important;
            margin-bottom: 0.5rem !important;
            display: inline-block;
            text-align: center;
          }
          
          /* CTA Button adjustments */
          .transform.transition-all.duration-1200.delay-500 {
            width: 100%;
            text-align: center;
            margin-top: 0.25rem;
          }
          
          .group.relative.inline-flex {
            padding: 0.35rem 0.6rem !important;
            gap: 0.4rem !important;
            font-size: 0.55rem !important;
            border-width: 0.5px;
            margin: 0 auto;
            display: inline-flex;
          }
          
          .group.relative.inline-flex svg {
            width: 0.7rem !important;
            height: 0.7rem !important;
          }
          
          /* Navigation dots positioning */
          .absolute.bottom-8 {
            bottom: 15px !important;
            width: 100%;
            text-align: center;
          }
          
          .absolute.bottom-8 .flex.items-center {
            gap: 0.5rem !important;
            justify-content: center;
          }
          
          .absolute.bottom-8 .w-2\\.5 {
            width: 0.6rem !important;
            height: 0.6rem !important;
          }
          
          /* Controls positioning */
          .absolute.inset-0.flex.items-center.justify-between {
            padding-left: 0.5rem !important;
            padding-right: 0.5rem !important;
          }
          
          .pointer-events-auto.p-3 {
            padding: 0.25rem !important;
          }
          
          .pointer-events-auto.p-3 .w-10 {
            width: 2rem !important;
            height: 2rem !important;
          }
          
          .pointer-events-auto.p-3 svg {
            width: 0.8rem !important;
            height: 0.8rem !important;
          }
          
          /* Adjust main content area for proper centering */
          .text-center.px-4.sm\\:px-8.max-w-7xl.mx-auto {
            position: relative;
            top: 0;
            transform: translateY(0);
            padding-top: 10px;
            padding-bottom: 40px;
          }
          
          /* Adjust spacing between elements */
          .mb-6.md\\:mb-8 {
            margin-bottom: 0.75rem !important;
          }
          
          .relative.mb-10.md\\:mb-16 {
            margin-bottom: 1rem !important;
          }
        }
      `}</style>
    </div>
  );
}