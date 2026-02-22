'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { reviews } from '@/data/reviews';
import Container from '@/components/shared/Container';
import SectionHeading from '@/components/shared/SectionHeading';

const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08 } },
};

const item = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0 },
};

export function Reviews() {
    return (
        <section className="py-20 md:py-28 bg-[#1A3C5E] overflow-hidden" aria-labelledby="reviews-heading">
            <Container>
                <div className="mb-12 text-center max-w-xl mx-auto">
                    <p className="text-xs font-semibold tracking-[0.18em] uppercase text-[#2DBD8F] mb-3">
                        Testimonials
                    </p>
                    <h2
                        id="reviews-heading"
                        className="text-3xl md:text-4xl font-semibold text-white leading-tight tracking-[-0.02em] mb-4"
                        style={{ fontFamily: 'var(--font-display)' }}
                    >
                        What Our Patients Say
                    </h2>
                    <div className="flex items-center justify-center gap-2 mt-3">
                        <div className="flex gap-0.5">
                            {Array.from({ length: 5 }).map((_, i) => (
                                <Star key={i} size={16} className="text-[#FBBF24] fill-[#FBBF24]" />
                            ))}
                        </div>
                        <span className="font-bold text-white text-sm">5.0</span>
                        <span className="text-sm text-white/50">(38 reviews)</span>
                    </div>
                </div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-5"
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: '-80px' }}
                >
                    {reviews.map((r) => (
                        <motion.article
                            key={r.name}
                            variants={item}
                            className="bg-white/[0.07] rounded-xl p-6 border border-white/10"
                        >
                            <div className="flex gap-0.5 mb-4">
                                {Array.from({ length: r.rating }).map((_, i) => (
                                    <Star key={i} size={14} className="text-[#FBBF24] fill-[#FBBF24]" />
                                ))}
                            </div>
                            <p className="text-white/75 text-sm leading-relaxed mb-5">
                                &ldquo;{r.text}&rdquo;
                            </p>
                            <div className="flex items-center justify-between pt-4 border-t border-white/10">
                                <span className="font-medium text-white text-sm">{r.name}</span>
                                <span className="text-xs text-white/40">Google Review</span>
                            </div>
                        </motion.article>
                    ))}
                </motion.div>

                <div className="text-center mt-8">
                    <a
                        href="https://www.google.com/search?q=Apex+Dental+Care+Rohtak+reviews"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#2DBD8F] font-semibold text-sm inline-flex items-center gap-1 hover:gap-2 transition-all duration-150"
                    >
                        See All Reviews on Google →
                    </a>
                </div>
            </Container>
        </section>
    );
}
