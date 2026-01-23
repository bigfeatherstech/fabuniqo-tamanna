import React, { useState } from 'react';
import { Star, ShoppingBag, Heart, Eye, TrendingUp } from 'lucide-react';

const BestSellers = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const bestSellers = [
    { id: 1, name: 'Silk Evening Gown', category: 'Dresses', price: 299.99, discount: 25, rating: 4.9, sold: 124, image: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=300&auto=format&fit=crop' },
    { id: 2, name: 'Leather Jacket', category: 'Outerwear', price: 189.99, discount: 20, rating: 4.8, sold: 98, image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=300&auto=format&fit=crop' },
    { id: 3, name: 'Designer Handbag', category: 'Accessories', price: 459.99, discount: 15, rating: 4.9, sold: 156, image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=300&auto=format&fit=crop' },
    { id: 4, name: 'Premium Sneakers', category: 'Footwear', price: 129.99, discount: 30, rating: 4.7, sold: 203, image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=300&auto=format&fit=crop' },
    { id: 5, name: 'Cashmere Sweater', category: 'Knits', price: 179.99, discount: 20, rating: 4.8, sold: 87, image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=300&auto=format&fit=crop' },
    { id: 6, name: 'Linen Shirt', category: 'Tops', price: 89.99, discount: 15, rating: 4.6, sold: 145, image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=300&auto=format&fit=crop' },
    { id: 7, name: 'Wool Coat', category: 'Outerwear', price: 349.99, discount: 22, rating: 4.8, sold: 76, image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=300&auto=format&fit=crop' },
    { id: 8, name: 'Evening Dress', category: 'Dresses', price: 399.99, discount: 28, rating: 4.9, sold: 112, image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=300&auto=format&fit=crop' },
  ];

  const filters = ['all', 'dresses', 'outerwear', 'accessories', 'footwear', 'knits', 'tops'];

  // Format price
  const formatPrice = (price) => {
    return `$${price.toFixed(2)}`;
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header with filter */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-10">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[rgb(209,167,67)]/10 to-transparent rounded-full border border-[rgb(209,167,67)]/20 mb-4">
              <TrendingUp className="w-4 h-4 text-[rgb(209,167,67)]" />
              <span className="font-Noto text-xs font-medium text-[rgb(209,167,67)] tracking-wider">
                BEST SELLERS
              </span>
            </div>
            <h2 className="font-playfair text-2xl md:text-3xl font-semibold text-[#0e0e0e] mb-3">
              Most Loved This <span style={{ color: 'rgb(209,167,67)' }}>Season</span>
            </h2>
            <p className="font-Noto text-sm text-gray-600">
              Products everyone is talking about
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 justify-center md:justify-end">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-3 py-1.5 rounded-full font-Noto text-xs font-medium transition-all duration-200 ${activeFilter === filter
                    ? 'bg-[rgb(209,167,67)] text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-900'
                  }`}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid - Matching NewArrivals Style */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {bestSellers.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-200 group"
            >
              {/* Product Image */}
              <div className="relative aspect-square overflow-hidden bg-gray-50">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Badges */}
                <div className="absolute top-3 left-3">
                  <span
                    className="px-3 py-1 text-xs font-Noto font-bold text-white rounded"
                    style={{ backgroundColor: 'rgb(209,167,67)' }}
                  >
                    -{product.discount}%
                  </span>
                </div>

                {/* Sold Badge */}
                <div className="absolute top-3 right-3">
                  <span className="px-3 py-1 bg-black/80 text-white text-xs font-Noto rounded-full backdrop-blur-sm">
                    🔥 {product.sold} sold
                  </span>
                </div>

                {/* Quick Actions */}
                <div className="absolute top-12 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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

                {/* Quick Add on Image Hover */}
                {/* <button 
                  className="absolute bottom-0 left-0 right-0 bg-[rgb(209,167,67)] text-white py-2 text-xs font-Noto font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-full group-hover:translate-y-0 flex items-center justify-center gap-2"
                  style={{ backgroundColor: 'rgb(209,167,67)' }}
                >
                  <ShoppingBag className="w-3 h-3" />
                  Quick Add
                </button> */}
              </div>

              {/* Product Info */}
              <div className="p-4">
                <div className="mb-1">
                  <span className="font-Noto text-xs text-gray-500 uppercase">
                    {product.category}
                  </span>
                </div>

                <h3 className="font-Noto text-sm font-semibold text-[#0e0e0e] line-clamp-1 mb-2 group-hover:text-[rgb(209,167,67)] transition-colors">
                  {product.name}
                </h3>

                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="font-Noto text-lg font-bold text-[#0e0e0e]">
                      {formatPrice(product.price)}
                    </span>
                    <span className="font-Noto text-xs text-gray-400 line-through">
                      ${(product.price / (1 - product.discount / 100)).toFixed(2)}
                    </span>
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

        {/* View All Button - Matching NewArrivals Style */}
        <div className="text-center mt-12">
          <button
            className="relative px-8 py-3 font-Noto font-bold text-sm border border-[#D1A743] text-[#D1A743] group overflow-hidden transition-all duration-500 rounded-full hover:shadow-[0_10px_20px_rgba(209,167,67,0.2)] active:scale-95"
          >
            {/* Text Layer */}
            <span className="relative z-10 group-hover:text-white transition-colors duration-300 uppercase tracking-widest">
              View All Best Sellers
            </span>

            {/* Background Fill */}
            <span className="absolute inset-0 bg-[#D1A743] scale-x-0 group-hover:scale-x-100 top-0 -left-[100%] transition-transform duration-500 "></span>

            {/* Shimmer / Light Streak Effect */}
            <span className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:left-[100%] transition-all duration-700 ease-in-out"></span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default BestSellers;

