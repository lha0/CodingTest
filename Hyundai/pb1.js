//1 2 3 => 321 + 123
// 2 9 10 21 24 => 9 24 2 21 10 + 10212249 = ~~

const solution = (input) => {
    let dataStr = input[0].split(" ");
    let temp = [...dataStr];
    let max = 0;
    let min = 0;
    let answer = -1;
    //최댓값
    //3배 해서 222 999 101010 212121 242424 앞에 세개 sort => 999 242 222 212 101
    let sortByMax = temp.sort(
        (a, b) => b.repeat(3).slice(0, 3) - "" - (a.repeat(3).slice(0, 3) - "")
    );
    max = sortByMax.join("") - "";
    //최솟값
    let sortByMin = temp.sort(
        (a, b) => a.repeat(3).slice(0, 3) - "" - b.repeat(3).slice(0, 3)
    );
    min = sortByMin.join("") - "";

    if (max + min > 0) answer = max + min;
    console.log(answer);
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
