function solution(a, edges) {
    var answer = -2;

    let dict = {};
    for (let i = 0; i < edges.length; i++) {
        let [n1, n2] = edges[i];

        if (dict[n1]) dict[n1].push(n2);
        else dict[n1] = [n2];

        if (dict[n2]) dict[n2].push(n1);
        else dict[n2] = [n1];
    }

    let needVisit = [0];
    let visited = [];
    let weight = 0n;
    let other = 0;

    while (needVisit.length) {
        let node = needVisit.shift();

        if (visited.includes(node)) {
            weight += BigInt(Math.abs(a[node]));
            other += a[node];
            continue;
        }

        needVisit.unshift(node);
        visited.push(node);

        for (next of dict[node]) {
            if (!visited.includes(next)) {
                needVisit.unshift(next);
            }
        }
    }
    answer = a[0] + other;
    console.log(a[0], other, weight);
    return answer == 0 ? weight - 1 : -1;
}

const a = [-5, 0, 2, 1, 2];
const edges = [
    [0, 1],
    [3, 4],
    [2, 3],
    [0, 3],
];
solution(a, edges);
