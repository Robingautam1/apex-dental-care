'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { faqs } from '@/lib/data';

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="py-24 bg-background-base">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 32 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-60px' }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        className="text-3xl md:text-4xl font-bold mb-4"
                    >
                        Frequently Asked Questions
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 32 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-60px' }}
                        transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                        className="text-lg text-text-muted"
                    >
                        Everything you need to know about dental care at Apex Dental Clinic, Rohtak.
                    </motion.p>
                </div>

                <div className="flex flex-col gap-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-60px' }}
                            transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                            className={`bg-white rounded-2xl border transition-colors duration-300 ${openIndex === index ? 'border-secondary/30 shadow-soft' : 'border-slate-100'
                                }`}
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 min-h-[44px] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2DBD8F] rounded-2xl"
                                aria-expanded={openIndex === index}
                                aria-controls={`faq-answer-${index}`}
                                id={`faq-question-${index}`}
                            >
                                <h3 className={`font-bold transition-colors ${openIndex === index ? 'text-secondary' : 'text-text-dark'}`}>
                                    {faq.question}
                                </h3>
                                <div
                                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${openIndex === index ? 'bg-secondary/10 text-secondary' : 'bg-slate-50 text-slate-400'
                                        }`}
                                >
                                    <ChevronDown
                                        className={`w-5 h-5 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''
                                            }`}
                                    />
                                </div>
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        id={`faq-answer-${index}`}
                                        initial={{ height: 0, opacity: 0, y: -6 }}
                                        animate={{ height: 'auto', opacity: 1, y: 0 }}
                                        exit={{ height: 0, opacity: 0, y: -6 }}
                                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                                        className="overflow-hidden"
                                        role="region"
                                        aria-labelledby={`faq-question-${index}`}
                                    >
                                        <div className="px-6 pb-6 pt-2 text-text-muted leading-relaxed">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
