const fs = require('fs');
const code = fs.readFileSync('ref_page.js', 'utf8');

// Find all section identifiers
const sectionRegex = /([a-z0-9_]+):\s*\([0-9a-zA-Z_$.]+\)\("section"/g;
let m;
while ((m = sectionRegex.exec(code)) !== null) {
  console.log('Section key:', m[1], 'at index', m.index);
  console.log(code.slice(m.index, m.index + 300));
  console.log('-----------------------------------');
}
