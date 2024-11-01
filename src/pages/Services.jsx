// import React from 'react'
// import { Link } from 'react-router-dom'
// import { serviceData } from '../data/footer'

// const Services = () => {
//     return (
//         <div className="pt-24 min-h-screen bg-gradient-to-b from-white to-green-shade-50 mt-28">
//             <div className="w-11/12 lg:w-10/12 mx-auto">
//                 <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>

//                 <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//                     {serviceData.map((service) => (
//                         <Link 
//                             to={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`} 
//                             key={service.id} 
//                             className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all cursor-pointer"
//                         >
//                             <h2 className="text-xl font-semibold mb-4">{service.title}</h2>
//                             <div className="text-black-600">Click to explore more</div>
//                         </Link>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Services






import React from 'react'
import { Link } from 'react-router-dom'
// import { serviceData } from '../data/footer.js'
// import { serviceData } from '../data/servicesData.js'
import { serviceImages , serviceData, servicesData} from '../data/services'
import { motion } from 'framer-motion'

const Services = () => {
    return (
        <div className="pt-24 min-h-screen bg-gradient-to-b from-white to-green-shade-50 mt-28">
            <div className="w-11/12 lg:w-10/12 mx-auto">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl font-bold text-center mb-12"
                >
                    Our Services
                </motion.h1>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {servicesData.map((service, index) => (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            key={service.id}
                        >
                            <Link
                                to={service.path}
                                className="group block bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                            >
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        // src={serviceImages[service.title.toLowerCase().replace(/\s+/g, '')]}
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300" />
                                </div>

                                <div className="p-6">
                                    <h2 className="text-xl font-semibold mb-3 group-hover:text-violet-50">
                                        {service.title}
                                    </h2>
                                    <div className="flex items-center text-black-600">
                                        <span>Explore Services</span>
                                        <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* Featured Services Section */}
                <div className="mt-16">
                    <h2 className="text-3xl font-semibold text-center mb-8">Why Choose Our Services?</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                            <div className="w-16 h-16 mx-auto mb-4 bg-violet-100 rounded-full flex items-center justify-center">
                                <svg className="w-8 h-8 text-violet-50" viewBox="0 0 24 24" fill="currentColor" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
                            <p className="text-black-600">Industry professionals with years of experience</p>
                        </div>

                        {/* Add more feature boxes */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services
