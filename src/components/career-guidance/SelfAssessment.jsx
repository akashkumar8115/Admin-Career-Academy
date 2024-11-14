import React from 'react';
import { motion } from 'framer-motion';
import { FaUserCheck, FaChartBar, FaHeart } from 'react-icons/fa';

const SelfAssessment = () => {
    const assessments = [
        {
            icon: <FaUserCheck />,
            title: "Personality Assessment",
            description: "Discover your MBTI personality type and how it aligns with different career paths",
            features: [
                "16 Personality Types Analysis",
                "Career Compatibility Matching",
                "Workplace Behavior Insights",
                "Interactive Assessment Tools"
            ]
        },
        {
            icon: <FaChartBar />,
            title: "Skills Analysis",
            description: "Evaluate your technical and soft skills to identify your strengths and areas for improvement",
            features: [
                "Technical Skills Evaluation",
                "Soft Skills Assessment",
                "Skill Gap Analysis",
                "Development Recommendations"
            ]
        },
        {
            icon: <FaHeart />,
            title: "Values Clarification",
            description: "Understand your core values and how they influence your career choices",
            features: [
                "Personal Values Assessment",
                "Work-Life Balance Analysis",
                "Career Values Alignment",
                "Priority Setting Tools"
            ]
        }
    ];

    return (
        <section className="py-16 px-4 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl font-bold mb-4">Self-Assessment & Discovery</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Begin your career journey with comprehensive self-assessment tools that help you understand your unique strengths and potential
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {assessments.map((assessment, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className="p-6">
                                <div className="text-blue-600 text-3xl mb-4">
                                    {assessment.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-2">{assessment.title}</h3>
                                <p className="text-gray-600 mb-4">{assessment.description}</p>
                                <ul className="space-y-2">
                                    {assessment.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center text-gray-700">
                                            <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="p-4 bg-gray-50 border-t">
                                <button className="w-full py-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                                    Take Assessment →
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SelfAssessment;
