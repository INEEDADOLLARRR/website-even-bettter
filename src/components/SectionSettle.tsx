import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface SectionSettleProps {
    children: ReactNode;
    className?: string;
}

export function SectionSettle({ children, className = "" }: SectionSettleProps) {
    return (
        <div className={className}>
            {children}
        </div>
    );
}
