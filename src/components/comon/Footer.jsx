import React from 'react'
import logo from '../../assets/logo.png'
import { IoLocationSharp } from "react-icons/io5";
import { serviceData } from '../../data/footer';
import { companyData } from '../../data/footer';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <section className='w-full sm:py-24 py-16  bg-black-300 '>

      {/* ---------- container -------- */}

      <div className='w-11/12 lg:w-10/12 mx-auto  grid lg:grid-cols-4 xs:grid-cols-2 grid-cols-1 gap-x-6 xs:gap-y-16 gap-y-8 '>

        {/* -------- 1st section -------- */}

        <div className=' flex flex-col items-center lg:items-start gap-y-6 '>

          <div className='flex flex-col items-center lg:items-start gap-y-4'>
            <img src={logo} alt="logo" className='w-32' />
            <p className='text-sm leading-6 xl:tracking-wider text-center lg:text-left'>At Admin Career Academy, we specialize in delivering counselling, state-of-the-art web development and comprehensive IT services.</p>
          </div>

          <p className='flex items-center font-semibold'>
            <span className='text-xl '><IoLocationSharp /></span>
            New Delhi, India
          </p>


        </div>

        {/* -------- 2nd section -------- */}

        <div className='flex flex-col gap-y-4 items-center lg:items-start xl:pl-4'>

          <h2 className='text-xl font-semibold '>Services</h2>

          <div className='flex flex-col items-center lg:items-start gap-y-3 xl:text-base text-sm'>
            {
              serviceData.map((item) => (
                <Link key={item.id} to={item.path} className='text-black-900 transtion-all duration-200 hover:text-violet-50 w-max'>
                  {item.title}
                </Link>
              ))
            }


          </div>

        </div>

        {/* -------- 3rd section -------- */}

        <div className='flex flex-col items-center lg:items-start gap-y-4  '>

          <h2 className='text-xl font-semibold'>Company</h2>

          <div className='flex flex-col items-center lg:items-start gap-y-3 xl:text-base text-sm '>
            {
              companyData.map((item) => (
                <Link key={item.id} to={item.path} className='text-black-900 transtion-all duration-200 hover:text-violet-50 w-max' >
                  {item.title}
                </Link>
              ))
            }


          </div>

        </div>

        {/* -------- 4th section -------- */}

        <div className='flex flex-col items-center lg:items-start gap-y-4  '>

          <h2 className='text-xl font-semibold'>Newsletter</h2>

          <div className='flex flex-col items-center lg:items-start gap-y-5 text-base '>
            
            <p className='xl:text-base text-sm leading-6  text-center lg:text-left'>
            Signup our newsletter to get update information, news or insight
            </p>

            <input type="text" placeholder='Enter Your Email' className='py-2 px-4 rounded-lg w-full outline-none' />

            <button className='px-6 py-2 rounded-lg bg-green-500 text-white transition-all duration-300 hover:bg-violet-50  text-sm'>Sign Up</button>
        
          </div>

        </div>



      </div>


    </section>
  )
}

export default Footer