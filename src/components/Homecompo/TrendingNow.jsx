// import React from 'react';
// import { TrendingUp, Hash } from 'lucide-react';

// const TrendingNow = () => {
//   const trends = [
//     { tag: '#MinimalistStyle', items: 245 },
//     { tag: '#SustainableFashion', items: 189 },
//     { tag: '#OversizedBlazers', items: 156 },
//     { tag: '#PastelPalette', items: 203 },
//     { tag: '#LeatherEverything', items: 178 },
//     { tag: '#EveningGlow', items: 134 },
//   ];

//   return (
//     <section className="py-12 bg-white">
//       <div className="max-w-7xl mx-auto px-4">
//         {/* Header */}
//         <div className="flex items-center gap-3 mb-8">
//           <div className="p-2 bg-[rgb(209,167,67)]/10 rounded-lg">
//             <TrendingUp className="w-6 h-6 text-[rgb(209,167,67)]" />
//           </div>
//           <div>
//             <h2 className="font-playfair text-2xl font-semibold text-gray-900">
//               Trending <span style={{ color: 'rgb(209,167,67)' }}>Now</span>
//             </h2>
//             <p className="font-poppins text-gray-600 text-sm">
//               Explore what's hot in fashion right now
//             </p>
//           </div>
//         </div>

//         {/* Trends Grid */}
//         <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
//           {trends.map((trend, index) => (
//             <div
//               key={index}
//               className="group relative p-6 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-200 hover:border-[rgb(209,167,67)] hover:shadow-md transition-all duration-300 cursor-pointer hover:-translate-y-1"
//             >
//               <div className="flex items-center justify-between">
//                 <div className="flex items-center gap-3">
//                   <div className="p-2 bg-white rounded-lg shadow-sm group-hover:shadow-md transition-shadow">
//                     <Hash className="w-4 h-4 text-[rgb(209,167,67)]" />
//                   </div>
//                   <div>
//                     <h3 className="font-poppins font-semibold text-gray-900 group-hover:text-[rgb(209,167,67)]">
//                       {trend.tag}
//                     </h3>
//                     <p className="font-poppins text-sm text-gray-500 mt-1">
//                       {trend.items} items
//                     </p>
//                   </div>
//                 </div>
                
//                 <div className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full group-hover:bg-[rgb(209,167,67)] group-hover:text-white transition-colors">
//                   Trending
//                 </div>
//               </div>
              
//               <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
//                 <div className="w-2 h-2 bg-[rgb(209,167,67)] rounded-full animate-pulse"></div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TrendingNow;















// import React from 'react';
// import { TrendingUp, Hash } from 'lucide-react';

// const TrendingNow = () => {
//   const trends = [
//     { tag: '#MinimalistStyle', items: 245 },
//     { tag: '#SustainableFashion', items: 189 },
//     { tag: '#OversizedBlazers', items: 156 },
//     { tag: '#PastelPalette', items: 203 },
//     { tag: '#LeatherEverything', items: 178 },
//     { tag: '#EveningGlow', items: 134 },
//   ];

//   return (
//     <section className="py-8 sm:py-10 md:py-12 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6">
//         {/* Header - Responsive spacing and sizing */}
//         <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-7 md:mb-8">
//           <div className="p-1.5 sm:p-2 bg-[rgb(209,167,67)]/10 rounded-lg">
//             <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-[rgb(209,167,67)]" />
//           </div>
//           <div>
//             <h2 className="font-main text-xl sm:text-2xl font-light text-gray-900">
//               Trending <span style={{ color: 'rgb(209,167,67)' }}>Now</span>
//             </h2>
//             <p className="font-main text-gray-600 text-xs sm:text-sm">
//               Explore what's hot in fashion right now
//             </p>
//           </div>
//         </div>

//         {/* Trends Grid - Responsive columns and spacing */}
//         <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
//           {trends.map((trend, index) => (
//             <div
//               key={index}
//               className="group relative p-4 sm:p-5 md:p-6 bg-gradient-to-br from-gray-50 to-white rounded-lg sm:rounded-xl border border-gray-200 hover:border-[rgb(209,167,67)] hover:shadow-md transition-all duration-300 cursor-pointer hover:-translate-y-0.5 sm:hover:-translate-y-1"
//             >
//               <div className="flex items-center justify-between">
//                 <div className="flex items-center gap-2 sm:gap-3">
//                   <div className="p-1.5 sm:p-2 bg-white rounded-lg shadow-sm group-hover:shadow-md transition-shadow">
//                     <Hash className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[rgb(209,167,67)]" />
//                   </div>
//                   <div className="min-w-0">
//                     <h3 className="font-semibold text-gray-900 text-sm sm:text-base group-hover:text-[rgb(209,167,67)] truncate">
//                       {trend.tag}
//                     </h3>
//                     <p className="text-xs sm:text-sm text-gray-500 mt-0.5 sm:mt-1">
//                       {trend.items} items
//                     </p>
//                   </div>
//                 </div>
                
//                 <div className="text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 bg-gray-100 text-gray-600 rounded-full group-hover:bg-[rgb(209,167,67)] group-hover:text-white transition-colors whitespace-nowrap ml-1 sm:ml-2">
//                   Trending
//                 </div>
//               </div>
              
//               <div className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 opacity-0 group-hover:opacity-100 transition-opacity">
//                 <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[rgb(209,167,67)] rounded-full animate-pulse"></div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TrendingNow;






// import React from 'react';
// import { TrendingUp, Hash } from 'lucide-react';

// const TrendingNow = () => {
//   const trends = [
//     { tag: '#DiamondElegance', items: 245 },
//     { tag: '#GoldJewelry', items: 189 },
//     { tag: '#MinimalistRings', items: 156 },
//     { tag: '#PearlCollection', items: 203 },
//     { tag: '#LuxuryBracelets', items: 178 },
//     { tag: '#BridalJewelry', items: 134 },
//   ];

//   return (
//     <section className="py-8 sm:py-10 md:py-12 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6">
//         {/* Header */}
//         <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-7 md:mb-8">
//           <div className="p-1.5 sm:p-2 bg-[rgb(209,167,67)]/10 rounded-lg">
//             <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-[rgb(209,167,67)]" />
//           </div>
//           <div>
//             <h2 className="font-main text-xl sm:text-2xl font-light text-gray-900">
//               Trending <span style={{ color: 'rgb(209,167,67)' }}>Now</span>
//             </h2>
//             <p className="font-main text-gray-600 text-xs sm:text-sm">
//               Explore what's trending in jewelry right now
//             </p>
//           </div>
//         </div>

//         {/* Trends Grid */}
//         <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
//           {trends.map((trend, index) => (
//             <div
//               key={index}
//               className="group relative p-4 sm:p-5 md:p-6 bg-gradient-to-br from-gray-50 to-white rounded-lg sm:rounded-xl border border-gray-200 hover:border-[rgb(209,167,67)] hover:shadow-md transition-all duration-300 cursor-pointer hover:-translate-y-0.5 sm:hover:-translate-y-1"
//             >
//               <div className="flex items-center justify-between">
//                 <div className="flex items-center gap-2 sm:gap-3">
//                   <div className="p-1.5 sm:p-2 bg-white rounded-lg shadow-sm group-hover:shadow-md transition-shadow">
//                     <Hash className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[rgb(209,167,67)]" />
//                   </div>
//                   <div className="min-w-0">
//                     <h3 className="font-semibold text-gray-900 text-sm sm:text-base group-hover:text-[rgb(209,167,67)] truncate">
//                       {trend.tag}
//                     </h3>
//                     <p className="text-xs sm:text-sm text-gray-500 mt-0.5 sm:mt-1">
//                       {trend.items} items
//                     </p>
//                   </div>
//                 </div>

//                 <div className="text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 bg-gray-100 text-gray-600 rounded-full group-hover:bg-[rgb(209,167,67)] group-hover:text-white transition-colors whitespace-nowrap ml-1 sm:ml-2">
//                   Trending
//                 </div>
//               </div>

//               <div className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 opacity-0 group-hover:opacity-100 transition-opacity">
//                 <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[rgb(209,167,67)] rounded-full animate-pulse"></div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TrendingNow;

























import React, { useState, useEffect } from 'react';
import { TrendingUp, Sparkles, Eye, ArrowRight, Star, Flame } from 'lucide-react';

const TrendingNow = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Real jewelry images from Unsplash
  const trends = [
    { 
      tag: '#DiamondElegance', 
      items: 245,
      image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=400&h=400&fit=crop&auto=format',
      iconImage: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=100&h=100&fit=crop&auto=format',
      description: 'Stunning diamond pieces',
      growth: '+45%',
      jewelry: 'Diamond',
      color: 'from-blue-400/20 to-blue-600/20'
    },
    { 
      tag: '#GoldJewelry', 
      items: 189,
      image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=400&fit=crop&auto=format',
      iconImage: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=100&h=100&fit=crop&auto=format',
      description: 'Traditional gold collection',
      growth: '+32%',
      jewelry: 'Gold',
      color: 'from-amber-400/20 to-yellow-600/20'
    },
    { 
      tag: '#MinimalistRings', 
      items: 156,
      image: 'https://images.unsplash.com/photo-1608042314453-ae338d80c427?w=400&h=400&fit=crop&auto=format',
      iconImage: 'https://images.unsplash.com/photo-1608042314453-ae338d80c427?w=100&h=100&fit=crop&auto=format',
      description: 'Modern minimalist designs',
      growth: '+28%',
      jewelry: 'Platinum',
      color: 'from-purple-400/20 to-purple-600/20'
    },
    { 
      tag: '#PearlCollection', 
      items: 203,
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop&auto=format',
      iconImage: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=100&h=100&fit=crop&auto=format',
      description: 'Elegant pearl jewelry',
      growth: '+56%',
      jewelry: 'Pearl',
      color: 'from-pink-400/20 to-rose-500/20'
    },
    { 
      tag: '#LuxuryBracelets', 
      items: 178,
      image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=400&fit=crop&auto=format',
      iconImage: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=100&h=100&fit=crop&auto=format',
      description: 'Exquisite bracelet designs',
      growth: '+41%',
      jewelry: 'Gemstone',
      color: 'from-emerald-400/20 to-teal-500/20'
    },
    { 
      tag: '#BridalJewelry', 
      items: 134,
      image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=400&h=400&fit=crop&auto=format',
      iconImage: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=100&h=100&fit=crop&auto=format',
      description: 'Wedding collection',
      growth: '+67%',
      jewelry: 'Bridal',
      color: 'from-red-400/20 to-rose-600/20'
    },
  ];

  // Mini jewelry icons for the bottom section
  const jewelryIcons = [
    'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=50&h=50&fit=crop&auto=format',
    'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=50&h=50&fit=crop&auto=format',
    'https://images.unsplash.com/photo-1608042314453-ae338d80c427?w=50&h=50&fit=crop&auto=format',
    'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=50&h=50&fit=crop&auto=format',
    'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=50&h=50&fit=crop&auto=format',
  ];

  return (
    <section className="relative py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white via-[rgb(209,167,67)]/5 to-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[rgb(209,167,67)]/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[rgb(209,167,67)]/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {/* Floating jewelry pieces as sparkles */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-6 h-6 rounded-full opacity-10"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              backgroundImage: `url(${jewelryIcons[i % jewelryIcons.length]})`,
              backgroundSize: 'cover',
              animation: `float ${8 + Math.random() * 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6 relative z-10">
        {/* Enhanced Header with Animation */}
        <div className={`flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-10 md:mb-12 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-0">
            <div className="relative">
              <div className="p-2 sm:p-3 bg-gradient-to-br from-[rgb(209,167,67)] to-[rgb(163,126,42)] rounded-xl shadow-lg shadow-[rgb(209,167,67)]/30 animate-soft-glow">
                <TrendingUp className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-[rgb(209,167,67)] rounded-full animate-ping"></div>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h2 className="font-main text-2xl sm:text-3xl md:text-4xl font-light text-gray-900">
                  Trending <span className="font-semibold bg-gradient-to-r from-[rgb(209,167,67)] to-[rgb(163,126,42)] bg-clip-text text-transparent">Now</span>
                </h2>
                <div className="w-6 h-6 rounded-full overflow-hidden border-2 border-[rgb(209,167,67)]">
                  <img src={jewelryIcons[0]} alt="" className="w-full h-full object-cover" />
                </div>
              </div>
              <p className="text-gray-500 text-xs sm:text-sm flex items-center gap-2">
                <Sparkles className="w-3 h-3 text-[rgb(209,167,67)]" />
                Explore what's trending in jewelry right now
                <Sparkles className="w-3 h-3 text-[rgb(209,167,67)]" />
              </p>
            </div>
          </div>
          
          {/* View All Button */}
          <button className="group flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-[rgb(209,167,67)] transition-colors">
            View All Trends
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Trends Grid with Real Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {trends.map((trend, index) => (
            <div
              key={index}
              className={`group relative transform transition-all duration-700 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative bg-white rounded-xl sm:rounded-2xl overflow-hidden border border-gray-100 hover:border-[rgb(209,167,67)]/30 hover:shadow-2xl hover:shadow-[rgb(209,167,67)]/10 transition-all duration-500 group-hover:-translate-y-1">
                
                {/* Image Container */}
                <div className="relative h-40 sm:h-44 md:h-48 overflow-hidden">
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${trend.color} opacity-60 group-hover:opacity-40 transition-opacity duration-500`}></div>
                  
                  {/* Real Jewelry Image */}
                  <img 
                    src={trend.image}
                    alt={trend.tag}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Trending Badge with Animation */}
                  <div className="absolute top-3 right-3">
                    <div className="relative">
                      <div className="absolute inset-0 bg-[rgb(209,167,67)] rounded-full blur-md opacity-50 group-hover:opacity-75 transition-opacity animate-pulse"></div>
                      <div className="relative px-3 py-1.5 bg-gradient-to-r from-[rgb(209,167,67)] to-[rgb(163,126,42)] rounded-full text-white text-xs font-bold flex items-center gap-1 shadow-lg">
                        <Flame className="w-3 h-3 animate-pulse" />
                        Trending
                      </div>
                    </div>
                  </div>
                  
                  {/* Item Count Badge */}
                  <div className="absolute bottom-3 left-3">
                    <div className="px-2 py-1 bg-black/50 backdrop-blur-sm rounded-lg text-white text-xs border border-white/20">
                      {trend.items} items
                    </div>
                  </div>
                  
                  {/* Quick View Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <button className="px-4 py-2 bg-white rounded-full text-xs font-medium text-gray-900 shadow-xl flex items-center gap-2 hover:bg-[rgb(209,167,67)] hover:text-white transition-colors">
                        <Eye className="w-3 h-3" />
                        Quick View
                      </button>
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-4 sm:p-5">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2">
                      {/* Real Image Icon instead of emoji */}
                      <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-[rgb(209,167,67)]/30 shadow-md">
                        <img 
                          src={trend.iconImage} 
                          alt={trend.jewelry}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 text-sm sm:text-base mb-1 group-hover:text-[rgb(209,167,67)] transition-colors">
                          {trend.tag}
                        </h3>
                        <p className="text-xs text-gray-500">
                          {trend.description}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 px-2 py-1 bg-green-50 rounded-full">
                      <Star className="w-3 h-3 text-green-600 fill-current" />
                      <span className="text-xs font-medium text-green-600">{trend.growth}</span>
                    </div>
                  </div>
                  
                  {/* Jewelry Type and Stats */}
                  <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100">
                    <div className="flex items-center gap-2">
                      {/* Small jewelry image instead of text */}
                      <div className="w-5 h-5 rounded-full overflow-hidden">
                        <img 
                          src={trend.iconImage} 
                          alt={trend.jewelry}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <span className="text-xs text-gray-500">{trend.jewelry}</span>
                    </div>
                    
                    {/* Trending Indicator with real images */}
                    <div className="flex items-center gap-2">
                      <div className="flex -space-x-2">
                        {[...Array(3)].map((_, i) => (
                          <div
                            key={i}
                            className="w-6 h-6 rounded-full border-2 border-white overflow-hidden transform hover:scale-110 transition-transform"
                            style={{ animationDelay: `${i * 200}ms` }}
                          >
                            <img 
                              src={jewelryIcons[(index + i) % jewelryIcons.length]} 
                              alt=""
                              className="w-full h-full object-cover"
                            />
                          </div>
                        ))}
                      </div>
                      <span className="text-xs text-gray-400">active</span>
                    </div>
                  </div>
                  
                  {/* Hover Action */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0">
                    <div className="w-8 h-8 bg-[rgb(209,167,67)] rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:bg-[rgb(163,126,42)] transition-colors">
                      <ArrowRight className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>
                
                {/* Animated Border */}
                <div className="absolute inset-0 rounded-xl sm:rounded-2xl border-2 border-transparent group-hover:border-[rgb(209,167,67)]/20 transition-all duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats with Real Jewelry Images */}
        <div className={`mt-10 sm:mt-12 md:mt-16 flex flex-wrap justify-center items-center gap-8 sm:gap-12 md:gap-16 transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {[
            { label: 'Active Trends', value: '156', image: jewelryIcons[0] },
            { label: 'Daily Views', value: '45K+', image: jewelryIcons[1] },
            { label: 'New Items', value: '1.2K', image: jewelryIcons[2] },
          ].map((stat, i) => (
            <div key={i} className="text-center group cursor-pointer">
              <div className="relative mb-2">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden border-2 border-[rgb(209,167,67)]/30 mx-auto transform group-hover:scale-110 transition-all duration-300 group-hover:border-[rgb(209,167,67)] group-hover:shadow-lg group-hover:shadow-[rgb(209,167,67)]/30">
                  <img 
                    src={stat.image} 
                    alt={stat.label}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-[rgb(209,167,67)] rounded-full animate-ping"></div>
              </div>
              <div className="font-bold text-gray-900 text-sm sm:text-base group-hover:text-[rgb(209,167,67)] transition-colors">
                {stat.value}
              </div>
              <div className="text-xs text-gray-500">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Real Jewelry Image Strip at Bottom */}
        <div className={`mt-8 flex justify-center gap-2 opacity-50 hover:opacity-100 transition-opacity duration-500 ${isVisible ? 'opacity-50' : 'opacity-0'}`}>
          {jewelryIcons.map((icon, i) => (
            <div key={i} className="w-8 h-8 rounded-full overflow-hidden border border-[rgb(209,167,67)]/30">
              <img src={icon} alt="" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0) rotate(0deg);
            opacity: 0.1;
          }
          25% {
            transform: translateY(-30px) translateX(15px) rotate(10deg);
            opacity: 0.2;
          }
          50% {
            transform: translateY(-50px) translateX(-15px) rotate(-10deg);
            opacity: 0.15;
          }
          75% {
            transform: translateY(-25px) translateX(10px) rotate(5deg);
            opacity: 0.2;
          }
        }

        @keyframes softGlow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(209, 167, 67, 0.3);
          }
          50% {
            box-shadow: 0 0 40px rgba(209, 167, 67, 0.6);
          }
        }

        .animate-soft-glow {
          animation: softGlow 2s ease-in-out infinite;
        }

        .delay-1000 {
          animation-delay: 1000ms;
        }
      `}</style>
    </section>
  );
};

export default TrendingNow;