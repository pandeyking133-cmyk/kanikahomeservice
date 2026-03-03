import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogData';

const Blog = () => {
    return (
        <>
            <Helmet>
                <title>Blog | Kanika Call girl service</title>
                <meta name="description" content="Insights, news, and elite guides on luxury model services across Vasundhara, Vaishali, Noida, and Ghaziabad." />
            </Helmet>

            <div className="pt-32 pb-20 bg-brand-black min-h-screen">
                <div className="container mx-auto px-4 md:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h1 className="text-4xl md:text-5xl font-serif text-white mb-4">Elite <span className="text-brand-gold italic">Insights</span></h1>
                        <p className="text-gray-400 max-w-2xl mx-auto">Discover the latest in premium companionship and VIP Escorts across the Delhi NCR region.</p>
                    </motion.div>

                    <div className="grid md:grid-cols-4 gap-10 lg:gap-16">
                        {blogPosts.map((post, idx) => (
                            <motion.article
                                key={post.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1, duration: 0.8 }}
                                className="group relative"
                            >
                                <Link to={`/blog/${post.id}`} className="block">
                                    <div className="relative aspect-[9/16] overflow-hidden rounded-xl mb-6">
                                        <div className="absolute inset-0 bg-brand-black/20 group-hover:bg-transparent transition-all z-10"></div>
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                        />
                                    </div>
                                    <h2 className="text-2xl font-serif text-brand-gold mb-3 group-hover:text-white transition-colors">{post.title}</h2>
                                    <p className="text-gray-400 mb-4">{post.excerpt}</p>
                                    <span className="text-brand-burgundy uppercase text-sm font-semibold tracking-wider flex items-center gap-2 group-hover:gap-4 transition-all">
                                        Read Journal <span>→</span>
                                    </span>
                                </Link>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Blog;
