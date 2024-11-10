import React from 'react'
import { servicesData } from '../../data/services'

const Services = () => {
  return (
    <section className=' w-full sm:py-24 py-16  bg-green-100 '>

      <div className='w-11/12 lg:w-10/12 mx-auto flex flex-col gap-y-20' >

        {/* ------------ heading part ---------- */}

        <div className='flex flex-col gap-y-4 items-center'>


          <h2 className='text-center text-black-600'>Services We Provide</h2>

          <h1 className='xs:text-4xl text-3xl font-semibold text-center'>Services Designed for You!</h1>

        </div>

        {/* --------------- Bottom part --------------- */}

        <div className='grid xmd:grid-cols-3 sm:grid-cols-2 grid-cols-1  xl:gap-x-8 xmd:gap-x-4 smd:gap-x-8 gap-x-4 sm:gap-y-8 gap-y-12'>

          {

            servicesData.map((item) => (

              <div key={item.id} className='flex flex-col justify-between gap-y-4  py-6 px-6 rounded-tr-lg rounded-bl-lg bg-white border border-white transition-all duration-300  hover:scale-105'>

                <div className='flex flex-col gap-y-4'>
                  <h2 className='text-center text-lg font-semibold'>{item.title}</h2>
                  <p className='text-sm leading-6 text-justify'>
                    {item.desc}
                  </p>
                </div>


                <div className='flex justify-center'>
                  <button className='flex w-max py-3 px-5 transition-all duration-300 text-white  bg-violet-50 hover:bg-green-500 rounded-lg '>
                    Learn More
                  </button>
                </div>

              </div>
            ))

          }

        </div>


      </div>

    </section>
  )
}

export default Services