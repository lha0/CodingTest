const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim();

let answer = '';

for (i = 1; i <= input-''; i++, answer+='\n'){
  answer += i;
}

console.log(answer);