function solution(rectangle, characterX, characterY, itemX, itemY) {
    var answer = 0;

    let map = Array.from(Array(102).fill(0), () => Array(102).fill(0));
    let dx = [1, -1, 0, 0];
    let dy = [0, 0, 1, -1];

    rectangle = rectangle.map((current) =>
        current.map((point) => point * 2)
    ); // 주어진 점을 두배로 늘린다
    
    //테두리는 1로, 아니면 +=2
    for (let i = 0; i < rectangle.length; i++) {
        let [downX, downY, upX, upY] = rectangle[i];

        for (let ny = downY; ny <= upY; ny++) {
            for (let nx = downX; nx <= upX; nx++){
                if (nx == downX || nx == upX || ny == downY || ny == upY) {
                    if (map[nx][ny] === 1) continue; //이미 테두리인가
                    else {
                        map[nx][ny] += 1;
                    }
                } else {
                    map[nx][ny] += 2;
                }
            }
        }
    }

    characterX *= 2;
    characterY *= 2;
    itemX *= 2;
    itemY *= 2;

    const needVisit = [[characterX, characterY, 0]];
    map[characterX][characterY] += 100; //방문표시

    while (needVisit.length) {
        let [cx, cy, count] = needVisit.shift();
        //console.log(cx == itemX && cy == itemY)

        if (cx == itemX && cy == itemY) answer = count/2;

        for (let i = 0; i < 4; i++) {
            let nx = cx + dx[i];
            let ny = cy + dy[i];

            if (nx >= 0 && nx < 51 && ny >= 0 && ny < 51 && map[nx][ny] == 1) {
                map[nx][ny] += 100;
                needVisit.push([nx, ny, count + 1]);
            }
        }
    }
    //console.log(answer);
    return answer;
}

const rectangle = [
    [1, 1, 7, 4],
    [3, 2, 5, 5],
    [4, 3, 6, 9],
    [2, 6, 8, 8],
];
const characterX = 1;
const characterY = 3;
const itemX = 7;
const itemY = 8;

solution(rectangle, characterX, characterY, itemX, itemY);
