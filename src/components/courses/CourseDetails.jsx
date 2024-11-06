import React from 'react'
import { motion } from 'framer-motion'

const courseDetailData = {
    "Engineering": {
        overview: "Engineering programs focus on technical skills and problem-solving abilities essential for modern industry needs.",
        specializations: [
            {
                name: "Computer Science",
                subjects: ["Data Structures", "Algorithms", "Database Management", "Machine Learning"],
                careers: ["Full Stack Developer", "AI Engineer", "Cloud Architect"],
                skills: ["Programming", "System Design", "Problem Solving"]
            },
            {
                name: "Electronics",
                subjects: ["Digital Electronics", "Microprocessors", "Signal Processing", "VLSI"],
                careers: ["Embedded Engineer", "RF Engineer", "IoT Developer"],
                skills: ["Circuit Design", "PCB Layout", "Microcontroller Programming"]
            }
        ],
        industryPartners: ["IBM", "Intel", "Cisco", "Oracle"],
        certifications: ["AWS Certified Solutions Architect", "Cisco CCNA", "CompTIA A+"]
    },
    "Management": {
        overview: "Management studies prepare students for leadership roles across various business domains.",
        specializations: [
            {
                name: "Finance",
                subjects: ["Financial Management", "Investment Banking", "Risk Analysis"],
                careers: ["Financial Analyst", "Investment Banker", "Portfolio Manager"],
                skills: ["Financial Modeling", "Market Analysis", "Risk Assessment"]
            },
            {
                name: "Marketing",
                subjects: ["Digital Marketing", "Brand Management", "Market Research"],
                careers: ["Brand Manager", "Marketing Analyst", "Digital Marketing Specialist"],
                skills: ["Market Analysis", "Campaign Management", "Social Media Strategy"]
            }
        ],
        industryPartners: ["KPMG", "Deloitte", "JP Morgan", "Goldman Sachs"],
        certifications: ["CFA", "FRM", "PMP"]
    }
}

const CourseDetails = ({ category }) => {
    const details = courseDetailData[category]

    return (
        <div className="space-y-12">
            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-white rounded-xl shadow-lg p-8"
            >
                <h2 className="text-2xl font-bold mb-6">Course Overview</h2>
                <p className="text-black-600 mb-6">{details.overview}</p>
                
                <div className="grid md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Industry Partners</h3>
                        <div className="flex flex-wrap gap-3">
                            {details.industryPartners.map((partner, index) => (
                                <span key={index} className="bg-violet-100 text-violet-50 px-4 py-2 rounded-full">
                                    {partner}
                                </span>
                            ))}
                        </div>
                    </div>
                    
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Professional Certifications</h3>
                        <div className="flex flex-wrap gap-3">
                            {details.certifications.map((cert, index) => (
                                <span key={index} className="bg-green-100 text-green-600 px-4 py-2 rounded-full">
                                    {cert}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.section>

            <section className="grid md:grid-cols-2 gap-8">
                {details.specializations.map((spec, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2 }}
                        className="bg-white rounded-xl shadow-lg p-8"
                    >
                        <h3 className="text-xl font-bold mb-6">{spec.name} Specialization</h3>
                        
                        <div className="space-y-6">
                            <div>
                                <h4 className="font-semibold mb-3">Key Subjects</h4>
                                <ul className="list-disc pl-5 space-y-2">
                                    {spec.subjects.map((subject, idx) => (
                                        <li key={idx}>{subject}</li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h4 className="font-semibold mb-3">Career Opportunities</h4>
                                <ul className="list-disc pl-5 space-y-2">
                                    {spec.careers.map((career, idx) => (
                                        <li key={idx}>{career}</li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h4 className="font-semibold mb-3">Required Skills</h4>
                                <div className="flex flex-wrap gap-2">
                                    {spec.skills.map((skill, idx) => (
                                        <span key={idx} className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </section>
        </div>
    )
}

export default CourseDetails
