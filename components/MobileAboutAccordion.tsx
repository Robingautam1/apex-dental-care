'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, ArrowRight } from 'lucide-react';

export function MobileAboutAccordion() {
    const [open, setOpen] = useState(false);

    return (
        <section className="md:hidden px-5 py-10 bg-white">
            <button
                onClick={() => setOpen(!open)}
                className="w-full flex items-center justify-between py-4 
                   border-y border-[#E5E0D8]"
                aria-expanded={open}
                aria-controls="about-content"
                aria-label="Learn about Dr. Aashish Malik">
                <div className="flex items-center gap-3">
                    {/* Small avatar placeholder */}
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#1A3C5E] to-[#2DBD8F] 
                          flex items-center justify-center">
                        <span className="text-white font-bold text-sm font-display">A</span>
                    </div>
                    <div className="text-left">
                        <p className="font-semibold text-[#1C1C1E] text-sm">Dr. Aashish Malik</p>
                        <p className="text-[#6B7280] text-xs">Dental Surgeon, Rohtak</p>
                    </div>
                </div>
                <ChevronDown className={`w-5 h-5 text-[#6B7280] transition-transform duration-300 
                                 ${open ? 'rotate-180' : ''}`}
                    aria-hidden="true" />
            </button>

            {/* Expandable content */}
            <div id="about-content"
                className={`overflow-hidden transition-all duration-500 ease-in-out
                       ${open ? 'max-h-[600px] opacity-100 mt-5' : 'max-h-0 opacity-0'}`}>
                <p className="text-[#4B5563] text-sm leading-relaxed mb-4">
                    Dr. Aashish Malik has earned the trust of hundreds of families across Rohtak, Haryana.
                    His commitment to painless procedures, honest diagnoses, and affordable treatment has
                    made Apex Dental Care one of the most referred dental clinics in Model Town.
                </p>
                <p className="text-[#4B5563] text-sm leading-relaxed mb-5">
                    Dr. Malik specialises in general and cosmetic dentistry, with particular expertise in
                    root canal treatment, dental implants, and orthodontics. Every patient receives
                    personalised attention in a warm, modern clinic environment.
                </p>
                <blockquote className="border-l-2 border-[#2DBD8F] pl-4 italic text-[#6B7280] text-sm mb-5">
                    &quot;Very polite with patients. One of the best doctors in Rohtak.&quot;
                    <footer className="mt-1 text-xs not-italic font-medium text-[#9CA3AF]">
                        — Google Review
                    </footer>
                </blockquote>
                <Link href="/about"
                    className="inline-flex items-center gap-1.5 text-[#2DBD8F] font-semibold text-sm">
                    Read Full Profile <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
            </div>
        </section>
    );
}
