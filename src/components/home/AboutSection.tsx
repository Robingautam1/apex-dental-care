'use client';

import { motion } from 'framer-motion';
import { BlobShape } from '@/components/svg/BlobShape';
import { ToothDecor } from '@/components/svg/ToothDecor';
import Link from 'next/link';
import Container from '@/components/shared/Container';
import SectionLabel from '@/components/shared/SectionLabel';

export function AboutSection() {
    return (
        <section className="py-20 md:py-28 bg-white overflow-hidden" aria-labelledby="about-heading">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left: Doctor image placeholder with blob behind it */}
                    <motion.div
                        className="relative"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="relative max-w-md mx-auto">
                            {/* Blob shape positioned BEHIND the image frame */}
                            <BlobShape className="absolute -bottom-6 -right-6 w-[110%] h-[110%] text-[#2DBD8F] opacity-20 -z-10" />
                            {/* TODO: Replace with actual doctor photo */}
                            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden bg-gradient-to-br from-[#1A3C5E] via-[#1A3C5E]/90 to-[#2DBD8F]/40 ring-1 ring-white/10">
                                {/* Decorative quote mark top-left */}
                                <div className="absolute top-4 left-4 text-[#2DBD8F] opacity-40" aria-hidden="true">
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="currentColor">
                                        <path d="M7.031 14c3.866 0 7 3.134 7 7s-3.134 7-7 7-7-3.134-7-7l-0.031-1c0-7.732 6.268-14 14-14v4c-3.521 0-6.624 1.742-8.509 4.412 0.497-0.106 1.009-0.162 1.54-0.162zM25.031 14c3.866 0 7 3.134 7 7s-3.134 7-7 7-7-3.134-7-7l-0.031-1c0-7.732 6.268-14 14-14v4c-3.521 0-6.624 1.742-8.509 4.412 0.497-0.106 1.009-0.162 1.54-0.162z" />
                                    </svg>
                                </div>
                                {/* Dot pattern overlay */}
                                <svg className="absolute inset-0 w-full h-full opacity-[0.05]" aria-hidden="true">
                                    <pattern id="aboutDotPattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                                        <circle cx="2" cy="2" r="1" fill="white" />
                                    </pattern>
                                    <rect width="100%" height="100%" fill="url(#aboutDotPattern)" />
                                </svg>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <ToothDecor className="w-[35%] h-auto text-white opacity-15" />
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#1A3C5E] to-transparent p-6">
                                    <p className="text-white font-semibold text-lg" style={{ fontFamily: 'var(--font-display)' }}>Dr. Aashish Malik</p>
                                    <p className="text-white/70 text-sm">Dental Surgeon, Rohtak</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: About copy */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <SectionLabel>About the Doctor</SectionLabel>
                        <h2
                            id="about-heading"
                            className="text-3xl md:text-4xl font-semibold text-[#1A3C5E] mt-1 mb-6 leading-tight tracking-[-0.02em]"
                            style={{ fontFamily: 'var(--font-display)' }}
                        >
                            Meet Dr. Aashish Malik
                        </h2>
                        <p className="text-[#6B7280] leading-relaxed mb-4">
                            With years of dedicated practice in dental surgery and patient care, Dr. Aashish Malik has earned the trust of hundreds of families across Rohtak, Haryana. His commitment to painless procedures, honest diagnoses, and affordable treatment has made Apex Dental Care one of the most referred dental clinics in Model Town.
                        </p>
                        <p className="text-[#6B7280] leading-relaxed mb-6">
                            Dr. Malik specializes in general and cosmetic dentistry, with particular expertise in root canal treatment, dental implants, and orthodontics. Every patient receives personalized attention in a warm, modern clinic environment.
                        </p>

                        {/* Quote */}
                        <blockquote className="border-l-4 border-[#2DBD8F] pl-5 py-3 mb-8 bg-[#F7F4EF] rounded-r-xl">
                            <p className="text-[#1C1C1E] italic">
                                &ldquo;Very polite with patients. One of the best doctors in Rohtak.&rdquo;
                            </p>
                            <cite className="text-sm text-[#6B7280] mt-2 block not-italic">— Google Review</cite>
                        </blockquote>

                        <Link
                            href="/about"
                            className="inline-flex items-center text-[#2DBD8F] font-semibold hover:underline"
                        >
                            Read More About Us →
                        </Link>
                    </motion.div>
                </div>
            </Container>
        </section>
    );
}
