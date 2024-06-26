function bfs(start, end, dict) {
    let needVisit = [];
    let visited = [];
    let arr = [];

    needVisit.push(start);

    while (needVisit.length != 0) {
        const cur = needVisit.shift();

        if (cur == end) continue;
        else arr.push(cur);

        if (!visited.includes(cur)) {
            visited.push(cur);
            needVisit = [...needVisit, ...dict[cur]];
        }
    }

    let returnArr = new Set(arr);
    return [...returnArr];
}
function solution(n, wires) {
    var answer = -1;
    let dict = {};
    wires.forEach((v) => {
        if (!dict[v[0]]) dict[v[0]] = [];
        if (!dict[v[1]]) dict[v[1]] = [];
        dict[v[0]].push(v[1]);
        dict[v[1]].push(v[0]);
    });

    let min = 100001;
    wires.forEach((v) => {
        let firstArr = [];
        let secondArr = [];
        let sub = 0;

        let start = v[0];
        let end = v[1];

        firstArr = bfs(start, end, dict);
        secondArr = bfs(end, start, dict);

        sub = firstArr.length - secondArr.length;
        sub = sub < 0 ? -sub : sub;
        min = min > sub ? sub : min;

        console.log(min);
    });
    answer = min;
    return answer;
}

const n = 9;
const wires = [
    [1, 3],
    [2, 3],
    [3, 4],
    [4, 5],
    [4, 6],
    [4, 7],
    [7, 8],
    [7, 9],
];
solution(n, wires);
