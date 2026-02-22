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
            className="bg-white rounded-2xl p-6 border border-[#E5E0D8] h-full flex flex-col"
            style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.08), 0 8px 24px rgba(0,0,0,0.06)' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: rating }).map((_, i) => (
                    <Star key={i} size={18} className="text-[#FBBF24] fill-[#FBBF24]" />
                ))}
            </div>
            <p className="text-[#1C1C1E] leading-relaxed flex-1 mb-4">
                &ldquo;{text}&rdquo;
            </p>
            <div className="flex items-center justify-between">
                <span className="font-semibold text-[#1A3C5E]">{name}</span>
                <span className="text-xs text-[#6B7280]">— Google Review</span>
            </div>
        </motion.article>
    );
}
