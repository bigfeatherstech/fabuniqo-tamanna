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















import React from 'react';
import { TrendingUp, Hash } from 'lucide-react';

const TrendingNow = () => {
  const trends = [
    { tag: '#MinimalistStyle', items: 245 },
    { tag: '#SustainableFashion', items: 189 },
    { tag: '#OversizedBlazers', items: 156 },
    { tag: '#PastelPalette', items: 203 },
    { tag: '#LeatherEverything', items: 178 },
    { tag: '#EveningGlow', items: 134 },
  ];

  return (
    <section className="py-8 sm:py-10 md:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6">
        {/* Header - Responsive spacing and sizing */}
        <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-7 md:mb-8">
          <div className="p-1.5 sm:p-2 bg-[rgb(209,167,67)]/10 rounded-lg">
            <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-[rgb(209,167,67)]" />
          </div>
          <div>
            <h2 className="font-playfair text-xl sm:text-2xl font-semibold text-gray-900">
              Trending <span style={{ color: 'rgb(209,167,67)' }}>Now</span>
            </h2>
            <p className="font-poppins text-gray-600 text-xs sm:text-sm">
              Explore what's hot in fashion right now
            </p>
          </div>
        </div>

        {/* Trends Grid - Responsive columns and spacing */}
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
          {trends.map((trend, index) => (
            <div
              key={index}
              className="group relative p-4 sm:p-5 md:p-6 bg-gradient-to-br from-gray-50 to-white rounded-lg sm:rounded-xl border border-gray-200 hover:border-[rgb(209,167,67)] hover:shadow-md transition-all duration-300 cursor-pointer hover:-translate-y-0.5 sm:hover:-translate-y-1"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="p-1.5 sm:p-2 bg-white rounded-lg shadow-sm group-hover:shadow-md transition-shadow">
                    <Hash className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[rgb(209,167,67)]" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-poppins font-semibold text-gray-900 text-sm sm:text-base group-hover:text-[rgb(209,167,67)] truncate">
                      {trend.tag}
                    </h3>
                    <p className="font-poppins text-xs sm:text-sm text-gray-500 mt-0.5 sm:mt-1">
                      {trend.items} items
                    </p>
                  </div>
                </div>
                
                <div className="text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 bg-gray-100 text-gray-600 rounded-full group-hover:bg-[rgb(209,167,67)] group-hover:text-white transition-colors whitespace-nowrap ml-1 sm:ml-2">
                  Trending
                </div>
              </div>
              
              <div className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[rgb(209,167,67)] rounded-full animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingNow;