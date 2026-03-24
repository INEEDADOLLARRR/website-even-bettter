const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src', 'components');

const replacements = [
  // Section Spacings (Vertical Padding)
  { from: /py-\[120px\]/g, to: 'py-sp-10' },
  { from: /pt-\[120px\]/g, to: 'pt-sp-10' },
  { from: /pb-\[96px\]/g, to: 'pb-sp-9' },
  { from: /py-\[96px\]/g, to: 'py-sp-9' },
  { from: /py-\[80px\]/g, to: 'py-[80px]' }, // No sp-8.5, kept
  { from: /py-\[64px\]/g, to: 'py-sp-8' },
  { from: /py-\[48px\]/g, to: 'py-sp-7' },
  { from: /pt-\[48px\]/g, to: 'pt-sp-7' },
  { from: /pb-\[48px\]/g, to: 'pb-sp-7' },
  { from: /pt-[40px]|pt-\[40px\]/g, to: 'pt-[40px]' },
  { from: /pb-[32px]|pb-\[32px\]/g, to: 'pb-sp-6' },
  { from: /pb-[24px]|pb-\[24px\]/g, to: 'pb-sp-5' },
  { from: /py-[24px]|py-\[24px\]/g, to: 'py-sp-5' },
  { from: /py-[20px]|py-\[20px\]/g, to: 'py-[20px]' },

  // Gap Spacings
  { from: /gap-\[48px\]/g, to: 'gap-sp-7' },
  { from: /gap-\[40px\]/g, to: 'gap-[40px]' }, // Or sp-6.5
  { from: /gap-\[32px\]/g, to: 'gap-sp-6' },
  { from: /gap-\[24px\]/g, to: 'gap-sp-5' },
  { from: /gap-12/g, to: 'gap-sp-7' }, // 48px
  { from: /gap-10/g, to: 'gap-[40px]' }, // 40px
  { from: /gap-8/g, to: 'gap-sp-6' }, // 32px
  { from: /gap-6/g, to: 'gap-sp-5' }, // 24px

  // Margin Bottoms
  { from: /mb-\[96px\]/g, to: 'mb-sp-9' },
  { from: /mb-\[80px\]/g, to: 'mb-[80px]' },
  { from: /mb-\[64px\]/g, to: 'mb-sp-8' },
  { from: /mb-\[40px\]/g, to: 'mb-[40px]' },
  { from: /mb-\[32px\]/g, to: 'mb-sp-6' },
  { from: /mb-\[24px\]/g, to: 'mb-sp-5' },
  { from: /mb-\[16px\]/g, to: 'mb-sp-4' },
  { from: /mb-24/g, to: 'mb-sp-9' },
  { from: /mb-20/g, to: 'mb-[80px]' },
  { from: /mb-16/g, to: 'mb-sp-8' },
  { from: /mb-14/g, to: 'mb-[56px]' },
  { from: /mb-12/g, to: 'mb-sp-7' },
  { from: /mb-10/g, to: 'mb-[40px]' },
  { from: /mb-8/g, to: 'mb-sp-6' },
  { from: /mb-6/g, to: 'mb-[24px]' }, // Note mb-6 is 24px, we change it here. It's often used for heading to paragraph. Wait, if we use mb-[24px] it will stay.

  // Buttons (Inside elements)
  { from: /px-\[36px\] py-\[16px\]/g, to: 'px-[36px] py-[16px]' },
  { from: /px-\[26px\] py-\[13px\]/g, to: 'px-[26px] py-[13px]' },
  { from: /px-10 py-5/g, to: 'px-[40px] py-[20px]' },
  { from: /px-10 py-4/g, to: 'px-[40px] py-[16px]' },
  { from: /px-8 py-4/g, to: 'px-[32px] py-[16px]' },
  { from: /px-8 py-3\.5/g, to: 'px-[32px] py-[14px]' },

  // Typography Line Heights rules
  { from: /leading-relaxed/g, to: 'leading-[1.7]' },
  { from: /leading-loose/g, to: 'leading-[1.7]' },
];

fs.readdirSync(dir).filter(f => f.endsWith('.tsx')).forEach(file => {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let newContent = content;

  for (const rep of replacements) {
    newContent = newContent.replace(rep.from, rep.to);
  }

  // Ensure body text leading-1.7 by default by stripping line height overrides on p tags
  // Actually, since we replaced leading-relaxed with leading-[1.7] above, it handles explicitly defined leading.
  
  if (content !== newContent) {
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log(`Updated spacing in ${file}`);
  }
});
console.log('Script completed.');
