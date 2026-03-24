const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src', 'components');

const replacements = [
  { from: /#1D9E75/g, to: '#A3A3A3' },
  { from: /#5DCAA5/g, to: '#A3A3A3' },
  { from: /#9FE1CB/g, to: '#A3A3A3' },
  // Let's also check for `#0F6E56` just in case SlideInLeadForm still has it. (We set it to C5A059 earlier but let's be sure).
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
    console.log(`Cleaned up hardcoded teal in ${file}`);
  }
});
console.log('Hardcoded teal swept.');
