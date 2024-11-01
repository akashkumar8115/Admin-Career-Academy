import React from 'react'
import { useState } from 'react';
import { RiMenu2Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'

const navlink = [

    {
        id: 1,
        title: "Home",
        path: "/",
    },

    {
        id: 2,
        title: "About us",
        path: "/about",
    },

    {
        id: 3,
        title: "Services",
        path: "/services",
    },

    {
        id: 4,
        title: "Our Clients",
        path: "/clients",
    },

    {
        id: 5,
        title: "Blogs",
        path: "/blogs",
    },

    {
        id: 6,
        title: "Contact us",
        path: "/contact-us",
    },
]

const Navbar = () => {


    const [isOpen, setIsOpen] = useState(false);



    const openNav = () => {
        setIsOpen(!isOpen)
    }


    return (
        <nav className='w-full fixed top-0 left-0 z-[9999] right-0  text-black py-2 bg-gradient-to-r from-white to-violet-50  shadow-lg  lg:text-base smd:text-sm xs:text-base text-sm'>

            {/* -------- container  ------ */}
            <div className='w-11/12 lg:w-10/12 mx-auto flex justify-between items-center  '>

                {/* ------- logo -------- */}

                <div className='py-3 px-3'>
                    <img src={logo} alt="logo" className='w-32' />
                </div>

                {/* -------- navlinks -------- */}

                <div className='hidden smd:flex xl:gap-x-6 xmd:gap-x-4 gap-x-2 '>

                    {
                        navlink.map((item) => (
                            //here , use link instead of a tag
                            <Link to={item.path} key={item.id} className='py-1 px-3 transition-all duration-300 anime  rounded-lg font-semibold'>
                                {item.title}
                            </Link>
                        ))
                    }

                </div>



                {/* -------- menu and close btn ------- */}

                <div className='text-2xl smd:hidden flex'>
                    {
                        !isOpen ? (
                            <RiMenu2Fill onClick={openNav} className='cursor-pointer' />
                        ) : (
                            <IoMdClose onClick={openNav} className='cursor-pointer' />
                        )
                    }

                </div>






                {/* ------------- Responsive Navbar ---------- */}

                <div className={`absolute  top-[104px] left-0 py-12  font-semibold w-full bg-gradient-to-b from-white to-green-shade-50 smd:hidden flex flex-col items-center gap-y-2 shadow-xl border-t-[3px] border-green-600
                ${isOpen ? " transition-all duration-500 translate-x-[0%]" : "  transition-all duration-500 translate-x-[100%]"
                    }
                    `}>

                    {
                        navlink.map((item) => (
                            //here , use link instead of a tag
                            <Link to={item.path} key={item.id} className={
                                `py-3 px-4 transition-all duration-100 hover:bg-green-500 hover:rounded-lg hover:text-white  text-black border-b border-black-400 w-10/12 mx-auto`
                            }>
                                {item.title}
                            </Link>
                        ))
                    }



                </div>






            </div>

        </nav>
    )
}

export default Navbar