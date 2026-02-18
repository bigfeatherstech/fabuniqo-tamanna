import React, { useState, useEffect, useRef } from 'react';

const ShopByCategory = () => {
  const [hoveredIndex, setHoveredIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHoveringImages, setIsHoveringImages] = useState(false);
  
  const sectionRef = useRef(null);

  const categories = [
    { name: 'Evening', image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=1200', count: '156' },
    { name: 'Casual', image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=1200', count: '289' },
    { name: 'Formal', image: 'https://images.unsplash.com/photo-1594938350609-1a9d56e6c4f3?w=1200', count: '187' },
    { name: 'Resort', image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1200', count: '098' },
    { name: 'Winter', image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=1200', count: '176' },
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="py-12 bg-white w-full relative"
    >
      
      {/* --- CUSTOM FLOATING CURSOR (Visible only on Image Hover) --- */}
      <div 
        className={`fixed top-0 left-0 w-24 h-24 rounded-full bg-[rgb(209,167,67)] pointer-events-none z-[9999] flex items-center justify-center transition-transform duration-500 ease-out
          ${isHoveringImages ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}
        style={{ 
          left: 0,
          top: 0,
          transform: `translate3d(${mousePos.x - 48}px, ${mousePos.y - 48}px, 0)`,
        }}
      >
        <div className="flex flex-col items-center">
            <span className="text-white text-[9px] font-bold uppercase tracking-widest">
                View
            </span>
            <span className="text-white text-[10px] font-serif italic font-bold">
                {categories[hoveredIndex].name}
            </span>
        </div>
      </div>

      <div className="w-full px-4 md:px-10">
        {/* Minimalist Header */}
        <div className={`mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-4'}`}>
          <div className="flex items-end justify-between border-b border-gray-100 pb-6">
            <div>
              <span className="text-[9px] tracking-[0.6em] uppercase text-[rgb(209,167,67)] font-bold">The Atelier</span>
              <h3 className="text-3xl md:text-5xl font-light tracking-tighter text-gray-900 italic font-serif mt-2">Shop By Category</h3>
            </div>
            <p className="hidden md:block text-[10px] tracking-widest text-gray-400 uppercase italic">Autumn / Winter 2026</p>
          </div>
        </div>

        {/* Fluid Accordion Container - HOVER TRIGGERS MOVED HERE */}
        <div 
          className="flex h-[65vh] md:h-[75vh] min-h-[500px] w-full gap-2 md:gap-4 cursor-none"
          onMouseEnter={() => setIsHoveringImages(true)}
          onMouseLeave={() => setIsHoveringImages(false)}
        >
          {categories.map((cat, i) => (
            <div
              key={i}
              onMouseEnter={() => setHoveredIndex(i)}
              className={`relative overflow-hidden transition-all duration-[900ms] ease-[cubic-bezier(0.23,1,0.32,1)]
                ${hoveredIndex === i ? 'flex-[4]' : 'flex-[1]'}
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-32'}
              `}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              {/* Image Layer */}
              <div className="absolute inset-0 w-full h-full">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className={`w-full h-full object-cover transition-all duration-[2s] 
                    ${hoveredIndex === i ? 'scale-100 grayscale-0' : 'scale-110 grayscale'}`}
                />
                <div className={`absolute inset-0 bg-black/30 transition-opacity duration-700 ${hoveredIndex === i ? 'opacity-60' : 'opacity-20'}`} />
              </div>

              {/* Minimal Text Branding */}
              <div className="absolute inset-0 p-6 md:p-12 flex flex-col justify-between">
                <span className={`text-[11px] font-medium tracking-[0.4em] transition-all duration-500 ${hoveredIndex === i ? 'text-white translate-x-0' : 'text-white/40 -translate-x-2'}`}>
                  0{i + 1}
                </span>

                <div className={`transition-all duration-700 ${hoveredIndex === i ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                  <h4 className="text-3xl md:text-5xl text-white font-serif italic tracking-tight mb-4">{cat.name}</h4>
                  <div className="flex items-center gap-6">
                    <button className="text-white text-[10px] uppercase tracking-[0.3em] border-b border-[rgb(209,167,67)] pb-2 transition-colors">
                      Discover
                    </button>
                    <span className="text-white/40 text-[9px] tracking-widest uppercase">{cat.count} Pieces</span>
                  </div>
                </div>
              </div>

              {/* Inactive Vertical Title */}
              <div className={`absolute inset-0 flex items-center justify-center pointer-events-none transition-opacity duration-500 ${hoveredIndex === i ? 'opacity-0' : 'opacity-100'}`}>
                 <p className="rotate-90 text-[10px] tracking-[0.8em] uppercase text-white font-light whitespace-nowrap">
                   {cat.name}
                 </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopByCategory;


// import React, { useRef, useEffect, useState } from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';

// const ShopByCategory = () => {
//   const scrollRef = useRef(null);
//   const [autoScrollEnabled, setAutoScrollEnabled] = useState(true);
  
//   const categories = [
//     { name: 'Evening Wear', image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&auto=format&fit=crop', count: 156 },
//     { name: 'Casual Outfits', image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=400&auto=format&fit=crop', count: 289 },
//     { name: 'Formal Attire', image: 'https://images.unsplash.com/photo-1594938350609-1a9d56e6c4f3?w=400&auto=format&fit=crop', count: 187 },
//     { name: 'Beach Wear', image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&auto=format&fit=crop', count: 98 },
//     { name: 'Party Dresses', image: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=400&auto=format&fit=crop', count: 203 },
//     { name: 'Winter Collection', image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w-400&auto=format&fit=crop', count: 176 },
//     { name: 'Summer Styles', image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&auto=format&fit=crop', count: 245 },
//     { name: 'Accessories', image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&auto=format&fit=crop', count: 312 },
//   ];

//   const scroll = (direction) => {
//     if (scrollRef.current) {
//       const scrollAmount = 400;
//       scrollRef.current.scrollBy({
//         left: direction === 'left' ? -scrollAmount : scrollAmount,
//         behavior: 'smooth'
//       });
//     }
//   };

//   // Auto slider functionality
//   useEffect(() => {
//     if (!autoScrollEnabled) return;

//     let intervalId;
//     let isScrolling = false;

//     const autoScroll = () => {
//       if (!scrollRef.current || isScrolling) return;

//       const container = scrollRef.current;
//       const maxScroll = container.scrollWidth - container.clientWidth;
      
//       if (container.scrollLeft >= maxScroll - 10) {
//         // If at the end, scroll back to start
//         isScrolling = true;
//         container.scrollTo({
//           left: 0,
//           behavior: 'smooth'
//         });
        
//         setTimeout(() => {
//           isScrolling = false;
//         }, 800);
//       } else {
//         // Otherwise, scroll right
//         isScrolling = true;
//         scroll('right');
        
//         setTimeout(() => {
//           isScrolling = false;
//         }, 800);
//       }
//     };

//     // Start auto-scrolling every 5 seconds
//     intervalId = setInterval(autoScroll, 5000);

//     // Cleanup on unmount or when autoScrollEnabled changes
//     return () => {
//       clearInterval(intervalId);
//     };
//   }, [autoScrollEnabled]);

//   // Pause auto-scroll on hover
//   const handleMouseEnter = () => {
//     setAutoScrollEnabled(false);
//   };

//   const handleMouseLeave = () => {
//     setAutoScrollEnabled(true);
//   };

//   return (
//     <section className="py-12 bg-white">
//       <div className="max-w-7xl mx-auto px-4">
//         {/* Header */}
//         <div className="flex items-center justify-between mb-8">
//           <div>
//             <h2 className="font-playfair text-2xl md:text-3xl font-semibold text-gray-900">
//               Shop By <span style={{ color: 'rgb(209,167,67)' }}>Category</span>
//             </h2>
//             <p className="font-poppins text-gray-600 mt-2">
//               Browse through our curated collections
//             </p>
//           </div>
          
//           <div className="hidden md:flex items-center gap-2">
//             <button
//               onClick={() => scroll('left')}
//               className="p-2 rounded-full border border-gray-200 hover:border-[rgb(209,167,67)] hover:bg-[rgb(209,167,67)]/5 transition-colors"
//             >
//               <ChevronLeft className="w-5 h-5 text-gray-600" />
//             </button>
//             <button
//               onClick={() => scroll('right')}
//               className="p-2 rounded-full border border-gray-200 hover:border-[rgb(209,167,67)] hover:bg-[rgb(209,167,67)]/5 transition-colors"
//             >
//               <ChevronRight className="w-5 h-5 text-gray-600" />
//             </button>
//           </div>
//         </div>

//         {/* Horizontal Scroll Categories */}
//         <div 
//           className="relative"
//           onMouseEnter={handleMouseEnter}
//           onMouseLeave={handleMouseLeave}
//         >
//           <div
//             ref={scrollRef}
//             className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
//           >
//             {categories.map((category, index) => (
//               <div
//                 key={index}
//                 className="group flex-shrink-0 relative w-64 md:w-72 rounded-xl overflow-hidden cursor-pointer"
//               >
//                 <div className="relative aspect-[4/5] overflow-hidden rounded-xl">
//                   <img
//                     src={category.image}
//                     alt={category.name}
//                     className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  
//                   <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
//                     <h3 className="font-Noto text-xl font-semibold mb-2">
//                       {category.name}
//                     </h3>
//                     <p className="font-poppins text-sm opacity-90">
//                       {category.count} items
//                     </p>
//                   </div>
                  
//                   {/* Hover Overlay */}
//                   <div className="absolute inset-0 bg-[rgb(209,167,67)]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//                 </div>
                
//                 {/* Shop Button */}
//                 <button className="absolute bottom-4 right-4 px-4 py-2 bg-white text-gray-900 rounded-full font-poppins text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 hover:bg-[rgb(209,167,67)] hover:text-white">
//                   Shop Now
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ShopByCategory;