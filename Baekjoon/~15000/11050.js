const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(" ");

const N = input[0];
const K = input[1];

function factorial(n) {
  if (n == 0 || n == 1) return 1;
  else return n * factorial(n-1);
}

console.log(factorial(N) / (factorial(N-K) * factorial(K)));