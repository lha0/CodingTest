function solution(maps) {
    var answer = -1;

    let needVisit = [[0, 0, 1]];
    let dx = [0, 0, 1, -1];
    let dy = [1, -1, 0, 0];

    while (needVisit.length) {
        const [x, y, cnt] = needVisit.shift();
        if (x == maps.length - 1 && y == maps[0].length - 1) {
            answer = cnt;
            break;
        }

        for (let i = 0; i < 4; i++) {
            const nx = dx[i] + x;
            const ny = dy[i] + y;

            if (
                nx >= 0 &&
                ny >= 0 &&
                nx < maps.length &&
                ny < maps[0].length &&
                maps[nx][ny] == 1
            ) {
                needVisit = [...needVisit, [nx, ny, cnt + 1]];
                maps[nx][ny] = 0;
            }
        }
    }

    //console.log(answer);

    return answer;
}

const maps = [
    [1, 1, 1, 1, 1],
    [0, 0, 1, 0, 1],
    [0, 0, 1, 1, 1],
];
solution(maps);
