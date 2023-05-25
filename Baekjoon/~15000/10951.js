const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

for (let i = 0; i < input.length; i++) {
  let A = input[i].split(" ")[0]-'';
  let B = input[i].split(" ")[1]-'';
  console.log(A+B);
}