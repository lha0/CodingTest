const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = input[0] - "";
const map = input.slice(1).map((v) => v.split("").map(Number));
let visited = Array.from(new Array(n), () => Array(n).fill(false));

function bfs(i, j, count) {
    let needVisit = [[i, j]];
    const dx = [0, 0, 1, -1];
    const dy = [1, -1, 0, 0];

    while (needVisit.length != 0) {
        let [x, y] = needVisit.shift();

        for (let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];

            if (
                nx < 0 ||
                ny < 0 ||
                nx >= map.length ||
                ny >= map.length ||
                map[nx][ny] == 0
            ) {
                continue;
            } else if (!visited[nx][ny]) {
                visited[nx][ny] = true;
                count++;
                needVisit = [...needVisit, [nx, ny]];
            }
        }
    }
    return count;
}

let apart = 0;
let num = [];
for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[i].length; j++) {
        if (map[i][j] == 1 && !visited[i][j]) {
            visited[i][j] = true;
            let numberApart = bfs(i, j, 1);
            apart++;
            num.push(numberApart);
        }
    }
}

num = num.sort((a, b) => a - b);
console.log(apart);
num.forEach((v) => console.log(v));
