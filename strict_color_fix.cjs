const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src', 'components');

const replacements = [
  // Hardcoded Google Gold to Theme Silver
  { from: /#EF9F27/g, to: '#A3A3A3' },
  
  // Decorative text/fill/border/shadow from accent to theme
  { from: /text-accent(?!\-)/g, to: 'text-theme' },
  { from: /fill-accent/g, to: 'fill-theme' },
  { from: /border-accent/g, to: 'border-theme' },
  { from: /shadow-accent/g, to: 'shadow-theme' },
  { from: /ring-accent/g, to: 'ring-theme' },
  
  // Specific opacity variations that used accent text
  { from: /text-accent-text\/10/g, to: 'text-text-muted' },
  { from: /text-accent-text\/15/g, to: 'text-text-muted' },
  { from: /text-accent-text\/20/g, to: 'text-text-muted' },
  { from: /text-accent-text\/40/g, to: 'text-text-muted' },
  
  // Glows
  { from: /shadow-theme\/15/g, to: 'shadow-white/5' },
  { from: /shadow-theme\/20/g, to: 'shadow-white/5' },
  { from: /shadow-theme\/30/g, to: 'shadow-white/5' },
];

fs.readdirSync(dir).filter(f => f.endsWith('.tsx')).forEach(file => {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let newContent = content;

  // Apply basic replacements
  for (const rep of replacements) {
    newContent = newContent.replace(rep.from, rep.to);
  }

  // Surgical replacement for bg-accent
  // We want to keep bg-accent for CTA buttons, but replace it for decorative spans/divs.
  // We'll look for tags that DON'T have a cta- class and replace bg-accent.
  
  // Example: <span className="... bg-accent ..." /> -> should be bg-theme
  // Example: <button className="... cta-primary ... bg-accent ..." /> -> keep bg-accent
  
  const tagRegex = /<([a-z0-9]+)\s+[^>]*?className="([^"]*?bg-accent[^"]*?)"[^>]*?>/gi;
  newContent = newContent.replace(tagRegex, (match, tagName, className) => {
    // If it's a button and has a CTA class, or is a button in some contexts, we might want to keep it.
    // However, the user said "strictly for CTA button only".
    // So if it's NOT a button, or DOESN'T have a cta class, it should be bg-theme.
    if (className.includes('cta-') || tagName.toLowerCase() === 'button') {
      return match; // Keep as is
    }
    return match.replace(/bg-accent/g, 'bg-theme').replace(/text-accent-text/g, 'text-bg-base');
  });

  // Also catch bg-accent in backticks/template literals
  newContent = newContent.replace(/`([^`]*?bg-accent[^`]*?)`/g, (match, className) => {
     if (className.includes('cta-')) return match;
     return match.replace(/bg-accent/g, 'bg-theme');
  });

  // Specific fix for Testimonials user initial circles which are divs
  if (file === 'Testimonials.tsx') {
    newContent = newContent.replace(/bg-accent text-accent-text\/20/g, 'bg-theme/20 text-theme');
  }
  
  // Specific fix for Hero eyebrow underline and pulse dot
  if (file === 'Hero.tsx') {
    newContent = newContent.replace(/bg-accent text-accent-text/g, (match, offset, str) => {
       // Check if this is inside the button at line 190
       const ctaIndex = str.indexOf('cta-inspection');
       if (ctaIndex !== -1 && offset > ctaIndex && offset < ctaIndex + 200) {
         return match;
       }
       return 'bg-theme text-bg-base';
    });
  }

  if (content !== newContent) {
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log(`Strictly corrected colors in ${file}`);
  }
});
console.log('Strict correction complete.');
