import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { RiMenu2Fill } from "react-icons/ri"
import { IoMdClose } from "react-icons/io"
import { IoIosArrowDown } from "react-icons/io"
import logo from '../../assets/logo.png'

const navlink = [
    {
        id: 1,
        title: "Home",
        path: "/",
    },
    {
        id: 2,
        title: "Career",
        path: "#",
        dropdown: [
            { title: "Internships/Jobs", path: "/internships-jobs" },
            { title: "Career Guidance", path: "/services/career-guidance" },
            { title: "Career Roadmap", path: "/services/career-roadmap" },
        ]
    },
    {
        id: 3,
        title: "Education",
        path: "#",
        dropdown: [
            { title: "College List", path: "/services/colleges" },
            { title: "Course Comparison", path: "/services/course-comparison" },
            { title: "Placement Stats", path: "/services/placement-stats" },
        ]
    },
    {
        id: 4,
        title: "Accommodation",
        path: "#",
        dropdown: [
            { title: "PG/Hostel Details", path: "/services/pg-hostel-details" },
            { title: "Hostel Rules", path: "/services/hostel-rules" },
            { title: "Campus Life", path: "/services/campus-life" },
        ]
    },
    {
        id: 5,
        title: "Services",
        path: "/services",
    },
    {
        id: 6,
        title: "About",
        path: "/about",
    },
    {
        id: 7,
        title: "Contact",
        path: "/contact-us",
    },
]

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [activeDropdown, setActiveDropdown] = useState(null)

    const handleDropdown = (id) => {
        setActiveDropdown(activeDropdown === id ? null : id)
    }
    const [isScrolled, setIsScrolled] = useState(false)
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setIsLoaded(true)
        }, 3000)

        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <>
            <header className={`fixed w-full z-40 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
                <nav className='w-full fixed top-0 left-0 z-[9999] right-0 text-black py-2 bg-white shadow-lg'>
                    <div className='w-11/12 lg:w-10/12 mx-auto flex justify-between items-center'>
                        <div className='py-3 px-3 flex items-center justify-between'>
                            {/* <img src={logo} alt="logo" className='w-32' /> */}
                            <motion.div
                                initial={{ x: '40vw', y: '45vh', scale: 2.5 }}
                                animate={isLoaded ? { x: 0, y: 0, scale: 1 } : {}}
                                transition={{ duration: 1, ease: 'easeOut' }}
                            >
                                <Link to='/' className='text-2xl font-bold'>
                                    <img
                                        src={logo} // Add your logo path here
                                        // alt="Career Academy"
                                        className="h-12"
                                    />
                                </Link>
                            </motion.div>
                        </div>

                        <div className='hidden smd:flex xl:gap-x-6 xmd:gap-x-4 gap-x-2'>
                            {navlink.map((item) => (
                                <div key={item.id} className="relative group">
                                    {item.dropdown ? (
                                        <button
                                            className='py-1 px-3 flex items-center gap-1 transition-all duration-300 anime rounded-lg font-semibold'
                                            onClick={() => handleDropdown(item.id)}
                                        >
                                            {item.title}
                                            <IoIosArrowDown className={`transition-transform duration-300 ${activeDropdown === item.id ? 'rotate-180' : ''}`} />
                                        </button>
                                    ) : (
                                        <Link to={item.path} className='py-1 px-3 transition-all duration-300 anime rounded-lg font-semibold'>
                                            {item.title}
                                        </Link>
                                    )}

                                    {item.dropdown && activeDropdown === item.id && (
                                        <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2">
                                            {item.dropdown.map((dropItem, index) => (
                                                <Link
                                                    key={index}
                                                    to={dropItem.path}
                                                    className="block px-4 py-2 hover:bg-violet-100 transition-colors"
                                                >
                                                    {dropItem.title}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        <div className='text-2xl smd:hidden flex'>
                            {!isOpen ? (
                                <RiMenu2Fill onClick={() => setIsOpen(true)} className='cursor-pointer' />
                            ) : (
                                <IoMdClose onClick={() => setIsOpen(false)} className='cursor-pointer' />
                            )}
                        </div>

                        {/* Mobile Menu */}
                        <div className={`absolute top-[104px] left-0 py-12 font-semibold w-full bg-gradient-to-b from-white to-violet-100 smd:hidden flex flex-col items-center gap-y-2 shadow-xl border-t-[3px] border-violet-50
                    ${isOpen ? "translate-x-[0%]" : "translate-x-[100%]"} transition-all duration-500`}>
                            {navlink.map((item) => (
                                <div key={item.id} className="w-10/12">
                                    {item.dropdown ? (
                                        <>
                                            <button
                                                onClick={() => handleDropdown(item.id)}
                                                className="py-3 px-4 flex items-center justify-between w-full border-b border-black-400"
                                            >
                                                {item.title}
                                                <IoIosArrowDown className={`transition-transform duration-300 ${activeDropdown === item.id ? 'rotate-180' : ''}`} />
                                            </button>
                                            {activeDropdown === item.id && (
                                                <div className="bg-white py-2">
                                                    {item.dropdown.map((dropItem, index) => (
                                                        <Link
                                                            key={index}
                                                            to={dropItem.path}
                                                            className="block px-6 py-2 hover:bg-violet-100"
                                                            onClick={() => setIsOpen(false)}
                                                        >
                                                            {dropItem.title}
                                                        </Link>
                                                    ))}
                                                </div>
                                            )}
                                        </>
                                    ) : (
                                        <Link
                                            to={item.path}
                                            className="py-3 px-4 block border-b border-black-400 hover:bg-violet-100"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {item.title}
                                        </Link>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Navbar