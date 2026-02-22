'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { BlogCard } from '@/components/shared/BlogCard';
import { blogPosts } from '@/data/blog-posts';
import Container from '@/components/shared/Container';
import SectionLabel from '@/components/shared/SectionLabel';
import { Button } from '@/components/shared/Button';

export function BlogPreview() {
    return (
        <section className="py-20 md:py-28 bg-white overflow-hidden" aria-labelledby="blog-heading">
            <Container>
                <motion.div
                    className="text-center max-w-2xl mx-auto mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <SectionLabel>From the Blog</SectionLabel>
                    <h2
                        id="blog-heading"
                        className="text-3xl md:text-4xl font-semibold text-[#1A3C5E] mt-1 mb-4 leading-tight tracking-[-0.02em]"
                        style={{ fontFamily: 'var(--font-display)' }}
                    >
                        Dental Health Tips & Guides from Rohtak&apos;s Trusted Clinic
                    </h2>
                    <p className="text-[#6B7280] leading-relaxed">
                        Expert dental health advice from Dr. Aashish Malik to help you maintain a healthy, confident smile.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {blogPosts.map((post, i) => (
                        <motion.div
                            key={post.slug}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                        >
                            <BlogCard {...post} />
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className="text-center mt-10"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <Button href="/blog" variant="outline">
                        View All Articles
                    </Button>
                </motion.div>
            </Container>
        </section>
    );
}
