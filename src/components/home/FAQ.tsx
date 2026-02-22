'use client';

import { motion } from 'framer-motion';
import { Accordion } from '@/components/shared/Accordion';
import Container from '@/components/shared/Container';
import SectionHeading from '@/components/shared/SectionHeading';

interface FAQProps {
    faqs: { question: string; answer: string }[];
}

export function FAQ({ faqs }: FAQProps) {
    return (
        <section className="py-20 md:py-28 bg-white overflow-hidden" aria-labelledby="faq-heading">
            <Container className="max-w-[740px]">
                <SectionHeading
                    eyebrow="FAQ"
                    heading="Frequently Asked Questions"
                    subtext="Common questions about dental care at Apex Dental Care, Rohtak."
                    center
                />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.45, ease: "easeOut" }}
                >
                    <Accordion items={faqs} />
                </motion.div>
            </Container>
        </section>
    );
}
