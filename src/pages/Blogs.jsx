import React from 'react';

const Blogs = () => {
    const blogPosts = [
        {
            title: "Career Trends in 2024",
            excerpt: "Discover the most in-demand career paths and skills for the upcoming year.",
            date: "2024-01-15",
            category: "Career Guidance"
        },
        {
            title: "Top Web Development Skills",
            excerpt: "An overview of essential web development skills to stay competitive.",
            date: "2024-02-10",
            category: "Web Development"
        },
        {
            title: "Building a Career in AI & ML",
            excerpt: "Tips and guidance for launching a successful career in AI and Machine Learning.",
            date: "2024-03-05",
            category: "AI & ML"
        },
        {
            title: "Digital Marketing Strategies for 2024",
            excerpt: "Explore effective digital marketing strategies to grow your brand this year.",
            date: "2024-03-20",
            category: "Marketing"
        },
        {
            title: "Why App Development is Thriving",
            excerpt: "Understanding the demand for mobile app developers and key skills needed.",
            date: "2024-04-18",
            category: "App Development"
        },
        {
            title: "Preparing for Tech Interviews",
            excerpt: "Tips on cracking tech interviews, including coding rounds and problem-solving.",
            date: "2024-05-02",
            category: "Career Preparation"
        },
        // Add more blog posts as needed
    ];

    return (
        <div className="pt-24 min-h-screen bg-gradient-to-b from-white to-green-50 mt-28">
            <div className="w-11/12 lg:w-10/12 mx-auto">
                <h1 className="text-4xl font-bold text-center mb-12">Our Latest Blog Posts</h1>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                            <span className="text-xs font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded-full">{post.category}</span>
                            <h2 className="text-2xl font-semibold my-3 hover:text-green-600 transition duration-200 cursor-pointer">
                                {post.title}
                            </h2>
                            <p className="text-gray-700 mb-4">{post.excerpt}</p>
                            <div className="flex justify-between items-center text-sm text-gray-500">
                                <span>{post.date}</span>
                                <button className="text-green-600 hover:underline">Read more</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blogs;
