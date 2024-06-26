//vscode에서 풀 때는 'example.txt' , 백준에 올릴 때는 /dev/stdin
//*

//물건 N개, 무게 W, 가치 V, 배낭 안에 최대 무게 K
/*
4 7    // N, K
6 13   // W, V
4 8
3 6
5 12

W <= K,
6 => 최대 가치 13
4+3 => 최대 가치 14
3+5 는 안됨

*/
const solution = (input) => {
    const [N, K] = input[0].split(" ").map((v) => +v);
    let stuff = input.slice(1).map((v) => v.split(" ").map((el) => +el));

    //N+1 * K+1
    const dp = Array.from(new Array(N + 1), () => new Array(K + 1).fill(0));

    for (let i = 1; i < N + 1; i++) {
        let [W, V] = stuff[i - 1];
        for (let j = 1; j < K + 1; j++) {
            if (j - W >= 0) {
                dp[i][j] = Math.max(dp[i - 1][j - W] + V, dp[i - 1][j]);
            } else {
                dp[i][j] = dp[i - 1][j];
            }
        }
    }

    console.log(dp[N][K]);
};

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
    input.push(line.trim());
}).on("close", function () {
    solution(input);
    process.exit();
});

/*/
/*
const combination = (arr, m) => {
    const result = [];
    if (m == 1) return arr.map((v) => [v]);
    arr.forEach((fixed, index, origin) => {
        const rest = origin.slice(index + 1);
        const back = combination(rest, m - 1);
        const attached = back.map((v) => [fixed, ...v]);
        result.push(...attached);
    });
    return result;
};

const solution = (input) => {
    let [N, K] = input[0].split(" ");
    let stuff = input.slice(1).map((v) => v.split(" ").map((el) => +el));
    let maxV = 0;

    for (let i = 1; i <= N; i++) {
        let comb = combination(stuff, i);

        comb.forEach((v) => {
            let sumV = 0;
            let sumW = 0;

            v.forEach((el) => {
                sumV += el[1];
                sumW += el[0];
            });

            if (sumW <= K) {
                maxV < sumV ? (maxV = sumV) : (maxV = maxV);
            }
        });
    }

    console.log(maxV);
};

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
    input.push(line.trim());
}).on("close", function () {
    solution(input);
    process.exit();
});
*/
