'use client';

import { motion } from 'framer-motion';
import Container from '@/components/shared/Container';
import SectionHeading from '@/components/shared/SectionHeading';

export function AboutSection() {
    return (
        <section className="py-20 md:py-28 bg-white overflow-hidden" aria-labelledby="about-heading">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left: Image placeholder — clean and simple */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-[#1A3C5E] to-[#2a5298] shadow-lg">
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-6">
                                <p className="text-white font-semibold text-lg" style={{ fontFamily: 'var(--font-display)' }}>Dr. Aashish Malik</p>
                                <p className="text-white/70 text-sm">BDS, Dental Surgeon</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                        <SectionHeading
                            eyebrow="About the Doctor"
                            heading="Dr. Aashish Malik — Dental Surgeon, Rohtak"
                            subtext="With years of dedicated practice in dental surgery and patient care, Dr. Aashish Malik has earned the trust of hundreds of families across Rohtak, Haryana."
                        />
                        <p className="text-[#4B5563] leading-[1.7] mb-6 text-sm">
                            His commitment to painless procedures, honest diagnoses, and affordable treatment has made Apex Dental Care one of the most referred dental clinics in Model Town. Dr. Malik specializes in root canal treatment, dental implants, cosmetic dentistry, and orthodontics.
                        </p>
                        <blockquote className="border-l-2 border-[#2DBD8F] pl-4 mb-6">
                            <p className="text-[#374151] italic text-sm leading-relaxed">
                                &ldquo;Dr. Aashish is one of the best dental surgeons in town. Very polite with patients.&rdquo;
                            </p>
                            <cite className="text-xs text-[#6B7280] not-italic mt-2 block">— A.M., Rohtak (Google Review)</cite>
                        </blockquote>
                        <a href="/about" className="text-[#2DBD8F] font-semibold text-sm hover:gap-2 inline-flex items-center gap-1 transition-all duration-150">
                            Read More About Us →
                        </a>
                    </motion.div>
                </div>
            </Container>
        </section>
    );
}
