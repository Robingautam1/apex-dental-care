'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { reviews } from '@/data/reviews';
import Container from '@/components/shared/Container';

export function Reviews() {
    return (
        <section className="bg-[#FAFAF9]" aria-labelledby="reviews-heading">
            <Container>
                <div className="py-24 md:py-28">
                    <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12 lg:gap-16">
                        {/* Left label */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true, margin: '-40px' }}
                            transition={{ duration: 0.5 }}
                        >
                            <p className="text-sm font-medium text-[#2DBD8F] mb-3">Reviews</p>
                            <h2
                                id="reviews-heading"
                                className="text-2xl md:text-3xl font-semibold text-[#1C1C1E] leading-snug tracking-tight mb-4"
                                style={{ fontFamily: 'var(--font-display)' }}
                            >
                                Trusted by patients
                            </h2>
                            <div className="flex items-center gap-2">
                                <div className="flex gap-0.5">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={14} className="text-[#FBBF24] fill-[#FBBF24]" />
                                    ))}
                                </div>
                                <span className="text-sm font-semibold text-[#1C1C1E]">5.0</span>
                                <span className="text-xs text-[#9CA3AF]">on Google</span>
                            </div>
                        </motion.div>

                        {/* Right reviews */}
                        <div className="space-y-6">
                            {reviews.map((r, i) => (
                                <motion.blockquote
                                    key={r.name}
                                    initial={{ opacity: 0, y: 12 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: '-40px' }}
                                    transition={{ duration: 0.4, delay: i * 0.08 }}
                                    className="border-l-2 border-[#E5E7EB] pl-5 py-1"
                                >
                                    <p className="text-[#374151] leading-relaxed mb-2">
                                        &ldquo;{r.text}&rdquo;
                                    </p>
                                    <cite className="text-sm text-[#9CA3AF] not-italic">
                                        {r.name}
                                    </cite>
                                </motion.blockquote>
                            ))}
                        </div>
                    </div>
                    <div className="mt-8 lg:pl-[calc(280px+4rem)]">
                        <a
                            href="https://www.google.com/search?q=Apex+Dental+Care+Rohtak+reviews"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-medium text-[#2DBD8F] hover:underline"
                        >
                            See all reviews on Google →
                        </a>
                    </div>
                </div>
            </Container>
        </section>
    );
}
