import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Heart, ShoppingBag, Eye, Star, Zap } from 'lucide-react';

const NewArrivals = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const sliderRef = useRef(null);
  const autoSlideRef = useRef(null);
  
  // Your brand colors
  const fabuniqoGold = "rgb(209,167,67)";

  // New Arrivals Products
  const newArrivals = [
    { id: 1, title: "Silk Blazer", category: "Men", price: 349.99, discount: 22, rating: 4.8, image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=300&auto=format&fit=crop" },
    { id: 2, title: "Knit Dress", category: "Women", price: 299.99, discount: 25, rating: 4.9, image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=300&auto=format&fit=crop" },
    { id: 3, title: "Chelsea Boots", category: "Men", price: 289.99, discount: 19, rating: 4.7, image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=300&auto=format&fit=crop" },
    { id: 4, title: "Evening Gown", category: "Women", price: 599.99, discount: 25, rating: 4.9, image: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=300&auto=format&fit=crop" },
    { id: 5, title: "Denim Jacket", category: "Unisex", price: 229.99, discount: 21, rating: 4.6, image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=300&auto=format&fit=crop" },
    { id: 6, title: "Leather Bag", category: "Accessories", price: 459.99, discount: 21, rating: 4.8, image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=300&auto=format&fit=crop" },
    { id: 7, title: "Wool Trousers", category: "Men", price: 189.99, discount: 21, rating: 4.5, image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=300&auto=format&fit=crop" },
    { id: 8, title: "Sunglasses", category: "Accessories", price: 179.99, discount: 22, rating: 4.7, image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=300&auto=format&fit=crop" },
    { id: 9, title: "Cashmere Sweater", category: "Women", price: 199.99, discount: 20, rating: 4.8, image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=300&auto=format&fit=crop" },
    { id: 10, title: "Leather Wallet", category: "Accessories", price: 89.99, discount: 15, rating: 4.6, image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=300&auto=format&fit=crop" },
  ];

  // Format price
  const formatPrice = (price) => {
    return `$${price.toFixed(2)}`;
  };

  // Auto slide effect - infinite scroll
  useEffect(() => {
    if (!isHovering && !isAnimating && sliderRef.current) {
      autoSlideRef.current = setInterval(() => {
        setIsAnimating(true);
        
        const scrollAmount = 280; // Card width + gap
        const maxScroll = sliderRef.current.scrollWidth - sliderRef.current.clientWidth;
        
        if (sliderRef.current.scrollLeft >= maxScroll - 10) {
          // Reset to start for infinite effect
          sliderRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
        
        setTimeout(() => setIsAnimating(false), 800);
      }, 3000);
    }

    return () => {
      if (autoSlideRef.current) {
        clearInterval(autoSlideRef.current);
      }
    };
  }, [isHovering, isAnimating]);

  // Manual navigation
  const scrollLeft = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    const scrollAmount = 280;
    sliderRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    setTimeout(() => setIsAnimating(false), 800);
  };

  const scrollRight = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    const scrollAmount = 280;
    sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    setTimeout(() => setIsAnimating(false), 800);
  };

  return (
    <section className="relative py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[rgb(209,167,67)]/10 to-transparent rounded-full border border-[rgb(209,167,67)]/20 mb-4">
            <Zap className="w-4 h-4 text-[rgb(209,167,67)] animate-pulse" />
            <span className="font-poppins text-xs font-medium text-[rgb(209,167,67)] tracking-wider">
              NEW ARRIVALS
            </span>
          </div>
          
          <h2 className="font-playfair text-2xl md:text-3xl font-semibold text-[#0e0e0e] mb-3">
            Latest <span style={{ color: fabuniqoGold }}>Collections</span>
          </h2>
          
          <p className="font-poppins text-sm text-gray-600">
            Fresh styles just added • Auto-scrolling
          </p>
        </div>

        {/* Slider Container */}
        <div 
          className="relative"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {/* Navigation Buttons */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 z-10 w-8 h-8 bg-white border border-gray-200 rounded-full shadow-md flex items-center justify-center hover:bg-gray-50 hover:scale-110 transition-all duration-200 disabled:opacity-50"
            disabled={isAnimating}
          >
            <ChevronLeft className="w-4 h-4 text-gray-600" />
          </button>

          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 z-10 w-8 h-8 bg-white border border-gray-200 rounded-full shadow-md flex items-center justify-center hover:bg-gray-50 hover:scale-110 transition-all duration-200 disabled:opacity-50"
            disabled={isAnimating}
          >
            <ChevronRight className="w-4 h-4 text-gray-600" />
          </button>

          {/* Horizontal Slider */}
          <div 
            ref={sliderRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
            style={{ 
              scrollBehavior: 'smooth',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
          >
            {/* Double the products for infinite scroll effect */}
            {[...newArrivals, ...newArrivals].map((product, index) => (
              <div
                key={`${product.id}-${index}`}
                className="flex-shrink-0 w-64 bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                {/* Product Image */}
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Discount Badge */}
                  {product.discount && (
                    <div className="absolute top-3 left-3">
                      <span 
                        className="px-3 py-1 text-xs font-poppins font-bold text-white rounded"
                        style={{ backgroundColor: fabuniqoGold }}
                      >
                        -{product.discount}%
                      </span>
                    </div>
                  )}
                  
                  {/* Quick Actions */}
                  <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <button className="p-2 bg-white rounded-full hover:bg-[rgb(209,167,67)] hover:text-white transition-colors">
                      <Heart className="w-3 h-3" />
                    </button>
                    <button className="p-2 bg-white rounded-full hover:bg-[rgb(209,167,67)] hover:text-white transition-colors">
                      <Eye className="w-3 h-3" />
                    </button>
                  </div>
                </div>
                
                {/* Product Info */}
                <div className="p-4">
                  <div className="mb-2">
                    <span className="font-poppins text-xs text-gray-500 uppercase">
                      {product.category}
                    </span>
                  </div>
                  
                  <h3 className="font-poppins text-sm font-semibold text-[#0e0e0e] line-clamp-1 mb-2">
                    {product.title}
                  </h3>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="font-playfair text-lg font-bold text-[#0e0e0e]">
                        {formatPrice(product.price)}
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 text-yellow-400 fill-current" />
                      <span className="font-poppins text-xs font-medium">{product.rating}</span>
                    </div>
                  </div>
                  
                  {/* Add to Cart Button */}
                  <button 
                    className="w-full mt-3 py-2 text-xs font-poppins font-semibold rounded bg-[rgb(209,167,67)] text-white hover:bg-[rgb(209,167,67)]/90 transition-colors duration-200 flex items-center justify-center gap-2"
                    style={{ backgroundColor: fabuniqoGold }}
                  >
                    <ShoppingBag className="w-3 h-3" />
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
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

export default NewArrivals;