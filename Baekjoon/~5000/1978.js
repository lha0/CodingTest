const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let nums = input[1].split(" ").map(v => +v);
let answer = 0;
for (let i = 0; i < nums.length; i++) {
  let result = true;
  if (nums[i] == 1) result = false;
  else {
    for (let j = 2; j <= Math.sqrt(nums[i]); j++) {
      if (nums[i] % j == 0) {result = false; break;}
    }
  }  
  if (result) answer ++;
}

console.log(answer);