const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim()-'';

let numFive = 0;
for (let i = 5; i <= input; i++) {
  if (i % 5 == 0)  numFive++;
  if (i % 25 == 0)  numFive++;
  if (i % 125 == 0) numFive++;
}
console.log(numFive);