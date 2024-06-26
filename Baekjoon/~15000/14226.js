const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();
const start = Number(input);

let visited = Array.from(Array(1001), () => Array(1001).fill(0));

function bfs(goal) {
    let needVisit = [];
    let screen = 1;
    let clip = 0;
    let time = 0;

    needVisit.push([screen, clip, time]);
    visited[screen][clip] = 1;

    while (needVisit.length != 0) {
        const [curScreen, curClip, curTime] = needVisit.shift();

        if (curScreen == goal) return curTime;
        if (curScreen <= 0 || curScreen > 1000) continue;

        if (!visited[curScreen][curScreen]) {
            needVisit.push([curScreen, curScreen, curTime + 1]);
            visited[curScreen][curScreen] = 1;
        }

        if (curClip && curScreen + curClip < 1001) {
            if (!visited[curScreen + curClip][curClip]) {
                needVisit.push([curScreen + curClip, curClip, curTime + 1]);
                visited[curScreen + curClip][curClip] = 1;
            }
        }

        if (!visited[curScreen - 1][curClip] && curScreen - 1 >= 0) {
            needVisit.push([curScreen - 1, curClip, curTime + 1]);
            visited[curScreen - 1][curClip] = 1;
        }
    }
}

let answer = bfs(start);
console.log(answer);
