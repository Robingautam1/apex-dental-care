'use client';

import { motion } from 'framer-motion';
import { Accordion } from '@/components/shared/Accordion';

interface FAQProps {
    faqs: { question: string; answer: string }[];
}

export function FAQ({ faqs }: FAQProps) {
    return (
        <section className="py-12 lg:py-20 bg-[#F7F4EF]" aria-labelledby="faq-heading">
            <div className="max-w-[800px] mx-auto px-4 sm:px-6">
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="text-xs font-semibold text-[#2DBD8F] bg-[#2DBD8F]/10 px-4 py-1.5 rounded-full tracking-wider uppercase">
                        FAQ
                    </span>
                    <h2
                        id="faq-heading"
                        className="text-3xl sm:text-4xl font-bold text-[#1A3C5E] mt-4 mb-4"
                        style={{ fontFamily: 'var(--font-display)' }}
                    >
                        Frequently Asked Questions
                    </h2>
                    <p className="text-[#6B7280]">
                        Everything you need to know about dental care at Apex Dental Care in Rohtak.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    <Accordion items={faqs} />
                </motion.div>
            </div>
        </section>
    );
}
