const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let arr = input.map(v => +v).slice(1).sort((a, b)=>a-b);
let answer = '';
arr.map(v => answer += v + '\n');
console.log(answer)