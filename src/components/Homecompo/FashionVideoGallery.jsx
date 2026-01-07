import React, { useState, useRef, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight, FaPlay, FaPause } from 'react-icons/fa';
import { Play, Pause } from 'lucide-react';
import video3 from "../../assets/vedio3.mp4";
import vedio2 from "../../assets/vedio2.mp4";
import vedio1 from "../../assets/vedio1.mp4";
import vedio5 from "../../assets/vedio5.mp4";
import vedio6 from "../../assets/vedio6.mp4";
import vedio7 from "../../assets/vedio7.mp4";

const FashionVideoGallery = () => {
  const [activeVideo, setActiveVideo] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const mainVideoRef = useRef(null);
  
  // Your brand colors
  const fabuniqoGold = "rgb(209,167,67)";
  const primaryBlack = "#0e0e0e";
  const lightGold = "rgb(247,224,193)";

  // Videos data - removed duplicates
  const fashionVideos = [
    {
      id: 1,
      title: "Runway Collection 2024",
      description: "Experience our latest runway show featuring exclusive designs",
      category: "Runway",
      videoUrl: vedio7,
    },
    {
      id: 2,
      title: "Summer Essentials",
      description: "Lightweight fabrics and vibrant colors for the sunny season",
      category: "Seasonal",
      videoUrl: vedio2,
    },
    {
      id: 3,
      title: "Luxury Fabrics",
      description: "Premium silk, cashmere, and Italian wool craftsmanship",
      category: "Materials",
      videoUrl: vedio1,
    },
    {
      id: 4,
      title: "Elegant Evening Wear",
      description: "Sophisticated dresses for special occasions",
      category: "Formal",
      videoUrl: vedio5,
    },
    {
      id: 5,
      title: "Street Style",
      description: "Urban fashion meets contemporary design",
      category: "Casual",
      videoUrl: vedio6,
    }
  ];

  // Toggle play/pause
  const toggleVideoPlay = () => {
    if (mainVideoRef.current) {
      if (mainVideoRef.current.paused) {
        mainVideoRef.current.play();
        setIsPlaying(true);
      } else {
        mainVideoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  // Toggle mute/unmute
  const toggleMute = () => {
    if (mainVideoRef.current) {
      mainVideoRef.current.muted = !mainVideoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  // Navigate with animation
  const navigateVideo = (direction) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setIsPlaying(false);
    
    setTimeout(() => {
      if (direction === 'next') {
        setActiveVideo((prev) => (prev + 1) % fashionVideos.length);
      } else {
        setActiveVideo((prev) => (prev - 1 + fashionVideos.length) % fashionVideos.length);
      }
      
      setTimeout(() => {
        if (mainVideoRef.current) {
          mainVideoRef.current.play()
            .then(() => setIsPlaying(true))
            .catch(() => setIsPlaying(false));
        }
        setIsAnimating(false);
      }, 300);
    }, 300);
  };

  // Auto-play video when changed
  useEffect(() => {
    if (mainVideoRef.current) {
      mainVideoRef.current.play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    }
  }, [activeVideo]);

  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-b from-[#fafafa] to-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-[rgb(209,167,67)] to-transparent rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-[rgb(209,167,67)] to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-[rgb(209,167,67)]/20 mb-6">
            <div className="w-2 h-2 rounded-full bg-[rgb(209,167,67)] animate-pulse"></div>
            <span className="font-poppins text-xs md:text-sm font-medium text-[rgb(209,167,67)] tracking-wider">
              FASHION IN MOTION
            </span>
          </div>
          
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-semibold text-[#0e0e0e] mb-6">
            Discover Our{' '}
            <span style={{ color: fabuniqoGold }}>Collections</span>
          </h2>
          
          <p className="font-poppins text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Watch our premium fashion collections come to life. Each video showcases 
            the craftsmanship and elegance of FABUNIQO designs.
          </p>
        </div>

        {/* Main Video Display */}
        <div className="relative mb-12 md:mb-16 container-fluid">
          <div className={`relative h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl md:rounded-3xl overflow-hidden shadow-xl transition-all duration-500 ${
            isAnimating ? 'opacity-60 scale-95' : 'opacity-100 scale-100'
          }`}>
            {/* Video Player */}
            <video
              ref={mainVideoRef}
              key={fashionVideos[activeVideo].id}
              className="absolute inset-0 w-full h-full object-cover"
              loop
              muted={isMuted}
              playsInline
              controls={false}
              autoPlay
            >
              <source src={fashionVideos[activeVideo].videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
            
            {/* Video Info Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-0">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={toggleVideoPlay}
                      className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-110 group"
                    >
                      {isPlaying ? 
                        <Pause className="w-4 h-4 text-white group-hover:text-[rgb(209,167,67)]" /> : 
                        <Play className="w-4 h-4 text-white group-hover:text-[rgb(209,167,67)]" />
                      }
                    </button>
                    <button
                      onClick={toggleMute}
                      className="px-3 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-sm font-poppins font-medium hover:bg-white/30 transition-colors"
                    >
                      {isMuted ? '🔇' : '🔊'}
                    </button>
                    <span className="px-3 py-1.5 bg-[rgb(209,167,67)]/20 backdrop-blur-sm rounded-full text-sm font-poppins font-medium">
                      {fashionVideos[activeVideo].category}
                    </span>
                  </div>
                  
                  <div>
                    <h3 className="font-playfair text-2xl md:text-3xl font-semibold mb-2">
                      {fashionVideos[activeVideo].title}
                    </h3>
                    <p className="font-poppins text-base md:text-lg text-gray-200 max-w-2xl">
                      {fashionVideos[activeVideo].description}
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={() => navigateVideo('prev')}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 group disabled:opacity-50"
              disabled={isAnimating}
            >
              <FaChevronLeft className="text-white text-lg group-hover:text-[rgb(209,167,67)] transition-colors" />
            </button>
            
            <button
              onClick={() => navigateVideo('next')}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 group disabled:opacity-50"
              disabled={isAnimating}
            >
              <FaChevronRight className="text-white text-lg group-hover:text-[rgb(209,167,67)] transition-colors" />
            </button>
          </div>
        </div>

        {/* Video Thumbnails Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4 mb-12">
          {fashionVideos.map((video, index) => (
            <div
              key={video.id}
              className={`relative rounded-xl md:rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 group ${
                index === activeVideo 
                  ? 'ring-2 ring-[rgb(209,167,67)] shadow-lg scale-[1.02]' 
                  : 'ring-1 ring-gray-200 hover:ring-[rgb(209,167,67)]/50 hover:shadow-md'
              }`}
              onClick={() => {
                if (index !== activeVideo && !isAnimating) {
                  setIsAnimating(true);
                  setIsPlaying(false);
                  setTimeout(() => {
                    setActiveVideo(index);
                    setTimeout(() => {
                      if (mainVideoRef.current) {
                        mainVideoRef.current.play()
                          .then(() => setIsPlaying(true))
                          .catch(() => setIsPlaying(false));
                      }
                      setIsAnimating(false);
                    }, 300);
                  }, 300);
                }
              }}
            >
              {/* Video Thumbnail */}
              <div className="relative aspect-square">
                <video
                  className="absolute inset-0 w-full h-full object-cover"
                  muted
                  playsInline
                  loop
                  autoPlay
                  controls={false}
                >
                  <source src={video.videoUrl} type="video/mp4" />
                </video>
                
                {/* Overlay */}
                <div className={`absolute inset-0 transition-colors duration-300 ${
                  index === activeVideo 
                    ? 'bg-black/20' 
                    : 'bg-black/30 group-hover:bg-black/20'
                }`}></div>
                
                {/* Active Indicator */}
                {index === activeVideo && (
                  <div className="absolute top-3 right-3 w-6 h-6 bg-[rgb(209,167,67)] rounded-full flex items-center justify-center">
                    <Play className="w-3 h-3 text-white" />
                  </div>
                )}
              </div>
              
              {/* Video Info */}
              <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
                <h4 className="font-poppins text-xs md:text-sm font-semibold text-white truncate">
                  {video.title}
                </h4>
                <p className="font-poppins text-xs text-gray-300 truncate mt-1">
                  {video.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Controls */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        
        </div>
      </div>
    </section>
  );
};

export default FashionVideoGallery;