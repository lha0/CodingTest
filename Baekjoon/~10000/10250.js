const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const T = input[0]-'';
let answer = '';
for (let i = 1; i<= T; i++) {
  let H = input[i].split(" ")[0]-'';
  let W = input[i].split(" ")[1]-'';
  let N = input[i].split(" ")[2]-'';
  let floor = 0;
  let room = 0;

  if (N % H == 0) {
    floor = H + "";
    room = parseInt(N/H) + "";
  } else {
    floor = N % H +"";
    room = parseInt(N / H) + 1 +"";
  }

  if (room < 10)  answer += floor+0+room + '\n';
  else answer += floor + room + '\n';
}
console.log(answer);