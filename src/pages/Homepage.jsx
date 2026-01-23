import React, { useState, useEffect } from 'react'
import HeroSection from '../components/Homecompo/Herosection'
import CategoryGrid from '../components/Homecompo/CategoryGrid'
import TrendingNow from '../components/Homecompo/TrendingNow'
import NewArrivals from '../components/Homecompo/NewArrivals'
import BestSellers from '../components/Homecompo/BestSellers'
import FashionStories from '../components/Homecompo/FashionStories'
import DealsBanner from '../components/Homecompo/DealsBanner'
import ShopByCategory from '../components/Homecompo/ShopByCategory'
import BrandShowcase from '../components/Homecompo/BrandShowCase'
import ShopByCategorySkeleton from '../components/SKELLETON_HUB/ShopByCategorySkeleton.JSX';
import CategoryGridSkeleton from '../components/SKELLETON_HUB/CategoryGridSkeleton'
import NewArrivalsSkeleton from '../components/SKELLETON_HUB/NewArrivalsSkeleton'
import BestSellersSkeleton from '../components/SKELLETON_HUB/BestSellersSkeleton'
import FashionEcomGallerySkeleton from '../components/SKELLETON_HUB/FashionEcomGallerySkeleton'
import FashionEcomGallery from '../components/Homecompo/FashionVideoGallery'

import AsSeenOn from '../components/Homecompo/AsSeenOn'
import VIPMembership from '../components/Homecompo/VIPMembership'
import BrandArchiveTimeline from '../components/Homecompo/BrandArchiveTimeline'
import MaterialDeepDive from '../components/Homecompo/MaterialDeepDive'





export default function Homepage() {

  const [showSkeletons, setShowSkeletons] = useState(false);

  useEffect(() => {
    // Check if this is the first visit
    const hasVisitedBefore = sessionStorage.getItem('hasVisitedHomepage');

    if (!hasVisitedBefore) {
      setShowSkeletons(true);

      // Show skeletons for 1 second
      const timer = setTimeout(() => {
        setShowSkeletons(false);
        sessionStorage.setItem('hasVisitedHomepage', 'true');
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      {/* <ShopByCategory/> */}
      {/* Shop By Category Section */}
      {showSkeletons ? (
        <ShopByCategorySkeleton />
      ) : (
        <ShopByCategory />
      )}
      {showSkeletons ? (
        <CategoryGridSkeleton />) : (
        <CategoryGrid />
      )}
      {/* <CategoryGrid /> */}

      <DealsBanner />
      {showSkeletons ? (
        <NewArrivalsSkeleton />) : (
        <NewArrivals />
      )}
      {/* <NewArrivals /> */}
      {showSkeletons ? (
        <BestSellersSkeleton />) : (
        <BestSellers />
      )}
      {/* <BestSellers /> */}
      <FashionStories />
      {/* <TrendingNow /> */}
      {showSkeletons ? (
        <FashionEcomGallerySkeleton />) : (
        <FashionEcomGallery />
      )}
      <MaterialDeepDive />
      <BrandArchiveTimeline />

      <AsSeenOn />
      <VIPMembership />
      <BrandShowcase />
    </div>
  )
}
