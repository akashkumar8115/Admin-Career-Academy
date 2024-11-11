import React from 'react'
import Banner from '../components/home/Banner.jsx'
import HeroSection from '../components/home/HeroSection'
import Stats from '../components/home/Stats'
import Services from '../components/home/Services'
import Academic from '../components/home/Academic'
import Partners from '../components/home/Partners'
import Testimonials from '../components/home/Testimonials'
import Blog from '../components/home/Blog'
import FAQ from '../components/home/FAQ'
import UpcomingEvents from '../components/home/UpcomingEvents.jsx'
import ContactCTA from './ContactCTA.jsx'
import NewsletterSignup from '../components/home/NewsletterSignup'
import SuccessStories from '../components/home/SuccessStories.jsx'
import Mission from '../components/home/Mission'
import Features from '../components/home/Features'

const Home = () => {
    return (
        <div className='bg-white'>
            <Banner />
            <HeroSection />
            <Services />
            <Stats />
            <Academic />
            <Partners />
            <Blog />
            <div className='bg-gray-50'>
            </div>
            <Testimonials />

            {/* <SuccessStories /> */}
            <UpcomingEvents />

            <FAQ />
            <NewsletterSignup/>
            {/* <ContactCTA /> */}
        </div>
    )
}

export default Home