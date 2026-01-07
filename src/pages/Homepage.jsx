import React from 'react'
import HeroSection from '../components/Homecompo/Herosection'
import DiscountBanner from '../components/Homecompo/Discountbanner'
import FashionVideoGallery from '../components/Homecompo/FashionVideoGallery'
import VirtualShowroom from '../components/Homecompo/VirtualShowroom'
import NewArrivals from '../components/Homecompo/NewArrivals'
import FeaturedCollections from '../components/Homecompo/FeaturedCollections'

export default function Homepage() {
  return (
    <div>
        <HeroSection/>
        <NewArrivals/>
        <FashionVideoGallery/>
        <FeaturedCollections/>
        {/* <DiscountBanner/> */}
        {/* <VirtualShowroom/> */}
     
    </div>
  )
}
