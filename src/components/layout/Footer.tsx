import Link from 'next/link';
import { Phone, MapPin, Clock, Facebook, Instagram, Twitter } from 'lucide-react';
import { SmileArc } from '@/components/svg/SmileArc';
import { services } from '@/data/services';

export function Footer() {
    return (
        <footer className="bg-[#0F2236] text-white">
            <div className="max-w-[1240px] mx-auto px-5 sm:px-8 lg:px-12 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                                <span className="text-white font-bold text-xl" style={{ fontFamily: 'var(--font-display)' }}>A</span>
                            </div>
                            <span className="text-lg font-bold text-white" style={{ fontFamily: 'var(--font-display)' }}>
                                Apex Dental Care
                            </span>
                        </div>
                        <SmileArc className="w-28 h-3 text-[#2DBD8F] mb-4" />
                        <p className="text-white/60 text-sm leading-relaxed mb-6">
                            Trusted dental clinic in Model Town, Rohtak, Haryana — providing world-class dental care with a personal touch.
                        </p>
                        <div className="flex items-center gap-3">
                            {[Facebook, Instagram, Twitter].map((Icon, i) => (
                                <a key={i} href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#2DBD8F] transition-colors" aria-label={Icon.displayName || 'Social'} target="_blank" rel="noopener noreferrer">
                                    <Icon size={16} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Quick Links</h3>
                        <ul className="space-y-3">
                            {[{ label: 'Home', href: '/' }, { label: 'About Us', href: '/about' }, { label: 'Blog', href: '/blog' }, { label: 'Contact', href: '/contact' }].map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href} className="text-white/60 hover:text-[#2DBD8F] transition-colors text-sm">{link.label}</Link>
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
                                    <Link href={`/services/${s.slug}`} className="text-white/60 hover:text-[#2DBD8F] transition-colors text-sm">{s.shortTitle}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Contact</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin size={18} className="text-[#2DBD8F] flex-shrink-0 mt-0.5" />
                                <span className="text-white/60 text-sm">Near Life Care Hospital, Model Town, Rohtak, Haryana 124001</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={18} className="text-[#2DBD8F] flex-shrink-0" />
                                <a href="tel:09802155667" className="text-white/60 hover:text-[#2DBD8F] transition-colors text-sm">098021 55667</a>
                            </li>
                            <li className="flex items-start gap-3">
                                <Clock size={18} className="text-[#2DBD8F] flex-shrink-0 mt-0.5" />
                                <div className="text-white/60 text-sm">
                                    <p>Mon–Sat: 9 AM – 8 PM</p>
                                    <p>Sunday: Closed</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="border-t border-white/10">
                <div className="max-w-[1240px] mx-auto px-5 sm:px-8 lg:px-12 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-white/40 text-xs">© {new Date().getFullYear()} Apex Dental Care, Model Town, Rohtak 124001</p>
                    <p className="text-white/30 text-xs">Designed with care for the Rohtak community.</p>
                </div>
            </div>
        </footer>
    );
}
