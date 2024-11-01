import React from 'react'
import faq from '../../assets/faq.png'
import { faqData } from '../../data/faq';
import { useState } from 'react'
import { FaChevronDown } from "react-icons/fa6";


const FAQ = () => {

    const [openQuestion, setOpenQuestion] = useState(1);

    const toggleQuestion = (id) => {

        setOpenQuestion(prev => prev === id ? null : id);
    }


    // const openVariant = {

    //      hidden : {opacity : 0 , height: 0},
    //      visible : { opacity: 100 , height : "auto"},
    //      exit : { opacity: 0 , height: 0}
    // }


    return (
        <section className='w-full sm:py-24 py-16 bg-black-100'>

            {/* ---------- container -------- */}

            <div className='w-11/12 lg:w-10/12 mx-auto flex flex-col smd:gap-y-16 gap-y-10 '>

                {/* --------- heading ------- */}

                <div className='flex flex-col gap-y-4 items-center '>


                    <h2 className='text-center text-black-600'>Frequently Asked Question</h2>

                    <h1 className='xs:text-4xl text-3xl font-semibold text-center'>Everything You Need to Know!</h1>

                </div>



                {/* ---------- bottom ----------- */}


                <div className='flex smd:flex-row flex-col justify-between xmd:gap-x-16 gap-x-10 gap-y-16 py-6'>

                    {/* ------------ left part --------- */}

                    <div className='  flex flex-col justify-between smd:gap-y-6 gap-y-4 smd:w-[55%]'>

                        {

                            faqData.map((item) => (

                                <div key={item.id} className='flex flex-col '>

                                    {/* ---------- question -------- */}

                                    <div
                                    onClick={() => toggleQuestion(item.id)}
                                     className={`flex justify-between px-4 border lg:py-4 smd:py-2 xs:py-4 py-2 rounded-t-lg  cursor-pointer
                                        ${
                                            openQuestion === item.id ? "bg-violet-50 text-white" : "bg-white text-black-900"
                                        }
                                     `}>

                                        <p >{item.question}</p>

                                        <span>
                                            <FaChevronDown className={`
                    ${openQuestion === item.id ? "rotate-180" : "rotate-0"
                                                }
                        `} />
                                        </span>

                                    </div>


                                    {/* -------- answer ------- */}

                                    {
                                        openQuestion === item.id && (
                                            <div className='border-x border-b rounded-b-lg bg-white  px-4 py-4 text-sm tracking-wider'>
                                                <span>
                                                    {item.answer}
                                                </span>
                                            </div>
                                        )

                                    }

                                    


                                </div>
                            ))

                        }



                    </div>


                    {/* --------- right part ----------- */}

                    <div className='smd:w-[40%]'>

                        <img src={faq} alt="faq-img" className='smd:w-full smd:h-full xs:w-[80%] xs:h-[80%] mx-auto object-contain' />

                    </div>

                </div>



            </div>


        </section>
    )
}

export default FAQ