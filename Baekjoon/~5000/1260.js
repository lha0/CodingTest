const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');;

let [N, M, V] = input.shift().split(" ").map(Number);

let graph = {};
for (let i = 0; i < M; i++) {
    let first = input[i].split(" ")[0]-'';
    let second = input[i].split(" ")[1]-'';
    if (!graph[first])    graph[first] = [];
    if (!graph[second])  graph[second] = [];

    graph[first].push(second);
    graph[second].push(first);

    graph[first].sort((a, b) => a-b);
    graph[second].sort((a, b) => a-b);
}

const DFS = (graph, V) => {
    let visited = [];
    let needVisit = [];

    needVisit.push(V);
    while (needVisit.length != 0) {
        let node = needVisit.shift();
        if (!visited.includes(node)) {
            visited.push(node);
            if (graph[node]) needVisit = [...graph[node], ...needVisit];
            else needVisit = [...needVisit];
        }
    }
    return visited;
}

const BFS = (graph, V) => {
    let visited = [];
    let needVisit = [];

    needVisit.push(V);
    while (needVisit.length != 0) {
        let node = needVisit.shift();
        if (!visited.includes(node)) {
            visited.push(node); 
            if (graph[node]) needVisit = [...needVisit, ...graph[node]];
            else needVisit = [...needVisit] 
        }
    }
    return visited;
}

let dfs = DFS(graph, V).join(" ");
let bfs = BFS(graph, V).join(" ");

console.log(dfs);
console.log(bfs);