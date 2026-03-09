// import React, { useState, useRef, useEffect } from 'react';
// import { ShoppingBag, ArrowRight, Volume2, VolumeX, Plus } from 'lucide-react';

// // Assets
// import video3 from "../../assets/vedio3.mp4";
// import vedio2 from "../../assets/vedio2.mp4";
// import vedio1 from "../../assets/vedio1.mp4";
// import vedio5 from "../../assets/vedio5.mp4";
// import vedio6 from "../../assets/vedio6.mp4";

// const FashionEcomGallery = () => {
//   const [activeIdx, setActiveIdx] = useState(0);
//   const [isMuted, setIsMuted] = useState(true);
//   const mainVideoRef = useRef(null);

//   const collections = [
//     {
//       id: 1,
//       title: "The Silk Edit",
//       category: "SS26 Collection",
//       videoUrl: vedio6,
//       product: { name: "Mulberry Silk Scarf", price: "$240", img: "https://images.pexels.com/photos/2120584/pexels-photo-2120584.jpeg" }
//     },
//     {
//       id: 2,
//       title: "Desert Linen",
//       category: "Summer Essentials",
//       videoUrl: vedio2,
//       product: { name: "Oversized Linen Blazer", price: "$480", img: "https://images.pexels.com/photos/3651597/pexels-photo-3651597.jpeg" }
//     },
//     {
//       id: 3,
//       title: "Velvet Midnight",
//       category: "Evening Gala",
//       videoUrl: vedio1,
//       product: { name: "Tailored Velvet Trousers", price: "$350", img: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=200&h=200&auto=format&fit=crop" }
//     },
//     {
//         id: 4,
//         title: "City Minimalist",
//         category: "Urban Wear",
//         videoUrl: vedio5,
//         product: { name: "Double Breasted Coat", price: "$890", img: "https://images.pexels.com/photos/7494681/pexels-photo-7494681.jpeg" }
//     }
//   ];

//   // Auto-cycle logic
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setActiveIdx((prev) => (prev + 1) % collections.length);
//     }, 8000);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <section className="bg-white py-20 px-4 md:px-12 font-sans overflow-hidden">
//       <div className="max-w-[1440px] mx-auto">
        
//         {/* Header: Clean & Commerce-focused */}
//         <div className="flex justify-between items-end mb-10 border-b border-zinc-100 pb-8">
//           <div>
//             <span className="text-[10px] tracking-[0.3em] font-bold text-zinc-400 uppercase">Shop the Campaign</span>
//             <h2 className="text-4xl md:text-5xl font-light tracking-tighter text-zinc-900 mt-2">
//               Collections <span className="italic font-serif">In Focus</span>
//             </h2>
//           </div>
//           <button className="text-sm font-medium border-b-2 border-black pb-1 hover:text-zinc-500 hover:border-zinc-300 transition-all">
//             View All Series
//           </button>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
//           {/* Main Video Section (8 Cols) */}
//           <div className="lg:col-span-8 relative">
//             <div className="relative aspect-[16/10] overflow-hidden bg-zinc-100 rounded-sm">
//               <video
//                 ref={mainVideoRef}
//                 key={collections[activeIdx].videoUrl}
//                 className="w-full h-full object-cover"
//                 loop muted={isMuted} playsInline autoPlay
//               >
//                 <source src={collections[activeIdx].videoUrl} type="video/mp4" />
//               </video>

//               {/* Mute Toggle */}
//               <button 
//                 onClick={() => setIsMuted(!isMuted)}
//                 className="absolute top-6 right-6 p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-black transition-all"
//               >
//                 {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
//               </button>

//               {/* Shoppable Floating Card */}
//               <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
//                 <div className="bg-white p-4 shadow-2xl rounded-sm flex items-center gap-4 max-w-xs animate-in fade-in slide-in-from-bottom-4 duration-700">
//                     <img src={collections[activeIdx].product.img} alt="Product" className="w-16 h-20 object-cover bg-zinc-100" />
//                     <div className="flex-1">
//                         <p className="text-[10px] text-zinc-400 font-bold uppercase">{collections[activeIdx].category}</p>
//                         <h4 className="text-xs font-bold text-zinc-900 uppercase mt-1">{collections[activeIdx].product.name}</h4>
//                         <p className="text-sm text-zinc-600 mt-1">{collections[activeIdx].product.price}</p>
//                         <button className="flex items-center gap-1 text-[10px] font-bold text-[rgb(209,167,67)] mt-2 uppercase group">
//                             Add to bag <Plus size={12} className="group-hover:rotate-90 transition-transform" />
//                         </button>
//                     </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Product Nav Section (4 Cols) */}
//           <div className="lg:col-span-4 flex flex-col justify-between">
//             <div className="space-y-4">
//               {collections.map((item, index) => (
//                 <div 
//                   key={item.id}
//                   onMouseEnter={() => setActiveIdx(index)}
//                   className={`relative p-6 cursor-pointer transition-all duration-500 border rounded-sm ${
//                     activeIdx === index 
//                     ? 'border-black bg-zinc-50' 
//                     : 'border-zinc-100 hover:border-zinc-300'
//                   }`}
//                 >
//                   <div className="flex justify-between items-center">
//                     <div>
//                         <span className={`text-[10px] font-bold tracking-widest ${activeIdx === index ? 'text-[rgb(209,167,67)]' : 'text-zinc-300'}`}>
//                             0{index + 1}
//                         </span>
//                         <h3 className="text-sm font-bold uppercase tracking-tight mt-1">{item.title}</h3>
//                         <p className="text-xs text-zinc-500 mt-1">{item.category}</p>
//                     </div>
//                     {activeIdx === index && <ArrowRight size={18} className="text-black" />}
//                   </div>
                  
//                   {/* Progress bar inside the list item */}
//                   {activeIdx === index && (
//                     <div className="absolute bottom-0 left-0 h-[3px] bg-black w-full origin-left animate-[progress_8s_linear]" />
//                   )}
//                 </div>
//               ))}
//             </div>

//             <div className="mt-8 p-8 bg-zinc-900 text-white rounded-sm">
//                 <ShoppingBag className="mb-4 text-[rgb(209,167,67)]" size={32} />
//                 <h4 className="text-lg font-light">Luxury delivered to your doorstep.</h4>
//                 <p className="text-[10px] text-zinc-400 uppercase tracking-widest mt-2">Complimentary shipping on all orders over $500.</p>
//             </div>
//           </div>

//         </div>
//       </div>
      
//       <style>{`
//         @keyframes progress {
//           0% { transform: scaleX(0); }
//           100% { transform: scaleX(1); }
//         }
//       `}</style>
//     </section>
//   );
// };

// export default FashionEcomGallery;











import React, { useState, useRef, useEffect } from 'react';
import { ShoppingBag, ArrowRight, Volume2, VolumeX, Plus } from 'lucide-react';

// Assets
import video3 from "../../assets/vedio3.mp4";
import vedio2 from "../../assets/vedio2.mp4";
import vedio1 from "../../assets/vedio1.mp4";
import vedio5 from "../../assets/vedio5.mp4";
import vedio6 from "../../assets/vedio6.mp4";
import vedio11 from "../../assets/vedio 11.mp4";
import vedio12 from "../../assets/vedio 12.mp4";
import vedio13 from "../../assets/vedio 13.mp4";
import vedio14 from "../../assets/vedio 14.mp4";

const FashionEcomGallery = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const mainVideoRef = useRef(null);

  const collections = [
    {
      id: 1,
      title: "Diamond Elegance",
      category: "Necklace & Pendants",
      videoUrl: vedio11,
      product: {
        name: "Diamond Halo Pendant",
        price: "$520",
        img: "https://images.unsplash.com/photo-1602752250015-52934bc45613?w=200"
      }
    },
    {
      id: 2,
      title: "Golden Radiance",
      category: "Bracelets & Bangles",
      videoUrl: vedio12,
      product: {
        name: "18K Gold Charm Bracelet",
        price: "$340",
        img: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=200"
      }
    },
    {
      id: 3,
      title: "Bridal Heritage",
      category: "Mangalsutras",
      videoUrl: vedio13,
      product: {
        name: "Traditional Diamond Mangalsutra",
        price: "$890",
        img: "https://images.unsplash.com/photo-1603561596112-0a132b757442?w=200"
      }
    },
    {
      id: 4,
      title: "Modern Minimal",
      category: "Earrings & Studs",
      videoUrl: vedio14,
      product: {
        name: "Minimal Gold Stud Earrings",
        price: "$210",
        img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=200"
      }
    }
  ];

  // Auto-cycle logic
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % collections.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-white py-20 px-4 md:px-12 font-sans overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Header */}
        <div className="flex justify-between items-end mb-10 border-b border-zinc-100 pb-8">
          <div>
            <span className="text-[10px] tracking-[0.3em] font-bold text-zinc-400 uppercase">
              Shop the Jewelry Edit
            </span>
            <h2 className="text-4xl md:text-5xl font-light tracking-tighter text-zinc-900 mt-2">
              Jewelry <span className="italic font-serif">In Focus</span>
            </h2>
          </div>

          <button className="text-sm font-medium border-b-2 border-black pb-1 hover:text-zinc-500 hover:border-zinc-300 transition-all">
            View All Collections
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Main Video Section */}
          <div className="lg:col-span-8 relative">
            <div className="relative aspect-[16/10] overflow-hidden bg-zinc-100 rounded-sm">
              
              <video
                ref={mainVideoRef}
                key={collections[activeIdx].videoUrl}
                className="w-full h-full object-cover"
                loop
                muted={isMuted}
                playsInline
                autoPlay
              >
                <source src={collections[activeIdx].videoUrl} type="video/mp4" />
              </video>

              {/* Mute Toggle */}
              <button
                onClick={() => setIsMuted(!isMuted)}
                className="absolute top-6 right-6 p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-black transition-all"
              >
                {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
              </button>

              {/* Floating Product Card */}
              <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
                <div className="bg-white p-4 shadow-2xl rounded-sm flex items-center gap-4 max-w-xs animate-in fade-in slide-in-from-bottom-4 duration-700">
                  
                  <img
                    src={collections[activeIdx].product.img}
                    alt="Product"
                    className="w-16 h-20 object-cover bg-zinc-100"
                  />

                  <div className="flex-1">
                    <p className="text-[10px] text-zinc-400 font-bold uppercase">
                      {collections[activeIdx].category}
                    </p>

                    <h4 className="text-xs font-bold text-zinc-900 uppercase mt-1">
                      {collections[activeIdx].product.name}
                    </h4>

                    <p className="text-sm text-zinc-600 mt-1">
                      {collections[activeIdx].product.price}
                    </p>

                    <button className="flex items-center gap-1 text-[10px] font-bold text-[rgb(209,167,67)] mt-2 uppercase group">
                      Add to bag
                      <Plus size={12} className="group-hover:rotate-90 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Product Navigation */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div className="space-y-4">

              {collections.map((item, index) => (
                <div
                  key={item.id}
                  onMouseEnter={() => setActiveIdx(index)}
                  className={`relative p-6 cursor-pointer transition-all duration-500 border rounded-sm ${
                    activeIdx === index
                      ? 'border-black bg-zinc-50'
                      : 'border-zinc-100 hover:border-zinc-300'
                  }`}
                >
                  <div className="flex justify-between items-center">

                    <div>
                      <span className={`text-[10px] font-bold tracking-widest ${
                        activeIdx === index
                          ? 'text-[rgb(209,167,67)]'
                          : 'text-zinc-300'
                      }`}>
                        0{index + 1}
                      </span>

                      <h3 className="text-sm font-bold uppercase tracking-tight mt-1">
                        {item.title}
                      </h3>

                      <p className="text-xs text-zinc-500 mt-1">
                        {item.category}
                      </p>
                    </div>

                    {activeIdx === index && (
                      <ArrowRight size={18} className="text-black" />
                    )}

                  </div>

                  {activeIdx === index && (
                    <div className="absolute bottom-0 left-0 h-[3px] bg-black w-full origin-left animate-[progress_8s_linear]" />
                  )}
                </div>
              ))}

            </div>

            <div className="mt-8 p-8 bg-zinc-900 text-white rounded-sm">
              <ShoppingBag className="mb-4 text-[rgb(209,167,67)]" size={32} />
              <h4 className="text-lg font-light">
                Timeless jewelry delivered to your doorstep.
              </h4>
              <p className="text-[10px] text-zinc-400 uppercase tracking-widest mt-2">
                Complimentary shipping on all orders over $300.
              </p>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @keyframes progress {
          0% { transform: scaleX(0); }
          100% { transform: scaleX(1); }
        }
      `}</style>
    </section>
  );
};

export default FashionEcomGallery;