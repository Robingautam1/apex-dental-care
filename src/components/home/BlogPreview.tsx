'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { blogPosts } from '@/data/blog-posts';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

export function BlogPreview() {
    return (
        <section id="blog" className="py-24 bg-background-alt">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="max-w-2xl">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-100px' }}
                            className="text-3xl md:text-4xl font-bold mb-4"
                        >
                            Latest from Our Blog
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-100px' }}
                            transition={{ delay: 0.1 }}
                            className="text-lg text-text-muted"
                        >
                            Stay updated with dental care tips, news, and insights from our experts in Rohtak.
                        </motion.p>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                    >
                        <Link
                            href="/blog"
                            className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary-hover transition-colors"
                        >
                            View All Posts <ArrowRight className="w-5 h-5" />
                        </Link>
                    </motion.div>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    {blogPosts.map((post, index) => (
                        <motion.article
                            key={post.slug}
                            variants={itemVariants}
                            className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-soft transition-all duration-300 ease-in-out hover:-translate-y-2 group border border-slate-50 flex flex-col h-full"
                        >
                            <div className="relative h-48 w-full overflow-hidden">
                                {/* Gradient thumbnail */}
                                <div className={`absolute inset-0 ${index === 0 ? 'bg-gradient-to-br from-secondary/30 to-primary/20' :
                                        index === 1 ? 'bg-gradient-to-br from-primary/30 to-secondary/20' :
                                            'bg-gradient-to-br from-accent/20 to-primary/20'
                                    } group-hover:scale-105 transition-transform duration-500`} />
                            </div>
                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-xs text-secondary font-bold uppercase tracking-wider">
                                        {post.category}
                                    </span>
                                    <span className="text-sm text-text-muted">{post.readTime}</span>
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-text-dark group-hover:text-primary transition-colors">
                                    {post.title}
                                </h3>
                                <p className="text-text-muted leading-relaxed mb-6 flex-grow text-sm">
                                    {post.excerpt}
                                </p>
                                <Link
                                    href={`/blog/${post.slug}`}
                                    className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary-hover transition-colors mt-auto"
                                >
                                    Read More <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </motion.article>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
