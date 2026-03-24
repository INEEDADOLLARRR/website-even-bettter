import React, { useEffect, useRef, useState, useCallback } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { X, CheckCircle2, Phone } from 'lucide-react';
import { useInspectionPopup } from '../context/InspectionPopupContext';

// ── Replace with your real Formspree endpoint after signing up at formspree.io ──
const FORM_ENDPOINT = 'https://supergene-demagogically-archer.ngrok-free.dev/webhook-test/4a9da379-5c68-4923-bf8b-fd0eb7c2ef04';

function isValidName(v: string) { return v.trim().length >= 2; }
function isValidPhone(v: string) { return v.replace(/\D/g, '').length >= 10; }
function isValidZip(v: string) { return /^\d{5}$/.test(v.trim()); }

interface FieldProps {
  id: string;
  label: string;
  type?: string;
  placeholder: string;
  autoComplete?: string;
  inputMode?: React.HTMLAttributes<HTMLInputElement>['inputMode'];
  maxLength?: number;
  validate: (v: string) => boolean;
  value: string;
  onChange: (v: string) => void;
  onBlur: () => void;
  touched: boolean;
}

function PopupField({ id, label, type = 'text', placeholder, autoComplete, inputMode, maxLength, validate, value, onChange, onBlur, touched }: FieldProps) {
  const isValid = touched && validate(value);
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-[11px] font-semibold text-text-secondary mb-1.5 uppercase tracking-[0.06em]">
        {label}
      </label>
      <div className="relative">
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          autoComplete={autoComplete}
          inputMode={inputMode}
          maxLength={maxLength}
          value={value}
          onChange={e => onChange(e.target.value)}
          onBlur={onBlur}
          className={`w-full rounded-xl border px-4 py-3 text-[14px] bg-white/[0.05] text-text-primary placeholder:text-text-primary/25 outline-none transition-all duration-200 pr-11
            ${isValid ? 'border-theme/70 bg-theme text-accent-text/5' : 'border-white/15 focus:border-white/35'}`}
        />
        {isValid && (
          <CheckCircle2 className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-theme" />
        )}
      </div>
    </div>
  );
}

export function InspectionPopup() {
  const { isOpen, closePopup, openPopup } = useInspectionPopup();

  // Form state
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [zip, setZip] = useState('');
  const [touched, setTouched] = useState({ name: false, phone: false, zip: false });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [successName, setSuccessName] = useState('');

  const nameRef = useRef<HTMLInputElement>(null);
  const scrollFiredRef = useRef(false);
  const exitFiredRef = useRef(false);
  const autoCloseTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const allValid = isValidName(name) && isValidPhone(phone) && isValidZip(zip);

  // Auto-focus name on open
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        document.getElementById('pi-name')?.focus();
      }, 300);
    }
  }, [isOpen]);

  // Escape key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') handleClose(); };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, []);

  // 15-second scroll trigger (once per session)
  useEffect(() => {
    const onScroll = () => {
      if (!scrollFiredRef.current) {
        scrollFiredRef.current = true;
        setTimeout(() => {
          if (!document.body.style.overflow) openPopup();
        }, 15000);
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [openPopup]);

  // Exit intent — desktop only
  useEffect(() => {
    const onMouseLeave = (e: MouseEvent) => {
      if (e.clientY < 10 && !exitFiredRef.current) {
        exitFiredRef.current = true;
        if (!document.body.style.overflow) openPopup();
      }
    };
    document.addEventListener('mouseleave', onMouseLeave);
    return () => document.removeEventListener('mouseleave', onMouseLeave);
  }, [openPopup]);

  const handleClose = useCallback(() => {
    if (autoCloseTimerRef.current) clearTimeout(autoCloseTimerRef.current);
    closePopup();
    // Reset form after fade-out
    setTimeout(() => {
      setName(''); setPhone(''); setZip('');
      setTouched({ name: false, phone: false, zip: false });
      setSubmitting(false); setSuccess(false);
    }, 400);
  }, [closePopup]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!allValid || submitting) return;
    setSubmitting(true);

    try {
      await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ name, phone, zip }),
      });
    } catch (_) {
      // Silently proceed to success — don't block the UX on network error
    }

    const firstName = name.trim().split(' ')[0];
    setSuccessName(firstName);
    setSuccess(true);
    setSubmitting(false);

    // Auto-close after 5 seconds
    autoCloseTimerRef.current = setTimeout(handleClose, 5000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="popup-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Book a free roof inspection"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/65 backdrop-blur-sm"
            onClick={handleClose}
          />

          {/* Card */}
          <motion.div
            key="popup-card"
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full max-w-[420px] rounded-2xl overflow-hidden shadow-2xl shadow-black/60 flex"
          >
            {/* Left accent bar */}
            <div className="w-1 flex-shrink-0 bg-theme text-bg-base" />

            {/* Content */}
            <div className="flex-1 bg-[#131313] p-7">

              <AnimatePresence mode="wait">
                {!success ? (
                  <motion.div
                    key="form-state"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-theme mb-1">
                          Free · No obligation
                        </p>
                        <h2 className="font-display text-[18px] font-medium text-text-primary leading-tight">
                          Book your free roof inspection
                        </h2>
                      </div>
                      <button
                        onClick={handleClose}
                        aria-label="Close popup"
                        className="flex-shrink-0 ml-3 w-8 h-8 rounded-full border border-white/15 flex items-center justify-center text-text-muted hover:text-text-primary hover:border-white/40 transition-colors"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <p className="text-[12px] text-text-secondary mb-5 leading-[1.7]">
                      Takes 30 seconds. We'll call you within 2 hours to confirm your slot.
                    </p>

                    {/* Form */}
                    <form onSubmit={handleSubmit} noValidate>
                      <PopupField
                        id="pi-name"
                        label="Your name"
                        placeholder="Sarah Mitchell"
                        autoComplete="name"
                        validate={isValidName}
                        value={name}
                        onChange={setName}
                        onBlur={() => setTouched(t => ({ ...t, name: true }))}
                        touched={touched.name}
                      />
                      <PopupField
                        id="pi-phone"
                        label="Phone number"
                        type="tel"
                        placeholder="(718) 555-0123"
                        autoComplete="tel"
                        inputMode="tel"
                        validate={isValidPhone}
                        value={phone}
                        onChange={setPhone}
                        onBlur={() => setTouched(t => ({ ...t, phone: true }))}
                        touched={touched.phone}
                      />
                      <PopupField
                        id="pi-zip"
                        label="Zip code"
                        placeholder="11209"
                        inputMode="numeric"
                        maxLength={5}
                        validate={isValidZip}
                        value={zip}
                        onChange={setZip}
                        onBlur={() => setTouched(t => ({ ...t, zip: true }))}
                        touched={touched.zip}
                      />

                      <button
                        type="submit"
                        disabled={!allValid || submitting}
                        className="w-full mt-2 py-sp-5 bg-accent text-accent-text text-bg-base font-black uppercase tracking-[0.12em] text-[13px] rounded-xl transition-all duration-200 hover:brightness-110 disabled:opacity-40 disabled:cursor-not-allowed"
                      >
                        {submitting ? 'Booking…' : 'Book My Free Inspection →'}
                      </button>
                    </form>

                    {/* Trust micro-signals */}
                    <div className="flex items-center justify-center gap-4 mt-4 flex-wrap">
                      {['No commitment', 'Same-day available', 'Licensed & insured'].map((t, i) => (
                        <span key={i} className="flex items-center gap-1.5 text-[10px] text-text-muted">
                          {i > 0 && <span className="w-1 h-1 rounded-full bg-theme text-text-muted" />}
                          {t}
                        </span>
                      ))}
                    </div>
                  </motion.div>

                ) : (
                  // ── SUCCESS STATE ──
                  <motion.div
                    key="success-state"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col items-center text-center py-sp-5"
                  >
                    <div className="w-14 h-14 rounded-full bg-theme text-text-muted flex items-center justify-center mb-5">
                      <CheckCircle2 className="w-7 h-7 text-theme" />
                    </div>

                    <h2 className="font-display text-[18px] font-medium text-text-primary mb-2 leading-snug">
                      You're booked, {successName}.<br />
                      <span className="text-text-primary/70 font-light italic">We'll call you within 2 hours.</span>
                    </h2>

                    <p className="text-[12px] text-text-primary/45 mb-5 leading-[1.7] max-w-[280px]">
                      Check your phone — we'll confirm your inspection slot and answer any questions you have.
                    </p>

                    <div className="flex items-center gap-2 px-5 py-3 rounded-xl bg-theme text-text-muted border border-theme/20 mb-5">
                      <Phone className="w-4 h-4 text-theme" />
                      <span className="text-[12px] font-semibold text-theme">
                        Calling from (718) 555-0123
                      </span>
                    </div>

                    <button
                      onClick={handleClose}
                      className="text-[11px] text-text-muted hover:text-text-secondary transition-colors underline underline-offset-2"
                    >
                      Close this window
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
