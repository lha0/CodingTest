//정수로 표현할 수 있으면 정수로  [6, 2] => 3 : arr[0] / arr[1]
//분수로 표현되면 기약분수로 : [2, 4] => [1, 2] :arr[1] / arr[1], arr[1] / arr[0]
//연산이 안되면 ERR : 0을 포함하고 있는 경우
//출력 시 공백 없이

//[1, 2] + [2, 3] => [7,6]
//[1, 2] * [2, 3] => [2, 6] => [1,3]
//[1, 2] * 10 => [10, 2] => [5, 1] => 5

const solution = (input) => {
    let answer = 0;
    console.log(JSON.parse(input[0].trim()));
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
