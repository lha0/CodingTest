const fs = require("fs");
const [N, K] = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

var result = 0;
let visitedNode = Array(100001);

function bfs(n) {
    let needVisit = [];

    needVisit.push([n, 0]);
    visitedNode[n] = true;

    while (needVisit.length != 0) {
        let [curNode, curTime] = needVisit.shift();

        if (curNode == K) {
            result = curTime;
            break;
        }

        if (!visitedNode[curNode-1] && curNode-1 >= 0 && curNode-1 <= 100000) {
            visitedNode[curNode-1] = true;
            needVisit.push([curNode-1, curTime+1]);
        }
        if (!visitedNode[curNode+1] && curNode+1 >= 0 && curNode+1 <= 100000) {
            visitedNode[curNode+1] = true;
            needVisit.push([curNode+1, curTime+1]);
        }
        if (!visitedNode[curNode*2] && curNode*2 >= 0 && curNode*2 <= 100000) {
            visitedNode[curNode*2] = true;
            needVisit.push([curNode*2, curTime+1]);
        }
    }
    return result;
}

console.log(bfs(N));