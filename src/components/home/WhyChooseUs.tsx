'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, Wallet, MapPin, Stethoscope } from 'lucide-react';
import Container from '@/components/shared/Container';

const features = [
    { icon: Stethoscope, title: 'Advanced Equipment', desc: 'State-of-the-art technology for accurate diagnosis.' },
    { icon: ShieldCheck, title: 'Painless Procedures', desc: 'Modern anesthesia and gentle techniques.' },
    { icon: Wallet, title: 'Honest Pricing', desc: 'No hidden costs, no surprises.' },
    { icon: MapPin, title: 'Model Town, Rohtak', desc: 'Near Life Care Hospital, easy to reach.' },
];

export function WhyChooseUs() {
    return (
        <section className="bg-white" aria-labelledby="why-heading">
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
                            <p className="text-sm font-medium text-[#2DBD8F] mb-3">Why us</p>
                            <h2
                                id="why-heading"
                                className="text-2xl md:text-3xl font-semibold text-[#1C1C1E] leading-snug tracking-tight"
                                style={{ fontFamily: 'var(--font-display)' }}
                            >
                                Why families choose Apex
                            </h2>
                        </motion.div>

                        {/* Right features */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10">
                            {features.map((f, i) => (
                                <motion.div
                                    key={f.title}
                                    initial={{ opacity: 0, y: 12 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: '-40px' }}
                                    transition={{ duration: 0.35, delay: i * 0.06 }}
                                    className="flex gap-4"
                                >
                                    <f.icon size={20} className="text-[#2DBD8F] flex-shrink-0 mt-0.5" />
                                    <div>
                                        <h3 className="text-sm font-semibold text-[#1C1C1E] mb-1">{f.title}</h3>
                                        <p className="text-sm text-[#9CA3AF] leading-relaxed">{f.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
