import React from 'react'
import mission from '../../assets/mission.png'

const Mission = () => {
    return (
        <section className=' w-full sm:py-24 py-16 bg-white '>

            <div className='w-11/12 lg:w-10/12 mx-auto flex flex-col gap-y-20' >

                {/* ------------ heading part ---------- */}

                <div className='flex flex-col gap-y-4 items-center'>


                    <h2 className='text-center text-black-600'>Our Mission</h2>

                    <h1 className='xs:text-4xl text-3xl font-semibold text-center'>A Future of Innovation and Excellence!</h1>

                </div>

                {/* --------------- Bottom part --------------- */}

                <div className=' flex smd:flex-row flex-col smd:justify-between smd:items-center  gap-x-6 gap-y-6 px-4 xs:px-6 smd:px-0'>

                    {/* --------- left part -------- */}

                    <div className='smd:w-[50%] smd:h-[450px] '>

                        <img src={mission} alt="mission" className='smd:w-full smd:h-full xs:w-[80%] xs:h-[80%] mx-auto object-contain' />

                    </div>

                    {/* --------- right part --------- */}

                    <div className='  flex  smd:w-[50%]  xs:text-base text-sm text-center smd:text-left xs:leading-8 leading-7'>

                    Our mission is to provide holistic and tailored services that address the unique challenges faced by individuals and businesses today. We aim to offer counseling services that support personal development , while our IT solutions drive innovation, efficiency, and growth for businesses. We are committed to building long-lasting relationships with our clients, based on trust, expertise, and a deep understanding of their needs. Our mission is not only to solve problems but to inspire positive change and create lasting value through a blend of human empathy and cutting-edge technology. By aligning our services with the needs of our clients, we seek to empower them to thrive in every area of their lives.

                    </div>


                </div>




            </div>

        </section>
    )
}

export default Mission