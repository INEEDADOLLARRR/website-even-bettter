const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src', 'components');

const replacements = [
  // Backgrounds Level 1
  { from: /bg-\[#050505\]/g, to: 'bg-bg-base' },
  { from: /bg-premium-dark/g, to: 'bg-bg-base' }, // Removing the gradient radial that feels cheap
  
  // Backgrounds Level 2
  { from: /bg-\[#0a0a0a\]/g, to: 'bg-bg-lift' },
  
  // Backgrounds Level 3
  { from: /bg-\[#111111\]/g, to: 'bg-bg-card' },
  { from: /bg-\[#111\]/g, to: 'bg-bg-card' },
  
  // Backgrounds Level 4
  { from: /bg-\[#1a1a1a\]/g, to: 'bg-bg-elevated' },
  
  // Brand specific old colors
  { from: /bg-brand-black/g, to: 'bg-bg-base' },
  { from: /text-brand-white/g, to: 'text-text-primary' },
  { from: /text-brand-silver/g, to: 'text-text-secondary' },
  { from: /text-white\/60/g, to: 'text-text-secondary' },
  { from: /text-white\/50/g, to: 'text-text-secondary' },
  { from: /text-white\/40/g, to: 'text-text-muted' },
  { from: /text-white\/30/g, to: 'text-text-muted' },
  { from: /text-white\/20/g, to: 'text-text-muted' },
  { from: /text-white/g, to: 'text-text-primary' },

  // Surface text mapping
  { from: /text-surface-text/g, to: 'text-text-primary' },
  { from: /text-surface-muted/g, to: 'text-text-secondary' },
  { from: /text-surface-subtle/g, to: 'text-text-muted' },
  
  // Borders
  { from: /border-white\/10/g, to: 'border-border-default' },
  { from: /border-white\/5/g, to: 'border-border-default' },
  { from: /border-brand-white\/10/g, to: 'border-border-default' },
  { from: /border-brand-white\/5/g, to: 'border-border-default' },
  { from: /border-white\/20/g, to: 'border-border-hover' },
  { from: /border-white\/30/g, to: 'border-border-hover' },
  { from: /hover:border-white\/30/g, to: 'hover:border-border-hover' },
  { from: /hover:border-white\/20/g, to: 'hover:border-border-hover' },
  { from: /border-surface-border-hover/g, to: 'border-border-hover' },
  { from: /border-surface-border/g, to: 'border-border-default' },
  
  // Specific hovers
  { from: /hover:bg-white\/\[0\.03\]/g, to: 'hover:bg-bg-hover' },
  { from: /hover:bg-white\/5/g, to: 'hover:bg-bg-hover' },
  { from: /hover:bg-white\/10/g, to: 'hover:bg-bg-hover' },

  // Accent Colors
  { from: /bg-brand-accent/g, to: 'bg-accent text-accent-text' },
  { from: /text-brand-accent/g, to: 'text-accent' },
  { from: /border-brand-accent/g, to: 'border-accent' },
  { from: /ring-brand-accent/g, to: 'ring-accent' },
  { from: /shadow-brand-accent/g, to: 'shadow-accent' },
];

const specificSectionFixes = {
  'FAQ.tsx': (content) => {
    // FAQ is text-heavy, so it should be Level 2 (bg-lift)
    return content.replace(/bg-surface/g, 'bg-bg-lift');
  },
  'Footer.tsx': (content) => {
    // Footer is also Level 2 (bg-lift)
    return content.replace(/bg-\[#050505\]/g, 'bg-bg-lift').replace(/bg-surface/g, 'bg-bg-lift');
  },
  'BreatherCTA.tsx': (content) => {
    // Breather should be elevated
    return content.replace(/bg-bg-card/g, 'bg-bg-elevated')
                  .replace(/bg-surface/g, 'bg-bg-elevated');
  },
  'FinalCTA.tsx': (content) => {
    // FinalCTA should be elevated
    return content.replace(/bg-bg-card/g, 'bg-bg-elevated')
                  .replace(/bg-surface/g, 'bg-bg-elevated');
  },
  'LocalProofGallery.tsx': (content) => {
    // Gallery cards
    return content.replace(/bg-surface-muted/g, 'bg-bg-card')
                  .replace(/bg-surface/g, 'bg-bg-base')
                  .replace(/bg-white\/\[0\.02\]/g, 'bg-bg-card');
  },
  'Testimonials.tsx': (content) => {
    return content.replace(/bg-white\/\[0\.02\]/g, 'bg-bg-card')
                  .replace(/bg-surface/g, 'bg-bg-base');
  },
  'Process.tsx': (content) => {
    return content.replace(/bg-surface/g, 'bg-bg-base')
                  .replace(/bg-white\/\[0\.03\]/g, 'bg-bg-card')
                  .replace(/bg-white\/5/g, 'bg-bg-card');
  },
  'ServicesUrgency.tsx': (content) => {
    return content.replace(/bg-surface/g, 'bg-bg-base')
                  .replace(/bg-\[#111111\]/g, 'bg-bg-card');
  },
  'Hero.tsx': (content) => {
    return content.replace(/bg-surface/g, 'bg-bg-base');
  },
  'ProjectEstimator.tsx': (content) => {
    return content.replace(/bg-surface/g, 'bg-bg-base')
                  .replace(/bg-white\/5/g, 'bg-bg-card')
                  .replace(/bg-white\/\[0\.02\]/g, 'bg-bg-card');
  }
};

fs.readdirSync(dir).filter(f => f.endsWith('.tsx')).forEach(file => {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let newContent = content;

  // Apply default replacements
  for (const rep of replacements) {
    newContent = newContent.replace(rep.from, rep.to);
  }

  // Apply specific fixes
  if (specificSectionFixes[file]) {
    newContent = specificSectionFixes[file](newContent);
  }
  
  // Make sure to replace any leftover bg-surface
  newContent = newContent.replace(/bg-surface(?!-)/g, 'bg-bg-base');

  if (content !== newContent) {
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log(`Updated dark palette in ${file}`);
  }
});
console.log('Dark palette applied.');
