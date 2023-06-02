const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let index = 0;
let answer = '';
while (input.length-1 !== index) {
  let first = input[index].split(" ").map(v => +v)[0];
  let second = input[index].split(" ").map(v => +v)[1];
  let third = input[index].split(" ").map(v => +v)[2];
  let max = Math.max(first, second, third);
  let sum = 0;

  if (max == first) {
    if (first * first == (third * third) + (second * second)) answer += "right\n";
    else answer += "wrong\n";
  } else if (max == second) {
    if (second * second == (third * third) + (first * first)) answer += "right\n";
    else answer += "wrong\n";
  } else {
    if (third * third == (second * second) + (first * first)) answer += "right\n";
    else answer += "wrong\n";
  }
    
  index++;
}

console.log(answer)