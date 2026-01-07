
// import React from "react";
// import video3 from "../../assets/vedio3.mp4";

// import vedio10 from "../../assets/vedio10.mp4"

// export default function ImageSlider() {
//   return (
//     <div className="w-full h-[70vh] overflow-hidden shadow-[0_8px_20px_rgba(0,0,0,0.15)] flex justify-center items-center bg-gradient-to-b from-white to-[#f7f7f7]">
//       <video
//         className="w-full h-auto object-cover rounded-2xl outline-none transition-all duration-800 ease-[cubic-bezier(0.4,0,0.2,1)] hover:scale-102 hover:shadow-[0_12px_28px_rgba(0,0,0,0.25)]"
      
//         src={vedio10}
//         autoPlay
//         loop
//         muted
//         controls
//         playsInline
//       ></video>

//       <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center text-shadow-[0_2px_8px_rgba(0,0,0,0.4)] z-10 animate-fadeInUp">
//         <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl tracking-[2px] font-semibold">
//           Welcome to FABUNIQO
//         </h1>
//         <p className="font-poppins text-xl text-[#eaeaea] mt-3">
//           Style that speaks your personality.
//         </p>
//       </div>
//     </div>
//   );
// }



import React, { useState, useEffect } from "react";
import { ChevronRight } from "lucide-react";
import video3 from "../../assets/vedio3.mp4";

import vedio2 from "../../assets/vedio2.mp4";
import vedio10 from "../../assets/vedio10.mp4";
import vedio1 from "../../assets/vedio1.mp4";

export default function HeroSection() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  
  const videos = [
      { 
      src: vedio2, 
      title: "Explore", 
      brand: "Collections", 
      subtitle: "Where elegance meets comfort" 
    },
       { 
      src: vedio1, 
      title: "Explore", 
      brand: "Collections", 
      subtitle: "Where elegance meets comfort" 
    },
    
    { 
      src: vedio10, 
      title: "Explore", 
      brand: "Collections", 
      subtitle: "Where elegance meets comfort" 
    }
  ];

  // Auto-rotate videos every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideoIndex((prev) => (prev + 1) % videos.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Your exact brand color
  const fabuniqoGold = "rgb(209,167,67)";

  return (
    <div className="relative w-full h-[70vh] sm:h-[75vh] md:h-[80vh] overflow-hidden bg-gradient-to-b from-white to-[#f7f7f7]">
      
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          key={currentVideoIndex}
          className="w-full h-full object-cover"
          src={videos[currentVideoIndex].src}
          autoPlay
          loop
          muted
          playsInline
        />
        
        {/* Gradient Overlay - stronger on right side */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
      </div>

      {/* Content Container - Left Aligned */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="w-full lg:w-2/3 xl:w-1/2">
          
          {/* Main Content */}
          <div className="space-y-3 sm:space-y-4">
            {/* Title with consistent font size like navbar */}
            <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-semibold leading-tight">
              {videos[currentVideoIndex].title}{' '}
              <span style={{ color: fabuniqoGold }}>
                {videos[currentVideoIndex].brand}
              </span>
            </h1>

            {/* Subtitle with consistent poppins font and smaller size */}
            <p className="font-poppins text-base sm:text-lg md:text-xl text-white/90 font-normal max-w-lg">
              {videos[currentVideoIndex].subtitle}
            </p>

            {/* CTA Button - Consistent with navbar button styling */}
            <div className="pt-4">
              <button className="group relative inline-flex items-center gap-2 px-5 py-3 sm:px-6 sm:py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-poppins text-sm sm:text-base font-medium rounded-full overflow-hidden transition-all duration-300 hover:border-white/50 hover:bg-white/20">
                <span>Shop Now</span>
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Controls (optional) */}
      <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 flex items-center gap-2">
        <button 
          onClick={() => setCurrentVideoIndex((prev) => (prev - 1 + videos.length) % videos.length)}
          className="p-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300"
        >
          <ChevronRight className="w-4 h-4 text-white rotate-180" />
        </button>
        <button 
          onClick={() => setCurrentVideoIndex((prev) => (prev + 1) % videos.length)}
          className="p-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300"
        >
          <ChevronRight className="w-4 h-4 text-white" />
        </button>
      </div>

      {/* Stats Bar (optional) */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent pt-8 pb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="font-playfair text-xl sm:text-2xl font-bold text-white">200+</div>
              <div className="font-poppins text-xs sm:text-sm text-white/70 mt-1">Premium Brands</div>
            </div>
            <div className="text-center">
              <div className="font-playfair text-xl sm:text-2xl font-bold text-white">5K+</div>
              <div className="font-poppins text-xs sm:text-sm text-white/70 mt-1">Products</div>
            </div>
            <div className="text-center">
              <div className="font-playfair text-xl sm:text-2xl font-bold text-white">24/7</div>
              <div className="font-poppins text-xs sm:text-sm text-white/70 mt-1">Support</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}











