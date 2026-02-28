import { motion, useScroll, useTransform } from 'motion/react';
import { useState, useEffect } from 'react';

// Rendered as a self-mounting fixed element.
// z-[5]: above Hero (z-0) but below main (z-10).
// When main z-10 slides up at ~400px of scroll, it naturally covers this bar.

function AnimatedStat({ value, suffix, label, hasRevealed }: {
    value: number;
    suffix: string;
    label: string;
    hasRevealed: boolean;
}) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!hasRevealed) return;

        let startTime: number;
        const duration = 2000;
        const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

        const tick = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const elapsed = timestamp - startTime;
            const t = Math.min(elapsed / duration, 1);
            setCount(Math.floor(easeOut(t) * value));
            if (elapsed < duration) requestAnimationFrame(tick);
        };

        requestAnimationFrame(tick);
    }, [hasRevealed, value]);

    return (
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <span className="font-display text-[1.75rem] md:text-3xl tracking-tight font-bold text-white leading-none tabular-nums">
                {count.toLocaleString()}{suffix}
            </span>
            <span className="text-[9px] uppercase tracking-[0.2em] text-white/70 mt-1.5 font-medium">
                {label}
            </span>
        </div>
    );
}

export function AuthorityBar() {
    const [countersTriggered, setCountersTriggered] = useState(false);
    const { scrollY } = useScroll();

    // Phase 1 — Reveal (0–200px scroll):  fade in + slide up
    // Phase 2 — Hold (200–380px scroll):  fully visible, waiting
    // Phase 3 — main z-10 enters viewport and covers the bar naturally at 400px
    const barOpacity = useTransform(scrollY, [0, 200, 380, 420], [0, 1, 1, 0]);
    const barY = useTransform(scrollY, [0, 200], [40, 0]);

    // Trigger counters once at 80px scroll
    useEffect(() => {
        return scrollY.on('change', (v) => {
            if (v > 80 && !countersTriggered) setCountersTriggered(true);
        });
    }, [scrollY, countersTriggered]);

    return (
        <motion.div
            style={{ opacity: barOpacity, y: barY, scale: 1.125 }}
            className="fixed bottom-24 left-0 right-0 z-[5] flex justify-center px-4 pointer-events-none"
        >
            <div className="pointer-events-auto flex flex-col md:flex-row items-center justify-between gap-6 md:gap-14 w-full max-w-5xl bg-white/10 backdrop-blur-2xl border border-white/5 border-t border-t-white/20 rounded-2xl md:rounded-full px-10 py-5 shadow-2xl">
                <AnimatedStat value={2500} suffix="+" label="Projects Completed" hasRevealed={countersTriggered} />
                <div className="hidden md:block w-px h-10 bg-white/10" />

                <AnimatedStat value={25} suffix=" Yrs" label="Industry Experience" hasRevealed={countersTriggered} />
                <div className="hidden md:block w-px h-10 bg-white/10" />

                <AnimatedStat value={98} suffix="%" label="On-Time Delivery" hasRevealed={countersTriggered} />
                <div className="hidden md:block w-px h-10 bg-white/10" />

                <AnimatedStat value={400} suffix="+" label="Enterprise Clients" hasRevealed={countersTriggered} />
            </div>
        </motion.div>
    );
}
