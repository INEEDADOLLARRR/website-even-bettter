const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src', 'components');

const replacements = [
  // We want to change text/fill/border to the theme color (#A3A3A3), but leave bg-accent and text-accent-text alone for buttons
  { from: /text-accent(?!\-)/g, to: 'text-theme' },
  { from: /fill-accent/g, to: 'fill-theme' },
  { from: /border-accent/g, to: 'border-theme' },
  { from: /ring-accent/g, to: 'ring-theme' },
  { from: /shadow-accent/g, to: 'shadow-theme' },
  // Let's also make sure to fix the specific arbitrary rgba that was mapping to teal
  { from: /rgba\(29,181,116,0\.[0-9]+\)/g, to: 'var(--color-theme-glow)' }
];

fs.readdirSync(dir).filter(f => f.endsWith('.tsx')).forEach(file => {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let newContent = content;

  for (const rep of replacements) {
    newContent = newContent.replace(rep.from, rep.to);
  }

  // Specifically for SlideInLeadForm, restore valid border color logic if it used teal hex
  newContent = newContent.replace(/#0F6E56/g, '#C5A059');
  newContent = newContent.replace(/text-\[#1DB574\]/g, 'text-theme');

  if (content !== newContent) {
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log(`Updated theme colors in ${file}`);
  }
});
console.log('Done mapping theme colors.');
