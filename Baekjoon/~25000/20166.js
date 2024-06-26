const fs = require("fs");
const [n, ...input] = fs
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");

const N = Number(n.split(" ")[0]);
const M = Number(n.split(" ")[1]);
const K = Number(n.split(" ")[2]);

let board = input.slice(0, N);
let godLike = input.slice(N, input.length);
let dict = {};

function dfs(x, y, curStr, count) {
    if (count >= 5) return;

    if (dict[curStr]) dict[curStr]++;
    else dict[curStr] = 1;

    const dx = [0, 0, 1, -1, -1, -1, 1, 1];
    const dy = [1, -1, 0, 0, -1, 1, -1, 1];

    for (let i = 0; i < 8; i++) {
        let nx = dx[i] + x;
        let ny = dy[i] + y;

        if (nx < 0) {
            nx = N - 1; //0행에서 끝행으로 이동
        }
        if (ny < 0) {
            ny = M - 1; //0열에서 끝열로
        }
        if (nx >= N) {
            nx = 0; //끝행에서 0행으로
        }
        if (ny >= M) {
            ny = 0;
        }

        dfs(nx, ny, curStr + board[nx][ny], count + 1);
    }
}

for (let n = 0; n < N; n++) {
    for (let m = 0; m < M; m++) {
        dfs(n, m, board[n][m], 0);
    }
}

for (let i = 0; i < K; i++) {
    if (dict[godLike[i]]) console.log(dict[godLike[i]]);
    else console.log(0);
}
