
// import React from "react";
// import { 
//   FaFacebookF, 
//   FaTwitter, 
//   FaLinkedinIn, 
//   FaInstagram,
//   FaYoutube,
//   FaGlobeAmericas,
//   FaMapMarkerAlt,
//   FaPhone,
//   FaEnvelope,
//   FaShippingFast,
//   FaCertificate,
//   FaShieldAlt
// } from "react-icons/fa";

// export default function Footer() {
//   return (
//     <footer className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 pt-16 pb-8">
//       {/* Background Effects */}
//       <div className="absolute inset-0 overflow-hidden">
//         {/* Grid Pattern */}
//         <div className="absolute inset-0 opacity-5">
//           <div className="absolute inset-0" style={{
//             backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
//                              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
//             backgroundSize: '40px 40px',
//           }}></div>
//         </div>
        
//         {/* Floating Orbs */}
//         <div className="absolute -top-20 -left-20 w-64 h-64 bg-gradient-to-r from-blue-600/10 to-amber-500/5 rounded-full blur-3xl"></div>
//         <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-gradient-to-r from-amber-500/5 to-blue-600/10 rounded-full blur-3xl"></div>
        
//         {/* Animated Lines */}
//         <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
//       </div>

//       <div className="container mx-auto px-4 lg:px-8 relative z-10">
//         {/* Main Footer Content */}
//         <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16">
//           {/* Brand Column */}
//           <div className="space-y-6">
//             <div className="flex items-center gap-3">
//               <div className="relative">
//                 <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-amber-500 rounded-lg blur opacity-30"></div>
//                 <div className="relative bg-gradient-to-r from-blue-600 to-amber-500 p-2 rounded-lg">
//                   <img 
//                     src="https://ssmoderno.com/wp-content/uploads/2025/07/cropped-SSM-Logo-Final-scaled-1-768x173.jpg" 
//                     alt="ShivaSun Logo" 
//                     className="h-10 w-auto"
//                   />
//                 </div>
//               </div>
//               <div>
//                 <h3 className="text-2xl font-bold text-white">ShivaSun</h3>
//                 <p className="text-amber-300 text-sm font-semibold">Global Trade Solutions</p>
//               </div>
//             </div>
            
//             <p className="text-gray-400 text-sm leading-relaxed">
//               Redefining global commerce with premium import-export solutions, 
//               connecting markets worldwide with excellence and reliability.
//             </p>
            
//             {/* Trust Badges */}
//             <div className="grid grid-cols-3 gap-4 pt-4">
//               <div className="text-center p-3 bg-white/5 rounded-lg backdrop-blur-sm">
//                 <div className="text-amber-400 text-lg mb-1">⭐</div>
//                 <div className="text-white text-xs font-semibold">ISO 9001</div>
//               </div>
//               <div className="text-center p-3 bg-white/5 rounded-lg backdrop-blur-sm">
//                 <div className="text-blue-400 text-lg mb-1">🛡️</div>
//                 <div className="text-white text-xs font-semibold">Certified</div>
//               </div>
//               <div className="text-center p-3 bg-white/5 rounded-lg backdrop-blur-sm">
//                 <div className="text-green-400 text-lg mb-1">🌍</div>
//                 <div className="text-white text-xs font-semibold">Global</div>
//               </div>
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h4 className="text-lg font-bold text-white mb-6 pb-3 border-b border-white/10 relative">
//               <span className="relative">
//                 Quick Links
//                 <span className="absolute -bottom-3 left-0 w-8 h-1 bg-gradient-to-r from-amber-400 to-yellow-300 rounded-full"></span>
//               </span>
//             </h4>
//             <div className="space-y-3">
//               {['Home', 'Services', 'Global Markets', 'Logistics', 'About Us', 'Contact'].map((item) => (
//                 <a 
//                   key={item}
//                   href="#" 
//                   className="group flex items-center gap-2 text-gray-400 hover:text-amber-300 transition-all duration-300 hover:translate-x-2"
//                 >
//                   <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-amber-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
//                   <span className="text-sm">{item}</span>
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* Services */}
//           <div>
//             <h4 className="text-lg font-bold text-white mb-6 pb-3 border-b border-white/10 relative">
//               <span className="relative">
//                 Our Services
//                 <span className="absolute -bottom-3 left-0 w-8 h-1 bg-gradient-to-r from-blue-400 to-cyan-300 rounded-full"></span>
//               </span>
//             </h4>
//             <div className="space-y-3">
//               {['Maritime Logistics', 'Air Cargo Solutions', 'Customs Brokerage', 'Supply Chain', 'Digital Platform', 'Risk Management'].map((service) => (
//                 <a 
//                   key={service}
//                   href="#" 
//                   className="group flex items-center gap-2 text-gray-400 hover:text-blue-300 transition-all duration-300 hover:translate-x-2"
//                 >
//                   <div className="w-1.5 h-1.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
//                   <span className="text-sm">{service}</span>
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* Contact Info */}
//           <div>
//             <h4 className="text-lg font-bold text-white mb-6 pb-3 border-b border-white/10 relative">
//               <span className="relative">
//                 Contact Us
//                 <span className="absolute -bottom-3 left-0 w-8 h-1 bg-gradient-to-r from-green-400 to-emerald-300 rounded-full"></span>
//               </span>
//             </h4>
//             <div className="space-y-4">
//               <div className="flex items-start gap-3">
//                 <div className="p-2 bg-gradient-to-r from-blue-600/20 to-blue-400/20 rounded-lg">
//                   <FaMapMarkerAlt className="text-blue-400" />
//                 </div>
//                 <div>
//                   <p className="text-white text-sm font-semibold">Global Headquarters</p>
//                   <p className="text-gray-400 text-xs">Trade Center, World Commerce Hub</p>
//                 </div>
//               </div>
              
//               <div className="flex items-center gap-3">
//                 <div className="p-2 bg-gradient-to-r from-amber-600/20 to-amber-400/20 rounded-lg">
//                   <FaPhone className="text-amber-400" />
//                 </div>
//                 <div>
//                   <p className="text-white text-sm font-semibold">+1 (888) TRADE-00</p>
//                   <p className="text-gray-400 text-xs">24/7 Support Available</p>
//                 </div>
//               </div>
              
//               <div className="flex items-center gap-3">
//                 <div className="p-2 bg-gradient-to-r from-green-600/20 to-green-400/20 rounded-lg">
//                   <FaEnvelope className="text-green-400" />
//                 </div>
//                 <div>
//                   <p className="text-white text-sm font-semibold">info@shivasun.com</p>
//                   <p className="text-gray-400 text-xs">Connect with our team</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Newsletter Section */}
//         <div className="mb-12 p-8 rounded-2xl bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm border border-white/10">
//           <div className="grid lg:grid-cols-2 gap-8 items-center">
//             <div>
//               <h4 className="text-xl font-bold text-white mb-2">Stay Updated with Global Trade</h4>
//               <p className="text-gray-400 text-sm">Subscribe to our newsletter for market insights and updates.</p>
//             </div>
//             <div className="flex gap-3">
//               <input
//                 type="email"
//                 placeholder="Your email address"
//                 className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
//               />
//               <button className="px-6 py-3 bg-gradient-to-r from-amber-500 to-yellow-400 text-gray-900 font-bold rounded-lg hover:shadow-lg hover:shadow-amber-500/30 transition-all duration-300 hover:scale-105">
//                 Subscribe
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Social Media & Bottom Bar */}
//         <div className="pt-8 border-t border-white/10">
//           <div className="flex flex-col md:flex-row justify-between items-center gap-6">
//             {/* Social Media */}
//             <div className="flex items-center gap-6">
//               <div className="text-white text-sm font-semibold">Follow Our Journey:</div>
//               <div className="flex gap-4">
//                 <a href="#" className="group p-3 bg-white/5 rounded-full hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-400 transition-all duration-300">
//                   <FaFacebookF className="text-gray-400 group-hover:text-white text-lg" />
//                 </a>
//                 <a href="#" className="group p-3 bg-white/5 rounded-full hover:bg-gradient-to-r hover:from-sky-500 hover:to-cyan-400 transition-all duration-300">
//                   <FaTwitter className="text-gray-400 group-hover:text-white text-lg" />
//                 </a>
//                 <a href="#" className="group p-3 bg-white/5 rounded-full hover:bg-gradient-to-r hover:from-blue-700 hover:to-blue-500 transition-all duration-300">
//                   <FaLinkedinIn className="text-gray-400 group-hover:text-white text-lg" />
//                 </a>
//                 <a href="#" className="group p-3 bg-white/5 rounded-full hover:bg-gradient-to-r hover:from-pink-600 hover:to-rose-500 transition-all duration-300">
//                   <FaInstagram className="text-gray-400 group-hover:text-white text-lg" />
//                 </a>
//                 <a href="#" className="group p-3 bg-white/5 rounded-full hover:bg-gradient-to-r hover:from-red-600 hover:to-red-400 transition-all duration-300">
//                   <FaYoutube className="text-gray-400 group-hover:text-white text-lg" />
//                 </a>
//               </div>
//             </div>

//             {/* Global Presence */}
//             <div className="flex items-center gap-3 text-gray-400 text-sm">
//               <FaGlobeAmericas className="text-amber-400" />
//               <span>Serving 75+ Countries Worldwide</span>
//             </div>
//           </div>

//           {/* Bottom Copyright */}
//           <div className="mt-8 pt-6 border-t border-white/5 text-center">
//             <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
//               <p>© {new Date().getFullYear()} ShivaSun Import/Export Company. All rights reserved.</p>
//               <div className="flex gap-6">
//                 <a href="#" className="hover:text-amber-300 transition-colors">Privacy Policy</a>
//                 <a href="#" className="hover:text-blue-300 transition-colors">Terms of Service</a>
//                 <a href="#" className="hover:text-green-300 transition-colors">Cookie Policy</a>
//               </div>
//             </div>
//             <p className="mt-4 text-gray-600 text-xs">Building bridges in global commerce since 2010</p>
//           </div>
//         </div>
//       </div>

//       {/* Floating Elements */}
//       <div className="absolute -bottom-10 -left-10 text-6xl opacity-5 animate-float">🚢</div>
//       <div className="absolute -top-10 -right-10 text-6xl opacity-5 animate-float" style={{animationDelay: '2s'}}>✈️</div>
//     </footer>
//   );
// }



import React from "react";
import { 
  FaInstagram, 
  FaFacebookF, 
  FaTwitter,
  FaPinterestP,
  FaYoutube,
  FaTiktok,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaShippingFast,
  FaShieldAlt,
  FaExchangeAlt,
  FaStar,
  FaHeart
} from "react-icons/fa";
import { GiDiamondRing } from "react-icons/gi";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black pt-16 pb-8">
      {/* Gold Accent Line */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold-500 to-transparent mb-12"></div>

      <div className="container mx-auto px-4 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="relative">
                {/* Gold Glow Effect */}
                <div className="absolute -inset-3 bg-gradient-to-r from-gold-500/20 to-gold-300/10 rounded-full blur-xl"></div>
                {/* Your logo placeholder - replace with your actual logo */}
                <div className="relative flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-gold-400 to-gold-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">F</span>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white tracking-tight">FABNIQUO</h2>
                    <p className="text-gold-400 text-xs font-medium tracking-widest uppercase">Premium Fashion</p>
                  </div>
                </div>
              </div>
            </div>
            
            <p className="text-gray-400 text-sm leading-relaxed max-w-md">
              Where elegance meets modern sophistication. Experience premium fashion 
              crafted with attention to detail and timeless style.
            </p>
            
            {/* Social Media */}
            <div className="pt-4">
              <h5 className="text-sm font-semibold text-gray-300 mb-3 uppercase tracking-wider">Follow Our Journey</h5>
              <div className="flex gap-3">
                {[
                  { icon: <FaInstagram />, bg: "hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-500" },
                  { icon: <FaFacebookF />, bg: "hover:bg-blue-600" },
                  { icon: <FaPinterestP />, bg: "hover:bg-red-600" },
                  { icon: <FaTwitter />, bg: "hover:bg-sky-500" },
                  { icon: <FaYoutube />, bg: "hover:bg-red-700" },
                  { icon: <FaTiktok />, bg: "hover:bg-gray-800" }
                ].map((social, idx) => (
                  <a 
                    key={idx}
                    href="#" 
                    className={`p-3 bg-gray-800 rounded-full text-gray-400 ${social.bg} hover:text-white transition-all duration-300 hover:scale-110`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Collections */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 pb-3 border-b border-gray-800 relative">
              <span className="flex items-center gap-2">
                <GiDiamondRing className="text-gold-400" />
                Collections
              </span>
            </h4>
            <div className="space-y-3">
              {[
                "New Arrivals",
                "Best Sellers", 
                "Premium Fabrics",
                "Evening Wear",
                "Casual Collection",
                "Accessories",
                "Luxury Line",
                "Seasonal Edit"
              ].map((item) => (
                <a 
                  key={item}
                  href="#" 
                  className="group flex items-center gap-3 text-gray-400 hover:text-gold-300 transition-all duration-300 text-sm"
                >
                  <div className="w-1 h-1 bg-gold-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <span className="group-hover:translate-x-2 transition-transform">{item}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Customer Care */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 pb-3 border-b border-gray-800 relative">
              <span className="flex items-center gap-2">
                <FaHeart className="text-gold-400" />
                Customer Care
              </span>
            </h4>
            <div className="space-y-3">
              {[
                "Contact Us",
                "Shipping Information", 
                "Returns & Exchanges",
                "Size Guide",
                "Care Instructions",
                "FAQs",
                "Order Tracking",
                "Store Locator"
              ].map((item) => (
                <a 
                  key={item}
                  href="#" 
                  className="group flex items-center gap-3 text-gray-400 hover:text-white transition-all duration-300 text-sm"
                >
                  <div className="w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <span className="group-hover:translate-x-2 transition-transform">{item}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-8">
            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-bold text-white mb-6 pb-3 border-b border-gray-800">
                Contact Us
              </h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-gradient-to-br from-gold-900/30 to-gold-700/20 rounded-lg">
                    <FaEnvelope className="text-gold-400" />
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium">hello@fabniquo.com</p>
                    <p className="text-gray-500 text-xs">24/7 Customer Support</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg">
                    <FaPhone className="text-gray-400" />
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium">+1 (888) FAB-STYLE</p>
                    <p className="text-gray-500 text-xs">Mon-Sat, 10AM-8PM EST</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-gradient-to-br from-gold-900/30 to-gold-700/20 rounded-lg">
                    <FaMapMarkerAlt className="text-gold-400" />
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium">Global Presence</p>
                    <p className="text-gray-500 text-xs">New York • Paris • Milan • Dubai</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div className="p-4 bg-gradient-to-br from-gray-800/50 to-gray-900/30 rounded-xl border border-gray-800">
              <h5 className="text-sm font-semibold text-white mb-2">Join Our Exclusive List</h5>
              <p className="text-gray-400 text-xs mb-3">Get early access to new collections</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent text-sm"
                />
                <button className="px-4 py-2 bg-gradient-to-r from-gold-500 to-gold-400 text-gray-900 font-bold rounded-lg hover:shadow-lg hover:shadow-gold-500/30 transition-all duration-300 hover:scale-105 text-sm">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Premium Features */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {[
            { 
              icon: <FaShippingFast className="text-gold-400 text-xl" />, 
              title: "Free Shipping", 
              desc: "Worldwide delivery",
              gradient: "from-gold-900/20 to-gold-800/10"
            },
            { 
              icon: <FaExchangeAlt className="text-gold-400 text-xl" />, 
              title: "Easy Returns", 
              desc: "30 day policy",
              gradient: "from-gray-800 to-gray-900"
            },
            { 
              icon: <FaShieldAlt className="text-gold-400 text-xl" />, 
              title: "Secure Payment", 
              desc: "100% protected",
              gradient: "from-gold-900/20 to-gold-800/10"
            },
            { 
              icon: <FaStar className="text-gold-400 text-xl" />, 
              title: "Premium Quality", 
              desc: "Verified fabrics",
              gradient: "from-gray-800 to-gray-900"
            }
          ].map((feature, idx) => (
            <div 
              key={idx} 
              className={`p-6 bg-gradient-to-br ${feature.gradient} rounded-xl border border-gray-800 hover:border-gold-500/30 transition-all duration-300`}
            >
              <div className="mb-3 flex justify-center">{feature.icon}</div>
              <h5 className="text-sm font-semibold text-white text-center mb-1">{feature.title}</h5>
              <p className="text-gray-400 text-xs text-center">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-gray-800">
          {/* Payment & Download */}
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8 mb-8">
            {/* Payment Methods */}
            <div>
              <p className="text-sm font-semibold text-gray-300 mb-3">Accepted Payment Methods</p>
              <div className="flex flex-wrap gap-3">
                {["VISA", "MasterCard", "AMEX", "PayPal", "Apple Pay", "Google Pay"].map((method) => (
                  <div 
                    key={method} 
                    className="px-4 py-2 bg-gray-800 rounded-lg border border-gray-700"
                  >
                    <span className="text-gray-300 text-sm font-medium">{method}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* App Download */}
            <div className="text-center lg:text-right">
              <p className="text-sm font-semibold text-gray-300 mb-3">Download Our App</p>
              <div className="flex gap-3 justify-center lg:justify-end">
                <button className="px-5 py-2 bg-gradient-to-r from-gold-500 to-gold-400 text-gray-900 font-bold rounded-lg hover:shadow-lg hover:shadow-gold-500/30 transition-all duration-300 flex items-center gap-2">
                  <span>📱</span>
                  App Store
                </button>
                <button className="px-5 py-2 bg-gradient-to-r from-gray-800 to-gray-900 text-white font-bold rounded-lg hover:bg-gray-700 transition-all duration-300 flex items-center gap-2 border border-gray-700">
                  <span>🤖</span>
                  Google Play
                </button>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-gray-900">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-500 text-sm text-center md:text-left">
                © {new Date().getFullYear()} FABNIQUO. All rights reserved. Luxury fashion retailer.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center">
                {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Accessibility', 'Sitemap'].map((item) => (
                  <a 
                    key={item}
                    href="#" 
                    className="text-gray-500 hover:text-gold-400 text-sm transition-colors"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <p className="text-gray-600 text-xs italic">
                "Elegance is the only beauty that never fades." - Audrey Hepburn
              </p>
              <div className="mt-3 flex items-center justify-center gap-2">
                <span className="text-gray-500 text-xs">Ethically sourced • Sustainable practices • Premium craftsmanship</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Gold Elements */}
      <div className="absolute bottom-10 left-10 opacity-10">
        <div className="text-6xl">✨</div>
      </div>
      <div className="absolute top-10 right-10 opacity-10">
        <div className="text-6xl">👑</div>
      </div>
    </footer>
  );
}

