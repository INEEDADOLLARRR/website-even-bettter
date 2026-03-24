import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, X } from 'lucide-react';

export function SlideInLeadForm() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  
  // Field-level state
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [zip, setZip] = useState('');

  // Mock validation (visual micro-interactions)
  const isNameValid = name.length > 2;
  const isPhoneValid = phone.length >= 10;
  // Zip is optional or handled as the final step before submission.

  // 15-second / Scroll Trigger Logic
  useEffect(() => {
    // Only set up listeners if it hasn't been dismissed manually
    if (isDismissed) return;

    // Trigger after 15 seconds as a fallback to catch engaged users reading text-heavy top sections
    const timer = setTimeout(() => {
      if (!isDismissed) setIsVisible(true);
    }, 15000);

    // Also trigger on scroll depth (~70% down the page near Section 7/8)
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      const scrollPercentage = (scrollPosition / (documentHeight - windowHeight)) * 100;
      
      // If they scrolled past 65% of the page
      if (scrollPercentage > 65 && !isDismissed) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isDismissed]);

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isNameValid || !isPhoneValid) return;
    
    // Send to webhook
    try {
      await fetch('https://supergene-demagogically-archer.ngrok-free.dev/webhook-test/4a9da379-5c68-4923-bf8b-fd0eb7c2ef04', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, phone, zip }),
      });
    } catch (error) {
      console.error('Error submitting lead:', error);
    }
    
    // Close form on success
    setIsVisible(false);
    setIsDismissed(true);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, x: 20 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="fixed bottom-6 right-6 z-[100] w-full max-w-[340px] bg-bg-base border border-border-default shadow-2xl rounded-2xl overflow-hidden"
        >
          {/* Header Bar */}
          <div className="bg-[#f8f8f8] border-b border-border-default px-5 py-3 flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-text-primary-secondary">
              Free Roof Inspection
            </span>
            <button 
              onClick={handleDismiss}
              className="p-1 rounded-full hover:bg-black/5 text-text-primary-secondary transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Form Body */}
          <div className="p-6 pb-5">
            <h3 className="text-[17px] font-display font-medium text-text-primary mb-1">
              Takes 30 seconds
            </h3>
            <p className="text-sm text-text-primary-secondary mb-5">
              No obligation · Same-day available
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              
              {/* Name Field */}
              <div className="flex flex-col gap-1.5">
                <div className={`relative flex items-center border rounded-lg px-3 py-sp-5 bg-[#fdfdfd] transition-colors ${
                  isNameValid ? 'border-[#A3A3A3] bg-white' : 'border-border-default hover:border-border-hover'
                }`}>
                  <input 
                    type="text" 
                    placeholder="First Name" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-transparent outline-none text-[15px] text-text-primary placeholder:text-text-primary-tertiary"
                  />
                </div>
                {/* Micro-interaction confirmation */}
                <AnimatePresence>
                  {isNameValid && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="flex items-center gap-1.5 pl-1"
                    >
                      <CheckCircle2 className="w-3 h-3 text-[#A3A3A3]" />
                      <span className="text-[11px] font-medium text-[#A3A3A3]">Name looks good</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Phone Field */}
              <div className="flex flex-col gap-1.5">
                <div className={`relative flex items-center border rounded-lg px-3 py-sp-5 bg-[#fdfdfd] transition-colors ${
                  isPhoneValid ? 'border-[#A3A3A3] bg-white' : 'border-border-default hover:border-border-hover'
                }`}>
                  <input 
                    type="tel" 
                    placeholder="Phone Number" 
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-transparent outline-none text-[15px] text-text-primary placeholder:text-text-primary-tertiary"
                  />
                </div>
                {/* Micro-interaction confirmation */}
                <AnimatePresence>
                  {isPhoneValid && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="flex items-center gap-1.5 pl-1"
                    >
                      <CheckCircle2 className="w-3 h-3 text-[#A3A3A3]" />
                      <span className="text-[11px] font-medium text-[#A3A3A3]">Phone confirmed</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Zip Code Field (Max 3 fields rule) */}
              <div className="relative flex items-center border border-border-default hover:border-border-hover rounded-lg px-3 py-sp-5 bg-[#fdfdfd] transition-colors">
                <input 
                  type="text" 
                  placeholder="Zip Code" 
                  value={zip}
                  onChange={(e) => setZip(e.target.value)}
                  className="w-full bg-transparent outline-none text-[15px] text-text-primary placeholder:text-text-primary-tertiary"
                />
              </div>

              <button 
                type="submit"
                disabled={!isNameValid || !isPhoneValid}
                className="w-full mt-2 bg-accent text-accent-text text-[#111] font-bold py-3.5 rounded-xl hover:bg-[#E59D00] disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-sm shadow-sm"
              >
                Book My Free Inspection →
              </button>

            </form>
            
            <p className="text-[10px] text-center text-text-primary-tertiary mt-4">
              <span className="font-semibold text-text-primary-secondary">No spam · no sales calls</span> · just an honest assessment
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
