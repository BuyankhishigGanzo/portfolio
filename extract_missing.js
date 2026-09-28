const fs = require('fs');
const css = fs.readFileSync('ref.css', 'utf8');

const targetClasses = [
  'head-c', 'head-s', 'head-s-top', 'head-s-main', 'sec-side', 'sec-note', 'head-sub',
  'outro-big', 'of-row', 'of-submit',
  'fcc-n', 'fcc-t', 'fcc-x', 'folio-cats-head', 'folio-cats-note', 'folio-catview', 'folio-empty', 'fe-main', 'fe-soon',
  'plan-tiers', 'plan-tier', 'plan-radio', 'plan-tier-name', 'plan-slots', 'plan-incl', 'plan-feat', 'plan-feat-stack', 'plan-opt', 'plan-check', 'plan-was', 'plan-off', 'plan-per', 'plan-cond',
  'a-in', 'brand-word', 'brand-logo'
];

let extracted = [];
// Also find @media queries that might contain them
// Let's parse all CSS rules (including @keyframes and @media)
const ruleRegex = /([^{}]+)\{([^{}]+)\}/g;
let m;
while ((m = ruleRegex.exec(css)) !== null) {
  const selector = m[1].trim();
  const body = m[2].trim();
  if (targetClasses.some(c => selector.includes('.' + c) || selector.includes(c))) {
    extracted.push(`${selector} {\n  ${body}\n}`);
  }
}

// Check @keyframes slide
const slideIdx = css.indexOf('@keyframes slide');
if (slideIdx > -1) {
  const end = css.indexOf('}', slideIdx);
  const end2 = css.indexOf('}', end + 1);
  extracted.push(css.slice(slideIdx, end2 + 1));
}

console.log('Total rules extracted:', extracted.length);
fs.writeFileSync('extracted_missing_rules.css', extracted.join('\n\n'), 'utf8');
console.log('Saved to extracted_missing_rules.css');
