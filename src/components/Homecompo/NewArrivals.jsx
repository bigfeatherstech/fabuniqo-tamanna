import React, { useState } from 'react';
import { Heart, ShoppingBag, Eye, Star, Zap } from 'lucide-react';

const NewArrivals = () => {
  // Your brand colors
  const fabuniqoGold = "rgb(209,167,67)";

  // New Arrivals Products
  const newArrivals = [
    { id: 1, title: "Silk Blazer", category: "Men", price: 349.99, discount: 22, rating: 4.8, image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=300&auto=format&fit=crop" },
    { id: 2, title: "Knit Dress", category: "Women", price: 299.99, discount: 25, rating: 4.9, image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=300&auto=format&fit=crop" },
    { id: 3, title: "Chelsea Boots", category: "Men", price: 289.99, discount: 19, rating: 4.7, image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=300&auto=format&fit=crop" },
    { id: 4, title: "Evening Gown", category: "Women", price: 599.99, discount: 25, rating: 4.9, image: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=300&auto=format&fit=crop" },
    { id: 5, title: "Denim Jacket", category: "Unisex", price: 229.99, discount: 21, rating: 4.6, image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=300&auto=format&fit=crop" },
    { id: 6, title: "Leather Bag", category: "Accessories", price: 459.99, discount: 21, rating: 4.8, image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=300&auto=format&fit=crop" },
    { id: 7, title: "Wool Trousers", category: "Men", price: 189.99, discount: 21, rating: 4.5, image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=300&auto=format&fit=crop" },
    { id: 8, title: "Sunglasses", category: "Accessories", price: 179.99, discount: 22, rating: 4.7, image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=300&auto=format&fit=crop" },
    { id: 9, title: "Cashmere Sweater", category: "Women", price: 199.99, discount: 20, rating: 4.8, image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=300&auto=format&fit=crop" },
    { id: 10, title: "Leather Wallet", category: "Accessories", price: 89.99, discount: 15, rating: 4.6, image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=300&auto=format&fit=crop" },
    { id: 11, title: "Casual Shirt", category: "Men", price: 129.99, discount: 18, rating: 4.4, image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=300&auto=format&fit=crop" },
    { id: 12, title: "Summer Dress", category: "Women", price: 179.99, discount: 23, rating: 4.7, image: "https://images.unsplash.com/photo-1569317002804-ab77bcf1bce4?w=300&auto=format&fit=crop" },
  ];

  // Format price
  const formatPrice = (price) => {
    return `$${price.toFixed(2)}`;
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[rgb(209,167,67)]/10 to-transparent rounded-full border border-[rgb(209,167,67)]/20 mb-4">
            <Zap className="w-4 h-4 text-[rgb(209,167,67)] animate-pulse" />
            <span className="font-Noto text-xs font-medium text-[rgb(209,167,67)] tracking-wider">
              NEW ARRIVALS
            </span>
          </div>

          <h2 className="font-playfair text-2xl md:text-3xl font-semibold text-[#0e0e0e] mb-3">
            Latest <span style={{ color: fabuniqoGold }}>Collections</span>
          </h2>

          <p className="font-Noto text-sm text-gray-600">
            Fresh styles just added to our collection
          </p>
        </div>

        {/* Grid Layout - Like Amazon/Flipkart */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {newArrivals.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-200 group"
            >
              {/* Product Image */}
              <div className="relative aspect-square overflow-hidden bg-gray-50">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Discount Badge */}
                {product.discount && (
                  <div className="absolute top-3 left-3">
                    <span
                      className="px-3 py-1 text-xs font-Noto font-bold text-white rounded"
                      style={{ backgroundColor: fabuniqoGold }}
                    >
                      -{product.discount}%
                    </span>
                  </div>
                )}

                {/* Quick Actions */}
                <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    className="p-2 bg-white rounded-full hover:bg-[rgb(209,167,67)] hover:text-white transition-colors duration-200 shadow-sm"
                    aria-label="Add to wishlist"
                  >
                    <Heart className="w-3 h-3" />
                  </button>
                  <button
                    className="p-2 bg-white rounded-full hover:bg-[rgb(209,167,67)] hover:text-white transition-colors duration-200 shadow-sm"
                    aria-label="Quick view"
                  >
                    <Eye className="w-3 h-3" />
                  </button>
                </div>


              </div>

              {/* Product Info */}
              <div className="p-4">
                <div className="mb-1">
                  <span className="font-Noto text-xs text-gray-500 uppercase">
                    {product.category}
                  </span>
                </div>

                <h3 className="font-Noto text-sm font-semibold text-[#0e0e0e] line-clamp-1 mb-2 group-hover:text-[rgb(209,167,67)] transition-colors">
                  {product.title}
                </h3>

                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="font-Noto text-lg font-bold text-[#0e0e0e]">
                      {formatPrice(product.price)}
                    </span>
                    {product.discount && (
                      <span className="font-Noto text-xs text-gray-400 line-through">
                        ${(product.price / (1 - product.discount / 100)).toFixed(2)}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3 text-yellow-400 fill-current" />
                    <span className="font-Noto text-xs font-medium">{product.rating}</span>
                  </div>
                </div>

                {/* Add to Cart Button */}
                <button
                  className="w-full py-2 text-xs font-Noto font-semibold rounded bg-gray-100 text-gray-800 hover:bg-[rgb(209,167,67)] hover:text-white transition-all duration-200 flex items-center justify-center gap-2 group-hover:bg-[rgb(209,167,67)] group-hover:text-white"
                >
                  <ShoppingBag className="w-3 h-3" />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button
            className="relative px-8 py-3 font-Noto font-bold text-sm border overflow-hidden group transition-all duration-500 rounded-full active:scale-95 hover:shadow-[0_10px_20px_rgba(209,167,67,0.2)]"
            style={{
              borderColor: 'rgb(209,167,67)', // Using your fabuniqoGold color
              color: 'rgb(209,167,67)'
            }}
          >
            {/* Text Layer - Z-index ensures it stays above the fill */}
            <span className="relative z-10 group-hover:text-white transition-colors duration-300 uppercase tracking-widest">
              View All Products
            </span>

            {/* Background Liquid Fill - Expands from left to right */}
            <span
              className="absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"
              style={{ backgroundColor: 'rgb(209,167,67)' }}
            ></span>

            {/* Premium Shimmer Streak - Sweeps across on hover */}
            <span className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:left-[100%] transition-all duration-1000 ease-in-out"></span>
          </button>
          {/* <button 
            className="px-8 py-3 font-Noto font-medium text-sm border border-[rgb(209,167,67)] text-[rgb(209,167,67)] hover:bg-[rgb(209,167,67)] hover:text-white transition-all duration-300 rounded-full"
            style={{ borderColor: fabuniqoGold }}
          >
            View All Products
          </button> */}
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;