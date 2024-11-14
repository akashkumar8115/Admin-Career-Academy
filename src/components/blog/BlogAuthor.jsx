import React from 'react';
import { motion } from 'framer-motion';
import { FaTwitter, FaLinkedinIn, FaGlobe } from 'react-icons/fa';

const BlogAuthor = ({ author }) => {
    if (!author) return null;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl shadow-lg p-6 my-8"
        >
            <div className="flex items-center gap-6">
                <img
                    src={author.image}
                    alt={author.name}
                    className="w-24 h-24 rounded-full object-cover"
                />
                <div>
                    <h3 className="text-xl font-bold mb-2">{author.name}</h3>
                    <p className="text-gray-600 mb-4">{author.bio}</p>
                    <div className="flex gap-4">
                        {author.social.map((link, index) => (
                            <a
                                key={index}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:text-blue-700 transition-colors"
                            >
                                {link.platform === 'twitter' && <FaTwitter />}
                                {link.platform === 'linkedin' && <FaLinkedinIn />}
                                {link.platform === 'website' && <FaGlobe />}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default BlogAuthor;
