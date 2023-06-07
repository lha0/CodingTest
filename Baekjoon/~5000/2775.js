const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');;

let T = input.shift()-'';

let mem = Array.from(Array(15), () => new Array(15).fill(0));
function calculator(k, n) {
  if (k == 0) return n;
  if (n == 1)  return 1;
  
  if (mem[k][n] != 0) return mem[k][n];

  mem[k][n] = calculator(k-1, n) + calculator(k, n-1);
  
  return mem[k][n];
}

let answer = [];
for (let i = 0; i < T * 2; i+=2) {
  let k = input[i]-'';
  let n = input[i+1]-'';

  answer.push(calculator(k, n));
}
console.log(answer.join('\n'));