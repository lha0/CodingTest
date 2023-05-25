const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

input = input.map(a => a-'');

let answer = '';
for (let i = 1; i <= 30; i++) {
  !(input.includes(i)) ? answer += i + '\n' : null;
}
console.log(answer);