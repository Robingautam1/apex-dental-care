'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface AccordionItem {
    question: string;
    answer: string;
}

export function Accordion({ items }: { items: AccordionItem[] }) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <div className="space-y-3">
            {items.map((item, i) => {
                const isOpen = openIndex === i;
                return (
                    <div
                        key={i}
                        className={`border rounded-2xl overflow-hidden bg-white transition-shadow duration-200 ${isOpen
                                ? 'border-[#2DBD8F]/30 shadow-[0_4px_12px_rgba(0,0,0,0.08)]'
                                : 'border-[#E5E0D8] shadow-[0_1px_4px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)]'
                            }`}
                    >
                        <button
                            className="w-full flex items-center justify-between px-6 py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2DBD8F] cursor-pointer"
                            onClick={() => setOpenIndex(isOpen ? null : i)}
                            aria-expanded={isOpen}
                        >
                            <span className="font-semibold text-[#1A3C5E] text-base pr-4">{item.question}</span>
                            <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200 ${isOpen ? 'bg-[#2DBD8F]' : 'bg-[#F7F4EF]'
                                }`}>
                                <ChevronDown
                                    size={16}
                                    className={`transition-all duration-200 ${isOpen ? 'rotate-180 text-white' : 'text-[#6B7280]'
                                        }`}
                                />
                            </div>
                        </button>
                        <AnimatePresence initial={false}>
                            {isOpen && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.25, ease: "easeOut" }}
                                    className="overflow-hidden"
                                >
                                    <div className="px-6 pb-5 text-[#6B7280] text-sm leading-relaxed border-t border-[#E5E0D8]">
                                        <div className="pt-4">{item.answer}</div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                );
            })}
        </div>
    );
}
