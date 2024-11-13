import React from 'react';
import { motion } from 'framer-motion';
import BlogCard from './BlogCard';

const BlogRelated = ({ posts }) => {
    return (
        <section className="py-12">
            <h2 className="text-2xl font-bold mb-8">Related Articles</h2>
            <div className="grid md:grid-cols-3 gap-8">
                {posts.map((post, index) => (
                    <motion.div
                        key={post.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <BlogCard blog={post} />
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default BlogRelated;
