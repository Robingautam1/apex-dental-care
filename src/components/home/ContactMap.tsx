'use client';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, CheckCircle, User, MessageSquare } from 'lucide-react';
import { Button } from '@/components/shared/Button';
import Container from '@/components/shared/Container';

export function ContactMap() {
    const [mapLoaded, setMapLoaded] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const mapRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setMapLoaded(true);
                    observer.disconnect();
                }
            },
            { rootMargin: '200px' }
        );
        if (mapRef.current) observer.observe(mapRef.current);
        return () => observer.disconnect();
    }, []);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <section className="bg-[#FAFAF9]" aria-labelledby="contact-heading">
            <Container>
                <div className="py-24 md:py-28">
                    <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12 lg:gap-16">
                        {/* Left label */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true, margin: '-40px' }}
                            transition={{ duration: 0.5 }}
                        >
                            <p className="text-sm font-medium text-[#2DBD8F] mb-3">Contact</p>
                            <h2
                                id="contact-heading"
                                className="text-2xl md:text-3xl font-semibold text-[#1C1C1E] leading-snug tracking-tight mb-6"
                                style={{ fontFamily: 'var(--font-display)' }}
                            >
                                Visit us
                            </h2>
                            <div className="space-y-4 text-sm">
                                <div className="flex items-start gap-3">
                                    <MapPin size={16} className="text-[#2DBD8F] flex-shrink-0 mt-0.5" />
                                    <span className="text-[#6B7280]">Near Life Care Hospital, Model Town, Rohtak 124001</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Phone size={16} className="text-[#2DBD8F] flex-shrink-0" />
                                    <a href="tel:09802155667" className="text-[#1C1C1E] font-medium hover:text-[#2DBD8F] transition-colors">098021 55667</a>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Clock size={16} className="text-[#2DBD8F] flex-shrink-0 mt-0.5" />
                                    <div className="text-[#6B7280]">
                                        <p>Mon – Sat: 9 AM – 8 PM</p>
                                        <p className="text-[#9CA3AF]">Sunday: Closed</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Right: Map + Form */}
                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-40px' }}
                            transition={{ duration: 0.45 }}
                        >
                            {/* Map */}
                            <div ref={mapRef} className="rounded-lg overflow-hidden mb-8 bg-[#E5E7EB]" style={{ aspectRatio: '16/9' }}>
                                {mapLoaded ? (
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3494.123!2d76.5849!3d28.8955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sApex+Dental+Care!5e0!3m2!1sen!2sin!4v1"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="Apex Dental Care location — Model Town, Rohtak"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center text-[#9CA3AF]">
                                        <MapPin size={24} className="opacity-30" />
                                    </div>
                                )}
                            </div>

                            {/* Form */}
                            {submitted ? (
                                <div className="text-center py-12">
                                    <CheckCircle size={32} className="text-[#2DBD8F] mx-auto mb-4" />
                                    <p className="text-lg font-semibold text-[#1C1C1E] mb-2" style={{ fontFamily: 'var(--font-display)' }}>Thank you</p>
                                    <p className="text-sm text-[#6B7280]">We&apos;ll call you back within 2 hours.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="contact-name" className="block text-xs font-medium text-[#6B7280] mb-1.5">Name</label>
                                        <input
                                            id="contact-name" name="name" type="text" required
                                            placeholder="Your name"
                                            className="w-full px-3.5 py-2.5 bg-white border border-[#E5E7EB] rounded-lg text-sm text-[#1C1C1E] placeholder:text-[#D1D5DB] focus:outline-none focus:ring-2 focus:ring-[#2DBD8F]/20 focus:border-[#2DBD8F] transition-all"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="contact-phone" className="block text-xs font-medium text-[#6B7280] mb-1.5">Phone</label>
                                        <input
                                            id="contact-phone" name="phone" type="tel" required
                                            placeholder="Your number"
                                            className="w-full px-3.5 py-2.5 bg-white border border-[#E5E7EB] rounded-lg text-sm text-[#1C1C1E] placeholder:text-[#D1D5DB] focus:outline-none focus:ring-2 focus:ring-[#2DBD8F]/20 focus:border-[#2DBD8F] transition-all"
                                        />
                                    </div>
                                    <div className="sm:col-span-2">
                                        <label htmlFor="contact-message" className="block text-xs font-medium text-[#6B7280] mb-1.5">Message</label>
                                        <textarea
                                            id="contact-message" name="message" rows={3}
                                            placeholder="Tell us about your dental needs..."
                                            className="w-full px-3.5 py-2.5 bg-white border border-[#E5E7EB] rounded-lg text-sm text-[#1C1C1E] placeholder:text-[#D1D5DB] focus:outline-none focus:ring-2 focus:ring-[#2DBD8F]/20 focus:border-[#2DBD8F] transition-all resize-none"
                                        />
                                    </div>
                                    <div className="hidden" aria-hidden="true"><input name="website" type="text" tabIndex={-1} autoComplete="off" /></div>
                                    <div className="sm:col-span-2">
                                        <Button type="submit" className="w-full">Send Message</Button>
                                    </div>
                                </form>
                            )}
                        </motion.div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
