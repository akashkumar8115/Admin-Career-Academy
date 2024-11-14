import React from 'react';
import { motion } from 'framer-motion';
import { FaRocket, FaRoute, FaClipboardCheck } from 'react-icons/fa';

const CareerPlanning = () => {
    const planningSteps = [
        {
            icon: <FaRocket />,
            title: "Goal Setting",
            description: "Define your career aspirations and set achievable milestones",
            steps: [
                "Short-term objectives (3-6 months)",
                "Medium-term goals (1-2 years)",
                "Long-term vision (3-5 years)",
                "Industry-specific targets"
            ]
        },
        {
            icon: <FaRoute />,
            title: "Career Roadmap",
            description: "Customize your journey with detailed action plans",
            steps: [
                "Educational requirements",
                "Skill development timeline",
                "Industry certifications",
                "Experience milestones"
            ]
        },
        {
            icon: <FaClipboardCheck />,
            title: "Progress Tracking",
            description: "Monitor your advancement and adjust plans as needed",
            steps: [
                "Monthly progress reviews",
                "Skill assessment updates",
                "Goal achievement tracking",
                "Career path adjustments"
            ]
        }
    ];

    return (
        <section className="py-16 px-4 bg-gradient-to-b from-blue-50 to-white">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl font-bold mb-4">Strategic Career Planning</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Create your personalized career roadmap with expert guidance and structured planning tools
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {planningSteps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className="text-blue-600 text-3xl mb-4">{step.icon}</div>
                            <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                            <p className="text-gray-600 mb-4">{step.description}</p>
                            <ul className="space-y-3">
                                {step.steps.map((item, idx) => (
                                    <li key={idx} className="flex items-start">
                                        <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-2"></span>
                                        <span className="text-gray-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CareerPlanning;
