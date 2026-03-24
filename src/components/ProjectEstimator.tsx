import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const MATERIALS = [
    { id: 'slate', label: 'Slate / Tile' },
    { id: 'metal', label: 'Custom Metal' },
    { id: 'shingle', label: 'Premium Shingle' },
    { id: 'tpo', label: 'Flat / TPO' },
];

const INTENTS = [
    { id: 'new', label: 'New Build' },
    { id: 'restoration', label: 'Restoration' },
    { id: 'storm', label: 'Storm Recovery' },
    { id: 'maintenance', label: 'Maintenance' },
];

const SCALES = [
    { id: 'private', label: 'Private Estate' },
    { id: 'commercial', label: 'Commercial Asset' },
    { id: 'multifamily', label: 'Multi-Family' },
];

export function ProjectEstimator() {
    const [step, setStep] = useState(1);
    const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward

    // Active Selection State
    const [material, setMaterial] = useState<string | null>(null);
    const [intent, setIntent] = useState<string | null>(null);
    const [scale, setScale] = useState<string | null>(null);

    // Final Form Details
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [success, setSuccess] = useState(false);

    const handleFinalSubmit = (e: FormEvent) => {
        e.preventDefault();
        setSuccess(true);
    };

    const nextStep = () => {
        if (step < 4) {
            setDirection(1);
            setStep((prev) => prev + 1);
        }
    };

    const prevStep = () => {
        if (step > 1) {
            setDirection(-1);
            setStep((prev) => prev - 1);
        }
    };

    // calculate progress: 25%, 50%, 75%, 100%
    const progressPercentage = (step / 4) * 100;

    // Framer Motion Variants for Step Transition
    const stepVariants = {
        hidden: (dir: number) => ({
            opacity: 0,
            y: dir === 1 ? 16 : -16,
        }),
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.35,
                ease: "easeOut",
                when: "beforeChildren",
                staggerChildren: 0.08
            }
        },
        exit: (dir: number) => ({
            opacity: 0,
            y: dir === 1 ? -16 : 16,
            transition: {
                duration: 0.2,
                ease: "easeIn"
            }
        })
    };

    const childVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.4, ease: "easeOut" }
        }
    };

    // Shared input styling
    const inputClasses = "w-full glass-panel-light rounded-xl px-5 py-sp-5 text-text-primary placeholder-surface-muted/30 focus:outline-none focus:ring-1 focus:ring-surface-text/40 transition-all font-sans text-[14px] bg-transparent";
    const labelClasses = "block font-sans text-[11px] uppercase tracking-widest text-text-secondary font-semibold mb-2";

    // Shared Option Button renderer
    const renderOptionButton = (
        id: string,
        label: string,
        currentValue: string | null,
        setter: (val: string) => void
    ) => {
        const isSelected = currentValue === id;
        return (
            <button
                type="button"
                onClick={() => {
                    setter(id);
                    setTimeout(nextStep, 350); // Auto-advance after small delay
                }}
                className={`w-full py-5 px-6 rounded-xl text-sm font-sans font-medium transition-all duration-300 text-left border ${isSelected
                    ? 'bg-bg-base-text text-surface border-surface-text shadow-lg'
                    : 'glass-panel-light text-text-secondary border-border-default hover:text-text-primary hover:border-border-hover'
                    }`}
            >
                {label}
            </button>
        );
    };

    return (
        <section id="consultation" aria-label="Architectural Consultation" className="py-sp-8 md:py-sp-9 bg-bg-base text-text-primary relative overflow-hidden transition-colors duration-300">
            <div className="container mx-auto px-5 md:px-6 relative z-10 max-w-7xl">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 glass-panel backdrop-blur-2xl rounded-[2.5rem] overflow-hidden min-h-[700px] bg-bg-card border border-border-default shadow-3xl">

                    {/* Left Column: Cinematic Video */}
                    <div className="relative h-[350px] lg:h-auto overflow-hidden group">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.35, ease: "easeOut" }}
                            className="absolute inset-0 z-0"
                        >
                            <img
                                src="/estimator-hero.jpg"
                                alt="Roofing Inspector"
                                className="w-full h-full object-cover"
                            />
                            {/* Cinematic Overlay */}
                            <div className="absolute inset-0 bg-black/40 lg:bg-black/20" />
                            <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-60" />
                        </motion.div>

                        <div className="absolute inset-0 z-10 p-10 flex flex-col justify-end">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1, duration: 0.35, ease: "easeOut" }}
                            >
                                <h2 className="font-display text-3xl lg:text-4xl font-medium tracking-tight text-text-primary mb-3">
                                    Request Your <br />
                                    Custom Roof Estimate
                                </h2>
                                <p className="font-sans text-text-secondary text-xs uppercase tracking-[0.2em] font-medium">
                                    Average Response Time: Under 2 Hours.
                                </p>
                            </motion.div>
                        </div>
                    </div>

                    {/* Right Column: Multi-Step Diagnostic Form */}
                    <div className="relative flex flex-col min-h-[500px] bg-bg-card">

                        {/* Progress Indicator */}
                        <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-bg-card">
                            <motion.div
                                className="h-full bg-white/30"
                                initial={{ width: 0 }}
                                animate={{ width: `${progressPercentage}%` }}
                                transition={{ duration: 0.35, ease: "easeOut" }}
                            />
                        </div>

                        <div className="flex-1 p-8 lg:p-16 relative flex flex-col">
                            <AnimatePresence mode="wait" custom={direction}>
                                {/* STEP 1: MATERIAL SELECTION */}
                                {step === 1 && (
                                    <motion.div
                                        key="step1"
                                        custom={direction}
                                        variants={stepVariants}
                                        initial="hidden"
                                        animate="visible"
                                        exit="exit"
                                        className="flex flex-col h-full w-full absolute inset-0 p-8 md:p-14 box-border"
                                    >
                                        <motion.div variants={childVariants} className="mb-sp-6">
                                            <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-text-secondary/60 mb-2">Step 01</p>
                                            <h3 className="text-2xl md:text-3xl font-display font-light text-text-primary tracking-tight">Material Selection</h3>
                                        </motion.div>

                                        <motion.div variants={childVariants} className="grid md:grid-cols-2 gap-4">
                                            {MATERIALS.map(mat => renderOptionButton(mat.id, mat.label, material, setMaterial))}
                                        </motion.div>
                                    </motion.div>
                                )}

                                {/* STEP 2: PROJECT INTENT */}
                                {step === 2 && (
                                    <motion.div
                                        key="step2"
                                        custom={direction}
                                        variants={stepVariants}
                                        initial="hidden"
                                        animate="visible"
                                        exit="exit"
                                        className="flex flex-col h-full w-full absolute inset-0 p-8 md:p-14 box-border"
                                    >
                                        <motion.div variants={childVariants} className="flex justify-between items-start mb-sp-6">
                                            <div>
                                                <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-text-secondary/60 mb-2">Step 02</p>
                                                <h3 className="text-2xl md:text-3xl font-display font-light text-text-primary tracking-tight">Project Intent</h3>
                                            </div>
                                        </motion.div>

                                        <motion.div variants={childVariants} className="grid md:grid-cols-2 gap-4">
                                            {INTENTS.map(i => renderOptionButton(i.id, i.label, intent, setIntent))}
                                        </motion.div>
                                    </motion.div>
                                )}

                                {/* STEP 3: PROPERTY SCALE */}
                                {step === 3 && (
                                    <motion.div
                                        key="step3"
                                        custom={direction}
                                        variants={stepVariants}
                                        initial="hidden"
                                        animate="visible"
                                        exit="exit"
                                        className="flex flex-col h-full w-full absolute inset-0 p-8 md:p-14 box-border"
                                    >
                                        <motion.div variants={childVariants} className="flex justify-between items-start mb-sp-6">
                                            <div>
                                                <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-text-secondary/60 mb-2">Step 03</p>
                                                <h3 className="text-2xl md:text-3xl font-display font-light text-text-primary tracking-tight">Property Scale</h3>
                                            </div>
                                        </motion.div>

                                        <motion.div variants={childVariants} className="grid md:grid-cols-1 gap-4 max-w-xl">
                                            {SCALES.map(s => renderOptionButton(s.id, s.label, scale, setScale))}
                                        </motion.div>
                                    </motion.div>
                                )}

                                {/* STEP 4: CONSULTATION DETAILS */}
                                {step === 4 && (
                                    success ? (
                                        <motion.div
                                            key="success"
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            className="flex flex-col items-center justify-center h-full text-center p-8 md:p-14"
                                        >
                                            <div className="w-20 h-20 bg-theme/10 rounded-full flex items-center justify-center mb-6">
                                                <div className="w-10 h-10 bg-theme rounded-full flex items-center justify-center">
                                                    <svg className="w-6 h-6 text-accent-text" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <h3 className="text-3xl font-display font-medium text-text-primary mb-4">Estimate Requested!</h3>
                                            <p className="text-text-secondary text-lg leading-relaxed max-w-md">
                                                Thank you, {name.split(' ')[0]}. We've received your project details and will call you within 2 hours to confirm your custom estimate.
                                            </p>
                                        </motion.div>
                                    ) : (
                                        <motion.form
                                            key="step4"
                                            custom={direction}
                                            variants={stepVariants}
                                            initial="hidden"
                                            animate="visible"
                                            exit="exit"
                                            className="flex flex-col h-full w-full absolute inset-0 p-8 md:p-14 box-border"
                                            onSubmit={handleFinalSubmit}
                                        >
                                            <motion.div variants={childVariants} className="flex justify-between items-start mb-sp-6">
                                                <div>
                                                    <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-text-secondary/60 mb-2">Step 04</p>
                                                    <h3 className="text-2xl md:text-3xl font-display font-light text-text-primary tracking-tight">Consultation Details</h3>
                                                </div>
                                            </motion.div>

                                            <motion.div variants={childVariants} className="grid md:grid-cols-2 gap-x-8 gap-y-6">
                                                <div className="md:col-span-2">
                                                    <label htmlFor="fullName" className={labelClasses}>Full Name</label>
                                                    <input
                                                        id="fullName"
                                                        type="text"
                                                        value={name}
                                                        onChange={(e) => setName(e.target.value)}
                                                        className={inputClasses}
                                                        placeholder="e.g. John Doe"
                                                        required
                                                    />
                                                </div>

                                                <div>
                                                    <label htmlFor="email" className={labelClasses}>Email Address</label>
                                                    <input
                                                        id="email"
                                                        type="email"
                                                        value={email}
                                                        onChange={(e) => setEmail(e.target.value)}
                                                        className={inputClasses}
                                                        placeholder="john@example.com"
                                                        required
                                                    />
                                                </div>

                                                <div>
                                                    <label htmlFor="phone" className={labelClasses}>Phone Number</label>
                                                    <input
                                                        id="phone"
                                                        type="tel"
                                                        value={phone}
                                                        onChange={(e) => setPhone(e.target.value)}
                                                        className={inputClasses}
                                                        placeholder="(555) 123-4567"
                                                        required
                                                    />
                                                </div>
                                            </motion.div>

                                            <motion.div variants={childVariants} className="mt-auto pt-8 flex flex-col items-end gap-3">
                                                <button
                                                    type="submit"
                                                    className="px-8 py-sp-5 bg-theme text-accent-text hover:brightness-110 text-text-primary rounded-xl font-sans font-medium text-[13px] transition-all duration-300 w-full md:w-auto"
                                                >
                                                    Get My Free Quote
                                                </button>
                                                <p className="font-sans text-[10px] text-text-secondary/60 text-center md:text-right w-full">
                                                    Your information is 100% secure. No spam, just a fast, accurate quote.
                                                </p>
                                            </motion.div>
                                        </motion.form>
                                    )
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Navigation Bar Fixed to Bottom inside the container */}
                        <div className="px-8 md:px-14 py-6 border-t border-border-default flex justify-between items-center bg-bg-card">
                            <button
                                type="button"
                                onClick={prevStep}
                                disabled={step === 1}
                                className={`font-sans text-[11px] uppercase tracking-[0.2em] font-medium transition-colors ${step === 1 ? 'text-text-secondary/30 cursor-not-allowed' : 'text-text-secondary hover:text-text-primary'}`}
                            >
                                &larr; Back
                            </button>

                            {/* We hide the manual "Next" button on option steps (1-3) since clicking an option auto-advances. 
                            If the user wants to advance via button, we show it, but auto-advance is more premium.
                            Providing a visual indicator of steps. */}
                            <div className="flex gap-2">
                                {[1, 2, 3, 4].map((i) => (
                                    <div
                                        key={i}
                                        className={`w-1.5 h-1.5 rounded-full transition-colors duration-500 ${step >= i ? 'bg-white/40' : 'bg-white/10'}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}

