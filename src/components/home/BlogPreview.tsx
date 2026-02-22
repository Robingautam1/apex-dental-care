'use client';

import { motion } from 'framer-motion';
import { BlogCard } from '@/components/shared/BlogCard';
import { blogPosts } from '@/data/blog-posts';
import { Button } from '@/components/shared/Button';
import Container from '@/components/shared/Container';
import SectionHeading from '@/components/shared/SectionHeading';

const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08 } },
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
};

export function BlogPreview() {
    return (
        <section className="py-20 md:py-28 bg-[#F7F4EF] overflow-hidden" aria-labelledby="blog-heading">
            <Container>
                <SectionHeading
                    eyebrow="From the Blog"
                    heading="Dental Health Tips & Guides from Rohtak's Trusted Clinic"
                    subtext="Expert dental health advice from Dr. Aashish Malik to help you maintain a healthy, confident smile."
                    center
                />

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-6"
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: '-80px' }}
                >
                    {blogPosts.map((post) => (
                        <motion.div key={post.slug} variants={item}>
                            <BlogCard {...post} />
                        </motion.div>
                    ))}
                </motion.div>

                <div className="text-center mt-10">
                    <Button href="/blog" variant="secondary">
                        View All Articles
                    </Button>
                </div>
            </Container>
        </section>
    );
}
