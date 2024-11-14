import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { blogData } from '../../data/blogFullData.js';
import { auther } from '../../data/authorData.js'
import BlogAuthor from '../../components/blog/BlogAuthor';
import BlogComments from '../../components/blog/BlogComments';
import BlogShareButtons from '../../components/blog/BlogShareButtons';
import BlogRelated from '../../components/blog/BlogRelated';
import { FaCalendar, FaUser, FaClock, FaTag } from 'react-icons/fa';

const BlogFullArticle = () => {
    const { id } = useParams();
    const blog = blogData.find(blog => blog.id === parseInt(id));
    const relatedPosts = blogData.filter(post => post.category === blog.category && post.id !== blog.id).slice(0, 3);

    return (
        <div className="bg-gray-50 min-h-screen py-16 px-4">
            <motion.article
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden"
            >
                <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-[400px] object-cover"
                />

                <div className="p-8">
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                        <span className="flex items-center gap-2">
                            <FaCalendar /> {blog.date}
                        </span>
                        <span className="flex items-center gap-2">
                            <FaUser /> {blog.author}
                        </span>
                        <span className="flex items-center gap-2">
                            <FaClock /> {blog.readTime}
                        </span>
                        <span className="flex items-center gap-2">
                            <FaTag /> {blog.category}
                        </span>
                    </div>

                    <h1 className="text-4xl font-bold mb-6">{blog.title}</h1>

                    <div className="prose prose-lg max-w-none mb-8">
                        {blog.fullContent}
                    </div>

                    <BlogShareButtons url={window.location.href} title={blog.title} />
                </div>
            </motion.article>

            <div className="max-w-4xl mx-auto mt-12">
                <BlogAuthor author={blog.author} />
                <BlogComments comments={blog.comments} />
                <BlogRelated posts={relatedPosts} />
            </div>
        </div>
    );
};

export default BlogFullArticle;
