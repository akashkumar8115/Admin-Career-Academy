import React from 'react'
import { motion } from 'framer-motion'
import { partnerLogos } from '../../data/partners'

const Partners = () => {
    return (
        <section className='w-full sm:py-24 py-16 bg-gray-50'>
            <div className='w-11/12 lg:w-10/12 mx-auto'>
                <div className='text-center mb-16'>
                    <span className='text-violet-600 font-semibold tracking-wide uppercase'>Our Network</span>
                    <h2 className='text-4xl md:text-5xl font-bold mt-4'>Trusted By Industry Leaders</h2>
                    <p className='text-gray-600 mt-4 max-w-2xl mx-auto'>
                        Partnering with leading companies to provide the best opportunities for our students
                    </p>
                </div>

                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 items-center'>
                    {partnerLogos.map((partner, index) => (
                        <motion.div
                            key={partner.id}
                            initial={{ opacity: 1, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className='flex items-center justify-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow'
                        >
                            <img 
                                src={partner.logo} 
                                alt={partner.name}
                                className='h-15 w-15 sm:h-30 sm:w-20 object-contain filter hover:grayscale-0 transition-all duration-300'
                            />
                        </motion.div>
                    ))}
                </div>

                <div className='mt-16 text-center'>
                    <button className='px-8 py-3 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition-colors'>
                        Become a Partner
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Partners
