const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let arr = input[1];
let v = input[2];

console.log(arr.split(' ').filter(e => e === v).length);