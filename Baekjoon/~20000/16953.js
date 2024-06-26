const fs = require("fs");
const input = fs
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split(" ")
    .map(Number);

let result = 0;
const dfs = (start, goal, count) => {
    if (start === goal) result = count + 1;
    else {
        if (start * 2 <= goal) {
            dfs(start * 2, goal, count + 1);
        }
        if (start * 10 + 1 <= goal) {
            dfs(start * 10 + 1, goal, count + 1);
        }
    }
    return result;
};

let answer = dfs(input[0], input[1], 0);
answer === 0 ? (answer = -1) : answer;
console.log(answer);
