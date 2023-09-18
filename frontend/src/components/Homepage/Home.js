import React from 'react'
import Services from './Services'
import Features from './Features'
import Footer from './Footer'

export default function Home() {
    return (
        <div className="bg-[url('https://static.vecteezy.com/system/resources/thumbnails/008/218/160/small/horizontal-topographic-map-black-topographer-seamless-pattern-dark-typography-linear-background-for-mapping-and-audio-equalizer-backdrop-illustration-vector.jpg')] space-y-6">
            <div>
                <Services />
                <Features />
                <Footer />
            </div>
        </div>
    )
}
