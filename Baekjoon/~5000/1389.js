const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let [N, M] = input.shift().split(" ").map(Number);

function search(graph) {
    for (let i = 0; i < graph.length; i++) {
        for (let j = 0; j < graph.length; j++) {
            for (let k = 0; k < graph.length; k++) {
                graph[j][k] = Math.min(graph[j][k], graph[j][i] + graph[i][k]);
            }
        }
    }
    return graph;
}

var graph = Array.from(Array(N), ()=>Array(N).fill(Infinity));
let sameRC = 0;
for (let idx = 0; idx < M; idx++) {
    let x = input[idx].split(" ")[0]-'';
    let y = input[idx].split(" ")[1]-'';
    
    graph[x-1][y-1] = 1;
    graph[y-1][x-1] = 1;
    if (sameRC < N)    {graph[sameRC][sameRC] = 0; sameRC++;}
}

search(graph);

let answer = [];
for (let idx = 0; idx < graph.length; idx++) {
    answer.push(graph[idx].reduce((a, c) => a+c, 0));
}

let min = answer.findIndex((v, i) => v == Math.min(...answer))

console.log(min+1);