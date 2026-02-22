'use client';

import { motion } from 'framer-motion';
import { BlobShape } from '@/components/svg/BlobShape';
import { ToothDecor } from '@/components/svg/ToothDecor';
import Link from 'next/link';

export function AboutSection() {
    return (
        <section className="py-12 lg:py-20 bg-white" aria-labelledby="about-heading">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left: Doctor image placeholder with blob */}
                    <motion.div
                        className="relative"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <BlobShape className="absolute inset-0 w-full h-full text-[#2DBD8F]/10 -rotate-12 scale-110" />
                        {/* TODO: Replace with actual doctor photo */}
                        <div className="relative aspect-[3/4] max-w-md mx-auto rounded-3xl overflow-hidden bg-gradient-to-br from-[#1A3C5E] to-[#1A3C5E]/80">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <ToothDecor className="w-24 h-32 text-white/10" />
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#1A3C5E] to-transparent p-6">
                                <p className="text-white font-semibold text-lg" style={{ fontFamily: 'var(--font-display)' }}>Dr. Aashish Malik</p>
                                <p className="text-white/70 text-sm">Dental Surgeon, Rohtak</p>
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
                        <span className="text-xs font-semibold text-[#2DBD8F] bg-[#2DBD8F]/10 px-4 py-1.5 rounded-full tracking-wider uppercase">
                            About the Doctor
                        </span>
                        <h2
                            id="about-heading"
                            className="text-3xl sm:text-4xl font-bold text-[#1A3C5E] mt-4 mb-6"
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
            </div>
        </section>
    );
}
