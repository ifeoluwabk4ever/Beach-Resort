import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import Banner from '../components/Banner'
import FeaturedRoom from '../components/FeaturedRoom'
import Hero from '../components/Hero'
import Services from '../components/Services'

export let Home = () => {
    return (
        <>
            <Hero>
                <Banner title="Luxurious Rooms" subtitle="Deluxe rooms starting at $299">
                    <Link to="/rooms" className="btn-primary">our rooms</Link>
                </Banner>
            </Hero>
            <Services />
            <FeaturedRoom />
        </>
    )
}
