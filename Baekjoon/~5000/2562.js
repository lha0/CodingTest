const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let max = Math.max(...input);
let index = input.findIndex(v => v == max);
console.log(max);
console.log(index+1);