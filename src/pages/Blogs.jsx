import React from 'react'

const Blogs = () => {
    const blogPosts = [
        {
            title: "Career Trends in 2024",
            excerpt: "Discover the most in-demand career paths and skills for the upcoming year.",
            date: "2024-01-15",
            category: "Career Guidance"
        },
        // Add more blog posts
    ]

    return (
        <div className="pt-24 min-h-screen bg-gradient-to-b from-white to-green-shade-50 mt-28">
            <div className="w-11/12 lg:w-10/12 mx-auto">
                <h1 className="text-4xl font-bold text-center mb-12">Blog Posts</h1>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                            <span className="text-sm text-black-500">{post.category}</span>
                            <h2 className="text-xl font-semibold my-2">{post.title}</h2>
                            <p className="text-black-600 mb-4">{post.excerpt}</p>
                            <span className="text-sm text-black-500">{post.date}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Blogs
