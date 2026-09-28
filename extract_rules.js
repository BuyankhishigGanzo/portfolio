const fs = require('fs');
const css = fs.readFileSync('ref.css', 'utf8');

function findRules(pattern) {
  const regex = new RegExp(`([^}{;]*${pattern}[^}{;]*)\\{([^}]+)\\}`, 'g');
  let match;
  const results = [];
  while ((match = regex.exec(css)) !== null) {
    results.push({ selector: match[1].trim(), body: match[2].trim() });
  }
  return results;
}

const sections = [
  'navwrap', 'nav', 'brand', 'hero', 'marquee', 'folio', 'about',
  'process', 'srv', 'plan', 'tm', 'connect', 'faq', 'contact', 'outro', 'foot', 'btn', 'display', 'h2', 'eyebrow'
];

const report = {};
for (const sec of sections) {
  report[sec] = findRules(sec);
  console.log(`${sec}: ${report[sec].length} rules`);
}

fs.writeFileSync('css_audit.json', JSON.stringify(report, null, 2));
console.log('Saved css_audit.json');
