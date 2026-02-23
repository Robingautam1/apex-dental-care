'use client';

import { useEffect, useState, useRef } from 'react';
import { useInView } from 'motion/react';

export default function Counter({ end, decimals = 0 }: { end: number, decimals?: number }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (!isInView) return;
        let startTime: number;
        const duration = 2000;

        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const percentage = Math.min(progress / duration, 1);

            const easeOut = 1 - Math.pow(1 - percentage, 3);
            setCount(end * easeOut);

            if (percentage < 1) {
                requestAnimationFrame(animate);
            } else {
                setCount(end);
            }
        };

        requestAnimationFrame(animate);
    }, [end, isInView]);

    return <span ref={ref}>{count.toFixed(decimals)}</span>;
}
