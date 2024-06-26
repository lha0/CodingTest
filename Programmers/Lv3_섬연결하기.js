function getParent(parent, x) {
    if (parent[x] === x) return x;
    else return (parent[x] = getParent(parent, parent[x]));
}

//두 요소 받아서 더 작은 값을 내 인덱스에 할당
function unionParent(parent, x, y) {
    let s1 = getParent(parent, x);
    let s2 = getParent(parent, y);

    if (s1 < s2) parent[s2] = s1;
    else parent[s1] = s2;
}

//두 값을 받아서 두개의 부모가 같은지 아닌지 판별
function findParent(parent, x, y) {
    let s1 = getParent(parent, x);
    let s2 = getParent(parent, y);
    if (s1 == s2) return true;
    else return false;
}

function solution(n, costs) {
    var answer = 0;
    costs = costs.sort((a, b) => a[2] - b[2]);
    //console.log(costs)

    let parent = [];
    for (let i = 0; i < n; i++) {
        parent[i] = i;
    }

    for (let i = 0; i < costs.length; i++) {
        let [n1, n2, c] = costs[i];
        if (!findParent(parent, n1, n2)) {
            answer += c;
            unionParent(parent, n1, n2);
        }
    }

    return answer;
}
