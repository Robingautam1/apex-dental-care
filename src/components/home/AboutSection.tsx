'use client';

import { motion } from 'framer-motion';
import Container from '@/components/shared/Container';

export function AboutSection() {
    return (
        <section className="bg-white" aria-labelledby="about-heading">
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
                            <p className="text-sm font-medium text-[#2DBD8F] mb-3">About</p>
                            <h2
                                id="about-heading"
                                className="text-2xl md:text-3xl font-semibold text-[#1C1C1E] leading-snug tracking-tight"
                                style={{ fontFamily: 'var(--font-display)' }}
                            >
                                The dentist
                            </h2>
                        </motion.div>

                        {/* Right content */}
                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-40px' }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="max-w-xl"
                        >
                            <p className="text-lg text-[#374151] leading-relaxed mb-6">
                                <strong className="text-[#1C1C1E]">Dr. Aashish Malik</strong> has earned the trust of hundreds of families across Rohtak with his commitment to painless procedures, honest diagnoses, and affordable treatment.
                            </p>
                            <p className="text-base text-[#6B7280] leading-relaxed mb-8">
                                Specializing in root canal treatment, dental implants, cosmetic dentistry, and orthodontics, Dr. Malik provides personalized attention in a warm, modern clinic environment at Model Town, Rohtak.
                            </p>
                            <blockquote className="border-l-2 border-[#2DBD8F] pl-5 py-1">
                                <p className="text-[#374151] italic leading-relaxed">
                                    &ldquo;Dr. Aashish is one of the best dental surgeons in town. Very polite with patients.&rdquo;
                                </p>
                                <cite className="text-sm text-[#9CA3AF] not-italic mt-2 block">— A.M., Rohtak</cite>
                            </blockquote>
                            <a
                                href="/about"
                                className="inline-flex items-center gap-1 text-sm font-medium text-[#2DBD8F] mt-6 hover:gap-2 transition-all duration-150"
                            >
                                More about us →
                            </a>
                        </motion.div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
