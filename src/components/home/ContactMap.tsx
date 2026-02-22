'use client';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock } from 'lucide-react';
import { Button } from '@/components/shared/Button';

export function ContactMap() {
    const [mapLoaded, setMapLoaded] = useState(false);
    const mapRef = useRef<HTMLDivElement>(null);

    // Lazy-load Google Maps iframe with IntersectionObserver
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
        // TODO: Implement form submission
        alert('Thank you! We will contact you shortly.');
    };

    return (
        <section className="py-12 lg:py-20 bg-white" aria-labelledby="contact-heading">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="text-xs font-semibold text-[#2DBD8F] bg-[#2DBD8F]/10 px-4 py-1.5 rounded-full tracking-wider uppercase">
                        Get in Touch
                    </span>
                    <h2
                        id="contact-heading"
                        className="text-3xl sm:text-4xl font-bold text-[#1A3C5E] mt-4 mb-4"
                        style={{ fontFamily: 'var(--font-display)' }}
                    >
                        Visit Apex Dental Care in Rohtak
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    {/* Left: Map + Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        {/* Map */}
                        <div ref={mapRef} className="rounded-2xl overflow-hidden mb-6 bg-[#E5E0D8]" style={{ aspectRatio: '16/10' }}>
                            {mapLoaded ? (
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3494.123!2d76.5849!3d28.8955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sApex+Dental+Care!5e0!3m2!1sen!2sin!4v1"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Apex Dental Care location on Google Maps — Model Town, Rohtak"
                                />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center text-[#6B7280]">
                                    <MapPin size={32} className="opacity-40" />
                                </div>
                            )}
                        </div>

                        {/* Contact details */}
                        <div className="space-y-4" itemScope itemType="https://schema.org/Dentist">
                            <div className="flex items-start gap-3">
                                <MapPin size={20} className="text-[#2DBD8F] flex-shrink-0 mt-1" />
                                <p className="text-[#1C1C1E]" itemProp="address">
                                    Near Life Care Hospital, Model Town, Rohtak, Haryana 124001
                                </p>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone size={20} className="text-[#2DBD8F] flex-shrink-0" />
                                <a href="tel:09802155667" className="text-[#1C1C1E] hover:text-[#2DBD8F] font-medium" itemProp="telephone">
                                    098021 55667
                                </a>
                            </div>
                            <div className="flex items-start gap-3">
                                <Clock size={20} className="text-[#2DBD8F] flex-shrink-0 mt-1" />
                                <div>
                                    <p className="text-[#1C1C1E]">Mon – Sat: 9:00 AM – 8:00 PM</p>
                                    <p className="text-[#6B7280]">Sunday: Closed</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Contact form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <form
                            onSubmit={handleSubmit}
                            className="bg-[#F7F4EF] rounded-2xl p-6 sm:p-8 border border-[#E5E0D8] space-y-5"
                        >
                            <div>
                                <label htmlFor="contact-name" className="block text-sm font-medium text-[#1C1C1E] mb-1.5">
                                    Full Name
                                </label>
                                <input
                                    id="contact-name"
                                    name="name"
                                    type="text"
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-[#E5E0D8] bg-white text-[#1C1C1E] focus:ring-2 focus:ring-[#2DBD8F] focus:border-transparent outline-none transition"
                                    placeholder="Your name"
                                />
                            </div>
                            <div>
                                <label htmlFor="contact-phone" className="block text-sm font-medium text-[#1C1C1E] mb-1.5">
                                    Phone Number
                                </label>
                                <input
                                    id="contact-phone"
                                    name="phone"
                                    type="tel"
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-[#E5E0D8] bg-white text-[#1C1C1E] focus:ring-2 focus:ring-[#2DBD8F] focus:border-transparent outline-none transition"
                                    placeholder="Your phone number"
                                />
                            </div>
                            <div>
                                <label htmlFor="contact-service" className="block text-sm font-medium text-[#1C1C1E] mb-1.5">
                                    Service Needed
                                </label>
                                <select
                                    id="contact-service"
                                    name="service"
                                    className="w-full px-4 py-3 rounded-lg border border-[#E5E0D8] bg-white text-[#1C1C1E] focus:ring-2 focus:ring-[#2DBD8F] focus:border-transparent outline-none transition"
                                >
                                    <option value="">Select a service</option>
                                    <option>Teeth Cleaning</option>
                                    <option>Root Canal Treatment</option>
                                    <option>Teeth Whitening</option>
                                    <option>Dental Implants</option>
                                    <option>Orthodontics / Braces</option>
                                    <option>Cosmetic Dentistry</option>
                                    <option>Pediatric Dentistry</option>
                                    <option>Emergency Dental Care</option>
                                    <option>General Check-up</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="contact-message" className="block text-sm font-medium text-[#1C1C1E] mb-1.5">
                                    Message
                                </label>
                                <textarea
                                    id="contact-message"
                                    name="message"
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-lg border border-[#E5E0D8] bg-white text-[#1C1C1E] focus:ring-2 focus:ring-[#2DBD8F] focus:border-transparent outline-none transition resize-none"
                                    placeholder="Tell us about your dental needs..."
                                />
                            </div>
                            {/* Honeypot field for spam prevention */}
                            <div className="hidden" aria-hidden="true">
                                <input name="website" type="text" tabIndex={-1} autoComplete="off" />
                            </div>
                            <Button type="submit" className="w-full">
                                Send Message
                            </Button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
