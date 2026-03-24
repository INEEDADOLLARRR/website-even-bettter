import { useState } from 'react';
import { motion } from 'motion/react';
import { Calculator, ArrowRight } from 'lucide-react';

export function Diagnostic() {
  const [sqft, setSqft] = useState(5000);
  const [calculated, setCalculated] = useState(false);

  const tearOffCost = sqft * 9;
  const coatingCost = sqft * 4.5;
  const savings = tearOffCost - coatingCost;

  return (
    <section aria-label="ROI Calculator" className="py-14 md:py-sp-54 bg-bg-base text-text-primary relative overflow-hidden border-t border-brand-silver/5">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <motion.div
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-panel text-xs font-semibold tracking-widest text-text-secondary/60 uppercase mb-7">
              <Calculator className="w-3.5 h-3.5" aria-hidden="true" /> ROI Calculator
            </div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight mb-7 leading-[1.1]">
              Calculate Your <br />Premium Savings
            </h2>
            <p className="text-text-secondary/50 mb-sp-6 font-light leading-[1.7] text-sm">
              Don't commit to a costly tear-off before knowing your options. Use our interactive tool to see how much you could save with our architecturally superior liquid roof coating.
            </p>

            <ul className="space-y-4 text-text-secondary/60 text-sm" role="list">
              <li className="flex items-center gap-3">
                <div className="w-1 h-1 rounded-full bg-text-primary/50" /> Fully tax-deductible in year one
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1 h-1 rounded-full bg-text-primary/50" /> Lower energy bills (highly reflective)
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1 h-1 rounded-full bg-text-primary/50" /> Backed by uncompromising warranties
              </li>
            </ul>
          </motion.div>

          <motion.div
            className="glass-panel p-6 md:p-10 rounded-2xl relative overflow-hidden"
          >
            <div className="relative mb-sp-6">
              <label htmlFor="sqft-range" className="block text-sm font-semibold tracking-wider text-text-secondary/50 uppercase mb-5 flex justify-between items-end">
                Estimated Roof Size
                <span className="text-text-primary font-display text-xl font-light">{sqft.toLocaleString()} <span className="text-sm text-text-secondary/40">Sq Ft</span></span>
              </label>
              <input
                id="sqft-range"
                type="range"
                min="1000"
                max="50000"
                step="500"
                value={sqft}
                onChange={(e) => {
                  setSqft(Number(e.target.value));
                  setCalculated(false);
                }}
                className="w-full h-1 bg-text-primary/10 rounded-lg appearance-none cursor-pointer accent-white"
                aria-valuemin={1000}
                aria-valuemax={50000}
                aria-valuenow={sqft}
                aria-label="Roof size in square feet"
              />
              <div className="flex justify-between text-xs text-text-secondary/30 mt-3 font-display tracking-widest">
                <span>1K</span>
                <span>50K+</span>
              </div>
            </div>

            {!calculated ? (
              <button
                onClick={() => setCalculated(true)}
                className="relative w-full py-sp-5 bg-accent text-accent-text text-text-primary rounded-xl font-semibold hover:brightness-110 transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer text-sm"
              >
                Reveal Projection <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            ) : (
              <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="space-y-5">
                <div className="p-6 bg-bg-base/40 rounded-xl border border-border-default">
                  <div className="text-xs font-semibold tracking-widest text-text-secondary/40 uppercase mb-2">Estimated Savings</div>
                  <div className="text-4xl font-light text-text-primary font-display tracking-tight">
                    <span className="text-2xl text-text-secondary/40">$</span>{savings.toLocaleString()}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="p-4 bg-text-primary/[0.02] rounded-xl border border-border-default">
                    <div className="text-[10px] font-semibold tracking-widest text-text-secondary/40 uppercase mb-1">Tear-off Route</div>
                    <div className="text-lg text-text-secondary/70 font-display">${tearOffCost.toLocaleString()}</div>
                  </div>
                  <div className="p-4 glass-panel rounded-xl">
                    <div className="text-[10px] font-semibold tracking-widest text-text-secondary/60 uppercase mb-1">Liquid System</div>
                    <div className="text-lg text-text-primary font-display">${coatingCost.toLocaleString()}</div>
                  </div>
                </div>

                <button className="w-full py-sp-5 bg-transparent border border-border-default text-text-primary hover:bg-white hover:text-bg-base rounded-xl font-semibold transition-all duration-300 tracking-wider uppercase text-xs cursor-pointer">
                  Request Full Diagnostic
                </button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
