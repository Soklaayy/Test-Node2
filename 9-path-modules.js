const path = require('path');
console.log(path.sep);

const filpath = path.join('/content', 'subfolder', 'text.txt');
console.log(filpath);

const base = path.basename(filpath);
console.log(base);

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'text.txt');
console.log(absolute);