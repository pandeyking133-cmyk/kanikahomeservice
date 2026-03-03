import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { blogPosts } from '../data/blogData';
import LeadCapture from '../components/LeadCapture';

const BlogPost = () => {
    const { id } = useParams();
    const post = blogPosts.find(p => p.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!post) {
        return <Navigate to="/blog" replace />;
    }

    return (
        <>
            <Helmet>
                <title>{post.title} | Kanika Call girl service</title>
                <meta name="description" content={post.excerpt} />
            </Helmet>

            <article className="pt-32 pb-20 bg-brand-black min-h-screen">
                <div className="container mx-auto px-4 md:px-8 max-w-7xl">
                    <Link to="/blog" className="inline-flex items-center gap-2 text-brand-gold hover:text-white mb-8 transition-colors uppercase text-sm tracking-widest font-semibold">
                        <ArrowLeft size={16} /> Back to Journal
                    </Link>

                    <div className="grid lg:grid-cols-3 gap-12 xl:gap-20">
                        {/* Main Content */}
                        <div className="lg:col-span-2">
                            <h1 className="text-4xl md:text-5xl font-serif text-white mb-8 leading-tight">{post.title}</h1>

                            <div className="aspect-[9/16] overflow-hidden rounded-xl mb-12 border border-brand-burgundy/20">
                                <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                            </div>

                            <div
                                className="prose prose-invert prose-lg max-w-none prose-headings:font-serif prose-headings:text-brand-gold prose-h2:text-3xl prose-h3:text-2xl"
                                dangerouslySetInnerHTML={{ __html: post.content }}
                            ></div>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-1">
                            <div className="sticky top-28">
                                <LeadCapture />
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </>
    );
};

export default BlogPost;
