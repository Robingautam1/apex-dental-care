'use client';

import { motion } from 'motion/react';
import { Star } from 'lucide-react';
import { reviews } from '@/lib/data';
import { MobileReviewCarousel } from '@/components/MobileReviewCarousel';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 32 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" as const }
    },
};

export default function Reviews() {
    return (
        <>
            <MobileReviewCarousel reviews={reviews} />

            <section id="reviews" className="hidden md:block py-24 bg-background-alt">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <motion.h2
                            initial={{ opacity: 0, y: 32 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-60px' }}
                            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                            className="text-3xl md:text-4xl font-bold mb-4"
                        >
                            What Our Patients Say
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 32 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-60px' }}
                            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                            className="text-lg text-text-muted"
                        >
                            Real stories from the Rohtak community. We are grateful for the trust our patients place in us.
                        </motion.p>
                    </div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-60px' }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {reviews.map((review, index) => (
                            <motion.figure
                                key={index}
                                variants={itemVariants}
                                className="bg-white p-8 rounded-2xl border border-slate-50 shadow-sm hover:shadow-soft transition-all duration-300 ease-in-out hover:-translate-y-2 flex flex-col h-full"
                            >
                                <div className="flex items-center gap-1 mb-6">
                                    {[...Array(review.rating)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                                    ))}
                                </div>
                                <blockquote className="flex-1">
                                    <p className="text-text-muted leading-relaxed mb-6">
                                        &quot;{review.text}&quot;
                                    </p>
                                </blockquote>
                                <figcaption className="mt-auto pt-6 border-t border-slate-50 flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                                        {review.name.charAt(0)}
                                    </div>
                                    <div>
                                        <div className="font-bold text-text-dark">{review.name.split(',')[0]}</div>
                                        <div className="text-sm text-text-muted">{review.name.split(',')[1]?.trim()}</div>
                                    </div>
                                </figcaption>
                            </motion.figure>
                        ))}
                    </motion.div>
                </div>
            </section>
        </>
    );
}
