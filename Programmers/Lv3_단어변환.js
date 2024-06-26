function checkDiffer(a, b) {
    let count = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) count++;
    }
    return count;
}

function solution(begin, target, words) {
    var answer = [];
    let check = Array(words.length).fill(0);
    if (!words.includes(target)) return 0;
    dfs([begin]);

    function dfs(path) {
        if (path[path.length - 1] == target) {
            answer.push(path);
        } else {
            for (const i in words) {
                if (check[i] == 0) {
                    const cur = words[i];

                    if (checkDiffer(path[path.length - 1], cur) == 1) {
                        check[i] = 1;
                        dfs([...path, cur]);
                        check[i] = 0;
                    }
                }
            }
        }
    }
    let minLen = 100;

    for (let i = 0; i < answer.length; i++) {
        answer[i].length < minLen ? (minLen = answer[i].length) : minLen;
    }

    return minLen - 1;
}

const begin = "hit";
const target = "cog";
const words = ["hot", "dot", "dog", "lot", "log", "cog"];
//const words = ["hot", "dot", "dog", "lot", "log"]

solution(begin, target, words);
