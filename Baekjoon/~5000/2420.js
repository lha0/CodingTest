const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

console.log(Math.abs(input[0]-'' - input[1]-''))