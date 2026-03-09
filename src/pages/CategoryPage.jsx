// import React, { useState } from "react";
// import { Heart } from "lucide-react";

// const CategoryPage = () => {

//   const products = [
//     {
//       id: 1,
//       name: "Diamond Swirl Ring",
//       type: "Rings",
//       price: 14420,
//       oldPrice: 18000,
//       discount: 20,
//       image:
//         "https://images.unsplash.com/photo-1605100804763-247f67b3557e"
//     },
//     {
//       id: 2,
//       name: "Music Notes Earrings",
//       type: "Earrings",
//       price: 6012,
//       oldPrice: 9000,
//       discount: 30,
//       image:
//         "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f"
//     },
//     {
//       id: 3,
//       name: "Gold Stud Earrings",
//       type: "Earrings",
//       price: 6512,
//       oldPrice: 8500,
//       discount: 25,
//       image:
//         "https://images.unsplash.com/photo-1617038220319-276d3cfab638"
//     },
//     {
//       id: 4,
//       name: "Radiant Diamond Ring",
//       type: "Rings",
//       price: 16486,
//       oldPrice: 20000,
//       discount: 18,
//       image:
//         "https://images.unsplash.com/photo-1603561596112-d34f8f7b1c36"
//     },
//     {
//       id: 5,
//       name: "Triangle Pendant Necklace",
//       type: "Necklace",
//       price: 6147,
//       oldPrice: 8458,
//       discount: 27,
//       image:
//         "https://images.unsplash.com/photo-1611591437281-460bfbe1220a"
//     },
//     {
//       id: 6,
//       name: "V Gold Necklace",
//       type: "Necklace",
//       price: 9500,
//       oldPrice: 12000,
//       discount: 20,
//       image:
//         "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1"
//     }
//   ];

//   const [selectedType, setSelectedType] = useState("");
//   const [selectedPrice, setSelectedPrice] = useState("");
//   const [selectedDiscount, setSelectedDiscount] = useState("");

//   const filteredProducts = products.filter((p) => {

//     const typeMatch = selectedType ? p.type === selectedType : true;

//     const priceMatch =
//       selectedPrice === "under5000"
//         ? p.price < 5000
//         : selectedPrice === "5000to10000"
//         ? p.price >= 5000 && p.price <= 10000
//         : selectedPrice === "above10000"
//         ? p.price > 10000
//         : true;

//     const discountMatch =
//       selectedDiscount === "10"
//         ? p.discount >= 10
//         : selectedDiscount === "20"
//         ? p.discount >= 20
//         : selectedDiscount === "30"
//         ? p.discount >= 30
//         : true;

//     return typeMatch && priceMatch && discountMatch;
//   });

//   return (
//     <section className="bg-[#fafafa] py-10 font-main">

//       <div className="max-w-7xl mx-auto px-6 grid grid-cols-12 gap-10">

//         {/* FILTERS */}

//         <div className="col-span-3 hidden lg:block">

//           <h3 className="text-sm font-semibold mb-6 tracking-wide">
//             FILTERS
//           </h3>

//           {/* PRODUCT TYPE */}

//           <div className="mb-8">

//             <h4 className="font-medium mb-3 text-zinc-800">
//               Product Type
//             </h4>

//             {["Rings", "Earrings", "Necklace"].map((type) => (

//               <label
//                 key={type}
//                 className="flex items-center gap-2 mb-2 text-sm text-zinc-600 cursor-pointer"
//               >

//                 <input
//                   type="radio"
//                   name="type"
//                   onChange={() => setSelectedType(type)}
//                 />

//                 {type}

//               </label>

//             ))}
//           </div>

//           {/* PRICE */}

//           <div className="mb-8">

//             <h4 className="font-medium mb-3 text-zinc-800">
//               Price
//             </h4>

//             <label className="block text-sm mb-2 text-zinc-600">
//               <input
//                 type="radio"
//                 name="price"
//                 onChange={() => setSelectedPrice("under5000")}
//               />{" "}
//               Under ₹5,000
//             </label>

//             <label className="block text-sm mb-2 text-zinc-600">
//               <input
//                 type="radio"
//                 name="price"
//                 onChange={() => setSelectedPrice("5000to10000")}
//               />{" "}
//               ₹5,000 - ₹10,000
//             </label>

//             <label className="block text-sm text-zinc-600">
//               <input
//                 type="radio"
//                 name="price"
//                 onChange={() => setSelectedPrice("above10000")}
//               />{" "}
//               Above ₹10,000
//             </label>

//           </div>

//           {/* DISCOUNT */}

//           <div>

//             <h4 className="font-medium mb-3 text-zinc-800">
//               Discount
//             </h4>

//             <label className="block text-sm mb-2 text-zinc-600">
//               <input
//                 type="radio"
//                 name="discount"
//                 onChange={() => setSelectedDiscount("10")}
//               />{" "}
//               10% or more
//             </label>

//             <label className="block text-sm mb-2 text-zinc-600">
//               <input
//                 type="radio"
//                 name="discount"
//                 onChange={() => setSelectedDiscount("20")}
//               />{" "}
//               20% or more
//             </label>

//             <label className="block text-sm text-zinc-600">
//               <input
//                 type="radio"
//                 name="discount"
//                 onChange={() => setSelectedDiscount("30")}
//               />{" "}
//               30% or more
//             </label>

//           </div>

//         </div>

//         {/* PRODUCT GRID */}

//         <div className="col-span-12 lg:col-span-9">

//           <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">

//             {filteredProducts.map((product) => (

//               <div
//                 key={product.id}
//                 className="group bg-white p-4 border hover:shadow-md transition"
//               >

//                 {/* IMAGE */}

//                 <div className="relative">

//                   <img
//                     src={product.image}
//                     className="w-full h-60 object-contain group-hover:scale-105 transition"
//                   />

//                   <button className="absolute top-2 right-2 bg-white p-2 rounded-full shadow">
//                     <Heart size={16} />
//                   </button>

//                 </div>

//                 {/* INFO */}

//                 <div className="mt-4 space-y-1">

//                   <p className="text-sm text-zinc-800">
//                     {product.name}
//                   </p>

//                   <div className="flex items-center gap-2 text-sm">

//                     <span className="font-semibold text-black">
//                       ₹{product.price}
//                     </span>

//                     <span className="line-through text-gray-400 text-xs">
//                       ₹{product.oldPrice}
//                     </span>

//                     <span className="text-[rgb(209,167,67)] text-xs font-medium">
//                       {product.discount}% OFF
//                     </span>

//                   </div>

//                   <p className="text-xs text-[rgb(209,167,67)]">
//                     Check Delivery Date
//                   </p>

//                 </div>

//               </div>

//             ))}

//           </div>

//         </div>

//       </div>

//     </section>
//   );
// };

// export default CategoryPage;

















import React, { useState } from "react";

const products = [
  { id: 1, name: "Diamond Ring", price: 14200, type: "Rings", discount: 10, img: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a" },
  { id: 2, name: "Gold Earrings", price: 6012, type: "Earrings", discount: 20, img: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1" },
  { id: 3, name: "Gold Pendant", price: 6147, type: "Pendants", discount: 5, img: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1" },
  { id: 4, name: "Necklace Set", price: 11200, type: "Necklaces", discount: 15, img: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a" },
    { id: 5, name: "Necklace Set", price: 11200, type: "Necklaces", discount: 15, img: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a" },

      { id: 6, name: "Necklace Set", price: 11200, type: "Necklaces", discount: 15, img: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a" },
  { id: 7, name: "Gold Pendant", price: 6147, type: "Pendants", discount: 5, img: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1" },
  { id: 8, name: "Gold Pendant", price: 6147, type: "Pendants", discount: 5, img: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1" },

];

const CategoryPage = () => {

  const [selectedType, setSelectedType] = useState([]);
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [selectedDiscount, setSelectedDiscount] = useState(null);
  const [activeTopFilter, setActiveTopFilter] = useState("All");

  const clearFilters = () => {
    setSelectedType([]);
    setSelectedPrice(null);
    setSelectedDiscount(null);
    setActiveTopFilter("All");
  };

  const handleTypeChange = (type) => {
    if (selectedType.includes(type)) {
      setSelectedType(selectedType.filter((t) => t !== type));
    } else {
      setSelectedType([...selectedType, type]);
    }
  };

  const filteredProducts = products.filter((p) => {

    if (selectedType.length && !selectedType.includes(p.type)) return false;

    if (selectedPrice === "under5k" && p.price > 5000) return false;
    if (selectedPrice === "5k10k" && (p.price < 5000 || p.price > 10000)) return false;
    if (selectedPrice === "10k20k" && (p.price < 10000 || p.price > 20000)) return false;

    if (selectedDiscount && p.discount < selectedDiscount) return false;

    return true;
  });

  return (
    <div className="max-w-[1400px] mx-auto px-4 py-8">

      {/* TOP FILTER BUTTONS */}

      <div className="flex flex-wrap gap-3 mb-6">
        {["All", "Fast Delivery", "Latest Designs", "Store Pickup", "Try at Home"].map((item) => (
          <button
            key={item}
            onClick={() => setActiveTopFilter(item)}
            className={`px-4 py-2 rounded-full border text-sm transition 
              ${activeTopFilter === item 
              ? "bg-[#D1A743] text-white border-[#D1A743]" 
              : "bg-white text-gray-700 hover:border-[#D1A743]"}`}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="flex gap-8">

        {/* SIDEBAR FILTERS */}

        <div className="w-[260px] hidden lg:block">

          <div className="flex justify-between mb-4">
            <h3 className="font-semibold text-gray-700">FILTERS</h3>

            <button
              onClick={clearFilters}
              className="text-sm text-pink-500 hover:underline"
            >
              CLEAR ALL
            </button>
          </div>

          {/* PRICE FILTER */}

          <div className="mb-8">
            <h4 className="font-medium mb-3">Price</h4>

            <label className="block mb-2">
              <input
                type="radio"
                name="price"
                onChange={() => setSelectedPrice("under5k")}
              />{" "}
              Under ₹5,000
            </label>

            <label className="block mb-2">
              <input
                type="radio"
                name="price"
                onChange={() => setSelectedPrice("5k10k")}
              />{" "}
              ₹5,000 - ₹10,000
            </label>

            <label className="block mb-2">
              <input
                type="radio"
                name="price"
                onChange={() => setSelectedPrice("10k20k")}
              />{" "}
              ₹10,000 - ₹20,000
            </label>
          </div>

          {/* PRODUCT TYPE */}

          <div className="mb-8">
            <h4 className="font-medium mb-3">Product Type</h4>

            {["Rings", "Earrings", "Necklaces", "Pendants"].map((type) => (
              <label key={type} className="block mb-2">

                <input
                  type="checkbox"
                  checked={selectedType.includes(type)}
                  onChange={() => handleTypeChange(type)}
                />

                <span className="ml-2">{type}</span>

              </label>
            ))}
          </div>

          {/* DISCOUNT */}

          <div>
            <h4 className="font-medium mb-3">Discounts</h4>

            <label className="block mb-2">
              <input type="radio" name="discount" onChange={() => setSelectedDiscount(10)} />
              <span className="ml-2">10% or more</span>
            </label>

            <label className="block mb-2">
              <input type="radio" name="discount" onChange={() => setSelectedDiscount(20)} />
              <span className="ml-2">20% or more</span>
            </label>

          </div>

        </div>

        {/* PRODUCTS */}

        <div className="flex-1">

          {/* SORT */}

          <div className="flex justify-end mb-6">

            <select className="border rounded-md px-3 py-2 text-sm">
              <option>Sort By: Featured</option>
              <option>Price Low → High</option>
              <option>Price High → Low</option>
            </select>

          </div>

          {/* PRODUCT GRID */}

          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">

            {filteredProducts.map((product) => (

              <div
                key={product.id}
                className="border rounded-xl p-4 hover:shadow-lg transition"
              >

                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-[220px] object-contain"
                />

                <h3 className="mt-3 font-medium">{product.name}</h3>

                <p className="text-[#D1A743] font-semibold">
                  ₹{product.price.toLocaleString()}
                </p>

              </div>

            ))}

          </div>

        </div>

      </div>

    </div>
  );
};

export default CategoryPage;