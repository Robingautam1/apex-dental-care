'use client';

import { motion } from 'framer-motion';
import { Accordion } from '@/components/shared/Accordion';
import Container from '@/components/shared/Container';
import SectionLabel from '@/components/shared/SectionLabel';

interface FAQProps {
    faqs: { question: string; answer: string }[];
}

export function FAQ({ faqs }: FAQProps) {
    return (
        <section className="py-20 md:py-28 bg-[#F7F4EF] overflow-hidden" aria-labelledby="faq-heading">
            <Container className="max-w-[800px]">
                <motion.div
                    className="text-center max-w-2xl mx-auto mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <SectionLabel>FAQ</SectionLabel>
                    <h2
                        id="faq-heading"
                        className="text-3xl md:text-4xl font-semibold text-[#1A3C5E] mt-1 mb-4 leading-tight tracking-[-0.02em]"
                        style={{ fontFamily: 'var(--font-display)' }}
                    >
                        Frequently Asked Questions
                    </h2>
                    <p className="text-[#6B7280] leading-relaxed">
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
            </Container>
        </section>
    );
}
