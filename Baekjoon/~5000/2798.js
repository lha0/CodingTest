const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let N = input[0].split(" ")[0]-'';
let M = input[0].split(" ")[1]-'';

let card = input[1].split(" ").map(v => +v);
let sum = 0;
let answer = 0;
let find = false;
for (let i = 0; i < card.length-2 && find != true; i++) {
  for (let j = i+1; j < card.length-1 && find != true; j++) {
    for (let k = j+1; k < card.length; k++) {
      sum = card[i] + card[j] + card[k];
      if (sum == M) {answer = sum; find = true; break;}
      else if (answer < sum && sum < M)  answer = sum;
      else continue;
    }
  }
}

console.log(answer)