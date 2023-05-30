const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let num = input.slice(1).map(v => +v);

let answer = [];

for (let i = 0; i < num.length; i++) {
  if (num[i] == 0) answer.pop();
  else answer.push(num[i]);
}

console.log(answer.reduce((a, c) => a+c, 0));