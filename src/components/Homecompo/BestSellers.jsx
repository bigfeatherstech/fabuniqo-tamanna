// import React, { useState } from 'react';
// import { Star, ShoppingBag, Heart, Eye, TrendingUp } from 'lucide-react';

// const BestSellers = () => {
//   const [activeFilter, setActiveFilter] = useState('all');

//   const bestSellers = [
//     { id: 1, name: 'Silk Evening Gown', category: 'Dresses', price: 299.99, discount: 25, rating: 4.9, sold: 124, image: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=300&auto=format&fit=crop' },
//     { id: 2, name: 'Leather Jacket', category: 'Outerwear', price: 189.99, discount: 20, rating: 4.8, sold: 98, image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=300&auto=format&fit=crop' },
//     { id: 3, name: 'Designer Handbag', category: 'Accessories', price: 459.99, discount: 15, rating: 4.9, sold: 156, image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=300&auto=format&fit=crop' },
//     { id: 4, name: 'Premium Sneakers', category: 'Footwear', price: 129.99, discount: 30, rating: 4.7, sold: 203, image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=300&auto=format&fit=crop' },
//     { id: 5, name: 'Cashmere Sweater', category: 'Knits', price: 179.99, discount: 20, rating: 4.8, sold: 87, image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=300&auto=format&fit=crop' },
//     { id: 6, name: 'Linen Shirt', category: 'Tops', price: 89.99, discount: 15, rating: 4.6, sold: 145, image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=300&auto=format&fit=crop' },
//     { id: 7, name: 'Wool Coat', category: 'Outerwear', price: 349.99, discount: 22, rating: 4.8, sold: 76, image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=300&auto=format&fit=crop' },
//     { id: 8, name: 'Evening Dress', category: 'Dresses', price: 399.99, discount: 28, rating: 4.9, sold: 112, image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=300&auto=format&fit=crop' },
//   ];

//   const filters = ['all', 'dresses', 'outerwear', 'accessories', 'footwear', 'knits', 'tops'];

//   // Format price
//   const formatPrice = (price) => {
//     return `$${price.toFixed(2)}`;
//   };

//   return (
//     <section className="py-16 bg-white">
//       <div className="max-w-7xl mx-auto px-4">
//         {/* Header with filter */}
//         <div className="flex flex-col md:flex-row md:items-center justify-between mb-10">
//           <div className="mb-6 md:mb-0 text-center md:text-left">
//             <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[rgb(209,167,67)]/10 to-transparent rounded-full border border-[rgb(209,167,67)]/20 mb-4">
//               <TrendingUp className="w-4 h-4 text-[rgb(209,167,67)]" />
//               <span className="font-main text-xs font-medium text-[rgb(209,167,67)] tracking-wider">
//                 BEST SELLERS
//               </span>
//             </div>
//             <h2 className="text-2xl md:text-3xl font-light text-[#0e0e0e] mb-3">
//               Most Loved This <span style={{ color: '#D1A743' ,fontWeight:"500px"}}>Season</span>
//             </h2>
//             <p className="font-main text-sm text-gray-600">
//               Products everyone is talking about
//             </p>
//           </div>

//           {/* Filter Tabs */}
//           <div className="flex flex-wrap gap-2 justify-center md:justify-end">
//             {filters.map((filter) => (
//               <button
//                 key={filter}
//                 onClick={() => setActiveFilter(filter)}
//                 className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${activeFilter === filter
//                     ? 'bg-[rgb(209,167,67)] text-white'
//                     : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-900'
//                   }`}
//               >
//                 {filter.charAt(0).toUpperCase() + filter.slice(1)}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Products Grid - Matching NewArrivals Style */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
//           {bestSellers.map((product) => (
//             <div
//               key={product.id}
//               className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-200 group"
//             >
//               {/* Product Image */}
//               <div className="relative aspect-square overflow-hidden bg-gray-50">
//                 <img
//                   src={product.image}
//                   alt={product.name}
//                   className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//                 />

//                 {/* Badges */}
//                 <div className="absolute top-3 left-3">
//                   <span
//                     className="px-3 py-1 text-xs font-main font-bold text-white rounded"
//                     style={{ backgroundColor: 'rgb(209,167,67)' }}
//                   >
//                     -{product.discount}%
//                   </span>
//                 </div>

//                 {/* Sold Badge */}
//                 <div className="absolute top-3 right-3">
//                   <span className="px-3 py-1 bg-black/80 text-white text-xs rounded-full backdrop-blur-sm">
//                     🔥 {product.sold} sold
//                   </span>
//                 </div>

//                 {/* Quick Actions */}
//                 <div className="absolute top-12 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                   <button
//                     className="p-2 bg-white rounded-full hover:bg-[rgb(209,167,67)] hover:text-white transition-colors duration-200 shadow-sm"
//                     aria-label="Add to wishlist"
//                   >
//                     <Heart className="w-3 h-3" />
//                   </button>
//                   <button
//                     className="p-2 bg-white rounded-full hover:bg-[rgb(209,167,67)] hover:text-white transition-colors duration-200 shadow-sm"
//                     aria-label="Quick view"
//                   >
//                     <Eye className="w-3 h-3" />
//                   </button>
//                 </div>

//                 {/* Quick Add on Image Hover */}
//                 {/* <button 
//                   className="absolute bottom-0 left-0 right-0 bg-[rgb(209,167,67)] text-white py-2 text-xs font-Noto font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-full group-hover:translate-y-0 flex items-center justify-center gap-2"
//                   style={{ backgroundColor: 'rgb(209,167,67)' }}
//                 >
//                   <ShoppingBag className="w-3 h-3" />
//                   Quick Add
//                 </button> */}
//               </div>

//               {/* Product Info */}
//               <div className="p-4">
//                 <div className="mb-1">
//                   <span className="text-xs text-gray-500 uppercase">
//                     {product.category}
//                   </span>
//                 </div>

//                 <h3 className="text-sm font-semibold text-[#0e0e0e] line-clamp-1 mb-2 group-hover:text-[rgb(209,167,67)] transition-colors">
//                   {product.name}
//                 </h3>

//                 <div className="flex items-center justify-between mb-3">
//                   <div className="flex items-center gap-2">
//                     <span className="text-lg font-bold text-[#0e0e0e]">
//                       {formatPrice(product.price)}
//                     </span>
//                     <span className="font-Noto text-xs text-gray-400 line-through">
//                       ${(product.price / (1 - product.discount / 100)).toFixed(2)}
//                     </span>
//                   </div>

//                   <div className="flex items-center gap-1">
//                     <Star className="w-3 h-3 text-yellow-400 fill-current" />
//                     <span className="font-Noto text-xs font-medium">{product.rating}</span>
//                   </div>
//                 </div>

//                 {/* Add to Cart Button */}
//                 <button
//                   className="w-full py-2 text-xs font-semibold rounded bg-gray-100 text-gray-800 hover:bg-[rgb(209,167,67)] hover:text-white transition-all duration-200 flex items-center justify-center gap-2 group-hover:bg-[rgb(209,167,67)] group-hover:text-white"
//                 >
//                   <ShoppingBag className="w-3 h-3" />
//                   Add to Cart
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* View All Button - Matching NewArrivals Style */}
//         <div className="text-center mt-12">
//           <button
//             className="relative px-8 py-3 font-bold text-sm border border-[#D1A743] text-[#D1A743] group overflow-hidden transition-all duration-500 rounded-full hover:shadow-[0_10px_20px_rgba(209,167,67,0.2)] active:scale-95"
//           >
//             {/* Text Layer */}
//             <span className="relative z-10 group-hover:text-white transition-colors duration-300 uppercase tracking-widest">
//               View All Best Sellers
//             </span>

//             {/* Background Fill */}
//             <span className="absolute inset-0 bg-[#D1A743] scale-x-0 group-hover:scale-x-100 top-0 -left-[100%] transition-transform duration-500 "></span>

//             {/* Shimmer / Light Streak Effect */}
//             <span className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:left-[100%] transition-all duration-700 ease-in-out"></span>
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BestSellers;

















// import React, { useState } from 'react';
// import { Star, ShoppingBag, Heart, Eye, TrendingUp } from 'lucide-react';
// import Rssred  from "../../assets/Rset-red (2).png"
// import Rss203 from "../../assets/Rss - 203 (4).png"
// import Rss201 from "../../assets/Rss -201 (3).png"
// import Rss201A from "../../assets/Rss -201 (4).png"
// import Rss204 from "../../assets/Rss-204 (2).png"
// import Rss205 from "../../assets/Rss-205 (3).png"
// import Rss206 from "../../assets/Rss-206  (2).png"
// import Rss222 from "../../assets/Rss-222 (1).png"
// import Rss225 from "../../assets/Rss-225-gold (1).png"
// import Rss225S from "../../assets/Rss-225-silver (1).png"
// import vjs230 from "../../assets/vjs-231-rosegold (1).png"
// import vjs231 from "../../assets/vjs-231-silverWhite (3).png"
// import Egur158 from "../../assets/Egur 158 Red (3).png"
// import Egur159 from "../../assets/Egur-159-Green (1).png"



// const BestSellers = () => {
//   const [activeFilter, setActiveFilter] = useState('all');

//   const bestSellers = [
//     {
//       id: 1,
//       name: "Green earrings",
//             image : Egur159,
//           category: "Earrings & Studs",
//       price: 2499,
//       discount: 20,
//       rating: 4.8,
//       sold: 124,
//             reviews: 73,

//       // image: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=300'

//     },
//     {
//       id: 2,
//         name: "Rose Earings",
//             image : Egur158,
//           category: "Earrings & Studs",
//       price: 3999,
//       discount: 15,
//       rating: 4.7,
//       sold: 98,
//             reviews: 73,

//       // image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=300'
//     },
//     {
//       id: 3,
//      name: "Elegant Golden set",
//              image : Rss225,
//            category: "Set",
//       price: 2899,
//       discount: 18,
//       rating: 4.6,
//       sold: 82,
//             reviews: 73,

//       // image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=300'
//     },
//     {
//       id: 4,
//      name: "Golden Stud Earrings",
//              image : Rss222,
//          category: "Earrings & Studs",
//       price: 4499,
//       discount: 22,
//       rating: 4.9,
//       sold: 142,
//             reviews: 73,

//       // image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=300'
//     },
//     {
//       id: 5,
//           name: "Yellow Beads Set",
//                 image :Rss206,
//             category: "Set",
//       price: 5999,
//       discount: 25,
//       rating: 4.8,
//       sold: 73,
//             reviews: 73,

//       // image: 'https://media.istockphoto.com/id/1395172510/photo/mangalsutra-isolated-on-white-background.jpg'
//     },
//     {
//       id: 6,
//       name: "Diamond Pendant Necklace Set",
//               image : vjs231,
//           category: "Set",
//       price: 9999,
//       discount: 30,
//       rating: 4.9,
//       sold: 210,
//             reviews: 73,

//       // image: 'https://media.istockphoto.com/id/1175408308/photo/embrace-your-inner-queen-with-these-exquisite-bangles.jpg'
//     },
//     {
//       id: 7,
//        name: "Exclusive Jewellery Set",
//          image :vjs230,
//        category: "Jewellery Sets",
//       price: 1999,
//       discount: 15,
//       rating: 4.7,
//       sold: 95,
//             reviews: 73,

//       // image: 'https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?w=300'
//     },
//     {
//       id: 8,
//       name: "Traditional Black Beads Set",
//              image : Rss205,
//           category: "Set",
//       price: 2299,
//       discount: 12,
//       rating: 4.6,
//       sold: 88,
//             reviews: 73,

//       // image: 'https://images.unsplash.com/photo-1602752274594-2d7d4b91b64e?w=300'
//     }
//   ];

//   const filters = [
//     { key: 'all', label: 'All' },
//     { key: 'earrings', label: 'Earrings & Studs' },
//     { key: 'rings', label: 'Rings' },
//     { key: 'bracelets', label: 'Bracelets & Bangles' },
//     { key: 'necklace', label: 'Necklace & Pendants' },
//     { key: 'mangalsutra', label: 'Mangalsutras' },
//     { key: 'sets', label: 'Sets' }
//   ];

//   const filteredProducts =
//     activeFilter === 'all'
//       ? bestSellers
//       : bestSellers.filter((p) => p.category === activeFilter);

//   const formatPrice = (price) => {
//     return `₹${price}`;
//   };

//   return (
//     <section className="py-16 bg-white">
//       <div className="max-w-7xl mx-auto px-4">

//         {/* Header */}
//         <div className="flex flex-col md:flex-row md:items-center justify-between mb-10">

//           <div className="mb-6 md:mb-0 text-center md:text-left">

//             <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[rgb(209,167,67)]/10 to-transparent rounded-full border border-[rgb(209,167,67)]/20 mb-4">
//               <TrendingUp className="w-4 h-4 text-[rgb(209,167,67)]" />
//               <span className="font-lato font-main text-md font-medium  text-fab-pink tracking-wider">
//                 BEST SELLERS
//               </span>
//             </div>

//             <h2 className="text-2xl md:text-4xl font-light text-[#0e0e0e] mb-3">
//               Most  <span style={{ color: '#D1A743', fontWeight: "400"}}>Loved Jewellery</span>
//             </h2>

//             <p className="font-lato font-main text-md text-gray-600">
//               Trending jewellery customers love the most
//             </p>


//           </div>

//           {/* Filters */}
//           <div className="flex flex-wrap gap-2 justify-center md:justify-end">

//             {filters.map((filter) => (

//               <button
//                 key={filter.key}
//                 onClick={() => setActiveFilter(filter.key)}
//                 className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
//                   activeFilter === filter.key
//                     ? 'bg-fab-pink text-white'
//                     : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-900'
//                 }`}
//               >
//                 {filter.label}
//               </button>

//             ))}

//           </div>

//         </div>

//         {/* Products Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">

//           {filteredProducts.map((product) => (

//             <div
//               key={product.id}
//               className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-200 group"
//             >

//               {/* Image */}
//               <div className="relative aspect-square overflow-hidden bg-gray-50">

//                 <img
//                   src={product.image}
//                   alt={product.name}
//                   className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//                 />

//                 {/* Discount Badge */}
//                 <div className="absolute top-3 left-3 animate-heartbeat">
//                   <span
//                     className="px-3 py-1 text-xs font-main font-bold text-white rounded bg-fab-pink "
//                     // style={{ backgroundColor: 'rgb(209,167,67)' }}
//                   >
//                     -{product.discount}%
//                   </span>
//                 </div>

//                 {/* Sold Badge */}
//                 <div className="absolute top-3 right-3">
//                   <span className="px-3 py-1 bg-black/80 text-white text-xs rounded-full backdrop-blur-sm">
//                     🔥 {product.sold} sold
//                   </span>
//                 </div>

//                 {/* Actions */}
//                 <div className="absolute top-12 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">

//                   <button className="p-2 bg-white rounded-full hover:bg-[rgb(209,167,67)] hover:text-white transition shadow-sm">
//                     <Heart className="w-3 h-3" />
//                   </button>

//                   <button className="p-2 bg-white rounded-full hover:bg-[rgb(209,167,67)] hover:text-white transition shadow-sm">
//                     <Eye className="w-3 h-3" />
//                   </button>

//                 </div>

//               </div>

//               {/* Info */}
//               <div className="p-4">

//                 <span className="text-xs text-gray-500 uppercase">
//                   {product.category}
//                 </span>

//                 <h3 className="text-sm font-semibold text-[#0e0e0e] mb-2 group-hover:text-[rgb(209,167,67)] transition-colors">
//                   {product.name}
//                 </h3>

//                 <div className="flex items-center justify-between mb-3">

//                   <div className="flex items-center gap-2">

//                     <span className="text-lg font-bold text-[#0e0e0e]">
//                       {formatPrice(product.price)}
//                     </span>

//                     <span className="font-Noto text-xs text-gray-400 line-through">
//                       ₹{Math.round(product.price / (1 - product.discount / 100))}
//                     </span>

//                   </div>

//                   {/* <div className="flex items-center gap-1">
//                     <Star className="w-3 h-3 text-yellow-400 fill-current" />
//                     <span className="font-Noto text-xs font-medium">
//                       {product.rating}
//                     </span>
//                   </div> */}

//                 </div>

//                  <div className="flex items-center gap-1 mb-2">
//                                   <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
//                                   <span className="text-xs font-semibold text-gray-700">
//                                     {product.rating}
//                                   </span>
//                                   <span className="text-xs text-gray-500">
//                                     ({product.reviews})
//                                   </span>
//                                 </div>

//                 <button className="w-full py-2 text-xs font-semibold rounded bg-[#FAE7EB] text-gray-800 hover:bg-fab-pink hover:text-white transition flex items-center justify-center gap-2  group-hover:text-white">
//                   <ShoppingBag className="w-3 h-3" />
//                   Add to Cart
//                 </button>

//               </div>

//             </div>

//           ))}

//         </div>

//         {/* Button */}
//         <div className="text-center mt-12">

//           <button className="relative px-8 py-3 font-bold text-sm border border-[#D1A743] text-[#D1A743] group overflow-hidden transition-all duration-500 rounded-full hover:shadow-[0_10px_20px_rgba(209,167,67,0.2)] active:scale-95">

//             <span className="relative z-10 group-hover:text-white transition-colors duration-300 uppercase tracking-widest">
//               View All Jewellery
//             </span>

//             <span className="absolute inset-0 bg-[#D1A743] scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>

//             <span className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:left-[100%] transition-all duration-700"></span>

//           </button>

//         </div>

//       </div>
//     </section>
//   );
// };

// export default BestSellers;




import React, { useState } from 'react';
import { Star, ShoppingBag, Heart, Eye, TrendingUp, Grid3x3, List } from 'lucide-react';
import Rssred  from "../../assets/Rset-red (2).png"
import Rss203 from "../../assets/Rss - 203 (4).png"
import Rss201 from "../../assets/Rss -201 (3).png"
import Rss201A from "../../assets/Rss -201 (4).png"
import Rss204 from "../../assets/Rss-204 (2).png"
import Rss205 from "../../assets/Rss-205 (3).png"
import Rss206 from "../../assets/Rss-206  (2).png"
import Rss222 from "../../assets/Rss-222 (1).png"
import Rss225 from "../../assets/Rss-225-gold (1).png"
import Rss225S from "../../assets/Rss-225-silver (1).png"
import vjs230 from "../../assets/vjs-231-rosegold (1).png"
import vjs231 from "../../assets/vjs-231-silverWhite (3).png"
import Egur158 from "../../assets/Egur 158 Red (3).png"
import Egur159 from "../../assets/Egur-159-Green (1).png"

const BestSellers = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'

  const bestSellers = [
    {
      id: 1,
      name: "Green earrings",
      image: Egur159,
      category: "Earrings & Studs",
      price: 2499,
      discount: 20,
      rating: 4.8,
      sold: 124,
      reviews: 73,
    },
    {
      id: 2,
      name: "Rose Earings",
      image: Egur158,
      category: "Earrings & Studs",
      price: 3999,
      discount: 15,
      rating: 4.7,
      sold: 98,
      reviews: 73,
    },
    {
      id: 3,
      name: "Elegant Golden set",
      image: Rss225,
      category: "Set",
      price: 2899,
      discount: 18,
      rating: 4.6,
      sold: 82,
      reviews: 73,
    },
    {
      id: 4,
      name: "Golden Stud Earrings",
      image: Rss222,
      category: "Earrings & Studs",
      price: 4499,
      discount: 22,
      rating: 4.9,
      sold: 142,
      reviews: 73,
    },
    {
      id: 5,
      name: "Yellow Beads Set",
      image: Rss206,
      category: "Set",
      price: 5999,
      discount: 25,
      rating: 4.8,
      sold: 73,
      reviews: 73,
    },
    {
      id: 6,
      name: "Diamond Pendant Necklace Set",
      image: vjs231,
      category: "Set",
      price: 9999,
      discount: 30,
      rating: 4.9,
      sold: 210,
      reviews: 73,
    },
    {
      id: 7,
      name: "Exclusive Jewellery Set",
      image: vjs230,
      category: "Jewellery Sets",
      price: 1999,
      discount: 15,
      rating: 4.7,
      sold: 95,
      reviews: 73,
    },
    {
      id: 8,
      name: "Traditional Black Beads Set",
      image: Rss205,
      category: "Set",
      price: 2299,
      discount: 12,
      rating: 4.6,
      sold: 88,
      reviews: 73,
    },
     {
      id: 9,
      name: "Green earrings",
      image: Egur159,
      category: "Earrings & Studs",
      price: 2499,
      discount: 20,
      rating: 4.8,
      sold: 124,
      reviews: 73,
    },
    {
      id: 10,
      name: "Yellow Beads Set",
      image: Rss206,
      category: "Set",
      price: 5999,
      discount: 25,
      rating: 4.8,
      sold: 73,
      reviews: 73,
    },
  ];

  const filters = [
    { key: 'all', label: 'All' },
    { key: 'Earrings & Studs', label: 'Earrings & Studs' },
    { key: 'Set', label: 'Sets' },
    { key: 'Jewellery Sets', label: 'Jewellery Sets' }
  ];

  const filteredProducts = activeFilter === 'all' 
    ? bestSellers 
    : bestSellers.filter(p => p.category === activeFilter);

  const formatPrice = (price) => `₹${price}`;

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header with View Toggle */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-10">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[rgb(209,167,67)]/10 to-transparent rounded-full border border-[rgb(209,167,67)]/20 mb-4">
              <TrendingUp className="w-4 h-4 text-[rgb(209,167,67)]" />
              <span className="font-lato font-main text-md font-medium text-fab-pink tracking-wider">
                BEST SELLERS
              </span>
            </div>
            <h2 className="text-2xl md:text-4xl font-light text-[#0e0e0e] mb-3">
              Most <span style={{ color: '#D1A743', fontWeight: "400"}}>Loved Jewellery</span>
            </h2>
            <p className="font-lato font-main text-md text-gray-600">
              Trending jewellery customers love the most
            </p>
          </div>

          <div className="flex items-center gap-4">
            {/* Filters */}
            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => (
                <button
                  key={filter.key}
                  onClick={() => setActiveFilter(filter.key)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                    activeFilter === filter.key
                      ? 'bg-fab-pink text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>

            {/* View Toggle */}
            <div className="flex gap-1 border rounded-lg p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-md transition ${
                  viewMode === 'grid' ? 'bg-fab-pink text-white' : 'text-gray-500 hover:bg-gray-100'
                }`}
              >
                <Grid3x3 className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-md transition ${
                  viewMode === 'list' ? 'bg-fab-pink text-white' : 'text-gray-500 hover:bg-gray-100'
                }`}
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Products - Conditional Rendering based on view mode */}
        {viewMode === 'grid' ? (
          /* Grid View */
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-200 group"
              >
                {/* Image */}
                <div className="relative aspect-square overflow-hidden bg-gray-50">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Discount Badge */}
                  <div className="absolute top-3 left-3 animate-heartbeat">
                    <span className="px-3 py-1 text-xs font-main font-bold text-white rounded bg-fab-pink">
                      -{product.discount}%
                    </span>
                  </div>

                  {/* Sold Badge */}
                  <div className="absolute top-3 right-3">
                    <span className="px-3 py-1 bg-black/80 text-white text-xs rounded-full backdrop-blur-sm">
                      🔥 {product.sold} sold
                    </span>
                  </div>

                  {/* Actions */}
                  <div className="absolute top-12 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="p-2 bg-white rounded-full hover:bg-[rgb(209,167,67)] hover:text-white transition shadow-sm">
                      <Heart className="w-3 h-3" />
                    </button>
                    <button className="p-2 bg-white rounded-full hover:bg-[rgb(209,167,67)] hover:text-white transition shadow-sm">
                      <Eye className="w-3 h-3" />
                    </button>
                  </div>
                </div>

                {/* Info */}
                <div className="p-4">
                  <span className="text-xs text-gray-500 uppercase">
                    {product.category}
                  </span>
                  <h3 className="text-sm font-semibold text-[#0e0e0e] mb-2 group-hover:text-[rgb(209,167,67)] transition-colors">
                    {product.name}
                  </h3>

                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold text-[#0e0e0e]">
                        {formatPrice(product.price)}
                      </span>
                      <span className="font-Noto text-xs text-gray-400 line-through">
                        ₹{Math.round(product.price / (1 - product.discount / 100))}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 mb-2">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-xs font-semibold text-gray-700">
                      {product.rating}
                    </span>
                    <span className="text-xs text-gray-500">
                      ({product.reviews})
                    </span>
                  </div>

                  <button className="w-full py-2 text-xs font-semibold rounded bg-[#FAE7EB] text-gray-800 hover:bg-fab-pink hover:text-white transition flex items-center justify-center gap-2 group-hover:text-white">
                    <ShoppingBag className="w-3 h-3" />
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* List View */
          <div className="space-y-4">
            {filteredProducts.map((product, index) => (
              <div
                key={product.id}
                className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex flex-col md:flex-row">
                  {/* Image */}
                  <div className="md:w-1/4 relative overflow-hidden bg-gray-50">
                    <div className="aspect-square md:aspect-auto md:h-full">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    
                    {/* Discount Badge */}
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 text-xs font-bold text-white rounded bg-fab-pink">
                        -{product.discount}%
                      </span>
                    </div>

                    {/* Sold Badge - List View */}
                    <div className="absolute top-3 right-3 md:hidden">
                      <span className="px-2 py-1 bg-black/80 text-white text-xs rounded-full">
                        🔥 {product.sold}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="md:w-3/4 p-6">
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-sm text-fab-pink font-semibold uppercase tracking-wider">
                            {product.category}
                          </span>
                          <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                            #{index + 1} Best Seller
                          </span>
                          <span className="hidden md:inline text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded-full">
                            🔥 {product.sold} sold
                          </span>
                        </div>
                        
                        <h3 className="text-xl font-bold text-[#0e0e0e] mb-3 group-hover:text-fab-pink transition-colors">
                          {product.name}
                        </h3>

                        <p className="text-gray-600 mb-4 max-w-2xl">
                          Experience elegance with our premium quality jewellery. 
                          Handcrafted with attention to detail and finished with the finest materials.
                          This {product.category.toLowerCase()} piece is perfect for special occasions.
                        </p>

                        <div className="flex items-center gap-4 mb-4">
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            <span className="font-semibold text-gray-700">{product.rating}</span>
                            <span className="text-gray-500">({product.reviews} reviews)</span>
                          </div>
                          <span className="text-gray-300">|</span>
                          <span className="text-green-600 font-semibold">{product.sold}+ sold</span>
                        </div>

                        <div className="flex items-center gap-4 mb-4">
                          <span className="text-2xl font-bold text-[#0e0e0e]">
                            {formatPrice(product.price)}
                          </span>
                          <span className="text-gray-400 line-through">
                            ₹{Math.round(product.price / (1 - product.discount / 100))}
                          </span>
                          <span className="text-sm text-green-600 font-semibold">
                            Save {product.discount}%
                          </span>
                        </div>

                        <div className="flex items-center gap-3">
                          <button className="px-6 py-3 bg-fab-pink text-white rounded-lg hover:shadow-lg transition-all flex items-center gap-2">
                            <ShoppingBag className="w-4 h-4" />
                            Add to Cart
                          </button>
                          <button className="p-3 border rounded-lg hover:bg-gray-100 transition">
                            <Heart className="w-4 h-4" />
                          </button>
                          <button className="p-3 border rounded-lg hover:bg-gray-100 transition">
                            <Eye className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="relative px-8 py-3 font-bold text-sm border border-[#D1A743] text-[#D1A743] group overflow-hidden transition-all duration-500 rounded-full hover:shadow-[0_10px_20px_rgba(209,167,67,0.2)] active:scale-95">
            <span className="relative z-10 group-hover:text-white transition-colors duration-300 uppercase tracking-widest">
              View All Jewellery
            </span>
            <span className="absolute inset-0 bg-[#D1A743] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
            <span className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:left-[100%] transition-all duration-700"></span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default BestSellers;