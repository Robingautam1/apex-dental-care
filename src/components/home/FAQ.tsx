'use client';

import { motion } from 'framer-motion';
import { Accordion } from '@/components/shared/Accordion';

interface FAQProps {
    faqs: { question: string; answer: string }[];
}

export function FAQ({ faqs }: FAQProps) {
    return (
        <section className="py-24 bg-background-base">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        className="text-3xl md:text-4xl font-bold mb-4"
                    >
                        Frequently Asked Questions
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-text-muted"
                    >
                        Everything you need to know about dental care at Apex Dental Clinic, Rohtak.
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    className="max-w-3xl mx-auto"
                >
                    <Accordion items={faqs} />
                </motion.div>
            </div>
        </section>
    );
}
