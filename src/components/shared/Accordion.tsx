'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

interface AccordionItem {
    question: string;
    answer: string;
}

export function Accordion({ items }: { items: AccordionItem[] }) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <div className="divide-y divide-[#E5E7EB]">
            {items.map((item, i) => {
                const isOpen = openIndex === i;
                return (
                    <div key={i}>
                        <button
                            className="w-full flex items-center justify-between py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2DBD8F] cursor-pointer group"
                            onClick={() => setOpenIndex(isOpen ? null : i)}
                            aria-expanded={isOpen}
                        >
                            <span className={`font-medium text-sm pr-4 transition-colors ${isOpen ? 'text-[#1C1C1E]' : 'text-[#374151] group-hover:text-[#1C1C1E]'}`}>
                                {item.question}
                            </span>
                            {isOpen ? (
                                <Minus size={16} className="text-[#2DBD8F] flex-shrink-0" />
                            ) : (
                                <Plus size={16} className="text-[#9CA3AF] flex-shrink-0" />
                            )}
                        </button>
                        <AnimatePresence initial={false}>
                            {isOpen && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.2, ease: "easeOut" }}
                                    className="overflow-hidden"
                                >
                                    <div className="pb-5 text-[#6B7280] text-sm leading-relaxed">
                                        {item.answer}
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
