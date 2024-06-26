const fs = require("fs");
const input = fs
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split(" ")
    .map(Number);

let numOfWay = Array(100005).fill(0);
let dist = Array(100005).fill(0);

function bfs(start, goal) {
    let needVisit = [];

    needVisit.push(start);
    dist[start] = 0;
    numOfWay[start] = 1;

    if (start == goal) {
        return [0, 1];
    }

    while (needVisit.length != 0) {
        const node = needVisit.shift();

        if (dist[node - 1] == 0 && node - 1 >= 0) {
            needVisit.push(node - 1);
            dist[node - 1] = dist[node] + 1;
            numOfWay[node - 1] += numOfWay[node];
        } else if (dist[node - 1] == dist[node] + 1) {
            numOfWay[node - 1] += numOfWay[node];
        }
        if (dist[node + 1] == 0 && node + 1 <= 100000) {
            needVisit.push(node + 1);
            dist[node + 1] = dist[node] + 1;
            numOfWay[node + 1] += numOfWay[node];
        } else if (dist[node + 1] == dist[node] + 1) {
            numOfWay[node + 1] += numOfWay[node];
        }

        if (dist[node * 2] == 0 && node * 2 <= 100000) {
            needVisit.push(node * 2);
            dist[node * 2] = dist[node] + 1;
            numOfWay[node * 2] += numOfWay[node];
        } else if (dist[node * 2] == dist[node] + 1) {
            numOfWay[node * 2] += numOfWay[node];
        }
    }

    return [dist[goal], numOfWay[goal]];
}

let [ansDist, ansWay] = bfs(input[0], input[1]);
console.log(ansDist);
console.log(ansWay);
