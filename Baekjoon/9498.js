const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim();

let score = input - '';

score >= 90 ? console.log("A") : 
  (score >= 80 ? console.log("B") : 
  (score >= 70 ? console.log("C") : 
  (score >= 60 ? console.log("D") : 
  console.log("F")))) ;