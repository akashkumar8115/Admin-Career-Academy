import React from 'react'
import HeroSection from '../components/home/HeroSection'
import Help from '../components/home/Help'
import Services from '../components/home/Services'
import Mission from '../components/home/Mission'
import Academic from '../components/home/Academic'
import Blog from '../components/home/Blog'
import FAQ from '../components/home/FAQ'


const Home = () => {
    return (
        <div>
            <HeroSection />
            <Help />
            <Services />
            <Mission/>
            <Academic/>
            <Blog/>
            <FAQ/>
        </div>
    )
}

export default Home