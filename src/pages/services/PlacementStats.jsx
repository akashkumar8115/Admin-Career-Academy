import React from 'react'
import { motion } from 'framer-motion'

const PlacementStats = () => {
    return (
        <div className="pt-24 min-h-screen bg-gradient-to-b from-white to-violet-100 mt-28 pb-12">
            <div className="w-11/12 lg:w-10/12 mx-auto">
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="grid ssm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
                >
                    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                        <h3 className="text-3xl font-bold text-violet-50 mb-2">95%</h3>
                        <p className="text-black-600">Placement Rate</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                        <h3 className="text-3xl font-bold text-violet-50 mb-2">12 LPA</h3>
                        <p className="text-black-600">Average Package</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                        <h3 className="text-3xl font-bold text-violet-50 mb-2">500+</h3>
                        <p className="text-black-600">Recruiting Companies</p>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default PlacementStats
