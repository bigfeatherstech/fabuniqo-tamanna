// import React, { useState } from 'react';
// import { Instagram, ShoppingBag, Heart, ExternalLink } from 'lucide-react';

// const AsSeenOn = () => {
//   // Mock data for UGC (User Generated Content) - 20 items with subtle height variations
//   const posts = [
//     {
//       id: 1,
//       handle: "@elena_styles",
//       image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=500&auto=format&fit=crop",
//       product: "Silk Evening Wrap",
//       height: "medium" // subtle variation
//     },
//     {
//       id: 2,
//       handle: "@marc.vogue",
//       image: "https://images.pexels.com/photos/4909517/pexels-photo-4909517.jpeg",
//       product: "Classic Wool Overcoat",
//       height: "small"
//     },
//     {
//       id: 3,
//       handle: "@sophia_fashion",
//       image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=500&auto=format&fit=crop",
//       product: "Summer Linen Set",
//       height: "small"
//     },
//     {
//       id: 4,
//       handle: "@the_minimalist",
//       image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=800&auto=format&fit=crop",
//       product: "Signature Tote Bag",
//       height: "medium"
//     },
//     {
//       id: 5,
//       handle: "@julie_j",
//       image: "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?q=80&w=500&auto=format&fit=crop",
//       product: "Cashmere Scarf",
//       height: "small"
//     },
//     {
//       id: 6,
//       handle: "@urban_edge",
//       image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=500&auto=format&fit=crop",
//       product: "Velvet Blazer",
//       height: "small"
//     },
//     {
//       id: 7,
//       handle: "@chic_diaries",
//       image: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?q=80&w=500&auto=format&fit=crop",
//       product: "Leather Midi Skirt",
//       height: "medium"
//     },
//     {
//       id: 8,
//       handle: "@street_style_edit",
//       image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=500&auto=format&fit=crop",
//       product: "Oversized Denim Jacket",
//       height: "small"
//     },
//     {
//       id: 9,
//       handle: "@vintage_rose",
//       image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=500&auto=format&fit=crop",
//       product: "Floral Maxi Dress",
//       height: "medium"
//     },
//     {
//       id: 10,
//       handle: "@modern_weaver",
//       image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=500&auto=format&fit=crop",
//       product: "Knit Cardigan",
//       height: "small"
//     },
//     {
//       id: 11,
//       handle: "@coastal_vibes",
//       image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=500&auto=format&fit=crop",
//       product: "Linen Pants",
//       height: "small"
//     },
//     {
//       id: 12,
//       handle: "@urban_nomad",
//       image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=500&auto=format&fit=crop",
//       product: "Travel Backpack",
//       height: "medium"
//     },
//     {
//       id: 13,
//       handle: "@minimal.studio",
//       image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=500&auto=format&fit=crop",
//       product: "Wool Blend Coat",
//       height: "small"
//     },
//     {
//       id: 14,
//       handle: "@boho_chic",
//       image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=500&auto=format&fit=crop",
//       product: "Embroidered Blouse",
//       height: "small"
//     },
//     {
//       id: 15,
//       handle: "@city_safari",
//       image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=500&auto=format&fit=crop",
//       product: "Leather Biker Jacket",
//       height: "medium"
//     },
//     {
//       id: 16,
//       handle: "@ethereal.style",
//       image: "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?q=80&w=500&auto=format&fit=crop",
//       product: "Silk Slip Dress",
//       height: "small"
//     },
//     {
//       id: 17,
//       handle: "@street_couture",
//       image: "https://images.pexels.com/photos/4909517/pexels-photo-4909517.jpeg",
//       product: "Track Pants",
//       height: "small"
//     },
//     {
//       id: 18,
//       handle: "@elegance.eternal",
//       image: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?q=80&w=500&auto=format&fit=crop",
//       product: "Pearl Necklace",
//       height: "medium"
//     },
//     {
//       id: 19,
//       handle: "@artisan.weave",
//       image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=500&auto=format&fit=crop",
//       product: "Handwoven Scarf",
//       height: "small"
//     },
//     {
//       id: 20,
//       handle: "@modern.muse",
//       image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=500&auto=format&fit=crop",
//       product: "Structured Blazer",
//       height: "medium"
//     },

  

//   ];

//   // Function to determine height class based on post.height
//   const getHeightClass = (height) => {
//     switch(height) {
//       case 'small':
//         return 'h-[280px]'; // Small height
//       case 'medium':
//         return 'h-[380px]'; // Medium height (only 100px difference)
//       default:
//         return 'h-[330px]'; // Default medium height
//     }
//   };

//   return (
//     <section className="bg-white py-24 px-6 md:px-12 overflow-hidden">
//       <div className="max-w-7xl mx-auto">
        
//         {/* Header Section */}
//         <div className="flex flex-col md:flex-row justify-between items-center mb-16 text-center md:text-left gap-6">
//           <div className="max-w-xl">
//             <h2 className="text-4xl md:text-6xl font-light tracking-tighter text-zinc-900 leading-none">
//               As Seen <span className=" text-[rgb(209,167,67)]">On You</span>
//             </h2>
//             <p className="mt-4 text-zinc-500 text-sm tracking-wide font-light max-w-sm">
//               Real people, real style. Tag <span className="font-bold text-black">#FABUNIQO</span> for a chance to be featured in our global gallery.
//             </p>
//           </div>
//           <button className="flex items-center gap-2 px-8 py-4 bg-zinc-900 text-white text-[10px] tracking-[0.2em] uppercase font-bold hover:bg-[rgb(209,167,67)] transition-colors duration-500">
//             Follow our Journey <Instagram size={14} />
//           </button>
//         </div>

//         {/* Masonry-Style Grid with subtle height variations */}
//         <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
//           {posts.map((post) => (
//             <div 
//               key={post.id} 
//               className={`relative group overflow-hidden bg-zinc-100 rounded-sm cursor-crosshair break-inside-avoid mb-4 ${
//                 getHeightClass(post.height)
//               }`}
//             >
//               {/* Image with subtle zoom on hover */}
//               <img 
//                 src={post.image} 
//                 alt={post.handle}
//                 className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
//               />

//               {/* Hover Overlay */}
//               <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-between p-6">
//                 <div className="flex justify-between items-start">
//                   <span className="text-white text-xs font-medium tracking-widest">{post.handle}</span>
//                   <div className="flex gap-3">
//                     <Heart size={18} className="text-white hover:text-red-400 cursor-pointer transition-colors" />
//                     <ExternalLink size={18} className="text-white hover:text-[rgb(209,167,67)] cursor-pointer transition-colors" />
//                   </div>
//                 </div>

//                 <div className="space-y-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
//                   <div className="bg-white/95 backdrop-blur p-4 shadow-xl">
//                     <div className="flex items-center justify-between gap-4">
//                       <div>
//                         <p className="text-[8px] text-zinc-400 uppercase font-bold tracking-tighter">Shop the item</p>
//                         <h4 className="text-[11px] font-bold text-zinc-900 uppercase tracking-tight">{post.product}</h4>
//                       </div>
//                       <button className="p-2 bg-zinc-900 text-white hover:bg-[rgb(209,167,67)] transition-colors">
//                         <ShoppingBag size={14} />
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Brand Banner / Trust Bar */}
//         <div className="mt-20 py-10 border-y border-zinc-100 grid grid-cols-2 md:grid-cols-4 gap-8">
//             {['VOGUE', 'BAZAAR', 'ELLE', 'GQ'].map((magazine) => (
//                 <div key={magazine} className="flex justify-center items-center">
//                     <span className="text-zinc-200 text-3xl md:text-5xl font-serif italic tracking-tighter select-none hover:text-zinc-300 transition-colors">
//                         {magazine}
//                     </span>
//                 </div>
//             ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AsSeenOn;

















import React from "react";
import { Instagram, ShoppingBag, Heart, ExternalLink } from "lucide-react";

const AsSeenOn = () => {

  const posts = [
    {
      id: 1,
      handle: "@golden_glow",
      image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d",
      product: "Gold Stud Earrings",
      height: "medium"
    },
    {
      id: 2,
      handle: "@jewel_diaries",
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f",
      product: "Diamond Ring",
      height: "small"
    },
    {
      id: 3,
      handle: "@style.with.sparkle",
      image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401",
      product: "Pearl Necklace",
      height: "small"
    },
    {
      id: 4,
      handle: "@elegance_daily",
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908",
      product: "Gold Pendant",
      height: "medium"
    },
    {
      id: 5,
      handle: "@indian_jewels",
      image: "https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d",
      product: "Traditional Mangalsutra",
      height: "small"
    },
    {
      id: 6,
      handle: "@minimal_gold",
      image: "https://images.unsplash.com/photo-1617038260897-41a1f14a9d4b",
      product: "Minimal Gold Ring",
      height: "small"
    },
    {
      id: 7,
      handle: "@bangle.story",
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e",
      product: "Gold Bangles",
      height: "medium"
    },
    {
      id: 8,
      handle: "@sparkle_luxury",
      image: "https://images.unsplash.com/photo-1620656798579-1984d5e87df7",
      product: "Diamond Bracelet",
      height: "small"
    },
    {
      id: 9,
      handle: "@royal_jewels",
      image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0",
      product: "Bridal Necklace Set",
      height: "medium"
    },
    {
      id: 10,
      handle: "@daily_gold_style",
      image: "https://images.unsplash.com/photo-1586878341523-7a9d1b03be15",
      product: "Gold Chain",
      height: "small"
    },
    {
      id: 11,
      handle: "@diamond_story",
      image: "https://images.unsplash.com/photo-1617038260897-41a1f14a9d4b",
      product: "Diamond Studs",
      height: "small"
    },
    {
      id: 12,
      handle: "@heritage_jewels",
      image: "https://images.unsplash.com/photo-1586878341523-7a9d1b03be15",
      product: "Temple Necklace",
      height: "medium"
    },
    {
      id: 13,
      handle: "@fine_gold_edit",
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f",
      product: "Gold Solitaire Ring",
      height: "small"
    },
    {
      id: 14,
      handle: "@ethnic_shine",
      image: "https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d",
      product: "Bridal Mangalsutra",
      height: "small"
    },
    {
      id: 15,
      handle: "@luxury_jewels",
      image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d",
      product: "Luxury Earrings",
      height: "medium"
    },
    {
      id: 16,
      handle: "@pearl_obsession",
      image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401",
      product: "Pearl Drop Earrings",
      height: "small"
    },
    {
      id: 17,
      handle: "@modern_jewel",
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e",
      product: "Designer Bracelet",
      height: "small"
    },
    {
      id: 18,
      handle: "@timeless_shine",
      image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0",
      product: "Royal Diamond Necklace",
      height: "medium"
    },
    {
      id: 19,
      handle: "@golden_collection",
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908",
      product: "Gold Pendant Necklace",
      height: "small"
    },
    {
      id: 20,
      handle: "@fabuniqo_style",
      image: "https://images.unsplash.com/photo-1620656798579-1984d5e87df7",
      product: "Luxury Jewelry Set",
      height: "medium"
    }
  ];


  const getHeightClass = (height) => {
    switch (height) {
      case "small":
        return "h-[280px]";
      case "medium":
        return "h-[380px]";
      default:
        return "h-[330px]";
    }
  };

  return (
    <section className="bg-white py-24 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 text-center md:text-left gap-6">

          <div className="max-w-xl">
            <h2 className="text-4xl md:text-6xl font-light tracking-tighter text-zinc-900 leading-none">
              Jewellery <span className="text-[rgb(209,167,67)]">Spotted</span>
            </h2>

            <p className="mt-4 text-zinc-500 text-sm tracking-wide font-light max-w-sm">
              Real customers wearing <span className="font-bold text-black">FABUNIQO</span> jewellery.
              Tag <span className="font-bold text-black">#FABUNIQOJEWELS</span> for a chance to be featured.
            </p>
          </div>

          <button className="flex items-center gap-2 px-8 py-4 bg-zinc-900 text-white text-[10px] tracking-[0.2em] uppercase font-bold hover:bg-[rgb(209,167,67)] transition-colors duration-500">
            Follow on Instagram <Instagram size={14} />
          </button>

        </div>


        {/* MASONRY GRID */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">

          {posts.map((post) => (

            <div
              key={post.id}
              className={`relative group overflow-hidden bg-zinc-100 rounded-sm cursor-pointer break-inside-avoid mb-4 ${getHeightClass(post.height)}`}
            >

              <img
                src={post.image}
                alt={post.product}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />

              {/* HOVER OVERLAY */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-between p-6">

                <div className="flex justify-between items-start">

                  <span className="text-white text-xs font-medium tracking-widest">
                    {post.handle}
                  </span>

                  <div className="flex gap-3">
                    <Heart size={18} className="text-white hover:text-red-400 cursor-pointer" />
                    <ExternalLink size={18} className="text-white hover:text-[rgb(209,167,67)] cursor-pointer" />
                  </div>

                </div>

                <div className="space-y-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">

                  <div className="bg-white/95 backdrop-blur p-4 shadow-xl">

                    <div className="flex items-center justify-between gap-4">

                      <div>
                        <p className="text-[8px] text-zinc-400 uppercase font-bold tracking-tighter">
                          Shop the Jewellery
                        </p>

                        <h4 className="text-[11px] font-bold text-zinc-900 uppercase tracking-tight">
                          {post.product}
                        </h4>
                      </div>

                      <button className="p-2 bg-zinc-900 text-white hover:bg-[rgb(209,167,67)] transition-colors">
                        <ShoppingBag size={14} />
                      </button>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          ))}

        </div>


        {/* TRUST BAR */}
        <div className="mt-20 py-10 border-y border-zinc-100 grid grid-cols-2 md:grid-cols-4 gap-8">

          {["VOGUE", "ELLE", "BAZAAR", "BRIDES"].map((magazine) => (

            <div key={magazine} className="flex justify-center items-center">

              <span className="text-zinc-200 text-3xl md:text-5xl font-serif italic tracking-tighter select-none hover:text-zinc-300 transition-colors">
                {magazine}
              </span>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default AsSeenOn;