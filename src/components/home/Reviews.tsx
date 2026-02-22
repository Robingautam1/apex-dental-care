'use client';

import { motion } from 'framer-motion';
import { Star, ArrowRight } from 'lucide-react';
import { reviews } from '@/data/reviews';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

export function Reviews() {
    return (
        <section className="py-24 bg-background-alt">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="max-w-2xl">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-100px' }}
                            className="text-3xl md:text-4xl font-bold mb-4"
                        >
                            What Our Patients Say
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-100px' }}
                            transition={{ delay: 0.1 }}
                            className="text-lg text-text-muted"
                        >
                            See why hundreds of families in Rohtak trust Apex Dental Care for their dental needs.
                        </motion.p>
                    </div>
                    <motion.a
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        href="https://www.google.com/search?q=Apex+Dental+Care+Rohtak+reviews"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary-hover transition-colors"
                    >
                        See All on Google <ArrowRight className="w-5 h-5" />
                    </motion.a>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {reviews.map((r, index) => (
                        <motion.div
                            key={r.name}
                            variants={itemVariants}
                            className="bg-white p-8 rounded-2xl border border-slate-50 shadow-sm hover:shadow-soft transition-all duration-300 ease-in-out hover:-translate-y-2 flex flex-col h-full"
                        >
                            <div className="flex gap-1 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                                ))}
                            </div>
                            <p className="text-text-muted leading-relaxed mb-6 flex-grow">
                                &ldquo;{r.text}&rdquo;
                            </p>
                            <div className="pt-4 border-t border-slate-50">
                                <p className="font-bold text-text-dark text-sm">{r.name}</p>
                                <p className="text-xs text-text-muted">Google Review</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
