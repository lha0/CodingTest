const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");
let N = input[0].split(" ")[0]-'';
let M = input[0].split(" ")[1]-'';

let answer = '';

for (let i = 0; i < N; i++) {
  let line1 = input[i+1].split(" ");
  let line2 = input[i+N+1].split(" ");

  for (let j = 0; j < M; j++) {
    answer += (line1[j]-'') +(line2[j]-'') + " ";
  }
  if (i !== N-1) answer += '\n'
}

console.log(answer)