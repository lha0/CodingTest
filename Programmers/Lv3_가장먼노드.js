function solution(n, edge) {
    var answer = 0;

    let dict = { 0: 0 };
    for (let i = 0; i < edge.length; i++) {
        let [start, end] = edge[i];
        if (dict[start]) dict[start]["node"].push(end);
        else dict[start] = { node: [end], state: false };

        if (dict[end]) dict[end]["node"].push(start);
        else dict[end] = { node: [start], state: false };
    }
    let needVisit = [[1, 0]];
    let visited = [];
    let counted = Array(n + 1).fill(0);

    while (needVisit.length) {
        let [node, cnt] = needVisit.shift();
        if (!visited.includes(node)) {
            visited.push(node);
            cnt++;

            for (let j = 0; j < dict[node]["node"].length; j++) {
                needVisit.push([dict[node]["node"][j], cnt]);

                if (!dict[node]["state"]) {
                    counted[node] += cnt;
                }
                dict[node]["state"] = true;
            }
        }
    }

    let max = Math.max(...counted);
    counted.forEach((v) => (v == max ? answer++ : (answer += 0)));
    return answer;
}

solution(6, [
    [3, 6],
    [4, 3],
    [3, 2],
    [1, 3],
    [1, 2],
    [2, 4],
    [5, 2],
]);
