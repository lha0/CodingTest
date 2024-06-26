const fs = require("fs");
const [n, ...input] = fs
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");

const N = Number(n.split(" ")[0]);
const M = Number(n.split(" ")[1]);

const inputArr = input.map((item) => item.split(" ").map(Number));

function bfs(queue, graph) {
    let visited = Array.from(Array(N), () => new Array(M).fill(false));
    let needVisit = queue;
    let dx = [0, 0, 1, -1, -1, -1, 1, 1];
    let dy = [1, -1, 0, 0, -1, 1, -1, 1];

    while (needVisit.length != 0) {
        const [nodeX, nodeY] = needVisit.shift();

        for (let idx = 0; idx < 8; idx++) {
            nx = nodeX + dx[idx];
            ny = nodeY + dy[idx];

            if (nx < 0 || ny < 0 || nx >= N || ny >= M) continue;
            else if (graph[nx][ny] == 0) {
                needVisit.push([nx, ny]);
                graph[nx][ny] = graph[nodeX][nodeY] + 1;
            }
        }
    }
}

let queue = [];
for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
        const curShark = inputArr[i][j];
        if (curShark == 1) {
            queue.push([i, j]);
        }
    }
}

let graph = inputArr;
bfs(queue, graph);

const max = Math.max(...graph.flat());
console.log(max - 1);
