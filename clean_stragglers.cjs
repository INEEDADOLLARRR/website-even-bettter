const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src', 'components');

const replacements = [
  { from: /fill-brand-accent/g, to: 'fill-accent' },
  { from: /bg-brand-white/g, to: 'bg-text-primary' },
  { from: /text-brand-black/g, to: 'text-bg-base' },
  { from: /from-brand-silver/g, to: 'from-text-secondary' },
  { from: /bg-brand-silver/g, to: 'bg-text-secondary' },
  // Also fix that shadow color in Hero: rgba(197,160,89,0.8) is old accent color
  { from: /rgba\(197,160,89,0\.8\)/g, to: 'rgba(29,181,116,0.8)' },
  // And any left over tailwind arbitrary colors:
  { from: /bg-\[#050505\]/g, to: 'bg-bg-base' },
  { from: /bg-\[#0a0a0a\]/g, to: 'bg-bg-lift' },
  { from: /bg-\[#111111\]/g, to: 'bg-bg-card' },
  { from: /bg-\[#1a1a1a\]/g, to: 'bg-bg-elevated' },
  { from: /bg-\[#222222\]/g, to: 'bg-bg-hover' },
];

fs.readdirSync(dir).filter(f => f.endsWith('.tsx')).forEach(file => {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let newContent = content;

  for (const rep of replacements) {
    newContent = newContent.replace(rep.from, rep.to);
  }

  if (content !== newContent) {
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log(`Cleaned up stragglers in ${file}`);
  }
});
console.log('Stragglers cleaned.');
