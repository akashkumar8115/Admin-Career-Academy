import React from 'react'
import { motion } from 'framer-motion'

const stats = [
    {
        number: "5000+",
        label: "Students Counseled",
        icon: "👥"
    },
    {
        number: "500+",
        label: "Partner Companies",
        icon: "🏢"
    },
    {
        number: "95%",
        label: "Success Rate",
        icon: "📈"
    },
    {
        number: "200+",
        label: "Expert Counselors",
        icon: "👨‍🏫"
    }
]

const ServiceStats = () => {
    return (
        <section className="py-16 bg-gradient-to-r from-violet-50 to-violet-100">
            <div className="max-w-6xl mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="text-center"
                        >
                            <div className="text-4xl mb-2">{stat.icon}</div>
                            <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                            <div className="text-white opacity-90">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ServiceStats
