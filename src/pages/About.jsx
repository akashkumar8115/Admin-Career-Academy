import React from 'react'

const About = () => {
    return (
        <div className="pt-24 min-h-screen bg-gradient-to-b from-white to-violet-100 mt-28">
            <div className="w-11/12 lg:w-10/12 mx-auto">
                <h1 className="text-4xl font-bold text-center mb-8">About Admin Career Academy</h1>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <div>
                        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
                        <p className="text-black-600">
                            Admin Career Academy is dedicated to transforming careers through expert counseling and cutting-edge IT solutions. We bridge the gap between education and industry requirements, helping students and professionals achieve their career goals.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
                        <p className="text-black-600">
                            To become the leading career development platform that empowers individuals with the right guidance, skills, and opportunities for sustainable career growth.
                        </p>
                    </div>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
                    <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
                    <ul className="list-disc pl-6 space-y-3">
                        <li>Expert Career Counselors with Industry Experience</li>
                        <li>Comprehensive IT Training Programs</li>
                        <li>Personalized Growth Plans</li>
                        <li>Industry Connections and Placement Support</li>
                        <li>Modern Learning Infrastructure</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default About
