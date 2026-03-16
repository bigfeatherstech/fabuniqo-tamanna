
// // main --------------
// import React, { useState } from "react";
// import { Heart, Star, ZoomIn } from "lucide-react";

// const ProductDetail = () => {

//   const images = [
//     "https://images.unsplash.com/photo-1611591437281-460bfbe1220a",
//     "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1",
//     "https://images.unsplash.com/photo-1603561596112-d34f8f7b1c36",
//     "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f",
//     "https://images.unsplash.com/photo-1617038220319-276d3cfab638"
//   ];

//   const [mainImage, setMainImage] = useState(images[0]);
//   const [expanded, setExpanded] = useState(false);
//   const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
//   const [showZoom, setShowZoom] = useState(false);

//   const description =
//     "A touch of timeless charm to your jewelry collection with this 925 Pure Silver Chain Pendant Set. Designed with fine detailing and a smooth finish, it offers a graceful look that complements both ethnic and western outfits.";

//   const handleMouseMove = (e) => {
//     const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    
//     const x = ((e.clientX - left) / width) * 100;
//     const y = ((e.clientY - top) / height) * 100;
  
    
//     setZoomPosition({ x, y });
//   };

//   return (
//     <section className="bg-[#fafafa] pb-16">

//       {/* HERO BANNER */}

//       <div className="w-full bg-[#f5f5f5] py-8 mb-10">
//         <div className="max-w-7xl mx-auto flex items-center justify-between px-6">

//           <div>
//             <h2 className="text-4xl font-bold text-black">
//               WOMEN'S DAY
//             </h2>

//             <h3 className="text-5xl font-extrabold text-pink-600">
//               Sale
//             </h3>

//             <p className="text-sm mt-1 text-gray-700">
//               UP TO 50% OFF
//             </p>
//           </div>

//           <div className="text-right">
//             <h3 className="text-2xl font-bold text-black">
//               Bold brands.
//             </h3>

//             <h3 className="text-2xl font-bold text-black">
//               Bolder discounts.
//             </h3>

//             <p className="text-pink-600 text-2xl font-bold mt-2">
//               Shop Now!
//             </p>
//           </div>

//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14">

//         {/* LEFT SIDE IMAGES */}

//         <div className="flex gap-6">

//           <div className="flex flex-col gap-4">

//             {images.map((img, i) => (

//               <img
//                 key={i}
//                 src={img}
//                 onMouseEnter={() => setMainImage(img)}
//                 className={`w-20 h-20 object-cover border cursor-pointer transition 
//                 ${mainImage === img
//                     ? "border-[rgb(209,167,67)]"
//                     : "border-gray-200 hover:border-gray-400"}`}
//               />

//             ))}


//           </div>

//           <div className="relative flex-1 bg-white p-6 border overflow-hidden">
//             {/* Main Image Container with Zoom */}
//             <div 
//               className="relative group cursor-zoom-in"
//               onMouseEnter={() => setShowZoom(true)}
//               onMouseLeave={() => setShowZoom(false)}
//               onMouseMove={handleMouseMove}
//             >
//               {/* Main Image */}
//               <img
//                 src={mainImage}
//                 className="w-full h-[500px] object-cover transition duration-500"
//                 alt="Product"
//               />

//               {/* Zoom Overlay - Shows on Hover */}
//               {showZoom && (
//                 <>
//                   {/* Zoom Lens */}
//                   <div 
//                     className="absolute inset-0 bg-white bg-opacity-10 pointer-events-none"
//                     style={{
//                       backgroundImage: `url(${mainImage})`,
//                       backgroundPosition: `${zoomPosition.x}% ${zoomPosition.y}%`,
//                       backgroundSize: '200%',
//                       backgroundRepeat: 'no-repeat'
//                     }}
//                   />
                  
//                   {/* Plus Icon */}
//                   <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
//                     <div className="bg-black bg-opacity-50 rounded-full p-3">
//                       <ZoomIn className="text-white" size={24} />
//                     </div>
//                   </div>
//                 </>
//               )}
//             </div>

//             <button className="absolute top-10 right-10 bg-white p-2 rounded-full shadow hover:bg-gray-100 transition">
//               <Heart size={18} />
//             </button>
//           </div>

//         </div>

//         {/* PRODUCT INFO */}

//         <div className="space-y-6">

//           <h1 className="text-2xl font-medium text-zinc-900">
//             925 Silver Pearl Pendant Necklace with Earrings
//           </h1>

//           {/* RATING */}

//           <div className="flex items-center gap-2 text-yellow-500">
//             <Star size={16} fill="currentColor" />
//             <Star size={16} fill="currentColor" />
//             <Star size={16} fill="currentColor" />
//             <Star size={16} fill="currentColor" />
//             <Star size={16} />
//             <span className="text-sm text-gray-500 ml-2">(128 Reviews)</span>
//           </div>

//           {/* PRICE */}

//           <div className="flex items-center gap-4">

//             <span className="text-3xl font-semibold text-black">
//               ₹5000
//             </span>

//             <span className="line-through text-gray-400">
//               ₹10000
//             </span>

//             <span className="text-[rgb(209,167,67)] font-medium">
//               50% OFF
//             </span>

//           </div>

//           <p className="text-xs text-gray-500">
//             Inclusive of all taxes
//           </p>

//           {/* ADD TO CART */}

//           <button className="bg-[rgb(209,167,67)] hover:bg-[#b78e34] text-black font-semibold px-8 py-3 transition">
//             Add to Bag
//           </button>

//           {/* DELIVERY PIN */}

//           <div className="border-t pt-6">

//             <p className="text-sm text-gray-600 mb-2">
//               Check Delivery
//             </p>

//             <div className="flex gap-2">

//               <input
//                 placeholder="Enter Pincode"
//                 className="border px-4 py-2 flex-1"
//               />

//               <button className="bg-black text-white px-4 py-2 text-sm">
//                 Check
//               </button>

//             </div>

//           </div>

//         </div>

//       </div>

//       {/* DESCRIPTION SECTION */}

//       <div className="max-w-7xl mx-auto mt-16 px-6 grid lg:grid-cols-3 gap-12">

//         {/* DESCRIPTION */}

//         <div className="lg:col-span-2 space-y-4">

//           <h2 className="text-xl font-medium">
//             Product Description
//           </h2>

//           <p className="text-gray-600 leading-relaxed">

//             {expanded
//               ? description +
//               " Ideal for everyday elegance or special occasions."
//               : description.substring(0, 180) + "..."}

//           </p>

//           <button
//             onClick={() => setExpanded(!expanded)}
//             className="text-[rgb(209,167,67)] text-sm font-medium"
//           >
//             {expanded ? "Read Less" : "Read More"}
//           </button>

//           {/* DETAILS */}

//           <div className="pt-6 text-sm text-gray-600 space-y-2">

//             <p><strong>Material:</strong> 925 Sterling Silver</p>
//             <p><strong>Color:</strong> Silver</p>
//             <p><strong>Plating:</strong> Rose Gold</p>
//             <p><strong>Occasion:</strong> Everyday Essentials</p>
//             <p><strong>Weight:</strong> 5 grams</p>

//           </div>

//         </div>

//         {/* SIDE PRODUCT CARD */}

//         <div className="border p-6 bg-white text-center space-y-4">

//           <img
//             src={images[1]}
//             className="h-60 object-cover mx-auto"
//           />

//           <h3 className="text-sm">
//             925 Silver Pendant Necklace
//           </h3>

//           <div className="flex justify-center gap-2">

//             <span className="font-semibold">
//               ₹5000
//             </span>

//             <span className="line-through text-gray-400">
//               ₹10000
//             </span>

//           </div>

//           <button className="bg-[rgb(209,167,67)] w-full py-3 font-medium">
//             Add to Bag
//           </button>


//         </div>

//       </div>

//       {/* RATINGS & REVIEWS */}

//       <div className="max-w-7xl mx-auto mt-14 px-6">

//         <h2 className="text-lg font-semibold mb-4">
//           Ratings & Reviews
//         </h2>

//         <div className="border bg-white p-6">

//           <p className="text-sm text-gray-600 mb-4">
//             Write a review and win 100 reward points !
//           </p>

//           <button className="border border-[rgb(209,167,67)] text-[rgb(209,167,67)] px-6 py-2 text-sm hover:bg-[rgb(209,167,67)] hover:text-white transition">
//             Write Review
//           </button>

//         </div>

//       </div>

//     </section>
//   );
// };

// export default ProductDetail;





























// latest-------------

// import React, { useState } from "react";
// import { Heart, Star, ZoomIn, ShoppingBag } from "lucide-react";
// import { useLocation, useNavigate } from "react-router-dom";

// const ProductDetail = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const product = location.state?.product;

//   const [mainImage, setMainImage] = useState(product?.images?.[0] || product?.image || "");
//   const [expanded, setExpanded] = useState(false);
//   const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
//   const [showZoom, setShowZoom] = useState(false);
//   const [quantity, setQuantity] = useState(1);
//   const [pincode, setPincode] = useState("");
//   const [deliveryStatus, setDeliveryStatus] = useState(null);

//   // If no product data, show error or redirect
//   if (!product) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <div className="text-center">
//           <h2 className="text-2xl font-bold text-gray-800 mb-4">Product Not Found</h2>
//           <p className="text-gray-600 mb-6">The product you're looking for doesn't exist or has been removed.</p>
//           <button
//             onClick={() => navigate("/")}
//             className="bg-[rgb(209,167,67)] text-white px-6 py-2 rounded hover:bg-[#b78e34] transition"
//           >
//             Continue Shopping
//           </button>
//         </div>
//       </div>
//     );
//   }

//   const images = product.images || [product.image];

//   const handleMouseMove = (e) => {
//     const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
//     const x = ((e.clientX - left) / width) * 100;
//     const y = ((e.clientY - top) / height) * 100;
//     setZoomPosition({ x, y });
//   };

//   const handleAddToCart = () => {
//     console.log("Added to cart:", { ...product, quantity });
//     // Implement add to cart functionality
//   };

//   const handleAddToWishlist = () => {
//     console.log("Added to wishlist:", product);
//     // Implement wishlist functionality
//   };

//   const handleCheckDelivery = () => {
//     if (pincode.length === 6) {
//       setDeliveryStatus({
//         available: true,
//         message: "Delivery available in 3-5 business days"
//       });
//     } else {
//       setDeliveryStatus({
//         available: false,
//         message: "Please enter a valid 6-digit pincode"
//       });
//     }
//   };

//   const handleQuantityChange = (type) => {
//     if (type === "increment") {
//       setQuantity(prev => prev + 1);
//     } else if (type === "decrement" && quantity > 1) {
//       setQuantity(prev => prev - 1);
//     }
//   };

//   const handleBuyNow = () => {
//     console.log("Buy now:", { ...product, quantity });
//     // Implement buy now functionality
//   };

//   return (
//     <section className="bg-[#fafafa] pb-16">
//       {/* HERO BANNER */}
//       <div className="w-full bg-gradient-to-r from-[#f5f5f5] to-white py-8 mb-10 border-b">
//         <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
//           <div>
//             <h2 className="text-4xl font- text-black">
//               {product.category}
//             </h2>
//             <h3 className="text-5xl font- text-[rgb(209,167,67)]">
//               Collection
//             </h3>
//             <p className="text-sm mt-1 text-gray-700">
//               {product.occasion}
//             </p>
//           </div>
//           <div className="text-right">
//             <h3 className="text-2xl font-bold text-black">
//               {product.title}
//             </h3>
//             <p className="text-[rgb(209,167,67)] text-xl font-bold mt-2">
//               {product.discount}% OFF
//             </p>
//           </div>
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14">
//         {/* LEFT SIDE IMAGES */}
//         <div className="flex gap-6">
//           <div className="flex flex-col gap-4">
//             {images.map((img, i) => (
//               <img
//                 key={i}
//                 src={img}
//                 alt={`${product.title} - View ${i + 1}`}
//                 onMouseEnter={() => setMainImage(img)}
//                 onClick={() => setMainImage(img)}
//                 className={`w-20 h-20 object-cover border-2 cursor-pointer transition-all duration-200 rounded
//                   ${mainImage === img
//                     ? "border-[rgb(209,167,67)] scale-105"
//                     : "border-gray-200 hover:border-gray-400 hover:scale-105"}`}
//               />
//             ))}
//           </div>

//           <div className="relative flex-1 bg-white p-6 border rounded-lg overflow-hidden">
//             <div 
//               className="relative group cursor-zoom-in"
//               onMouseEnter={() => setShowZoom(true)}
//               onMouseLeave={() => setShowZoom(false)}
//               onMouseMove={handleMouseMove}
//             >
//               <img
//                 src={mainImage}
//                 className="w-full h-[500px] object-cover transition duration-500"
//                 alt={product.title}
//               />

//               {showZoom && (
//                 <>
//                   <div 
//                     className="absolute inset-0 bg-white bg-opacity-10 pointer-events-none"
//                     style={{
//                       backgroundImage: `url(${mainImage})`,
//                       backgroundPosition: `${zoomPosition.x}% ${zoomPosition.y}%`,
//                       backgroundSize: '200%',
//                       backgroundRepeat: 'no-repeat'
//                     }}
//                   />
//                   <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
//                     <div className="bg-black bg-opacity-50 rounded-full p-3">
//                       <ZoomIn className="text-white" size={24} />
//                     </div>
//                   </div>
//                 </>
//               )}
//             </div>

//             <button 
//               onClick={handleAddToWishlist}
//               className="absolute top-10 right-10 bg-white p-2 rounded-full shadow hover:bg-gray-100 transition"
//             >
//               <Heart size={18} />
//             </button>
//           </div>
//         </div>

//         {/* PRODUCT INFO */}
//         <div className="space-y-6">
//           <div>
//             <span className="text-sm text-gray-500 uppercase tracking-wider">
//               {product.category}
//             </span>
//             <h1 className="text-3xl font-medium text-zinc-900 mt-1">
//               {product.title}
//             </h1>
//           </div>

//           {/* RATING */}
//           <div className="flex items-center gap-2">
//             <div className="flex items-center gap-1">
//               {[...Array(5)].map((_, i) => (
//                 <Star
//                   key={i}
//                   size={16}
//                   className={i < Math.floor(product.rating) 
//                     ? "fill-yellow-400 text-yellow-400" 
//                     : "text-gray-300"}
//                 />
//               ))}
//             </div>
//             <span className="text-sm text-gray-600">
//               {product.rating} ({product.reviews} Reviews)
//             </span>
//           </div>

//           {/* PRICE */}
//           <div className="flex items-center gap-4">
//             <span className="text-3xl font-semibold text-black">
//               ₹{product.price.toLocaleString()}
//             </span>
//             {product.originalPrice && (
//               <>
//                 <span className="line-through text-gray-400">
//                   ₹{product.originalPrice.toLocaleString()}
//                 </span>
//                 <span className="bg-green-100 text-green-700 px-2 py-1 text-sm font-medium rounded">
//                   {product.discount}% OFF
//                 </span>
//               </>
//             )}
//           </div>

//           <p className="text-xs text-gray-500">
//             Inclusive of all taxes
//           </p>

//           {/* QUANTITY */}
//           <div className="flex items-center gap-4">
//             <span className="text-sm font-medium text-gray-700">Quantity:</span>
//             <div className="flex items-center border rounded">
//               <button
//                 onClick={() => handleQuantityChange("decrement")}
//                 className="px-3 py-1 border-r hover:bg-gray-100 transition"
//                 disabled={quantity <= 1}
//               >
//                 -
//               </button>
//               <span className="px-4 py-1 text-sm">{quantity}</span>
//               <button
//                 onClick={() => handleQuantityChange("increment")}
//                 className="px-3 py-1 border-l hover:bg-gray-100 transition"
//               >
//                 +
//               </button>
//             </div>
//           </div>

//           {/* ACTION BUTTONS */}
//           <div className="flex gap-4">
//             <button
//               onClick={handleAddToCart}
//               className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold px-8 py-3 transition flex items-center justify-center gap-2 border"
//             >
//               <ShoppingBag size={18} />
//               Add to Cart
//             </button>
//             <button
//               onClick={handleBuyNow}
//               className="flex-1 bg-[rgb(209,167,67)] hover:bg-[#b78e34] text-black font-semibold px-8 py-3 transition"
//             >
//               Buy Now
//             </button>
//           </div>

//           {/* AVAILABILITY */}
//           <div className="border-t pt-6">
//             <div className="flex items-center gap-2 mb-4">
//               <div className={`w-2 h-2 rounded-full ${product.inStock ? 'bg-green-500' : 'bg-red-500'}`}></div>
//               <span className="text-sm text-gray-600">
//                 {product.inStock ? 'In Stock' : 'Out of Stock'}
//               </span>
//             </div>

//             {/* DELIVERY PIN */}
//             <div>
//               <p className="text-sm text-gray-600 mb-2">
//                 Check Delivery
//               </p>
//               <div className="flex gap-2">
//                 <input
//                   type="text"
//                   placeholder="Enter Pincode"
//                   value={pincode}
//                   onChange={(e) => setPincode(e.target.value.replace(/\D/g, '').slice(0, 6))}
//                   className="border px-4 py-2 flex-1 text-sm focus:outline-none focus:border-[rgb(209,167,67)]"
//                   maxLength="6"
//                 />
//                 <button
//                   onClick={handleCheckDelivery}
//                   className="bg-black text-white px-6 py-2 text-sm hover:bg-gray-800 transition"
//                 >
//                   Check
//                 </button>
//               </div>
//               {deliveryStatus && (
//                 <p className={`text-xs mt-2 ${deliveryStatus.available ? 'text-green-600' : 'text-red-600'}`}>
//                   {deliveryStatus.message}
//                 </p>
//               )}
//             </div>
//           </div>

//           {/* SKU */}
//           <p className="text-xs text-gray-400">
//             SKU: {product.sku}
//           </p>
//         </div>
//       </div>

//       {/* DESCRIPTION SECTION */}
//       <div className="max-w-7xl mx-auto mt-16 px-6">
//         <div className="border-t pt-8">
//           <h2 className="text-xl font-medium mb-4">
//             Product Description
//           </h2>
//           <p className="text-gray-600 leading-relaxed">
//             {expanded
//               ? product.description
//               : product.description.substring(0, 300) + "..."}
//           </p>
//           <button
//             onClick={() => setExpanded(!expanded)}
//             className="text-[rgb(209,167,67)] text-sm font-medium mt-2 hover:underline"
//           >
//             {expanded ? "Read Less" : "Read More"}
//           </button>

//           {/* DETAILS */}
//           <div className="grid grid-cols-2 gap-4 mt-8 text-sm">
//             <div className="space-y-3">
//               <div>
//                 <span className="text-gray-500">Material:</span>
//                 <p className="font-medium">{product.material}</p>
//               </div>
//               <div>
//                 <span className="text-gray-500">Color:</span>
//                 <p className="font-medium">{product.color}</p>
//               </div>
//               <div>
//                 <span className="text-gray-500">Plating:</span>
//                 <p className="font-medium">{product.plating}</p>
//               </div>
//             </div>
//             <div className="space-y-3">
//               <div>
//                 <span className="text-gray-500">Occasion:</span>
//                 <p className="font-medium">{product.occasion}</p>
//               </div>
//               <div>
//                 <span className="text-gray-500">Weight:</span>
//                 <p className="font-medium">{product.weight}</p>
//               </div>
//               <div>
//                 <span className="text-gray-500">In Stock:</span>
//                 <p className="font-medium">{product.inStock ? 'Yes' : 'No'}</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* RATINGS & REVIEWS */}
//       <div className="max-w-7xl mx-auto mt-14 px-6">
//         <h2 className="text-lg font-semibold mb-4">
//           Ratings & Reviews
//         </h2>
//         <div className="border bg-white p-6 rounded-lg">
//           <div className="flex items-center gap-8 mb-6">
//             <div className="text-center">
//               <div className="text-4xl font-bold text-gray-800">{product.rating}</div>
//               <div className="flex items-center gap-1 mt-1">
//                 {[...Array(5)].map((_, i) => (
//                   <Star
//                     key={i}
//                     size={14}
//                     className={i < Math.floor(product.rating) 
//                       ? "fill-yellow-400 text-yellow-400" 
//                       : "text-gray-300"}
//                   />
//                 ))}
//               </div>
//               <p className="text-xs text-gray-500 mt-1">{product.reviews} Reviews</p>
//             </div>
//           </div>
//           <p className="text-sm text-gray-600 mb-4">
//             Write a review and win 100 reward points!
//           </p>
//           <button className="border border-[rgb(209,167,67)] text-[rgb(209,167,67)] px-6 py-2 text-sm hover:bg-[rgb(209,167,67)] hover:text-white transition rounded">
//             Write Review
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProductDetail;













// latest version  --------------
// import React, { useState } from "react";
// import { Heart, Star, ZoomIn } from "lucide-react";
// import { useLocation, useNavigate } from "react-router-dom";

// const ProductDetail = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const product = location.state?.product;

//   const [mainImage, setMainImage] = useState(product?.images?.[0] || product?.image || "");
//   const [expanded, setExpanded] = useState(false);
//   const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
//   const [showZoom, setShowZoom] = useState(false);

//   // If no product data, show error or redirect
//   if (!product) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <div className="text-center">
//           <h2 className="text-2xl font-bold text-gray-800 mb-4">Product Not Found</h2>
//           <p className="text-gray-600 mb-6">The product you're looking for doesn't exist or has been removed.</p>
//           <button
//             onClick={() => navigate("/")}
//             className="bg-[rgb(209,167,67)] text-white px-6 py-2 rounded hover:bg-[#b78e34] transition"
//           >
//             Continue Shopping
//           </button>
//         </div>
//       </div>
//     );
//   }

//   const images = product.images || [product.image];

//   const handleMouseMove = (e) => {
//     const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
//     const x = ((e.clientX - left) / width) * 100;
//     const y = ((e.clientY - top) / height) * 100;
//     setZoomPosition({ x, y });
//     setZoomPosition(true)
//     console.log("check if magnifier is working or not")
//   };

//   return (
//     <section className="bg-[#fafafa] pb-16">
//         {/* // <section className="bg-#FAE7EB-600 pb-16"> */}


//       {/* HERO BANNER */}
//       <div className="w-full bg-[#f5f5f5] py-8 mb-10">
//         <div className="max-w-7xl mx-auto flex items-center justify-between px-6">

//           <div>
//             <h2 className="text-4xl font- text-black">
//               {product.category}
//             </h2>

//             <h3 className="text-5xl font-semibold text-fab-pink">
//               Collection
//             </h3>

//             <p className="font-lato text-sm mt-1 text-gray-700">
//               {product.occasion}
//             </p>
//           </div>

//           <div className="text-right">
//             <h3 className="text-2xl font- text-black">
//               {product.title}
//             </h3>

//             <p className="text-fab-pink text-2xl font-bold mt-2">
//               {product.discount}% OFF
//             </p>
//           </div>

//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14">

//         {/* LEFT SIDE IMAGES */}
//         <div className="flex gap-6">

//           <div className="flex flex-col gap-4">
//             {images.map((img, i) => (
//               <img
//                 key={i}
//                 src={img}
//                 alt={`${product.title} - View ${i + 1}`}
//                 onMouseEnter={() => setMainImage(img)}
//                 className={`w-20 h-20 object-cover border cursor-pointer transition 
//                 ${mainImage === img
//                     ? "border-[rgb(209,167,67)]"
//                     : "border-gray-200 hover:border-gray-400"}`}
//               />
//             ))}
//           </div>

//           <div className="relative flex-1 bg-white p-6 border overflow-hidden">
//             {/* Main Image Container with Zoom */}
//             <div 
//               className="relative group cursor-zoom-in"
//               onMouseEnter={() => setShowZoom(true)}
//               onMouseLeave={() => setShowZoom(false)}
//               onMouseMove={handleMouseMove}
//             >
//               {/* Main Image */}
//               <img
//                 src={mainImage}
//                 className="w-full h-[500px] object-cover transition duration-500"
//                 alt={product.title}
//               />

//               {/* Zoom Overlay - Shows on Hover */}
//               {showZoom && (
//                 <>
//                   {/* Zoom Lens */}
//                   <div 
//                     className="absolute inset-0 bg-white bg-opacity-10 pointer-events-none"
//                     style={{
//                       backgroundImage: `url(${mainImage})`,
//                       backgroundPosition: `${zoomPosition.x}% ${zoomPosition.y}%`,
//                       backgroundSize: '200%',
//                       backgroundRepeat: 'no-repeat'
//                     }}
//                   />
                  
//                   {/* Plus Icon */}
//                   <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
//                     <div className="bg-black bg-opacity-50 rounded-full p-3">
//                       <ZoomIn className="text-white" size={24} />
//                     </div>
//                   </div>
//                 </>
//               )}
//             </div>

//             <button className="absolute top-10 right-10 bg-white p-2 rounded-full shadow hover:bg-gray-100 transition">
//               <Heart size={18} />
//             </button>
//           </div>

//         </div>

//         {/* PRODUCT INFO */}
//         <div className="space-y-6">

//           <h1 className="text-2xl font-medium text-zinc-900">
//             {product.title}
//           </h1>

//           {/* RATING */}
//           <div className="flex items-center gap-2 text-yellow-500">
//             {[...Array(5)].map((_, i) => (
//               <Star 
//                 key={i} 
//                 size={16} 
//                 fill={i < Math.floor(product.rating) ? "currentColor" : "none"} 
//                 className={i < Math.floor(product.rating) ? "text-yellow-500" : "text-gray-300"}
//               />
//             ))}
//             <span className="text-sm text-gray-500 ml-2">({product.reviews} Reviews)</span>
//           </div>

//           {/* PRICE */}
//           <div className="flex items-center gap-4">

//             <span className="text-3xl font-semibold text-black">
//               {product.price}
//             </span>

//             {product.originalPrice && (
//               <>
//                 <span className="line-through text-gray-400">
//                   {product.originalPrice}
//                 </span>

//                 <span className="text-[rgb(209,167,67)] font-medium">
//                   {product.discount}% OFF
//                 </span>
//               </>
//             )}

//           </div>

//           <p className="text-xs text-gray-500">
//             Inclusive of all taxes
//           </p>

//           {/* ADD TO CART */}
//           {/* <button className="bg-[rgb(209,167,67)] hover:bg-[#b78e34] text-black font-semibold px-8 py-3 transition"> */}
//           <button className="bg-fab-pink  hover:bg-[#b78e34] text-black font-semibold px-8 py-3 transition">

//             Add to Bag
//           </button>

//           {/* DELIVERY PIN */}
//           <div className="border-t pt-6">

//             <p className="text-sm text-gray-600 mb-2">
//               Check Delivery
//             </p>

//             <div className="flex gap-2">

//               <input
//                 placeholder="Enter Pincode"
//                 className="border px-4 py-2 flex-1"
//               />

//               <button className="bg-black text-white px-4 py-2 text-sm">
//                 Check
//               </button>

//             </div>

//           </div>

//         </div>

//       </div>

//       {/* DESCRIPTION SECTION */}
//       <div className="max-w-7xl mx-auto mt-16 px-6 grid lg:grid-cols-3 gap-12">

//         {/* DESCRIPTION */}
//         <div className="lg:col-span-2 space-y-4">

//           <h2 className="text-xl font-medium">
//             Product Description
//           </h2>

//           <p className="leading-relaxed text-fab-pink">

//             {expanded
//               ? product.description + " Ideal for everyday elegance or special occasions."
//               : product.description.substring(0, 180) + "..."}

//           </p>

//           <button
//             onClick={() => setExpanded(!expanded)}
//             className="text-[rgb(209,167,67)] text-md font-medium"
//           >
//             {expanded ? "Read Less" : "Read More"}
//           </button>

//           {/* DETAILS */}
//           <div className="pt-6 text-sm text-gray-600 space-y-2">

//             <p><strong>Material:</strong> {product.material}</p>
//             <p><strong>Color:</strong> {product.color}</p>
//             <p><strong>Plating:</strong> {product.plating}</p>
//             <p><strong>Occasion:</strong> {product.occasion}</p>
//             <p><strong>Weight:</strong> {product.weight}</p>

//           </div>

//         </div>

//         {/* SIDE PRODUCT CARD */}
//         <div className="border p-6 bg-white text-center space-y-4">

//           <img
//             // src={images[1] || images[0]}
//              src={mainImage}
//             className="h-60 object-cover mx-auto"
//             alt={product.title}
//           />

//           <h3 className="text-sm">
//             {product.title}
//           </h3>

//           <div className="flex justify-center gap-2">

//             <span className="font-semibold">
//               {product.price}
//             </span>

//             {product.originalPrice && (
//               <span className="line-through text-gray-400">
//                 {product.originalPrice}
//               </span>
//             )}

//           </div>

//           <button className="bg-[rgb(209,167,67)] w-full py-3 font-medium">
//             Add to Bag
//           </button>

//         </div>

//       </div>

//       {/* RATINGS & REVIEWS */}
//       <div className="max-w-7xl mx-auto mt-14 px-6">

//         <h2 className="text-lg font-semibold mb-4">
//           Ratings & Reviews
//         </h2>

//         <div className="border bg-white p-6">

//           <p className="text-sm text-gray-600 mb-4">
//             Write a review and win 100 reward points !
//           </p>

//           <button className="border border-[rgb(209,167,67)] text-[rgb(209,167,67)] px-6 py-2 text-sm hover:bg-[rgb(209,167,67)] hover:text-white transition">
//             Write Review
//           </button>

//         </div>

//       </div>

//     </section>
//   );
// };

// export default ProductDetail;






import React, { useState, useRef, useEffect } from "react";
import { Heart, Star, ZoomIn } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

const ProductDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state?.product;

  const [mainImage, setMainImage] = useState(product?.images?.[0] || product?.image || "");
  const [expanded, setExpanded] = useState(false);
  const [showZoom, setShowZoom] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
  
  const imageRef = useRef(null);
  const zoomResultRef = useRef(null);

  // If no product data, show error or redirect
  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Product Not Found</h2>
          <p className="text-gray-600 mb-6">The product you're looking for doesn't exist or has been removed.</p>
          <button
            onClick={() => navigate("/")}
            className="bg-[rgb(209,167,67)] text-white px-6 py-2 rounded hover:bg-[#b78e34] transition"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  const images = product.images || [product.image];
 

  // Helper function to get the actual image URL
  const getImageUrl = (img) => {
    if (!img) return '';
    if (typeof img === 'object' && img.src) {
      return img.src;
    }
    return img;
  };

  const handleMouseMove = (e) => {
    if (!imageRef.current || !zoomResultRef.current) return;

    const image = imageRef.current;
    const zoomResult = zoomResultRef.current;
    const rect = image.getBoundingClientRect();
    
    // Calculate mouse position as percentage
    let x = ((e.clientX - rect.left) / rect.width) * 100;
    let y = ((e.clientY - rect.top) / rect.height) * 100;
    
    // Constrain values between 0 and 100
    x = Math.max(0, Math.min(100, x));
    y = Math.max(0, Math.min(100, y));
    
    setZoomPosition({ x, y });
    
    // Set zoom result background position
    zoomResult.style.backgroundPosition = `${x}% ${y}%`;
  };

  // Convert imported image to data URL for background
  const [imageDataUrl, setImageDataUrl] = useState('');

  useEffect(() => {
    const loadImageAsDataUrl = async () => {
      const imageUrl = getImageUrl(mainImage);
      
      // If it's an external URL, use it directly
      if (imageUrl.startsWith('http')) {
        setImageDataUrl(imageUrl);
        return;
      }

      // For imported images, fetch and convert to data URL
      try {
        const response = await fetch(imageUrl);
        const blob = await response.blob();
        const reader = new FileReader();
        reader.onloadend = () => {
          setImageDataUrl(reader.result);
        };
        reader.readAsDataURL(blob);
      } catch (error) {
        console.error('Error loading image:', error);
        setImageDataUrl(imageUrl);
      }
    };

    loadImageAsDataUrl();
  }, [mainImage]);

  return (
    <section className="bg-[#fafafa] pb-16">

      {/* HERO BANNER */}
      <div className="w-full bg-[#f5f5f5] py-8 mb-10">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6">

          <div>
            <h2 className="text-4xl font- text-black">
              {product.category}
            </h2>

            <h3 className="text-5xl text-fab-pink font-semibold">
              Collection
            </h3>

            <p className="text-sm mt-1 text-gray-700">
              {product.occasion}
            </p>
          </div>

          <div className="text-right">
            <h3 className="text-2xl font- text-black">
              {product.title}
            </h3>

            <p className="text-fab-pink text-2xl font-semibold mt-2">
              {product.discount}% OFF
            </p>
          </div>

        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14">

        {/* LEFT SIDE IMAGES */}
        <div className="flex gap-6">

          <div className="flex flex-col gap-4">
            {images.map((img, i) => (
              <img
                key={i}
                src={getImageUrl(img)}
                alt={`${product.title} - View ${i + 1}`}
                onMouseEnter={() => setMainImage(getImageUrl(img))}
                className={`w-20 h-20 object-cover border cursor-pointer transition 
                ${getImageUrl(mainImage) === getImageUrl(img)
                    ? "border-[rgb(209,167,67)]"
                    : "border-gray-200 hover:border-gray-400"}`}
              />
            ))}
          </div>

          <div className="relative flex-1 bg-white p-6 border overflow-hidden">
            {/* Main Image Container with Zoom */}
            <div 
              className="relative group cursor-zoom-in"
              onMouseEnter={() => setShowZoom(true)}
              onMouseLeave={() => setShowZoom(false)}
              onMouseMove={handleMouseMove}
            >
              {/* Main Image */}
              <img
                ref={imageRef}
                src={getImageUrl(mainImage)}
                className="w-full h-[500px] object-cover transition duration-500"
                alt={product.title}
              />

              {/* Plus Icon - Only shown on mobile/tablet */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:hidden">
                <div className="bg-black bg-opacity-50 rounded-full p-3">
                  <ZoomIn className="text-white" size={24} />
                </div>
              </div>
            </div>

            <button className="absolute top-10 right-10 bg-white p-2 rounded-full shadow hover:bg-gray-100 transition">
              <Heart size={18} />
            </button>
          </div>

        </div>

        {/* ZOOM RESULT - Separate div for magnified view (only shows on desktop) */}
        {showZoom && (
          <div
            ref={zoomResultRef}
            className="fixed top-1/2 right-8 transform -translate-y-1/2 w-[400px] h-[400px] bg-white rounded-lg shadow-2xl border-4 border-white overflow-hidden z-50 hidden lg:block"
            style={{
              backgroundImage: `url(${imageDataUrl || getImageUrl(mainImage)})`,
              backgroundPosition: `${zoomPosition.x}% ${zoomPosition.y}%`,
              backgroundSize: '250%',
              backgroundRepeat: 'no-repeat',
              boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
            }}
          >
            <div className="absolute top-2 left-2 bg-black/50 text-white text-xs px-2 py-1 rounded">
              Zoomed View
            </div>
          </div>
        )}

        {/* PRODUCT INFO */}
        <div className="space-y-6">

          <h1 className="text-2xl font-medium text-zinc-900 font-lato">
            {product.title}
          </h1>

          {/* RATING */}
          <div className="flex items-center gap-2 text-yellow-500">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                size={16} 
                fill={i < Math.floor(product.rating) ? "currentColor" : "none"} 
                className={i < Math.floor(product.rating) ? "text-yellow-500" : "text-gray-300"}
              />
            ))}
            <span className="text-sm text-gray-500 ml-2 font-lato">({product.reviews} Reviews)</span>
          </div>

          {/* PRICE */}
          <div className="flex items-center gap-4">

            <span className="text-3xl font-semibold text-black font-lato">
              {product.price}
            </span>

            {product.originalPrice && (
              <>
                <span className="line-through text-gray-400 font-lato">
                  {product.originalPrice}
                </span>

                <span className="text-[rgb(209,167,67)] font-medium font-lato">
                  {product.discount}% OFF
                </span>
              </>
            )}

          </div>

          <p className="text-xs text-gray-500 font-lato">
            Inclusive of all taxes
          </p>

          {/* ADD TO CART */}
          {/* <button className="bg-[rgb(209,167,67)] hover:bg-[#b78e34] text-black font-semibold px-8 py-3 transition"> */}
          <button className="bg-fab-pink hover:bg-[#b78e34] text-black font-semibold px-8 py-3 transition font-lato">

            Add to Bag
          </button>

          {/* DELIVERY PIN */}
          <div className="border-t pt-6">

            <p className="text-sm text-gray-600 mb-2 font-lato">
              Check Delivery
            </p>

            <div className="flex gap-2">

              <input
                placeholder="Enter Pincode"
                className="border px-4 py-2 flex-1"
              />

              <button className="font-lato bg-black text-white px-4 py-2 text-sm">
                Check
              </button>

            </div>

          </div>

        </div>

      </div>

      {/* DESCRIPTION SECTION */}
      <div className="max-w-7xl mx-auto mt-16 px-6 grid lg:grid-cols-3 gap-12">

        {/* DESCRIPTION */}
        <div className="lg:col-span-2 space-y-4">

          <h2 className="text-xl font-medium font-lato ">
            Product Description
          </h2>

          <p className="leading-relaxed text-fab-pink font-lato">

            {expanded
              ? product.description + " Ideal for everyday elegance or special occasions."
              : product.description.substring(0, 180) + "..."}

          </p>

          <button
            onClick={() => setExpanded(!expanded)}
            className="text-[rgb(209,167,67)] text-md font-medium"
          >
            {expanded ? "Read Less" : "Read More"}
          </button>

          {/* DETAILS */}
          <div className="pt-6 text-sm text-gray-600 space-y-2 font-lato">

            <p classname="font-lato"><strong>Material:</strong> {product.material}</p>
            <p><strong>Color:</strong> {product.color}</p>
            <p><strong>Plating:</strong> {product.plating}</p>
            <p><strong>Occasion:</strong> {product.occasion}</p>
            <p><strong>Weight:</strong> {product.weight}</p>

          </div>

        </div>

        {/* SIDE PRODUCT CARD */}
        <div className="border p-6 bg-white text-center space-y-4 font-lato">

          <img
            // src={images[1] || images[0]}
            src={mainImage}
            className="h-60 object-cover mx-auto"
            alt={product.title}
          />

          <h3 className="text-sm">
            {product.title}
          </h3>

          <div className="flex justify-center gap-2">

            <span className="font-semibold">
              {product.price}
            </span>

            {product.originalPrice && (
              <span className="line-through text-gray-400">
                {product.originalPrice}
              </span>
            )}

          </div>

          {/* <button style={{}} className="bg-[rgb(209,167,67)] w-full py-3 font-medium"> */}
            <button style={{}} className="bg-fab-pink w-full py-3 font-medium">

            Add to Bag
          </button>

        </div>

      </div>

      {/* RATINGS & REVIEWS */}
      <div className="max-w-7xl mx-auto mt-14 px-6">

        <h2 className="text-lg font-semibold mb-4">
          Ratings & Reviews
        </h2>

        <div className="border bg-white p-6">

          <p className="text-sm text-gray-600 mb-4">
            Write a review and win 100 reward points !
          </p>

          <button className="border border-[rgb(209,167,67)] text-[rgb(209,167,67)] px-6 py-2 text-sm hover:bg-[rgb(209,167,67)] hover:text-white transition">
            Write Review
          </button>

        </div>

      </div>

    </section>
  );
};

export default ProductDetail;


