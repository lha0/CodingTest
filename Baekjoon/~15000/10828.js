const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

const T = input.shift();
let stack = [];
let answer = [];

for (let i = 0; i < T; i++) {
  if (input[i].includes('push')) {
    stack.push(input[i].split(" ")[1]);
  }
  if (input[i].includes('top')) {
    answer.push(stack[stack.length-1] || -1);;
  }
  if (input[i].includes('pop')) {
    answer.push(stack.pop() || -1);
  }
  if (input[i].includes('size')) {
    answer.push(stack.length);
  }
  if (input[i].includes('empty')) {
    stack.length == 0 ? answer.push(1) : answer.push(0);
  }
}

console.log(answer.join('\n'))