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
                                ? 'border-secondary/30 shadow-soft'
                                : 'border-slate-100 shadow-sm hover:shadow-soft'
                            }`}
                    >
                        <button
                            className="w-full flex items-center justify-between px-6 py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary cursor-pointer"
                            onClick={() => setOpenIndex(isOpen ? null : i)}
                            aria-expanded={isOpen}
                        >
                            <span className="font-bold text-text-dark text-base pr-4">{item.question}</span>
                            <div
                                className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200 ${isOpen ? 'bg-secondary' : 'bg-background-alt'
                                    }`}
                            >
                                <ChevronDown
                                    size={16}
                                    className={`transition-all duration-200 ${isOpen ? 'rotate-180 text-white' : 'text-text-muted'
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
                                    transition={{ duration: 0.25, ease: 'easeOut' }}
                                    className="overflow-hidden"
                                >
                                    <div className="px-6 pb-5 text-text-muted text-sm leading-relaxed border-t border-slate-100">
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
