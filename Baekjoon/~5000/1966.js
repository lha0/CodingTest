const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let answer = '';
let TC = input[0]-'';
for (let i = 1; i <= TC*2; i+=2) {
  let count = 1;;
  let N = input[i].split(" ")[0]-'';
  let M = input[i].split(" ")[1]-'';
  let order = input[i+1].split(" ").map(v => +v);

  if (order.length == 1)  {answer += count + '\n'; continue;}
  let queue = [];
  for (let i = 0; i < order.length; i++) {
    queue.push(i);
  }
  let max = Math.max(...order);
  while (true) {
    if (order[0] < max) {
      order.push(order.shift());
      queue.push(queue.shift())
    } else if (order[0] == max) {
      if (queue[0] == M) {
        break;
      } else {
        order.shift();
        queue.shift();
        max = Math.max(...order);
        count++;
      }
    }
  }
  answer += count + '\n';
}
console.log(answer);