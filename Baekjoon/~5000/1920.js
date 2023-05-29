const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let A = input[1].split(" ").map(v => +v)
let num = input[3].split(" ").map(v => +v);

A = A.sort((a, b) => a-b)
let answer = '';
num.forEach(v => {
  let min = 0;
  let max = A.length-1;
  let result = false;
      
  while(min <= max){
    let mid = parseInt((min+max)/2);

    if (A[mid] < v) min = mid + 1;
    else if (A[mid] > v) max = mid-1;
    else {result = true; break;}
  }

  result ? answer += '1\n' : answer += '0\n';
})
    
console.log(answer);