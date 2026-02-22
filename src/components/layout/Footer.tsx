import Link from 'next/link';
import { Phone, MapPin, Clock, Facebook, Instagram, Twitter } from 'lucide-react';
import { SmileArc } from '@/components/svg/SmileArc';
import { services } from '@/data/services';

export function Footer() {
    return (
        <footer className="bg-[#1A3C5E] text-white">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                                <span className="text-white font-bold text-xl" style={{ fontFamily: 'var(--font-display)' }}>A</span>
                            </div>
                            <span className="text-lg font-bold" style={{ fontFamily: 'var(--font-display)' }}>
                                Apex Dental Care
                            </span>
                        </div>
                        <SmileArc className="w-28 h-3 text-[#2DBD8F] mb-4" />
                        <p className="text-white/70 text-sm leading-relaxed mb-6">
                            Trusted dental clinic in Model Town, Rohtak, Haryana — providing world-class dental care with a personal touch.
                        </p>
                        {/* Social links - placeholders */}
                        <div className="flex items-center gap-3">
                            <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#2DBD8F] transition-colors" aria-label="Facebook">
                                <Facebook size={16} />
                            </a>
                            <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#2DBD8F] transition-colors" aria-label="Instagram">
                                <Instagram size={16} />
                            </a>
                            <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#2DBD8F] transition-colors" aria-label="Twitter">
                                <Twitter size={16} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Quick Links</h3>
                        <ul className="space-y-3">
                            {[
                                { label: 'Home', href: '/' },
                                { label: 'About Us', href: '/about' },
                                { label: 'Blog', href: '/blog' },
                                { label: 'Contact', href: '/contact' },
                            ].map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href} className="text-white/70 hover:text-[#2DBD8F] transition-colors text-sm">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Services</h3>
                        <ul className="space-y-3">
                            {services.map((s) => (
                                <li key={s.slug}>
                                    <Link href={`/services/${s.slug}`} className="text-white/70 hover:text-[#2DBD8F] transition-colors text-sm">
                                        {s.shortTitle}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Contact</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin size={18} className="text-[#2DBD8F] flex-shrink-0 mt-0.5" />
                                <span className="text-white/70 text-sm" itemProp="address">
                                    Near Life Care Hospital, Model Town, Rohtak, Haryana 124001
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={18} className="text-[#2DBD8F] flex-shrink-0" />
                                <a href="tel:09802155667" className="text-white/70 hover:text-[#2DBD8F] transition-colors text-sm" itemProp="telephone">
                                    098021 55667
                                </a>
                            </li>
                            <li className="flex items-start gap-3">
                                <Clock size={18} className="text-[#2DBD8F] flex-shrink-0 mt-0.5" />
                                <div className="text-white/70 text-sm">
                                    <p>Mon–Sat: 9:00 AM – 8:00 PM</p>
                                    <p>Sunday: Closed</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-white/10">
                <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-white/50 text-xs text-center sm:text-left">
                        © {new Date().getFullYear()} Apex Dental Care, Model Town, Rohtak, Haryana 124001
                    </p>
                    <p className="text-white/40 text-xs">
                        Designed with care for the Rohtak community.
                    </p>
                </div>
            </div>
        </footer>
    );
}
