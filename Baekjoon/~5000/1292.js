const fs = require("fs");
const [start, end] = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

let order = [];

for (let i = 1; i <= 1000; i++) {
    let num = i;
    while (num != 0) {
        order.push(i);
        num--;
    }
}

let answer = order.slice(start-1, end);
console.log(answer.reduce((a, c) => a+c, 0));