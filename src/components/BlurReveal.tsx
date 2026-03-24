import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface BlurRevealProps {
    children: ReactNode;
    delay?: number;
    duration?: number;
    className?: string;
}

export function BlurReveal({ children, className = "" }: BlurRevealProps) {
    return (
        <div className={className}>
            {children}
        </div>
    );
}
