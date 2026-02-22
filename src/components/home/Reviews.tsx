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
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
};

export function Reviews() {
    return (
        <section className="py-20 md:py-28 bg-[#1A3C5E] overflow-hidden" aria-labelledby="reviews-heading">
            <Container>
                {/* Heading — white text for dark bg */}
                <div className="mb-14 text-center max-w-2xl mx-auto">
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
                    {/* Google badge */}
                    <div className="flex items-center justify-center gap-3 mt-4">
                        <svg viewBox="0 0 48 48" width="28" height="28" aria-label="Google" role="img">
                            <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
                            <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
                            <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" />
                            <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
                        </svg>
                        <div className="flex items-center gap-0.5">
                            {Array.from({ length: 5 }).map((_, i) => (
                                <Star key={i} size={18} className="text-[#FBBF24] fill-[#FBBF24]" />
                            ))}
                        </div>
                        <span className="font-bold text-white">5.0</span>
                        <span className="text-sm text-white/60">(38 reviews)</span>
                    </div>
                </div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-6"
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: '-80px' }}
                >
                    {reviews.map((r) => (
                        <motion.article
                            key={r.name}
                            variants={item}
                            className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 h-full flex flex-col justify-between"
                        >
                            <div>
                                <span className="text-4xl font-serif text-[#2DBD8F] opacity-40 leading-none block mb-3" aria-hidden="true">&ldquo;</span>
                                <div className="flex items-center gap-0.5 mb-3">
                                    {Array.from({ length: r.rating }).map((_, i) => (
                                        <Star key={i} size={16} className="text-[#FBBF24] fill-[#FBBF24]" />
                                    ))}
                                </div>
                                <p className="text-white/80 leading-relaxed text-sm mb-4">
                                    &ldquo;{r.text}&rdquo;
                                </p>
                            </div>
                            <div className="flex items-center justify-between pt-4 border-t border-white/10">
                                <span className="font-semibold text-white text-sm">{r.name}</span>
                                <span className="text-xs text-white/50">Google Review</span>
                            </div>
                        </motion.article>
                    ))}
                </motion.div>

                <motion.div
                    className="text-center mt-10"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <a
                        href="https://www.google.com/search?q=Apex+Dental+Care+Rohtak+reviews"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#2DBD8F] font-semibold text-sm hover:gap-2 inline-flex items-center gap-1 transition-all duration-150"
                    >
                        See All Reviews on Google →
                    </a>
                </motion.div>
            </Container>
        </section>
    );
}
