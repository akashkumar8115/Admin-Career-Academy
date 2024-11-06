import React, { useState } from 'react'
import { motion } from 'framer-motion'
import CourseComparisonTable from '../../components/courses/CourseComparisonTable'
// import CourseFilter from '../../components/courses/CourseFilter'
import CourseDetails from '../../components/courses/CourseDetails'

const courseCategories = [
    "Engineering",
    "Management",
    "Medical",
    "Arts & Humanities",
    "Science",
    "Commerce"
]

const CourseComparison = () => {
    const [selectedCategory, setSelectedCategory] = useState("Engineering")
    
    return (
        <div className="pt-24 min-h-screen bg-gradient-to-b from-white to-violet-100 mt-28 pb-12">
            <div className="w-11/12 lg:w-10/12 mx-auto">
                <motion.h1 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl font-bold text-center mb-8"
                >
                    Course Comparison Tool
                </motion.h1>

                {/* Category Selection */}
                <div className="flex flex-wrap gap-4 mb-8 justify-center">
                    {courseCategories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-6 py-2 rounded-full transition-all ${
                                selectedCategory === category
                                    ? 'bg-violet-50 text-white'
                                    : 'bg-white text-black-600 hover:bg-violet-100'
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Course Comparison Table */}
                <CourseComparisonTable category={selectedCategory} />

                {/* Course Details Section */}
                <CourseDetails category={selectedCategory} />
            </div>
        </div>
    )
}

export default CourseComparison