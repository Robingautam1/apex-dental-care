'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

interface ReviewCardProps {
    name: string;
    rating: number;
    text: string;
}

export function ReviewCard({ name, rating, text }: ReviewCardProps) {
    return (
        <motion.article
            className="bg-white rounded-2xl p-6 shadow-[0_2px_8px_rgba(0,0,0,0.06)] border border-[#E5E0D8] h-full flex flex-col justify-between"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            {/* Large decorative quote mark */}
            <div>
                <span className="text-4xl font-serif text-[#2DBD8F] opacity-30 leading-none block mb-2" aria-hidden="true">&ldquo;</span>
                <div className="flex items-center gap-1 mb-3">
                    {Array.from({ length: rating }).map((_, i) => (
                        <Star key={i} size={18} className="text-[#FBBF24] fill-[#FBBF24]" />
                    ))}
                </div>
                <p className="text-[#1C1C1E] leading-relaxed mb-4">
                    &ldquo;{text}&rdquo;
                </p>
            </div>
            <div className="flex items-center justify-between pt-4 border-t border-[#E5E0D8]">
                <span className="font-bold text-[#1A3C5E]">{name}</span>
                <span className="text-xs text-[#6B7280]">— Google Review</span>
            </div>
        </motion.article>
    );
}
