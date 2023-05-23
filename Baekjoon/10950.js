const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

for (let i = 1; i < input.length; i++) {
  let cur = input[i].split(" ");
  console.log((cur[0]-'')+(cur[1]-''));
}
