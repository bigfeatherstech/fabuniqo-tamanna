import React from 'react';
import { ArrowUpRight, Instagram, Facebook, Youtube } from 'lucide-react';

const Footer = () => {
  const fabniquoGold = "rgb(209,167,67)";

  return (
    <footer className=" bottom-0 z-[-10] w-full bg-[#080808] text-white border-t border-white/5 selection:bg-[#D1A743] selection:text-black">
      <div className="max-w-[1800px] mx-auto px-8 lg:px-16">
        
        {/* LARGE BRAND SIGNATURE SECTION */}
        <div className="flex flex-col mb-24">
          <div className="relative group w-full pt-20">
            
            <svg viewBox="0 0 1000 250" className="w-full h-auto select-none pointer-events-none overflow-visible">
              <defs>
                {/* 1. THE MASK */}
                <mask id="text-mask">
                  <text x="50%" y="70%" textAnchor="middle" className="font-serif font-black text-[150px] tracking-tighter fill-white">
                    FABUNIQO
                  </text>
                </mask>

                {/* 2. GLITTER EFFECT (Fractal Noise) */}
                <filter id="glitter">
                  <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" seed="5">
                    <animate attributeName="seed" values="1;50;1" dur="10s" repeatCount="indefinite" />
                  </feTurbulence>
                  <feComposite operator="in" in2="SourceGraphic" />
                  <feColorMatrix type="matrix" values="0 0 0 0 1   0 0 0 0 0.8   0 0 0 0 0.4  0 0 0 1 0" />
                </filter>

                {/* 3. WAVY LIQUID FILTER */}
                <filter id="water-waves">
                  <feTurbulence type="turbulence" baseFrequency="0.01 0.05" numOctaves="2" result="wave">
                    <animate attributeName="baseFrequency" dur="4s" values="0.01 0.05;0.012 0.07;0.01 0.05" repeatCount="indefinite" />
                  </feTurbulence>
                  <feDisplacementMap in="SourceGraphic" in2="wave" scale="15" />
                </filter>

                {/* 4. THE WAVE PATH */}
                <path id="complexWave" d="M 0 100 C 250 50 400 150 500 100 C 600 50 850 150 1000 100 V 400 H 0 Z">
                  <animate 
                    attributeName="d" 
                    dur="6s" 
                    repeatCount="indefinite"
                    values="
                      M 0 100 C 250 50 400 150 500 100 C 600 50 850 150 1000 100 V 400 H 0 Z;
                      M 0 100 C 200 150 350 50 500 100 C 650 150 800 50 1000 100 V 400 H 0 Z;
                      M 0 100 C 250 50 400 150 500 100 C 600 50 850 150 1000 100 V 400 H 0 Z" 
                  />
                </path>
              </defs>

              {/* GHOST VESSEL */}
              <text x="50%" y="70%" textAnchor="middle" 
                className="font-serif font-black text-[150px] tracking-tighter fill-white/[0.04]">
                FABUNIQO
              </text>

              {/* LIQUID FILL WITH GLITTER */}
              <g mask="url(#text-mask)">
                <g filter="url(#water-waves)">
                  <use href="#complexWave" fill={fabniquoGold}>
                    {/* FILL CYCLE: Rise (8s), Pause Full (2s), Reset (0s) */}
                    <animateTransform 
                      attributeName="transform" 
                      type="translate" 
                      values="0 250; 0 -100; 0 -100; 0 250" 
                      keyTimes="0; 0.7; 0.9; 1"
                      dur="12s" 
                      repeatCount="indefinite"
                    />
                  </use>
                </g>
                
                {/* GLITTER OVERLAY */}
                <rect width="1000" height="250" filter="url(#glitter)" opacity="0.4" pointerEvents="none">
                    <animateTransform 
                      attributeName="transform" 
                      type="translate" 
                      values="0 250; 0 -100; 0 -100; 0 250" 
                      keyTimes="0; 0.7; 0.9; 1"
                      dur="12s" 
                      repeatCount="indefinite"
                    />
                </rect>
              </g>
            </svg>

            {/* DESCRIPTION & NEWSLETTER */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-12 items-end">
              <p className="text-xl font-light max-w-md text-gray-500 leading-relaxed">
                Redefining the landscape of <span className="text-white italic">Indian Luxury</span> through curated craft and modern silhouettes.
              </p>

              <div className="flex flex-col items-start lg:items-end">
                <div className="w-full max-w-md">
                  <p className="text-[10px] tracking-[0.4em] uppercase text-gray-500 mb-4">Newsletter Concierge</p>
                  <div className="relative w-full border-b border-white/20 pb-2 group/input">
                    <input 
                      type="text" 
                      placeholder="Enter your email for the inner circle" 
                      className="bg-transparent w-full outline-none text-xl font-light placeholder:text-gray-700 focus:placeholder:text-gray-500 transition-all"
                    />
                    <button className="absolute right-0 bottom-3 hover:scale-110 transition-transform">
                      <ArrowUpRight size={24} style={{ color: fabniquoGold }} />
                    </button>
                    <div className="absolute bottom-0 left-0 h-[1px] bg-[#D1A743] w-0 group-hover/input:w-full transition-all duration-700"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* NAVIGATION LINKS */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 pb-20 border-b border-white/5">
          <div className="space-y-6">
            <h4 className="text-[10px] tracking-[0.3em] uppercase text-gray-500">The Collections</h4>
            <ul className="space-y-3 text-sm font-light">
              <li><a href="#" className="hover:pl-2 transition-all duration-300 hover:text-[#D1A743]">Hidden Gems</a></li>
              <li><a href="#" className="hover:pl-2 transition-all duration-300 hover:text-[#D1A743]">Traditional Pret</a></li>
              <li><a href="#" className="hover:pl-2 transition-all duration-300 hover:text-[#D1A743]">Modern Ethnic</a></li>
              <li><a href="#" className="hover:pl-2 transition-all duration-300 hover:text-[#D1A743]">Accessories</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-[10px] tracking-[0.3em] uppercase text-gray-500">Assistance</h4>
            <ul className="space-y-3 text-sm font-light">
              <li><a href="#" className="hover:text-white transition-colors">Shipping & Concierge</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Returns Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Size Guide</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Payment Security</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-[10px] tracking-[0.3em] uppercase text-gray-500">Corporate</h4>
            <ul className="space-y-3 text-sm font-light">
              <li><a href="#" className="hover:text-white transition-colors">The Brand Story</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Press & Editorial</a></li>
            </ul>
          </div>

          {/* Section 4: Social (Interactive Hover) */}
          <div className="space-y-6">
            <h4 className="text-[10px] tracking-[0.3em] uppercase text-gray-500">Connect</h4>
            <div className="flex gap-6">
              {[Instagram, Facebook, Youtube].map((Icon, idx) => (
                <a key={idx} href="#" className="relative p-2 group overflow-hidden border border-white/10 rounded-full hover:border-[#D1A743]/50 transition-colors duration-500">
                  <Icon size={18} className="relative z-10 text-gray-400 group-hover:text-white transition-colors duration-300" />
                  <span className="absolute inset-0 bg-[#D1A743] translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                </a>
              ))}
            </div>
          </div>
          
          <div className="lg:text-right space-y-2">
            <p className="text-[10px] tracking-[0.3em] uppercase text-gray-500 mb-6">Flagship Atelier</p>
            <p className="text-xs font-light leading-relaxed text-gray-400">
              Chanakyapuri, New Delhi<br />
              India, 110021
            </p>
          </div>
        </div>

        {/* COPYRIGHT BAR */}
        <div className="pt-12 flex flex-col md:flex-row justify-between items-center text-[9px] tracking-[0.4em] text-gray-600 uppercase">
          <p>© 2026 Fabniquo Retail. All Rights Reserved.</p>
          <div className="flex gap-10 mt-6 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// import React from 'react';
// import { ArrowUpRight, Instagram, Facebook, Youtube } from 'lucide-react';

// const Footer = () => {
//   const fabniquoGold = "rgb(209,167,67)";

//   return (
//     /* THE REVEAL TRICK:
//        - sticky bottom-0: Pins the footer to the viewport bottom.
//        - z-[-10]: Puts it behind the main content.
//        - h-[auto]: Allows content to define height.
//     */
//     <footer className="sticky bottom-0 z-[-10] w-full bg-[#080808] text-white pt-24 pb-12 border-t border-white/5 selection:bg-[#D1A743] selection:text-black">
//       <div className="max-w-[1600px] mx-auto px-8 lg:px-16">
        
//         {/* LARGE BRAND SIGNATURE SECTION */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-24 items-end">
//           <div>
//             <h1 className="text-[12vw] lg:text-[10vw] font-serif leading-[0.8] tracking-tighter opacity-10 select-none">
//               FABNIQUO
//             </h1>
//             <p className="mt-8 text-lg font-light max-w-sm text-gray-400 leading-relaxed">
//               Redefining the landscape of <span className="text-white italic">Indian Luxury</span> through curated craft and modern silhouettes.
//             </p>
//           </div>

//           <div className="flex flex-col items-start lg:items-end">
//             <div className="w-full max-w-md">
//               <p className="text-[10px] tracking-[0.4em] uppercase text-gray-500 mb-4">Newsletter Concierge</p>
//               <div className="relative w-full border-b border-white/20 pb-2 group">
//                 <input 
//                   type="text" 
//                   placeholder="Enter your email for the inner circle" 
//                   className="bg-transparent w-full outline-none text-xl font-light placeholder:text-gray-700 focus:placeholder:text-gray-500 transition-all"
//                 />
//                 <button className="absolute right-0 bottom-3 hover:scale-110 transition-transform">
//                   <ArrowUpRight size={24} style={{ color: fabniquoGold }} />
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* REFINED NAVIGATION GRID */}
//         <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 pb-20 border-b border-white/5">
//           {/* Section 1 */}
//           <div className="space-y-6">
//             <h4 className="text-[10px] tracking-[0.3em] uppercase text-gray-500">The Collections</h4>
//             <ul className="space-y-3 text-sm font-light">
//               <li><a href="#" className="hover:pl-2 transition-all duration-300 hover:text-[#D1A743]">Hidden Gems</a></li>
//               <li><a href="#" className="hover:pl-2 transition-all duration-300 hover:text-[#D1A743]">Traditional Pret</a></li>
//               <li><a href="#" className="hover:pl-2 transition-all duration-300 hover:text-[#D1A743]">Modern Ethnic</a></li>
//               <li><a href="#" className="hover:pl-2 transition-all duration-300 hover:text-[#D1A743]">Accessories</a></li>
//             </ul>
//           </div>

//           {/* Section 2 */}
//           <div className="space-y-6">
//             <h4 className="text-[10px] tracking-[0.3em] uppercase text-gray-500">Assistance</h4>
//             <ul className="space-y-3 text-sm font-light">
//               <li><a href="#" className="hover:text-white transition-colors">Shipping & Concierge</a></li>
//               <li><a href="#" className="hover:text-white transition-colors">Returns Policy</a></li>
//               <li><a href="#" className="hover:text-white transition-colors">Size Guide</a></li>
//               <li><a href="#" className="hover:text-white transition-colors">Payment Security</a></li>
//             </ul>
//           </div>

//           {/* Section 3 */}
//           <div className="space-y-6">
//             <h4 className="text-[10px] tracking-[0.3em] uppercase text-gray-500">Corporate</h4>
//             <ul className="space-y-3 text-sm font-light">
//               <li><a href="#" className="hover:text-white transition-colors">The Brand Story</a></li>
//               <li><a href="#" className="hover:text-white transition-colors">Sustainability</a></li>
//               <li><a href="#" className="hover:text-white transition-colors">Press & Editorial</a></li>
//             </ul>
//           </div>

//           {/* Section 4: Social */}
//           <div className="space-y-6">
//             <h4 className="text-[10px] tracking-[0.3em] uppercase text-gray-500">Connect</h4>
//             <div className="flex gap-6">
//               {[Instagram, Facebook, Youtube].map((Icon, idx) => (
//                 <a key={idx} href="#" className="relative p-2 group overflow-hidden border border-white/10 rounded-full hover:border-[#D1A743]/50 transition-colors duration-500">
//                   <Icon size={18} className="relative z-10 text-gray-400 group-hover:text-white transition-colors duration-300" />
//                   <span className="absolute inset-0 bg-[#D1A743] translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
//                 </a>
//               ))}
//             </div>
//           </div>
          
//           {/* Section 5: Address */}
//           <div className="lg:text-right space-y-2">
//             <p className="text-[10px] tracking-[0.3em] uppercase text-gray-500 mb-6">Flagship Atelier</p>
//             <p className="text-xs font-light leading-relaxed text-gray-400">
//               Chanakyapuri, New Delhi<br />
//               India, 110021
//             </p>
//           </div>
//         </div>

//         {/* BOTTOM LEGAL BAR */}
//         <div className="pt-12 flex flex-col md:flex-row justify-between items-center text-[9px] tracking-[0.4em] text-gray-600 uppercase">
//           <p>© 2026 Fabniquo Retail. All Rights Reserved.</p>
//           <div className="flex gap-10 mt-6 md:mt-0">
//             <a href="#" className="hover:text-white transition-colors">Privacy</a>
//             <a href="#" className="hover:text-white transition-colors">Terms</a>
//             <a href="#" className="hover:text-white transition-colors">Cookies</a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;