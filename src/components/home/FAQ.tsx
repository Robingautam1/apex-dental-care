'use client';

import { motion } from 'framer-motion';
import { Accordion } from '@/components/shared/Accordion';
import Container from '@/components/shared/Container';

interface FAQProps {
    faqs: { question: string; answer: string }[];
}

export function FAQ({ faqs }: FAQProps) {
    return (
        <section className="bg-white" aria-labelledby="faq-heading">
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
                            <p className="text-sm font-medium text-[#2DBD8F] mb-3">FAQ</p>
                            <h2
                                id="faq-heading"
                                className="text-2xl md:text-3xl font-semibold text-[#1C1C1E] leading-snug tracking-tight"
                                style={{ fontFamily: 'var(--font-display)' }}
                            >
                                Common questions
                            </h2>
                        </motion.div>

                        {/* Right accordion */}
                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-40px' }}
                            transition={{ duration: 0.45 }}
                            className="max-w-2xl"
                        >
                            <Accordion items={faqs} />
                        </motion.div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
