import React, { useRef, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { bannerData } from '../../data/banner'
import { FaArrowRight, FaArrowLeft, FaClock, FaStar, FaUsers } from 'react-icons/fa'

const Banner = () => {
    const scrollRef = useRef(null)
    const [scrollDirection, setScrollDirection] = useState('right')
    const scrollAmount = window.innerWidth * 1

    useEffect(() => {
        const container = scrollRef.current
        let scrollInterval

        const autoScroll = () => {
            if (container) {
                const isAtEnd = container.scrollLeft + container.clientWidth >= container.scrollWidth
                const isAtStart = container.scrollLeft === 0

                if (isAtEnd) {
                    setScrollDirection('left')
                } else if (isAtStart) {
                    setScrollDirection('right')
                }

                container.scrollBy({
                    left: scrollDirection === 'right' ? scrollAmount : -scrollAmount,
                    behavior: 'smooth'
                })
            }
        }

        scrollInterval = setInterval(autoScroll, 4000) // Adjust timing as needed

        return () => clearInterval(scrollInterval)
    }, [scrollDirection])

    const manualScroll = (direction) => {
        const container = scrollRef.current
        if (container) {
            container.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            })
            setScrollDirection(direction)
        }
    }

    return (
        <section className='h-[72vh] w-full relative overflow-hidden pt-20 pb-24'>
            <div className='absolute inset-0 bg-dots-pattern opacity-5'></div>
            <div className='h-full w-full relative'>
                <div className='relative h-full flex items-center pt-20'>
                    <button
                        className='absolute left-8 z-20 bg-white/90 hover:bg-white p-4 rounded-full shadow-lg hover:scale-110 transition-all duration-300'
                        onClick={() => manualScroll('left')}
                    >
                        <FaArrowLeft className="text-violet-600 text-2xl" />
                    </button>

                    <div
                        ref={scrollRef}
                        className='flex overflow-x-auto scroll-smooth hide-scrollbar h-[400px] items-center'
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {[...bannerData, ...bannerData].map((item, index) => (
                            <motion.div
                                key={`${item.id}-${index}`}
                                initial={{ opacity: 0.5, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="flex-none mx-6 md:w-[50vw] w-full group"
                            >
                                <div className='relative h-[400px] rounded-3xl overflow-hidden shadow-2xl'>
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className='w-[100%] h-full object-cover transform group-hover:scale-110 transition-all duration-700 opacity-0.8 filter brightness-50'
                                    />
                                    <div className='absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col justify-end p-8'>
                                        <span className='inline-block px-4 py-1 bg-violet-600 text-white rounded-full text-sm font-semibold mb-4'>
                                            {/* {item.category} */}
                                        </span>
                                        <h3 className='text-3xl font-bold text-white mb-3'>{item.title}</h3>
                                        <p className='text-gray-200 text-white/90 leading-200 mb-6'>{item.description}</p>
                                        <div className='flex items-center gap-6 mb-6 text-green-300 text-sm'>
                                            <span className='flex items-center gap-2'>
                                                <FaClock /> {item.duration}
                                            </span>
                                            <span className='flex items-center gap-2'>
                                                <FaStar /> {item.rating} Rating
                                            </span>
                                            <span className='flex items-center gap-2'>
                                                <FaUsers /> {item.enrolled} Enrolled
                                            </span>
                                        </div>
                                        <div className='flex justify-between items-center'>
                                            <Link to={item.path} className='flex items-center gap-2'>
                                                <button className='bg-violet-600 hover:bg-violet-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105'>
                                                    {item.buttonText}
                                                </button>
                                            </Link>
                                            <span className='text-2xl font-bold text-white'>{item.price}</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <button
                        className='absolute right-8 z-20 bg-white/90 hover:bg-white p-4 rounded-full shadow-lg hover:scale-110 transition-all duration-300'
                        onClick={() => manualScroll('right')}
                    >
                        <FaArrowRight className="text-violet-600 text-2xl" />
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Banner