let fs = require("fs");
let input = fs
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split(" ")
    .map(Number);

let N = input.shift();

let visited = Array.from(Array(30), () => Array(30).fill(0)); //동서남북 : 우좌하상

let result = 0;
function dfs(x, y, count, percent) {
    if (visited[x][y] === 2) {
        result += percent;
        return;
    }

    if (count === N) return;

    const dx = [1, -1, 0, 0];
    const dy = [0, 0, -1, 1];

    for (let i = 0; i < dx.length; i++) {
        const nx = dx[i] + x;
        const ny = dy[i] + y;

        if (input[i] != 0) {
            const nextPercent = input[i] * 0.01;
            visited[nx][ny]++;
            dfs(nx, ny, count + 1, percent * nextPercent);
            visited[nx][ny]--;
        }
    }
}

visited[14][14] = 1;
dfs(14, 14, 0, 1);
console.log(1 - result);
