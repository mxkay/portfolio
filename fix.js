const fs = require('fs');
const path = require('path');
const re = /"\//gi;
const re2 = /'\//gi;
const content = fs.readFileSync(path.join(__dirname, '/docs/index.html')).toString().replace(re, '"').replace(re2, '\'');

fs.writeFileSync(path.join(__dirname, '/docs/index.html'), content);
