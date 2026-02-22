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
            {items.map((item, i) => (
                <div
                    key={i}
                    className="border border-[#E5E0D8] rounded-2xl overflow-hidden bg-white"
                >
                    <button
                        onClick={() => setOpenIndex(openIndex === i ? null : i)}
                        className="w-full flex items-center justify-between p-5 text-left cursor-pointer"
                        aria-expanded={openIndex === i}
                    >
                        <span className="font-semibold text-[#1A3C5E] pr-4 font-[var(--font-body)]">
                            {item.question}
                        </span>
                        <motion.span
                            animate={{ rotate: openIndex === i ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                            className="flex-shrink-0 text-[#6B7280]"
                        >
                            <ChevronDown size={20} />
                        </motion.span>
                    </button>
                    <AnimatePresence>
                        {openIndex === i && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.25 }}
                            >
                                <p className="px-5 pb-5 text-[#6B7280] leading-relaxed">
                                    {item.answer}
                                </p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            ))}
        </div>
    );
}
