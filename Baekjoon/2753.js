const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

let year = input-'';
(year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)) ? console.log(1) : console.log(0);