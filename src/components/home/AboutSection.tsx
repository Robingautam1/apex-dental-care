'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, Star, Stethoscope } from 'lucide-react';

export function AboutSection() {
    return (
        <section className="py-24 bg-background-base overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Text Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className="flex flex-col gap-6"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary font-medium text-sm w-fit">
                            <Stethoscope className="w-4 h-4" />
                            <span>About Dr. Aashish Malik</span>
                        </div>

                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                            Trusted by <span className="text-primary">Hundreds of Families</span> Across Rohtak
                        </h2>

                        <p className="text-lg text-text-muted leading-relaxed">
                            Dr. Aashish Malik has earned the trust of patients across Rohtak with his commitment to painless procedures, honest diagnoses, and affordable treatment. Specializing in root canal treatment, dental implants, cosmetic dentistry, and orthodontics.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                            {['BDS, MDS Specialist', 'Model Town, Rohtak', 'Painless Procedures', '500+ Happy Families'].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1, duration: 0.4 }}
                                    className="flex items-start gap-3"
                                >
                                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                                    <span className="text-text-dark font-medium text-sm">{item}</span>
                                </motion.div>
                            ))}
                        </div>

                        <blockquote className="mt-4 border-l-4 border-secondary pl-5 py-2">
                            <p className="text-text-muted italic leading-relaxed">
                                &ldquo;Dr. Aashish is one of the best dental surgeons in town. Very polite with patients.&rdquo;
                            </p>
                            <div className="flex items-center gap-2 mt-2">
                                <div className="flex gap-0.5">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-3 h-3 fill-accent text-accent" />
                                    ))}
                                </div>
                                <cite className="text-xs text-text-muted not-italic">— A.M., Rohtak</cite>
                            </div>
                        </blockquote>

                        <div className="pt-4">
                            <a
                                href="/about"
                                className="inline-flex items-center justify-center gap-2 bg-white text-primary border border-primary/20 px-8 py-4 rounded-full font-medium text-lg hover:bg-slate-50 transition-all duration-300"
                            >
                                Learn More About Us →
                            </a>
                        </div>
                    </motion.div>

                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className="relative"
                    >
                        <div className="absolute -top-8 -right-8 w-48 h-48 bg-secondary/10 rounded-full blur-3xl"></div>
                        <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-primary/10 rounded-full blur-3xl"></div>
                        <div className="relative h-[500px] w-full rounded-3xl overflow-hidden shadow-soft">
                            <div className="absolute inset-0 bg-gradient-to-br from-secondary/70 via-primary/50 to-secondary/30 flex items-center justify-center">
                                <div className="text-center text-white/90">
                                    <Stethoscope className="w-12 h-12 mx-auto mb-3 opacity-60" />
                                    <p className="text-lg font-heading font-bold">Dr. Aashish Malik</p>
                                    <p className="text-sm opacity-70">Apex Dental Care</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
