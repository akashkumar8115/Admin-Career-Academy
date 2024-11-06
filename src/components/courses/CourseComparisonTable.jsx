import React from 'react'

const courseData = {
    "Engineering": [
        {
            course: "B.Tech Computer Science",
            duration: "4 years",
            averageFees: "₹4-12L/year",
            eligibility: "10+2 with PCM, JEE",
            jobProspects: ["Software Engineer", "Data Scientist", "System Architect"],
            averageSalary: "₹6-12 LPA",
            topRecruiters: ["Google", "Microsoft", "Amazon"]
        },
        {
            course: "B.Tech Electronics",
            duration: "4 years",
            averageFees: "₹3-10L/year",
            eligibility: "10+2 with PCM, JEE",
            jobProspects: ["Hardware Engineer", "IoT Specialist", "VLSI Designer"],
            averageSalary: "₹5-10 LPA",
            topRecruiters: ["Intel", "Samsung", "Qualcomm"]
        },
        {
            course: "B.Tech Mechanical",
            duration: "4 years",
            averageFees: "₹3-8L/year",
            eligibility: "10+2 with PCM, JEE",
            jobProspects: ["Design Engineer", "Production Manager", "R&D Engineer"],
            averageSalary: "₹4-8 LPA",
            topRecruiters: ["Tata Motors", "BMW", "Mercedes"]
        }
    ],
    "Management": [
        {
            course: "BBA",
            duration: "3 years",
            averageFees: "₹2-5L/year",
            eligibility: "10+2 any stream",
            jobProspects: ["Business Analyst", "Marketing Manager", "HR Executive"],
            averageSalary: "₹4-7 LPA",
            topRecruiters: ["Deloitte", "KPMG", "EY"]
        },
        {
            course: "MBA",
            duration: "2 years",
            averageFees: "₹5-25L/year",
            eligibility: "Graduation, CAT/MAT",
            jobProspects: ["Product Manager", "Investment Banker", "Consultant"],
            averageSalary: "₹10-20 LPA",
            topRecruiters: ["McKinsey", "BCG", "Goldman Sachs"]
        }
    ]
}

const CourseComparisonTable = ({ category }) => {
    return (
        <div className="overflow-x-auto bg-white rounded-xl shadow-lg p-6 mb-12">
            <table className="w-full">
                <thead>
                    <tr className="bg-violet-50 text-white">
                        <th className="p-4 text-left">Course</th>
                        <th className="p-4">Duration</th>
                        <th className="p-4">Average Fees</th>
                        <th className="p-4">Eligibility</th>
                        <th className="p-4">Average Salary</th>
                    </tr>
                </thead>
                <tbody>
                    {courseData[category]?.map((course, index) => (
                        <tr key={index} className="border-b hover:bg-gray-50">
                            <td className="p-4 font-medium">{course.course}</td>
                            <td className="p-4 text-center">{course.duration}</td>
                            <td className="p-4 text-center">{course.averageFees}</td>
                            <td className="p-4 text-center">{course.eligibility}</td>
                            <td className="p-4 text-center">{course.averageSalary}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default CourseComparisonTable
