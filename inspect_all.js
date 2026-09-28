const fs = require('fs');
const code = fs.readFileSync('ref_page.js', 'utf8');

let out = [];
function printSection(name, startTag, endTag) {
  const s = code.indexOf(startTag);
  if (s === -1) {
    out.push('NOT FOUND: ' + name + ' ' + startTag);
    return;
  }
  const e = endTag ? code.indexOf(endTag, s) : s + 2000;
  out.push('=================== ' + name + ' ===================');
  out.push(code.slice(s, e > s ? e : s + 2000));
}

printSection('HERO', 'hero:(0,a.jsxs)("section"', 'stats:');
printSection('STATS', 'stats:', 'clients:');
printSection('CLIENTS', 'clients:', 'work:');
printSection('WORK', 'work:', 'about:');
printSection('ABOUT', 'about:', 'process:');
printSection('PROCESS', 'process:', 'services:');
printSection('SERVICES', 'services:', 'plans:');
printSection('PLANS', 'plans:', 'testimonials:');
printSection('TESTIMONIALS', 'testimonials:', 'connect:');
printSection('CONNECT', 'connect:', 'faq:');
printSection('FAQ', 'faq:', 'contact:');
printSection('CONTACT', 'contact:', 'websiteorder:');
printSection('WEBSITEORDER', 'websiteorder:', '};return');

const navIdx = code.indexOf('className:"nav');
if (navIdx > -1) {
  out.push('=================== NAV / HEADER ===================');
  out.push(code.slice(Math.max(0, navIdx - 300), navIdx + 1200));
}

const footIdx = code.indexOf('className:"foot');
if (footIdx > -1) {
  out.push('=================== FOOTER ===================');
  out.push(code.slice(Math.max(0, footIdx - 100), footIdx + 1500));
}

fs.writeFileSync('inspect_sections_utf8.txt', out.join('\n\n'), 'utf8');
console.log('Saved inspect_sections_utf8.txt');

