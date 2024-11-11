import React from 'react'
import Hero from '../../assets/career-counselling.jpg'
import { Link } from 'react-router-dom'

const HeroSection = () => {
  return (
    <section className='w-full min-h-screen flex items-center pt-20'>
      <div className='w-11/12 lg:w-10/12 mx-auto flex smd:flex-row flex-col justify-between items-center xmd:gap-x-16 gap-x-10 gap-y-16'>
        <div className='flex flex-col smd:gap-y-8 gap-y-6 smd:w-[55%]'>
          <h1 className='xl:text-6xl text-5xl smd:text-left text-center font-bold xl:leading-[70px] leading-[60px] text-gray-800'>
            Transform Your Future with Expert Guidance
          </h1>
          <h2 className='xl:text-3xl text-2xl smd:text-left text-center font-semibold text-green-600'>
            Your Success Journey Starts Here
          </h2>
          <p className='smd:text-left text-center text-lg text-gray-600 leading-relaxed'>
            We're dedicated to empowering students and professionals with cutting-edge career guidance, educational resources, and industry insights. Join thousands of successful individuals who've transformed their careers with our expert guidance.
          </p>
          <div className='flex gap-4 smd:justify-start justify-center'>
            <Link to="/register" className=''>
              <button className='py-4 px-8 text-lg font-semibold transition-all duration-300 bg-violet-600 hover:bg-green-500 rounded-lg text-black shadow-lg hover:shadow-xl'>
                Start Your Journey
              </button>
            </Link>
            <Link to="/services" className=''>
              <button className='py-4 px-8 text-lg font-semibold transition-all duration-300 border-2 border-violet-600 hover:border-green-500 rounded-lg text-violet-600 hover:text-green-500'>
                Explore Services
              </button>
            </Link>
          </div>
          <div className='mt-8 flex gap-8 items-center'>
            <div className='text-center'>
              <h3 className='text-3xl font-bold text-violet-600'>5000+</h3>
              <p className='text-gray-600'>Students Guided</p>
            </div>
            <div className='text-center'>
              <h3 className='text-3xl font-bold text-violet-600'>95%</h3>
              <p className='text-gray-600'>Success Rate</p>
            </div>
            <div className='text-center'>
              <h3 className='text-3xl font-bold text-violet-600'>50+</h3>
              <p className='text-gray-600'>Expert Mentors</p>
            </div>
          </div>
        </div>

        <div className='smd:w-[45%] relative'>
          <div className='absolute -z-10 w-full h-full bg-gradient-to-r from-violet-200 to-green-200 rounded-full blur-3xl opacity-30'></div>
          <img src={Hero} alt="Career Guidance" className='w-full h-full object-contain animate-float' />
        </div>
      </div>
    </section>
  )
}

export default HeroSection