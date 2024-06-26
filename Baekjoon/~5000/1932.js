const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = input[0] - "";
const map = input.slice(1).map((v) => v.split(" ").map(Number));

for (let i = map.length - 1; i > 0; i--) {
    for (let j = 0; j < map[i].length - 1; j++) {
        map[i - 1][j] += Math.max(map[i][j], map[i][j + 1]);
    }
}

console.log(map[0][0]);
