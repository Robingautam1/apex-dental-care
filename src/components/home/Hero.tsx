'use client';

import { motion } from 'framer-motion';
import { Phone, Star, Users, Award } from 'lucide-react';
import { Button } from '@/components/shared/Button';
import { ToothDecor } from '@/components/svg/ToothDecor';

export function Hero() {
    return (
        <section className="relative overflow-hidden bg-white min-h-[calc(100vh-5rem)] flex items-center">
            {/* Background decoration */}
            <ToothDecor className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[600px] text-[#1A3C5E] opacity-[0.04] pointer-events-none hidden lg:block" />
            <div className="absolute top-20 left-10 w-72 h-72 bg-[#2DBD8F]/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#1A3C5E]/5 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-12 lg:py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block text-xs font-semibold text-[#2DBD8F] bg-[#2DBD8F]/10 px-4 py-1.5 rounded-full mb-6 tracking-wider uppercase">
                            Dental Clinic in Model Town, Rohtak
                        </span>
                        <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-[#1A3C5E] leading-[1.15] mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                            Your Smile Deserves the{' '}
                            <span className="relative inline-block">
                                <span className="text-[#2DBD8F]">Best Care</span>
                                <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#2DBD8F]/30" viewBox="0 0 200 12" fill="none" aria-hidden="true">
                                    <path d="M2 8C60 2 140 2 198 8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                                </svg>
                            </span>
                            {' '}in Rohtak
                        </h1>
                        <p className="text-lg text-[#6B7280] leading-relaxed mb-8 max-w-xl">
                            Trusted dental clinic in Model Town, Rohtak — led by{' '}
                            <strong className="text-[#1C1C1E]">Dr. Aashish Malik</strong>, one of Rohtak&apos;s most referred dental surgeons. Experience gentle, modern dental care for your entire family.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button href="/contact" size="lg">
                                Book Appointment
                            </Button>
                            <Button
                                href="tel:09802155667"
                                variant="outline"
                                size="lg"
                                icon={<Phone size={20} />}
                            >
                                Call: 098021 55667
                            </Button>
                        </div>
                    </motion.div>

                    {/* Right: Placeholder image area */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative hidden lg:block"
                    >
                        {/* TODO: Replace with actual clinic photo */}
                        <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden bg-gradient-to-br from-[#1A3C5E] via-[#1A3C5E]/90 to-[#2DBD8F]/60">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <ToothDecor className="w-32 h-40 text-white/10" />
                            </div>
                            <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                                <p className="text-white text-sm font-medium">📍 Near Life Care Hospital, Model Town, Rohtak</p>
                            </div>
                        </div>
                        {/* Floating badge */}
                        <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 border border-[#E5E0D8]" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.1), 0 16px 40px rgba(0,0,0,0.08)' }}>
                            <div className="flex items-center gap-2">
                                <div className="flex">
                                    {Array.from({ length: 5 }).map((_, i) => (
                                        <Star key={i} size={16} className="text-[#FBBF24] fill-[#FBBF24]" />
                                    ))}
                                </div>
                                <span className="text-sm font-semibold text-[#1A3C5E]">5.0</span>
                                <span className="text-xs text-[#6B7280]">/ 38 reviews</span>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Trust bar */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 bg-[#F7F4EF] rounded-2xl p-6 border border-[#E5E0D8]"
                >
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-[#FBBF24]/10 flex items-center justify-center flex-shrink-0">
                            <Star size={24} className="text-[#FBBF24]" />
                        </div>
                        <div>
                            <p className="font-bold text-[#1A3C5E] text-lg" style={{ fontFamily: 'var(--font-mono)' }}>5.0★</p>
                            <p className="text-sm text-[#6B7280]">Google Rating</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-[#2DBD8F]/10 flex items-center justify-center flex-shrink-0">
                            <Users size={24} className="text-[#2DBD8F]" />
                        </div>
                        <div>
                            <p className="font-bold text-[#1A3C5E] text-lg" style={{ fontFamily: 'var(--font-mono)' }}>38+</p>
                            <p className="text-sm text-[#6B7280]">Happy Patients</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-[#1A3C5E]/10 flex items-center justify-center flex-shrink-0">
                            <Award size={24} className="text-[#1A3C5E]" />
                        </div>
                        <div>
                            {/* TODO: Replace placeholder — verify years of experience */}
                            <p className="font-bold text-[#1A3C5E] text-lg" style={{ fontFamily: 'var(--font-mono)' }}>10+</p>
                            <p className="text-sm text-[#6B7280]">Years Experience</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
