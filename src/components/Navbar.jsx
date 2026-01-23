import React, { useState, useEffect } from "react";
import logo from "../assets/logo1.png";
import { NavLink, Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaRegHeart, FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when clicking outside (for mobile)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest(".mobile-menu") && !event.target.closest(".menu-button")) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMenuOpen]);

  // Brand colors
  const primaryGold = "#d5a541";
  const primaryBlack = "#0e0e0e";
  const darkGold = "#b08535";

  return (
    <>
      {/* Top Announcement Bar - Hidden on mobile for space */}
      <div className="hidden sm:block bg-gradient-to-r from-[#d5a541] to-[#b08535] text-white text-center py-2 px-4 text-xs sm:text-sm font-medium">
        🎁 Free Shipping on Orders Over $50 | New Collection Launching Soon!
      </div>

      {/* Main Navbar */}
      <nav 
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100" 
            : "bg-white border-b border-gray-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            
            {/* Left: Logo & Mobile Menu Button */}
            <div className="flex items-center">
              {/* Mobile Menu Button */}
              <button 
                className="lg:hidden p-2 -ml-2 rounded-lg hover:bg-gray-50 transition-colors menu-button"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <IoClose className="text-2xl text-gray-700" />
                ) : (
                  <FaBars className="text-xl text-gray-700" />
                )}
              </button>

              {/* Logo */}
              <div className="ml-2 lg:ml-0">
                <Link to="/" className="group">
                  <div className="relative">
                    <img
                      src={logo}
                      alt="Fabniquo Logo"
                      className="h-10 sm:h-12 lg:h-14 cursor-pointer transition-all duration-500 group-hover:scale-105"
                    />
                  </div>
                </Link>
              </div>
            </div>

            {/* Center: Desktop Navigation */}
            <div className="hidden lg:flex items-center justify-center flex-1">
              <div className="flex items-center gap-6 xl:gap-8">
                {["Men", "Women", "Kids", "New Arrivals", "Collections"].map((item) => (
                  <NavLink
                    key={item}
                    to={`/${item.toLowerCase().replace(" ", "-")}`}
                    className={({ isActive }) =>
                      `relative text-sm xl:text-[15px] font-semibold tracking-wide transition-all duration-300 group ${
                        isActive 
                          ? "text-[#d5a541]" 
                          : "text-[#0e0e0e] hover:text-[#d5a541]"
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <span className="relative z-10">{item}</span>
                        {isActive && (
                          <span 
                            className="absolute left-1/2 -translate-x-1/2 -bottom-1 w-6 h-0.5 bg-gradient-to-r from-[#d5a541] to-[#b08535] rounded-full"
                          ></span>
                        )}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#d5a541] to-[#b08535] group-hover:w-full transition-all duration-400 rounded-full"></span>
                      </>
                    )}
                  </NavLink>
                ))}
              </div>
            </div>

            {/* Right: Search & Icons */}
            <div className="flex items-center gap-2 sm:gap-4 lg:gap-6">
              
              {/* Mobile Search Button */}
              <button 
                className="lg:hidden p-2 rounded-full hover:bg-gray-50 transition-colors"
                onClick={() => setIsSearchActive(!isSearchActive)}
              >
                <CiSearch className="text-xl text-gray-700" />
              </button>

              {/* Desktop Search */}
              <div className="hidden lg:block relative transition-all duration-300">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search products..."
                    className="w-48 xl:w-56 py-2.5 pl-4 pr-12 bg-gray-50 border border-gray-200 rounded-full outline-none transition-all duration-300 text-sm hover:border-[#d5a54140] focus:border-[#d5a541] focus:shadow-[0_0_15px_#d5a54130]"
                  />
                  <CiSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-xl text-gray-600" />
                </div>
              </div>

              {/* Action Icons */}
              <div className="flex items-center gap-1 sm:gap-3 lg:gap-4">
                {/* Profile - Hidden on smallest screens */}
                <button className="hidden sm:block relative p-2 sm:p-2.5 rounded-full hover:bg-gray-50 group transition-all duration-300">
                  <CgProfile className="text-xl sm:text-2xl text-gray-700 group-hover:text-[#d5a541] transition-colors" />
                  <span className="absolute -top-1 -right-1 w-2 h-2 bg-[#d5a541] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                </button>
                
                {/* Wishlist */}
                <button className="relative p-2 sm:p-2.5 rounded-full hover:bg-gray-50 group transition-all duration-300">
                  <FaRegHeart className="text-lg sm:text-xl text-gray-700 group-hover:text-[#d5a541] transition-colors" />
                  <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                </button>
                
                {/* Cart */}
                <button className="relative p-2 sm:p-2.5 rounded-full hover:bg-gray-50 group transition-all duration-300">
                  <AiOutlineShoppingCart className="text-xl sm:text-2xl text-gray-700 group-hover:text-[#d5a541] transition-colors" />
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-[#d5a541] to-[#b08535] text-white text-xs font-bold rounded-full flex items-center justify-center">
                    3
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Search Bar */}
          {isSearchActive && (
            <div className="lg:hidden px-4 py-3 border-t border-gray-100 bg-white">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for products..."
                  className="w-full py-3 pl-4 pr-12 bg-gray-50 border border-gray-200 rounded-full outline-none text-sm focus:border-[#d5a541] focus:shadow-[0_0_10px_#d5a54120]"
                  autoFocus
                />
                <CiSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-xl text-gray-600" />
              </div>
            </div>
          )}

          {/* Mobile Menu */}
          <div 
            className={`lg:hidden mobile-menu fixed inset-0 top-16 sm:top-20 bg-white z-40 transform transition-transform duration-300 ease-in-out ${
              isMenuOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="h-full overflow-y-auto">
              <div className="px-6 py-8">
                <div className="space-y-1">
                  {["Men", "Women", "Kids", "New Arrivals", "Collections", "Sale", "About Us", "Contact"].map((item) => (
                    <NavLink
                      key={item}
                      to={`/${item.toLowerCase().replace(" ", "-")}`}
                      className={({ isActive }) =>
                        `block py-4 px-4 text-base font-medium rounded-xl transition-all duration-300 border-l-4 ${
                          isActive 
                            ? "bg-gradient-to-r from-[#d5a54110] to-[#b0853510] text-[#d5a541] border-[#d5a541] pl-6" 
                            : "text-[#0e0e0e] border-transparent hover:bg-gray-50 hover:pl-6"
                        }`
                      }
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item}
                    </NavLink>
                  ))}
                </div>

                {/* Mobile-only additional links */}
                <div className="mt-8 pt-8 border-t border-gray-100">
                  <div className="flex flex-col gap-4">
                    <button className="flex items-center gap-3 py-3 px-4 text-gray-700 hover:bg-gray-50 rounded-xl transition-colors">
                      <CgProfile className="text-xl" />
                      <span>My Account</span>
                    </button>
                    <button className="flex items-center gap-3 py-3 px-4 text-gray-700 hover:bg-gray-50 rounded-xl transition-colors">
                      <CiSearch className="text-xl" />
                      <span>Search</span>
                    </button>
                  </div>
                  
                  {/* Contact info for mobile */}
                  <div className="mt-8 text-sm text-gray-600">
                    <p className="font-medium text-gray-900 mb-2">Need help?</p>
                    <p>📞 Call: +1 (555) 123-4567</p>
                    <p>✉️ Email: support@fabniquo.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Menu Overlay */}
          {isMenuOpen && (
            <div 
              className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
              onClick={() => setIsMenuOpen(false)}
            />
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;