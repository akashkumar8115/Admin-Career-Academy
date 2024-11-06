import React from 'react'
import { motion } from 'framer-motion'

const CourseComparison = () => {
    return (
        <div className="pt-24 min-h-screen bg-gradient-to-b from-white to-violet-100 mt-28 pb-12">
            <div className="w-11/12 lg:w-10/12 mx-auto">
                <div className="overflow-x-auto">
                    <table className="w-full bg-white rounded-xl shadow-lg">
                        <thead className="bg-violet-50 text-white">
                            <tr>
                                <th className="p-4">Course</th>
                                <th className="p-4">Duration</th>
                                <th className="p-4">Average Fees</th>
                                <th className="p-4">Job Prospects</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b">
                                <td className="p-4">B.Tech CSE</td>
                                <td className="p-4">4 years</td>
                                <td className="p-4">₹4-12L/year</td>
                                <td className="p-4">Software Engineer, Data Scientist</td>
                            </tr>
                            <tr className="border-b">
                                <td className="p-4">BBA</td>
                                <td className="p-4">3 years</td>
                                <td className="p-4">₹2-5L/year</td>
                                <td className="p-4">Business Analyst, Manager</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default CourseComparison
