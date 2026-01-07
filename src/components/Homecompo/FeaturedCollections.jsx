import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ShoppingBag, Star } from 'lucide-react';

const CompactFeaturedCollections = () => {
  const [isHovering, setIsHovering] = useState(false);
  const sliderRef = useRef(null);
  const autoScrollRef = useRef(null);
  
  // Your brand colors
  const fabuniqoGold = "rgb(209,167,67)";

  // Compact collections data
  const compactCollections = [
    {
      id: 1,
      title: "Premium Suits",
      category: "Men",
      price: "From $399",
      items: 24,
      discount: "-30%",
      image: "https://images.unsplash.com/photo-1594938350609-1a9d56e6c4f3?w=400&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "Evening Dresses",
      category: "Women",
      price: "From $299",
      items: 18,
      discount: "-25%",
      image: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=400&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "Leather Bags",
      category: "Accessories",
      price: "From $199",
      items: 32,
      discount: "-20%",
      image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&auto=format&fit=crop"
    },
    {
      id: 4,
      title: "Casual Wear",
      category: "Men",
      price: "From $49",
      items: 42,
      discount: "-15%",
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&auto=format&fit=crop"
    },
    {
      id: 5,
      title: "Summer Collection",
      category: "Women",
      price: "From $79",
      items: 28,
      discount: "-35%",
      image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&auto=format&fit=crop"
    },
    {
      id: 6,
      title: "Designer Shoes",
      category: "Accessories",
      price: "From $129",
      items: 36,
      discount: "-20%",
      image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&auto=format&fit=crop"
    },
    {
      id: 7,
      title: "Winter Essentials",
      category: "Men",
      price: "From $99",
      items: 22,
      discount: "-40%",
      image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&auto=format&fit=crop"
    },
    {
      id: 8,
      title: "Luxury Handbags",
      category: "Women",
      price: "From $299",
      items: 16,
      discount: "-30%",
      image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&auto=format&fit=crop&q=80"
    }
  ];

  // Auto scroll effect
  useEffect(() => {
    if (!isHovering && sliderRef.current) {
      autoScrollRef.current = setInterval(() => {
        const scrollAmount = 320; // Card width + gap
        const maxScroll = sliderRef.current.scrollWidth - sliderRef.current.clientWidth;
        
        if (sliderRef.current.scrollLeft >= maxScroll - 10) {
          sliderRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
      }, 3000);
    }

    return () => {
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current);
      }
    };
  }, [isHovering]);

  // Navigation functions
  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full bg-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Compact Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="font-playfair text-xl font-semibold text-gray-900">
              Featured <span style={{ color: fabuniqoGold }}>Collections</span>
            </h3>
            <p className="font-poppins text-sm text-gray-600 mt-1">
              Shop our curated selections
            </p>
          </div>
          
          <div className="flex items-center gap-2">
            <button
              onClick={scrollLeft}
              className="p-2 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors"
            >
              <ChevronLeft className="w-4 h-4 text-gray-600" />
            </button>
            <button
              onClick={scrollRight}
              className="p-2 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors"
            >
              <ChevronRight className="w-4 h-4 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Compact Horizontal Slider */}
        <div 
          className="relative"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <div 
            ref={sliderRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide pb-4"
          >
            {compactCollections.map((collection) => (
              <div
                key={collection.id}
                className="flex-shrink-0 w-72 bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
              >
                {/* Image Container */}
                <div className="relative aspect-[3/2] overflow-hidden">
                  <img
                    src={collection.image}
                    alt={collection.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Discount Badge */}
                  {collection.discount && (
                    <div className="absolute top-3 left-3">
                      <span 
                        className="px-2 py-1 text-xs font-poppins font-bold text-white rounded"
                        style={{ backgroundColor: fabuniqoGold }}
                      >
                        {collection.discount}
                      </span>
                    </div>
                  )}
                  
                  {/* Items Count */}
                  <div className="absolute bottom-3 right-3">
                    <span className="px-2 py-1 bg-black/70 text-white text-xs font-poppins rounded">
                      {collection.items} items
                    </span>
                  </div>
                </div>
                
                {/* Compact Info */}
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-poppins text-xs text-gray-500 uppercase">
                      {collection.category}
                    </span>
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 text-yellow-400 fill-current" />
                      <span className="font-poppins text-xs">4.8</span>
                    </div>
                  </div>
                  
                  <h4 className="font-poppins text-sm font-semibold text-gray-900 mb-1 line-clamp-1">
                    {collection.title}
                  </h4>
                  
                  <div className="flex items-center justify-between">
                    <span className="font-poppins text-sm font-medium text-gray-900">
                      {collection.price}
                    </span>
                    
                    <button 
                      className="px-3 py-1.5 text-xs font-poppins font-medium rounded border border-[rgb(209,167,67)] text-[rgb(209,167,67)] hover:bg-[rgb(209,167,67)] hover:text-white transition-colors flex items-center gap-1"
                    >
                      <ShoppingBag className="w-3 h-3" />
                      Shop
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Auto-scroll Indicator */}
          <div className="mt-4 flex justify-center">
            <div className="flex items-center gap-1">
              <div className="w-1.5 h-1.5 bg-[rgb(209,167,67)] rounded-full animate-pulse"></div>
              <span className="font-poppins text-xs text-gray-500">
                Auto-scrolling
              </span>
            </div>
          </div>
        </div>

        {/* Compact Footer */}
        <div className="mt-8 pt-6 border-t border-gray-100">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="text-center">
                <div className="font-playfair text-lg font-bold text-gray-900">200+</div>
                <div className="font-poppins text-xs text-gray-600">Brands</div>
              </div>
              <div className="text-center">
                <div className="font-playfair text-lg font-bold text-gray-900">5K+</div>
                <div className="font-poppins text-xs text-gray-600">Products</div>
              </div>
              <div className="text-center">
                <div className="font-playfair text-lg font-bold text-gray-900">✓</div>
                <div className="font-poppins text-xs text-gray-600">Free Ship</div>
              </div>
            </div>
            
            <button className="px-5 py-2 text-sm font-poppins font-medium text-[rgb(209,167,67)] border border-[rgb(209,167,67)] rounded-full hover:bg-[rgb(209,167,67)] hover:text-white transition-colors">
              View All Collections
            </button>
          </div>
        </div>
      </div>

      {/* Hide scrollbar CSS */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default CompactFeaturedCollections;