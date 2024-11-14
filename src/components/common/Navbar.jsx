import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { RiMenu2Fill } from "react-icons/ri"
import { IoMdClose } from "react-icons/io"
import { IoIosArrowDown } from "react-icons/io"
import logo from '../../assets/home/logo.png'

const navlink = [
    {
        id: 1,
        title: "Home",
        path: "/",
    },
    {
        id: 2,
        title: "About",
        path: "/about",
        dropdown: [
            { title: "About Company", path: "/about/about-company" },
            { title: "Our Story", path: "/about/our-story" },
            { title: "Our Team", path: "/about/our-team" },
            { title: "Our Partners", path: "/about/our-partners" },
            { title: "Our Blog", path: "/about/our-blog" },
            { title: "Student Success Stories & Testimonials", path: "/about/student-success-stories" },
        ]
    },
    {
        id: 3,
        title: "Services",
        path: "/services",
        dropdown: [
            { title: "Counselling Sessions", path: "/services/counselling-sessions" },
            { title: "Internships & Jobs", path: "/services/internships-jobs" },
            { title: "IT/Tech based Services", path: "/services/it-tech-based-services" },
            { title: "Career Guidance program", path: "/services/career-guidance-program" },
            { title: "ACA Scholarship Program", path: "/services/aca-scholarship-program" },
            { title: "Partnership & Collaborations", path: "/services/partnership-collaborations" },
        ]
    },
    {
        id: 5,
        title: "Education",
        path: "#",
        dropdown: [
            { title: "Courses & Degrees", path: "/services/courses-degrees" },
            { title: "Study Abroad", path: "/services/study-abroad" },
            { title: "Entrance Exams", path: "/services/entrance-exams" },
            { title: "Scholarships & Financial Aid", path: "/services/scholarships-financial-aid" },
            { title: "College List", path: "/services/colleges" },
            { title: "Course Comparison", path: "/services/course-comparison" },
            { title: "Placement Stats", path: "/services/placement-stats" },
        ]
    },
    {
        id: 6,
        title: "Accommodation",
        path: "#",
        dropdown: [
            { title: "On-Campus Housing", path: "/services/on-campus-housing" },
            { title: "Off-Campus Housing", path: "/services/off-campus-housing" },
            { title: "Student Housing Communities", path: "/services/student-housing-communities" },
            { title: "Budgeting Tips", path: "/services/budgeting-tips" },
            { title: "Safety Tips", path: "/services/safety-tips" },
            { title: "PG/Hostel Details", path: "/services/pg-hostel-details" },
            { title: "Hostel Rules", path: "/services/hostel-rules" },
            { title: "Campus Life", path: "/services/campus-life" },
        ]
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
    const location = useLocation();

    useEffect(() => {
        setActiveDropdown(null)
    }, [location.pathname])


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
                            <motion.div
                                initial={{ x: '40vw', y: '45vh', scale: 2.5 }}
                                animate={isLoaded ? { x: 0, y: 0, scale: 1 } : {}}
                                transition={{ duration: 1, ease: 'easeOut' }}
                            >
                                <Link to='/' className='text-2xl font-bold'>
                                    <img
                                        src={logo} // Add your logo path here
                                        alt="Career Academy"
                                        className="h-12"
                                    />
                                </Link>
                            </motion.div>
                        </div>

                        {/* <div className='hidden smd:flex xl:gap-x-6 xmd:gap-x-4 gap-x-2'>
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
                        </div> */}

                        <div className='hidden smd:flex xl:gap-x-6 xmd:gap-x-4  items-center gap-x-2'>
                            {navlink.map((item) => (
                                <div key={item.id} className="relative group">
                                    {item.dropdown ? (
                                        <div>
                                            <button
                                                className='py-1 px-3 flex items-center gap-1 transition-all duration-300 anime rounded-lg font-semibold'
                                                onClick={() => handleDropdown(item.id)}
                                            >
                                                {item.title}
                                                <IoIosArrowDown className={`transition-transform duration-300 ${activeDropdown === item.id ? 'rotate-180' : ''}`} />

                                            </button>

                                            <div className=' absolute z-[999] left-0 right-0 mt-4'>



                                                <div className={`   w-60 overflow-hidden transition-all duration-500 ease-in-out max-h-0 group-hover:max-h-[600px] bg-white shadow-lg

                                    `}>
                                                    {item.dropdown.map((dropItem, index) => (
                                                        <Link
                                                            key={index}
                                                            to={dropItem.path}
                                                            className=" block px-4 py-4 hover:bg-green-100 transition-colors"
                                                        >
                                                            {dropItem.title}
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>

                                        </div>
                                    ) : (
                                        <Link to={item.path} className='py-1 px-3 transition-all h-full  duration-300 anime rounded-lg font-semibold'>
                                            {item.title}
                                        </Link>
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