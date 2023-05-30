const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim();

let n = input-'';
let min = 5000;
let answer = 5000;
let maxFive = parseInt(n/5);

while (maxFive >= 0) {
  let copy = n;
  maxFive == 0 ? copy = n : copy -= 5 * maxFive;
  if (copy % 3 == 0) {
    min = maxFive + parseInt(copy/3);
    maxFive--;
  } else {
    maxFive--;
  }

  if (min < answer) answer = min;
  if (maxFive == -1 && min == 5000)  answer = -1; 
}

console.log(answer)