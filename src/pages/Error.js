import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import Banner from '../components/Banner'
import Hero from '../components/Hero'

export let Error = () => {
    return (
        <Hero>
            <Banner title="404" subtitle="Page not found">
                <Link to="/" className="btn-primary">return home</Link>
            </Banner>
        </Hero>
    )
}
