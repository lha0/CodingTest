const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim();

let answer = [...input].map(a => {
  if (a.charCodeAt(0) < 91) return a.toLowerCase();
  else return a.toUpperCase();
})
console.log(answer.join(''));