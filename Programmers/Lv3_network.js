function dfs(index, computers, visited) {
    visited[index] = true;
    for (let i = 0; i < computers.length; i++) {
        if (computers[index][i] && !visited[i]) dfs(i, computers, visited);
    }
}

function solution(n, computers) {
    var answer = 0;

    let visited = Array(computers.length).fill(false);
    for (let i = 0; i < computers.length; i++) {
        if (!visited[i]) {
            dfs(i, computers, visited);
            answer++;
        }
    }

    return answer;
}

let n = 3;
let computers = [
    [1, 1, 0],
    [1, 1, 0],
    [0, 0, 1],
];

let aanswer = solution(n, computers);

console.log(aanswer);
