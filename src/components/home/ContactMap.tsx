'use client';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, CheckCircle } from 'lucide-react';

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
        <section id="contact" className="py-24 bg-background-base">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        className="text-3xl md:text-4xl font-bold mb-4"
                    >
                        Visit Our Clinic in Rohtak
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-text-muted"
                    >
                        Ready for a healthier smile? Book your appointment today or drop by our clinic.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0 bg-white rounded-3xl shadow-soft overflow-hidden border border-slate-50">
                    {/* Contact Details & Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 0.6 }}
                        className="p-8 md:p-12 flex flex-col gap-10"
                    >
                        <div>
                            <h3 className="text-2xl font-bold mb-6 text-text-dark">Get in Touch</h3>
                            <div className="flex flex-col gap-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                        <MapPin className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-text-dark mb-1">Clinic Address</h4>
                                        <p className="text-text-muted leading-relaxed">
                                            Near Life Care Hospital,<br />
                                            Model Town, Rohtak 124001
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                                        <Phone className="w-6 h-6 text-secondary" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-text-dark mb-1">Phone Number</h4>
                                        <a href="tel:09802155667" className="text-text-muted hover:text-primary transition-colors">
                                            098021 55667
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                        <Mail className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-text-dark mb-1">Email</h4>
                                        <p className="text-text-muted">info@apexdentalrohtak.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8 border-t border-slate-100">
                            <h3 className="text-2xl font-bold mb-6 text-text-dark">Operating Hours</h3>
                            <div className="bg-background-alt rounded-2xl p-6">
                                <table className="w-full text-left text-text-muted">
                                    <tbody>
                                        <tr className="border-b border-slate-200/50">
                                            <td className="py-3 font-medium text-text-dark">Mon - Sat</td>
                                            <td className="py-3 text-right">9:00 AM - 8:00 PM</td>
                                        </tr>
                                        <tr>
                                            <td className="py-3 font-medium text-text-dark">Sunday</td>
                                            <td className="py-3 text-right text-secondary font-medium">Closed</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Inline form */}
                        {submitted ? (
                            <div className="text-center py-8">
                                <CheckCircle className="w-10 h-10 text-secondary mx-auto mb-4" />
                                <p className="text-lg font-bold text-text-dark mb-2">Thank you!</p>
                                <p className="text-text-muted">We&apos;ll call you back within 2 hours.</p>
                            </div>
                        ) : (
                            <div className="pt-8 border-t border-slate-100">
                                <h3 className="text-2xl font-bold mb-6 text-text-dark">Send a Message</h3>
                                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <input
                                            name="name" type="text" required placeholder="Your name"
                                            className="w-full px-4 py-3 bg-background-alt border border-slate-200 rounded-xl text-sm text-text-dark placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-secondary/30 focus:border-secondary transition-all"
                                        />
                                        <input
                                            name="phone" type="tel" required placeholder="Your phone"
                                            className="w-full px-4 py-3 bg-background-alt border border-slate-200 rounded-xl text-sm text-text-dark placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-secondary/30 focus:border-secondary transition-all"
                                        />
                                    </div>
                                    <textarea
                                        name="message" rows={3} placeholder="Tell us about your dental needs..."
                                        className="w-full px-4 py-3 bg-background-alt border border-slate-200 rounded-xl text-sm text-text-dark placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-secondary/30 focus:border-secondary transition-all resize-none"
                                    />
                                    <div className="hidden" aria-hidden="true"><input name="website" type="text" tabIndex={-1} autoComplete="off" /></div>
                                    <button
                                        type="submit"
                                        className="w-full bg-primary text-white px-8 py-4 rounded-full font-medium text-base hover:bg-primary-hover hover:scale-[1.02] transition-all duration-300 shadow-soft cursor-pointer"
                                    >
                                        Send Message
                                    </button>
                                </form>
                            </div>
                        )}
                    </motion.div>

                    {/* Map */}
                    <motion.div
                        ref={mapRef}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 0.6 }}
                        className="relative h-[400px] lg:h-auto w-full bg-slate-100 overflow-hidden"
                    >
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
                            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                                <MapPin className="w-16 h-16 text-slate-300 mb-4" />
                                <h3 className="text-xl font-bold text-slate-400 mb-2">Loading Map...</h3>
                                <p className="text-slate-500 max-w-sm">
                                    Find Apex Dental Care near Life Care Hospital, Model Town, Rohtak.
                                </p>
                            </div>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
