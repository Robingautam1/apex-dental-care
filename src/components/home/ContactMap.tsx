'use client';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, CheckCircle, User, MessageSquare } from 'lucide-react';
import { Button } from '@/components/shared/Button';
import Container from '@/components/shared/Container';
import SectionHeading from '@/components/shared/SectionHeading';

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
        <section className="py-20 md:py-28 bg-white overflow-hidden" aria-labelledby="contact-heading">
            <Container>
                <SectionHeading
                    eyebrow="Get in Touch"
                    heading="Visit Us in Rohtak"
                    subtext="Call, visit, or send us a message."
                    center
                />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Left: Map + Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.45, ease: "easeOut" }}
                    >
                        <div ref={mapRef} className="rounded-xl overflow-hidden mb-5 bg-[#E5E0D8]" style={{ aspectRatio: '16/10' }}>
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
                                <div className="w-full h-full flex items-center justify-center text-[#6B7280]">
                                    <MapPin size={28} className="opacity-30" />
                                </div>
                            )}
                        </div>

                        <div className="space-y-3 text-sm">
                            <div className="flex items-start gap-3">
                                <MapPin size={16} className="text-[#2DBD8F] flex-shrink-0 mt-0.5" />
                                <span className="text-[#4B5563]">Near Life Care Hospital, Model Town, Rohtak 124001</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone size={16} className="text-[#2DBD8F] flex-shrink-0" />
                                <a href="tel:09802155667" className="text-[#1C1C1E] hover:text-[#2DBD8F] font-medium transition-colors">098021 55667</a>
                            </div>
                            <div className="flex items-start gap-3">
                                <Clock size={16} className="text-[#2DBD8F] flex-shrink-0 mt-0.5" />
                                <div>
                                    <p className="text-[#4B5563]">Mon – Sat: 9 AM – 8 PM</p>
                                    <p className="text-[#9CA3AF]">Sunday: Closed</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.45, ease: "easeOut" }}
                    >
                        {submitted ? (
                            <div className="bg-[#F7F4EF] rounded-2xl p-8 text-center flex flex-col items-center justify-center min-h-[360px] border border-[#E5E0D8]">
                                <CheckCircle size={40} className="text-[#2DBD8F] mb-4" />
                                <h3 className="text-lg font-semibold text-[#1A3C5E] mb-2" style={{ fontFamily: 'var(--font-display)' }}>Thank you!</h3>
                                <p className="text-[#6B7280] text-sm">We&apos;ll call you back within 2 hours. Call <a href="tel:09802155667" className="text-[#2DBD8F] font-medium">098021 55667</a> for immediate help.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label htmlFor="contact-name" className="block text-xs font-semibold text-[#374151] mb-1.5 uppercase tracking-wider">Full Name</label>
                                    <div className="relative">
                                        <User size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9CA3AF]" />
                                        <input id="contact-name" name="name" type="text" required aria-required="true" placeholder="Your name" className="w-full pl-9 pr-4 py-3 bg-[#F7F4EF] border border-[#E5E0D8] rounded-lg text-[#1C1C1E] placeholder:text-[#9CA3AF] text-sm focus:outline-none focus:ring-2 focus:ring-[#2DBD8F]/30 focus:border-[#2DBD8F] transition-all" />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="contact-phone" className="block text-xs font-semibold text-[#374151] mb-1.5 uppercase tracking-wider">Phone</label>
                                    <div className="relative">
                                        <Phone size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9CA3AF]" />
                                        <input id="contact-phone" name="phone" type="tel" required aria-required="true" placeholder="Your phone number" className="w-full pl-9 pr-4 py-3 bg-[#F7F4EF] border border-[#E5E0D8] rounded-lg text-[#1C1C1E] placeholder:text-[#9CA3AF] text-sm focus:outline-none focus:ring-2 focus:ring-[#2DBD8F]/30 focus:border-[#2DBD8F] transition-all" />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="contact-service" className="block text-xs font-semibold text-[#374151] mb-1.5 uppercase tracking-wider">Service</label>
                                    <select id="contact-service" name="service" className="w-full px-3 py-3 bg-[#F7F4EF] border border-[#E5E0D8] rounded-lg text-[#1C1C1E] text-sm focus:outline-none focus:ring-2 focus:ring-[#2DBD8F]/30 focus:border-[#2DBD8F] transition-all">
                                        <option value="">Select a service</option>
                                        <option>Teeth Cleaning</option><option>Root Canal</option><option>Teeth Whitening</option>
                                        <option>Dental Implants</option><option>Orthodontics</option><option>Cosmetic Dentistry</option>
                                        <option>Pediatric Dentistry</option><option>Emergency Care</option><option>General Check-up</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="contact-message" className="block text-xs font-semibold text-[#374151] mb-1.5 uppercase tracking-wider">Message</label>
                                    <div className="relative">
                                        <MessageSquare size={14} className="absolute left-3 top-3.5 text-[#9CA3AF]" />
                                        <textarea id="contact-message" name="message" rows={3} required aria-required="true" placeholder="Tell us about your dental needs..." className="w-full pl-9 pr-4 py-3 bg-[#F7F4EF] border border-[#E5E0D8] rounded-lg text-[#1C1C1E] placeholder:text-[#9CA3AF] text-sm focus:outline-none focus:ring-2 focus:ring-[#2DBD8F]/30 focus:border-[#2DBD8F] transition-all resize-none" />
                                    </div>
                                </div>
                                <div className="hidden" aria-hidden="true"><input name="website" type="text" tabIndex={-1} autoComplete="off" /></div>
                                <Button type="submit" className="w-full">Send Message</Button>
                            </form>
                        )}
                    </motion.div>
                </div>
            </Container>
        </section>
    );
}
