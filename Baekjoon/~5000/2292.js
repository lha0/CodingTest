const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim()-'';

let mult = 1;
let range = 1;
while (range < input) {
  range += 6 * mult;
  mult++;
}

console.log(mult);