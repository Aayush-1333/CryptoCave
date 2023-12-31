/**
 * This is the homepage of the webapp with features, services and footer component
 */
import React from 'react'
import Services from './Services'
import Features from './Features'
import Footer from './Footer'

export default function Home() {
    return (
        <div className="_home-bg">
            <div>
                <Services />
                <Features />
                <Footer />
            </div>
        </div>
    )
}
