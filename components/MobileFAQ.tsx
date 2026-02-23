'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

type FAQ = {
    question: string;
    answer: string;
};

function MobileFAQItem({ faq }: { faq: FAQ }) {
    const [open, setOpen] = useState(false);

    return (
        <div className="bg-[#F7F4EF] rounded-xl border border-[#E5E0D8] overflow-hidden">
            <button onClick={() => setOpen(!open)}
                className="w-full flex items-center justify-between p-4 text-left"
                aria-expanded={open}>
                <span className="font-semibold text-[#1C1C1E] text-sm pr-4">{faq.question}</span>
                <ChevronDown className={`shrink-0 w-5 h-5 text-[#6B7280] transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
            </button>
            <div className={`px-4 text-sm text-[#4B5563] overflow-hidden transition-all duration-300 ease-in-out ${open ? 'max-h-96 pb-4 opacity-100' : 'max-h-0 opacity-0'}`}>
                {faq.answer}
            </div>
        </div>
    );
}

export function MobileFAQ({ faqs }: { faqs: FAQ[] }) {
    const [showAll, setShowAll] = useState(false);
    const visible = showAll ? faqs : faqs.slice(0, 3);

    return (
        <section className="md:hidden px-5 py-10 bg-white">
            <p className="text-xs font-semibold tracking-[0.18em] uppercase text-[#2DBD8F] mb-2">FAQ</p>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1E] mb-6 leading-tight">
                Frequently Asked Questions
            </h2>

            <div className="flex flex-col gap-3" role="list">
                {visible.map((faq, i) => (
                    <MobileFAQItem key={i} faq={faq} />
                ))}
            </div>

            {!showAll && faqs.length > 3 && (
                <button onClick={() => setShowAll(true)}
                    className="w-full mt-4 py-3.5 border border-[#E5E0D8] rounded-xl 
                           text-[#1A3C5E] font-semibold text-sm
                           active:bg-[#F7F4EF] transition-colors duration-150"
                    aria-label="Show all frequently asked questions">
                    Show {faqs.length - 3} more questions
                    <ChevronDown className="inline-block ml-1.5 w-4 h-4" aria-hidden="true" />
                </button>
            )}
        </section>
    );
}
