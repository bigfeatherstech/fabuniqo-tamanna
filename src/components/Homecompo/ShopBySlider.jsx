

import React, { useRef, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Egur161 from "../../assets/Egur-161-peach (1).png";
import RsetRed from "../../assets/Rset-red (2).png";
import Rss203 from "../../assets/Rss - 203 (4).png";
import vjs230 from "../../assets/vjs-230 (1).png";
import vjs231 from "../../assets/vjs-232 (1).png";
import Rss222 from "../../assets/Rss-222 (2).png";
import Rss204 from "../../assets/Rss-204 (2).png";

const ShopBySlider = () => {
  const scrollRef = useRef(null);
  const [autoScrollEnabled, setAutoScrollEnabled] = useState(true);
  
  const categories = [
    // { name: 'Evening Wear', image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&auto=format&fit=crop', count: 156 },
    // { name: 'Casual Outfits', image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=400&auto=format&fit=crop', count: 289 },
    // { name: 'Formal Attire', image: 'https://images.unsplash.com/photo-1594938350609-1a9d56e6c4f3?w=400&auto=format&fit=crop', count: 187 },
    // { name: 'Beach Wear', image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&auto=format&fit=crop', count: 98 },
    // { name: 'Party Dresses', image: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=400&auto=format&fit=crop', count: 203 },
    // { name: 'Winter Collection', image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w-400&auto=format&fit=crop', count: 176 },
    // { name: 'Summer Styles', image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&auto=format&fit=crop', count: 245 },
    // { name: 'Accessories', image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&auto=format&fit=crop', count: 312 },
  

    { name: 'Everyday' , image: vjs231},
    { name: 'Work & Office ' ,image: Rss222}, 
    { name: 'Festivals', image: Rss203},
    { name: 'Party & Night out ', image: vjs230},
    { name: 'Weddings', image: Rss204},
    // { name: 'Summer Styles', image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&auto=format&fit=crop', count: 245 },
    // { name: 'Accessories', image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&auto=format&fit=crop', count: 312 },
  
  
  ];

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  // Auto slider functionality
  useEffect(() => {
    if (!autoScrollEnabled) return;

    let intervalId;
    let isScrolling = false;

    const autoScroll = () => {
      if (!scrollRef.current || isScrolling) return;

      const container = scrollRef.current;
      const maxScroll = container.scrollWidth - container.clientWidth;
      
      if (container.scrollLeft >= maxScroll - 10) {
        // If at the end, scroll back to start
        isScrolling = true;
        container.scrollTo({
          left: 0,
          behavior: 'smooth'
        });
        
        setTimeout(() => {
          isScrolling = false;
        }, 800);
      } else {
        // Otherwise, scroll right
        isScrolling = true;
        scroll('right');
        
        setTimeout(() => {
          isScrolling = false;
        }, 800);
      }
    };

    // Start auto-scrolling every 5 seconds
    intervalId = setInterval(autoScroll, 1000);

    // Cleanup on unmount or when autoScrollEnabled changes
    return () => {
      clearInterval(intervalId);
    };
  }, [autoScrollEnabled]);

  // Pause auto-scroll on hover
  const handleMouseEnter = () => {
    setAutoScrollEnabled(false);
  };

  const handleMouseLeave = () => {
    setAutoScrollEnabled(true);
  };

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          {/* <div>
            <h2 className="font-main text-2xl md:text-3xl font-semibold text-gray-900">
              New  <span style={{ color: 'rgb(209,167,67)' }}>Arrivals</span>
            </h2>
            <p className="font-main text-gray-600 mt-2">
              Browse through our curated collections
            </p>
          </div> */}
          
<div >
  <div style={{padding:"13px" , borderRadius:"50px" , width:"200px" , backgroundColor:"#d36e6e"}}>
 <h2 style={{fontSize:"32px"}} className="font-light text-2xl md:text-3xl font- text-gray-900 animate-bounce-soft">
    New <span style={{ color: "#3f51b5", fontWeight:"400"}}>Arrivals</span>
  </h2>
  </div>
 

  {/* <p style={{fontSize:"24px"}} className="font-main font-light text-gray-600 mt-2 font-lato"> */}
    <p style={{fontSize:"18px"}} className="font-lato font-main  text-xs tracking-[0.05em] text-gray-800 mt-5">

    Browse through our curated collections
  </p>
</div>




          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => scroll('left')}
              className="p-2 rounded-full border border-gray-200 hover:border-[rgb(209,167,67)] hover:bg-[rgb(209,167,67)]/5 transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-2 rounded-full border border-gray-200 hover:border-[rgb(209,167,67)] hover:bg-[rgb(209,167,67)]/5 transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Horizontal Scroll Categories */}
        <div 
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
          >
            {categories.map((category, index) => (
              <div
                key={index}
                className="group flex-shrink-0 relative w-64 md:w-72 rounded-xl overflow-hidden cursor-pointer"
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-xl">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="font-lato text-xl font-semibold mb-2 text-[#CFA84B]">
                      {category.name}
                    </h3>
                    <p className="font-lato text-lg opacity-90 text-[#D36E6E]">
                      {category.count} items
                    </p>
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-[rgb(209,167,67)]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                {/* Shop Button */}
                <button className="absolute bottom-4 right-4 px-4 py-2 bg-white text-gray-900 rounded-full font-poppins text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 hover:bg-[rgb(209,167,67)] hover:text-white">
                  Shop Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopBySlider;