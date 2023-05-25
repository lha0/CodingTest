const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

let answer = ((input[0]*input[0]) + (input[1]*input[1]) + (input[2]*input[2]) + (input[3]*input[3]) + (input[4]*input[4])) % 10;
console.log(answer);