import React from 'react'

import { Banner } from './Components/Banner/Banner'
import { BagsAndMackup } from './Components/BagsAndMackup/BagsAndMackup'
import { FeaturedProducts } from './Components/FeaturedProducts/FeaturedProducts'
import { TrendingProducts } from './Components/TrendingProducts/TrendingProducts'
import { Cosmatics } from './Components/Cosmatics/Cosmatics'
import { Testimonial } from './Components/Testimonial/Testimonial'





export const Home = () => {
    return (
        <div className='home'>
            {/* banner */}
            <Banner />

            {/* bags and mackup */}
            <BagsAndMackup />

            {/* featured products */}
            <FeaturedProducts />

            {/* trending products */}
            <TrendingProducts />

            {/* cosmatics  */}
            <Cosmatics />

            {/* testimonial */}
            <Testimonial />
        </div>
    )
}
