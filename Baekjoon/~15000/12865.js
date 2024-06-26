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
