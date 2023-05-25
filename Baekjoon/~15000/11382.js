const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

let A = input[0] - '';
let B = input[1] - '';
let C = input[2] - '';
console.log(A + B + C);