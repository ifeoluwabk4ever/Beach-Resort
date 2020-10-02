import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import Banner from '../components/Banner'
import Hero from '../components/Hero'
import RoomContainer from '../components/RoomContainer'

export let Rooms = () => {
    return (
        <>
            <Hero hero="roomsHero">
                <Banner title="our rooms" subtitle="find your desired comfy room here">
                    <Link to="/" className="btn-primary">return home</Link>
                </Banner>
            </Hero>
            <RoomContainer />
        </>
    )
}
