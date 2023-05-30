const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

let M = input[0]-'';
let N = input[1]-'';
let answer = '';

for (let i = M; i <= N; i++) {
  let result = true;
  for (let j = 2; j <= parseInt(Math.sqrt(i)); j++){
    if (i % j == 0) {result = false; break;}
  }
  if (result && i !== 1) answer += i+ '\n';
}
console.log(answer);