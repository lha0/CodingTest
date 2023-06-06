const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim()-'';

let answer = 0; 
for (let i = 1; i < input; i++) {
  let num = i;
  let sum = (i+'').split('').map(v => +v).reduce((a, c) => a+c,0) + num;
  if (sum == input) { answer = num; break;}
}

console.log(answer);