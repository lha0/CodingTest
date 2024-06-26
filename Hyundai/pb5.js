//[2, 2] => [0, 1], [1, 0], [3, 0], [4, 1], [0, 3], [1, 4], [3, 4], [4, 3]
//[-2, -1], [-1, -2], [1, -2], [2, -1], [-2, 1], [-1, 2], [1, 2], [2, 1]

const dfs = (map, x, y, move) => {
    let dx = [-2, -1, 1, 2, -2, -1, 1, 2];
    let dy = [-1, -2, -2, -1, 1, 2, 2, 1];

    for (let idx = 0; idx < dx.length; idx++) {
        let nx = x + dx[idx];
        let ny = y + dy[idx];

        if (
            nx < 0 ||
            ny < 0 ||
            nx >= map.length ||
            ny >= map[0].length ||
            (nx == 0 && ny == 0) ||
            (map[nx][ny] > 0 && map[nx][ny] < move)
        )
            continue;
        else {
            map[nx][ny] = move + 1;
            dfs(map, nx, ny, move + 1);
        }
    }
    return;
};

const solution = (input) => {
    let [i, j] = input[0].split(" ").map((v) => +v);

    let map = Array.from(Array(i), () => new Array(j).fill(0));
    dfs(map, 0, 0, 0, 1);

    let findzero = 0;
    for (let x = 0; x < i; x++) {
        for (let y = 0; y < j; y++) {
            if (map[x][y] == 0) findzero++;
        }
    }

    let TorF = "F";
    if (findzero == 1) TorF = "T";

    let maxNum = Math.max(...map.flat());

    console.log(TorF + maxNum);
};

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
    input.push(line.trim());
}).on("close", function () {
    solution(input);
    process.exit();
});
