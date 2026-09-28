const fs = require('fs');
const code = fs.readFileSync('ref_page.js', 'utf8');

const regex = /"section"|'section'/g;
let m;
let count = 0;
while ((m = regex.exec(code)) !== null) {
  count++;
  console.log('Match', count, 'at', m.index);
  console.log(code.slice(Math.max(0, m.index - 50), Math.min(code.length, m.index + 200)));
  console.log('---');
  if (count > 25) break;
}
