const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

let A = input[0] - '';
let B = input[1] - '';
A == B ? console.log("==") : (A > B ? console.log(">") : console.log("<")) ;