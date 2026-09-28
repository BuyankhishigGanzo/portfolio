const fs = require('fs');
const code = fs.readFileSync('app_page-accaa875d9d8d5f6.js', 'utf8');
const idx = code.indexOf('className:"hero');
console.log(code.slice(idx - 50, idx + 1200));
