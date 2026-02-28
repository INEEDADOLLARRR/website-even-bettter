import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface ThemeToggleProps {
    className?: string;
}

export function ThemeToggle({ className = '' }: ThemeToggleProps) {
    const { isDark, toggle } = useTheme();

    return (
        <button
            onClick={toggle}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            className={`flex w-16 h-8 p-1 rounded-full cursor-pointer transition-all duration-300 ${isDark
                    ? 'bg-brand-white/10 border border-brand-white/20'
                    : 'bg-brand-black/5 border border-brand-black/10'
                } ${className}`}
        >
            <div className="flex justify-between items-center w-full">
                <div
                    className={`flex justify-center items-center w-6 h-6 rounded-full transition-all duration-300 ${isDark
                            ? 'translate-x-0 bg-brand-white/20'
                            : 'translate-x-8 bg-brand-black/10'
                        }`}
                >
                    {isDark ? (
                        <Moon className="w-4 h-4 text-brand-white" strokeWidth={1.5} />
                    ) : (
                        <Sun className="w-4 h-4 text-brand-black" strokeWidth={1.5} />
                    )}
                </div>
                <div
                    className={`flex justify-center items-center w-6 h-6 rounded-full transition-all duration-300 ${isDark ? 'bg-transparent' : '-translate-x-8'
                        }`}
                >
                    {isDark ? (
                        <Sun className="w-4 h-4 text-brand-silver" strokeWidth={1.5} />
                    ) : (
                        <Moon className="w-4 h-4 text-brand-black/40" strokeWidth={1.5} />
                    )}
                </div>
            </div>
        </button>
    );
}
