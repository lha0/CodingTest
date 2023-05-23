const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim();

let num = input-'';
let answer = 2;

if (num == 1 || num == 0) return console.log(1);
else if (num == 2)  return console.log(2);
else {
  for (let i = 3; i <= num; i++) {
    answer *= i;
  }
}
return console.log(answer);