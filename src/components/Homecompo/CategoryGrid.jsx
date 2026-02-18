import React from 'react';

const CategoryGrid = () => {
  const categories = [
    { 
      name: 'New Arrivals', 
      img: 'https://images-static.nykaa.com/uploads/444b85c4-494b-4ced-8f3d-bc6d8cab1654.jpg',
    },
    { 
      name: 'Formal Wear', 
      img: 'https://images-static.nykaa.com/uploads/54022289-98e7-4221-9f64-a8f25adeeb9f.jpg',
    },
    { 
      name: 'Casual Wear', 
      img: 'https://images-static.nykaa.com/uploads/72968909-a083-4636-af78-e8001d61e5b4.jpg',
    },
    { 
      name: 'Accessories', 
      img: 'http://images-static.nykaa.com/uploads/b1c937c9-b6ae-4a39-9699-221798636743.jpg',
    },
    { 
      name: 'Luxury', 
      img: 'https://images-static.nykaa.com/uploads/a5103c7a-28d0-48fb-9b84-113bfbae39f2.jpg',
    },
    { 
      name: 'Best Deals', 
      img: 'https://images-static.nykaa.com/uploads/5e5a33b6-aba6-4fe2-aea1-357460319ba3.jpg',
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header */}
        <div className="mb-16 text-center">
          <span className="text-[rgb(209,167,67)] text-[10px] tracking-[0.6em] uppercase font-bold block mb-3">Explore Collections</span>
          <h2 className="font-playfair text-5xl font-bold text-gray-900 tracking-tight">The Archive</h2>
        </div>

        {/* Full-Space Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="flex flex-col">
                
                {/* Image Container - No Padding, Full Space */}
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-gray-100 mb-5 border border-gray-100 shadow-sm transition-all duration-700 group-hover:shadow-2xl group-hover:shadow-[rgb(209,167,67)]/20">
                  <img 
                    src={category.img} 
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-1000 ease-out"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = `https://via.placeholder.com/500x625/f3f3f3/999999?text=${category.name}`;
                    }}
                  />
                  
                  {/* Premium Vignette Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Title Section */}
                <div className="px-1 overflow-hidden">
                  <h3 className="font-poppins text-xs font-bold text-gray-800 tracking-[0.2em] uppercase transition-all duration-500 group-hover:text-[rgb(209,167,67)] group-hover:translate-x-1">
                    {category.name}
                  </h3>
                  <div className="h-[2px] w-8 bg-[rgb(209,167,67)] mt-2 transition-all duration-500 group-hover:w-full" />
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Minimalist Stat Bar */}
        {/* <div className="mt-28 flex flex-wrap justify-between items-center border-t border-gray-100 pt-12 gap-8">
          {[
            { l: 'Curated Brands', v: '200+' },
            { l: 'Exclusive Pieces', v: '5K+' },
            { l: 'Concierge Service', v: '24/7' },
            { l: 'Verified Quality', v: '100%' }
          ].map((s, i) => (
            <div key={i} className="flex items-center gap-4">
              <span className="font-playfair text-3xl font-bold text-gray-900">{s.v}</span>
              <span className="text-[9px] leading-tight font-bold text-gray-400 uppercase tracking-widest w-20">{s.l}</span>
            </div>
          ))}
        </div> */}


        <div className="mt-16 sm:mt-20 md:mt-24 lg:mt-28 border-t border-gray-100 pt-8 sm:pt-10 md:pt-12">
  <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-4 md:gap-6 lg:gap-8">
    {[
      { l: 'Curated Brands', v: '200+' },
      { l: 'Exclusive Pieces', v: '5K+' },
      { l: 'Concierge Service', v: '24/7' },
      { l: 'Verified Quality', v: '100%' }
    ].map((s, i) => (
      <div 
        key={i} 
        className="flex flex-col items-center text-center sm:text-left sm:items-start"
      >
        <span className="font-playfair text-2.5xl sm:text-3xl md:text-3xl lg:text-3.5xl font-bold text-gray-900 mb-1 sm:mb-2">
          {s.v}
        </span>
        <span className="text-[10px] sm:text-[9px] md:text-[10px] lg:text-[11px] leading-tight font-bold text-gray-400 uppercase tracking-wider sm:tracking-widest px-2 sm:px-0">
          {s.l}
        </span>
      </div>
    ))}
  </div>
</div>
      </div>
    </section>
  );
};

export default CategoryGrid;















