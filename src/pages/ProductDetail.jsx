
// import React, { useState } from "react";
// import { Heart, Star } from "lucide-react";

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

//   const description =
//     "A touch of timeless charm to your jewelry collection with this 925 Pure Silver Chain Pendant Set. Designed with fine detailing and a smooth finish, it offers a graceful look that complements both ethnic and western outfits.";

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

//           <div className="relative flex-1 bg-white p-6 border">

//             <img
//               src={mainImage}
//               className="w-full h-[500px] object-cover transition duration-500"
//             />

//             <button className="absolute top-4 right-4 bg-white p-2 rounded-full shadow">
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











import React, { useState } from "react";
import { Heart, Star, ZoomIn } from "lucide-react";

const ProductDetail = () => {

  const images = [
    "https://images.unsplash.com/photo-1611591437281-460bfbe1220a",
    "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1",
    "https://images.unsplash.com/photo-1603561596112-d34f8f7b1c36",
    "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f",
    "https://images.unsplash.com/photo-1617038220319-276d3cfab638"
  ];

  const [mainImage, setMainImage] = useState(images[0]);
  const [expanded, setExpanded] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
  const [showZoom, setShowZoom] = useState(false);

  const description =
    "A touch of timeless charm to your jewelry collection with this 925 Pure Silver Chain Pendant Set. Designed with fine detailing and a smooth finish, it offers a graceful look that complements both ethnic and western outfits.";

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    
    setZoomPosition({ x, y });
  };

  return (
    <section className="bg-[#fafafa] pb-16">

      {/* HERO BANNER */}

      <div className="w-full bg-[#f5f5f5] py-8 mb-10">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6">

          <div>
            <h2 className="text-4xl font-bold text-black">
              WOMEN'S DAY
            </h2>

            <h3 className="text-5xl font-extrabold text-pink-600">
              Sale
            </h3>

            <p className="text-sm mt-1 text-gray-700">
              UP TO 50% OFF
            </p>
          </div>

          <div className="text-right">
            <h3 className="text-2xl font-bold text-black">
              Bold brands.
            </h3>

            <h3 className="text-2xl font-bold text-black">
              Bolder discounts.
            </h3>

            <p className="text-pink-600 text-2xl font-bold mt-2">
              Shop Now!
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
                src={img}
                onMouseEnter={() => setMainImage(img)}
                className={`w-20 h-20 object-cover border cursor-pointer transition 
                ${mainImage === img
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
                src={mainImage}
                className="w-full h-[500px] object-cover transition duration-500"
                alt="Product"
              />

              {/* Zoom Overlay - Shows on Hover */}
              {showZoom && (
                <>
                  {/* Zoom Lens */}
                  <div 
                    className="absolute inset-0 bg-white bg-opacity-10 pointer-events-none"
                    style={{
                      backgroundImage: `url(${mainImage})`,
                      backgroundPosition: `${zoomPosition.x}% ${zoomPosition.y}%`,
                      backgroundSize: '200%',
                      backgroundRepeat: 'no-repeat'
                    }}
                  />
                  
                  {/* Plus Icon */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="bg-black bg-opacity-50 rounded-full p-3">
                      <ZoomIn className="text-white" size={24} />
                    </div>
                  </div>
                </>
              )}
            </div>

            <button className="absolute top-10 right-10 bg-white p-2 rounded-full shadow hover:bg-gray-100 transition">
              <Heart size={18} />
            </button>
          </div>

        </div>

        {/* PRODUCT INFO */}

        <div className="space-y-6">

          <h1 className="text-2xl font-medium text-zinc-900">
            925 Silver Pearl Pendant Necklace with Earrings
          </h1>

          {/* RATING */}

          <div className="flex items-center gap-2 text-yellow-500">
            <Star size={16} fill="currentColor" />
            <Star size={16} fill="currentColor" />
            <Star size={16} fill="currentColor" />
            <Star size={16} fill="currentColor" />
            <Star size={16} />
            <span className="text-sm text-gray-500 ml-2">(128 Reviews)</span>
          </div>

          {/* PRICE */}

          <div className="flex items-center gap-4">

            <span className="text-3xl font-semibold text-black">
              ₹5000
            </span>

            <span className="line-through text-gray-400">
              ₹10000
            </span>

            <span className="text-[rgb(209,167,67)] font-medium">
              50% OFF
            </span>

          </div>

          <p className="text-xs text-gray-500">
            Inclusive of all taxes
          </p>

          {/* ADD TO CART */}

          <button className="bg-[rgb(209,167,67)] hover:bg-[#b78e34] text-black font-semibold px-8 py-3 transition">
            Add to Bag
          </button>

          {/* DELIVERY PIN */}

          <div className="border-t pt-6">

            <p className="text-sm text-gray-600 mb-2">
              Check Delivery
            </p>

            <div className="flex gap-2">

              <input
                placeholder="Enter Pincode"
                className="border px-4 py-2 flex-1"
              />

              <button className="bg-black text-white px-4 py-2 text-sm">
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

          <h2 className="text-xl font-medium">
            Product Description
          </h2>

          <p className="text-gray-600 leading-relaxed">

            {expanded
              ? description +
              " Ideal for everyday elegance or special occasions."
              : description.substring(0, 180) + "..."}

          </p>

          <button
            onClick={() => setExpanded(!expanded)}
            className="text-[rgb(209,167,67)] text-sm font-medium"
          >
            {expanded ? "Read Less" : "Read More"}
          </button>

          {/* DETAILS */}

          <div className="pt-6 text-sm text-gray-600 space-y-2">

            <p><strong>Material:</strong> 925 Sterling Silver</p>
            <p><strong>Color:</strong> Silver</p>
            <p><strong>Plating:</strong> Rose Gold</p>
            <p><strong>Occasion:</strong> Everyday Essentials</p>
            <p><strong>Weight:</strong> 5 grams</p>

          </div>

        </div>

        {/* SIDE PRODUCT CARD */}

        <div className="border p-6 bg-white text-center space-y-4">

          <img
            src={images[1]}
            className="h-60 object-cover mx-auto"
          />

          <h3 className="text-sm">
            925 Silver Pendant Necklace
          </h3>

          <div className="flex justify-center gap-2">

            <span className="font-semibold">
              ₹5000
            </span>

            <span className="line-through text-gray-400">
              ₹10000
            </span>

          </div>

          <button className="bg-[rgb(209,167,67)] w-full py-3 font-medium">
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