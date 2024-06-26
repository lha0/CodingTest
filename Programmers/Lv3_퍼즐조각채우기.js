function makeOrigin(block) {
    let minX = 1000;
    let minY = 1000;
    block.forEach((v) => {
        if (v[0] < minX) minX = v[0];
        if (v[1] < minY) minY = v[1];
    });

    block.forEach((v) => {
        v[0] = v[0] - minX;
        v[1] = v[1] - minY;
    });

    return block.sort();
}

function Rotate(block) {
    let maxX = Math.max(...block.map((v) => v[0]));
    let maxY = Math.max(...block.map((v) => v[1]));
    let maxIdx = maxX > maxY ? maxX : maxY;

    block.forEach((v) => {
        let originX = v[0];
        let originY = v[1];

        v[0] = originY;
        v[1] = maxIdx - originX;
    });
    return makeOrigin(block);
}

function bfs(x, y, oneBlock, game_board, end) {
    let needVisit = [[x, y]];

    let dx = [0, 0, 1, -1];
    let dy = [1, -1, 0, 0];

    while (needVisit.length > 0) {
        let [i, j] = needVisit.shift();
        oneBlock.push([i, j]);

        for (let idx = 0; idx < 4; idx++) {
            let nx = dx[idx] + i;
            let ny = dy[idx] + j;
            if (
                nx < 0 ||
                ny < 0 ||
                nx >= game_board.length ||
                ny >= game_board.length
            )
                continue;
            else if (game_board[nx][ny] == end) continue;
            else {
                needVisit.push([nx, ny]);
                game_board[nx][ny] = end;
            }
        }
    }

    return makeOrigin(oneBlock);
}

function solution(game_board, table) {
    var answer = 0;

    //게임보드 빈칸
    let gameBlank = [];
    for (let i = 0; i < game_board.length; i++) {
        for (let j = 0; j < game_board[0].length; j++) {
            if (game_board[i][j] == 0) {
                game_board[i][j] = 1;
                gameBlank.push(bfs(i, j, [], game_board, 1));
            }
        }
    }
    console.log(gameBlank);

    //table 빈칸
    let tableBlank = [];
    for (let i = 0; i < table.length; i++) {
        for (let j = 0; j < table[0].length; j++) {
            if (table[i][j] == 1) {
                table[i][j] = 0;
                tableBlank.push(bfs(i, j, [], table, 0));
            }
        }
    }
    //두 빈칸 비교
    for (let i = 0; i < gameBlank.length; i++) {
        let curBlank = gameBlank[i];

        for (let j = 0; j < tableBlank.length; j++) {
            let curBlock = tableBlank[j];

            let find = false;
            for (let r = 0; r < 4; r++) {
                let rotBlock = Rotate(curBlock);

                if (JSON.stringify(curBlank) === JSON.stringify(rotBlock)) {
                    answer += rotBlock.length;
                    tableBlank.splice(j, 1);
                    find = true;
                    break;
                }
                curBlock = rotBlock;
            }
            if (find) break;
        }
    }
    return answer;
}

const game_board = [
    [1, 1, 0, 0, 1, 0],
    [0, 0, 1, 0, 1, 0],
    [0, 1, 1, 0, 0, 1],
    [1, 1, 0, 1, 1, 1],
    [1, 0, 0, 0, 1, 0],
    [0, 1, 1, 1, 0, 0],
];

const table = [
    [1, 0, 0, 1, 1, 0],
    [1, 0, 1, 0, 1, 0],
    [0, 1, 1, 0, 1, 1],
    [0, 0, 1, 0, 0, 0],
    [1, 1, 0, 1, 1, 0],
    [0, 1, 0, 0, 0, 0],
];

console.log(solution(game_board, table));
