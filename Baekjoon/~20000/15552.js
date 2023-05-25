const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let answer = '';
for (let i = 1; i < input.length; i++) {
  let A = input[i].split(" ")[0]-'';
  let B = input[i].split(" ")[1]-'';
  answer += (A + B) + '\n';
}
console.log(answer);