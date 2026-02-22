'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { blogPosts } from '@/data/blog-posts';
import Container from '@/components/shared/Container';

export function BlogPreview() {
    return (
        <section className="bg-white" aria-labelledby="blog-heading">
            <Container>
                <div className="border-t border-[#E5E7EB] py-24 md:py-28">
                    <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12 lg:gap-16">
                        {/* Left label */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true, margin: '-40px' }}
                            transition={{ duration: 0.5 }}
                        >
                            <p className="text-sm font-medium text-[#2DBD8F] mb-3">Blog</p>
                            <h2
                                id="blog-heading"
                                className="text-2xl md:text-3xl font-semibold text-[#1C1C1E] leading-snug tracking-tight"
                                style={{ fontFamily: 'var(--font-display)' }}
                            >
                                Dental health tips
                            </h2>
                        </motion.div>

                        {/* Right blog list */}
                        <div className="divide-y divide-[#E5E7EB]">
                            {blogPosts.map((post, i) => (
                                <motion.div
                                    key={post.slug}
                                    initial={{ opacity: 0, y: 8 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: '-40px' }}
                                    transition={{ duration: 0.3, delay: i * 0.06 }}
                                >
                                    <Link
                                        href={`/blog/${post.slug}`}
                                        className="group flex items-center justify-between gap-4 py-5 hover:pl-2 transition-all duration-150"
                                    >
                                        <div className="flex-1 min-w-0">
                                            <h3 className="text-base font-semibold text-[#1C1C1E] group-hover:text-[#2DBD8F] transition-colors mb-1">
                                                {post.title}
                                            </h3>
                                            <p className="text-sm text-[#9CA3AF]">{post.readTime} · {post.category}</p>
                                        </div>
                                        <ArrowUpRight size={16} className="text-[#D1D5DB] group-hover:text-[#2DBD8F] flex-shrink-0 transition-colors" />
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
