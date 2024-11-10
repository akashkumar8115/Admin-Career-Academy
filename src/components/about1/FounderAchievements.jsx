import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { motion } from 'framer-motion';


const achievement = [
    "Meetup with sachdeva stocks owner Mr. Paramjeet sachdeva Sir whose company's listed in India's top 10 stocks " ,
    "Meetup with Ex AICTE VICE CHAIRMAN Mr Dr. M.P.  Poonia Sir ",
    "Meetup with Spenny founder Mr Rathan Shah whose company valuation 100cr",
    "Meetup with Hood app founder Mr Jasveer Singh  whose company valuation 600cr",
    "Meet up with BNA President Mr Anoop Maurya ",
    "Meet up with Cabinet Minister of Tripura Shri Shukla Charan Nautiyal sir",

]

const FounderAchievements = () => {
  return (
    <section className="pb-16  bg-violet-100">

    <div className="w-11/12 lg:w-10/12 mx-auto bg-white py-12 rounded-lg px-8">
        <h2 className="text-2xl font-semibold mb-8 text-center">Founder's Achievements</h2>

        <div className='flex flex-col gap-y-4'>
            {
                achievement.map((item , index)=> (
                    <motion.p key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                     className='flex  gap-x-4'>  
                    <span className='text-green-600 py-1'><FaArrowRight/></span>
                    <span className='text-black-600'>{item}</span>
                </motion.p>
                ))
            }
        </div>
      
    </div>
    </section>
  )
}

export default FounderAchievements