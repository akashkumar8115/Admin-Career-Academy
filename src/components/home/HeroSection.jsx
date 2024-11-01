import React from 'react'
import Hero from '../../assets/hero.png'

const HeroSection = () => {
  return (

   <section className='w-full sm:py-24 py-16 mt-28 '>

    {/* ---------- container -------- */}

    <div className='w-11/12 lg:w-10/12 mx-auto  flex smd:flex-row flex-col justify-between xmd:gap-x-16 gap-x-10 gap-y-16'>

      {/* ------------ left part --------- */}

      <div className='  flex flex-col smd:gap-y-6 gap-y-8 smd:w-[55%]'>

        <h1 className='xl:text-5xl text-4xl smd:text-left text-center font-semibold  xxl:w-[80%] xl:w-[90%] xl:leading-[60px] leading-[52px]'>Where Technology Meets Understanding!</h1>

        <h2 className='xl:text-3xl text-2xl smd:text-left text-center font-semibold  text-green-600'>
        Tailored Support for Every Journey...
        </h2>

        <p className='smd:text-left text-center'>Empower yourself with the right tools for success. Our counseling services are designed to guide you through personal challenges, while our IT solutions equip you with the technology needed to elevate your business. Together, we can achieve your goals.</p>

        <div className='flex  smd:justify-start justify-center' >
            <button className='flex w-max py-3 px-5 transition-all duration-300  bg-violet-50 hover:bg-green-500 rounded-lg text-white'>Let's Get Started</button>
        </div>

      </div>


      {/* --------- right part ----------- */}

      <div className='smd:w-[40%]'>

       <img src={Hero} alt="hero-img" className='smd:w-full smd:h-full xs:w-[80%] xs:h-[80%] mx-auto object-contain' />

      </div>

    </div>


   </section>
  )
}

export default HeroSection