const fs = require("fs");
const [n, ...input] = fs
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");

const N = Number(n.split(" ")[0]);

const timeArr = input.map((v) => v.split(" ").map(Number));
const objArr = [];
for (let [startTime, endTime] of timeArr) {
    objArr.push({ time: startTime, start: true });
    objArr.push({ time: endTime, start: false });
}

//시간이 같을 경우, false를 앞으로 정렬 (끝나는 시간), 아니면 시간순 정렬
objArr.sort((a, b) =>
    a.time === b.time ? a.start - b.start : a.time - b.time
);

let curLec = 0; //현재 사용 중인 강의실
let max = 0; //강의실 최댓값
for (let { start } of objArr) {
    start ? curLec++ : curLec--;
    max = max < curLec ? curLec : max;
}
console.log(max);
