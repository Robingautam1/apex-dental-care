'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Star } from 'lucide-react';
import { BlobShape } from '@/components/svg/BlobShape';
import { ToothDecor } from '@/components/svg/ToothDecor';
import Container from '@/components/shared/Container';

export function AboutSection() {
    return (
        <section className="py-20 md:py-28 bg-white overflow-hidden" aria-labelledby="about-heading">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left: Doctor image placeholder */}
                    <motion.div
                        className="relative"
                        initial={{ opacity: 0, x: -28 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.55, ease: "easeOut" }}
                    >
                        <div className="relative max-w-md mx-auto">
                            {/* Blob shapes behind frame */}
                            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-[#2DBD8F]/15 rounded-full blur-2xl" />
                            <div className="absolute -top-4 -left-4 w-32 h-32 bg-[#1A3C5E]/10 rounded-full blur-xl" />

                            {/* Main image frame */}
                            {/* TODO: Replace entire div with <Image> when real photo is available */}
                            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-br from-[#1A3C5E] via-[#1e4976] to-[#2DBD8F]/60 ring-1 ring-white/10 shadow-2xl">
                                <svg className="absolute inset-0 w-full h-full opacity-[0.05]" aria-hidden="true">
                                    <pattern id="aboutDots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                                        <circle cx="2" cy="2" r="1.5" fill="white" />
                                    </pattern>
                                    <rect width="100%" height="100%" fill="url(#aboutDots)" />
                                </svg>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <ToothDecor className="w-48 h-48 text-white opacity-10" />
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 bg-white/10 backdrop-blur-md p-5 border-t border-white/10">
                                    <p className="text-white font-semibold text-lg" style={{ fontFamily: 'var(--font-display)' }}>Dr. Aashish Malik</p>
                                    <p className="text-white/70 text-sm">BDS, Dental Surgeon · Rohtak, Haryana</p>
                                </div>
                            </div>

                            {/* Floating credential badge */}
                            <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-lg px-4 py-3 flex items-center gap-3 border border-[#E5E0D8]">
                                <div className="w-10 h-10 bg-[#EBF9F4] rounded-xl flex items-center justify-center">
                                    <Star size={20} className="text-[#2DBD8F]" />
                                </div>
                                <div>
                                    <p className="text-xs text-[#6B7280]">Google Rating</p>
                                    <p className="font-bold text-[#1A3C5E] text-sm">5.0 ★ · 38 Reviews</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: About copy */}
                    <motion.div
                        initial={{ opacity: 0, x: 28 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.55, ease: "easeOut" }}
                    >
                        <p className="text-xs font-semibold tracking-[0.18em] uppercase text-[#2DBD8F] mb-3">
                            About the Doctor
                        </p>
                        <h2
                            id="about-heading"
                            className="text-3xl md:text-4xl font-semibold text-[#1C1C1E] leading-tight tracking-[-0.02em] mb-6"
                            style={{ fontFamily: 'var(--font-display)' }}
                        >
                            Meet Dr. Aashish Malik
                        </h2>
                        <p className="text-[#4B5563] leading-[1.7] mb-4">
                            With years of dedicated practice in dental surgery and patient care, Dr. Aashish Malik has earned the trust of hundreds of families across Rohtak, Haryana. His commitment to painless procedures, honest diagnoses, and affordable treatment has made Apex Dental Care one of the most referred dental clinics in Model Town.
                        </p>
                        <p className="text-[#4B5563] leading-[1.7] mb-6">
                            Dr. Malik specializes in general and cosmetic dentistry, with particular expertise in root canal treatment, dental implants, and orthodontics. Every patient receives personalized attention in a warm, modern clinic environment.
                        </p>

                        <blockquote className="border-l-4 border-[#2DBD8F] pl-5 py-3 mb-8 bg-[#F7F4EF] rounded-r-xl">
                            <p className="text-[#1C1C1E] italic leading-[1.7]">
                                &ldquo;Dr. Aashish is one of the best dental surgeons in town. Very polite with patients.&rdquo;
                            </p>
                            <cite className="text-sm text-[#6B7280] mt-2 block not-italic">— A.M., Rohtak (Google Review)</cite>
                        </blockquote>

                        <Link href="/about" className="text-[#2DBD8F] font-semibold text-sm hover:gap-2 inline-flex items-center gap-1 transition-all duration-150">
                            Read More About Us →
                        </Link>
                    </motion.div>
                </div>
            </Container>
        </section>
    );
}
