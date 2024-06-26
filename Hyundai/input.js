// 한 줄 입력
const readline = require("readline");

(async () => {
    let rl = readline.createInterface({ input: process.stdin });

    for await (const line of rl) {
        console.log("Hello Goorm! Your input is", line);
        rl.close();
    }

    process.exit();
})();

/*
const solution = (N, data) => {
  console.log(N);
  console.log(data);
};

const readline = require('readline');

(async () => {
  let rl = readline.createInterface({ input: process.stdin });
  let N = null;
  let count = 0;
  const data = [];

  for await (const line of rl) {
    if (!N) {
      N = +line;
    } else {
      data.push(line);
      // data.push(line.split(' ').map((el) => +el));
      // data.push(line.split('').map((el) => el));
      // data.push(line.split('').map((el) => +el));
      count += 1;
    }
    if (N === count) {
      rl.close();
    }
  }

  solution(N, data);
  process.exit();
})();
*/

//한 줄 입력
/* 
const solution = (data) => {
  console.log(data);
};

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let data = [];
rl.on('line', function (line) {
  data.push(line);
  // data = line.split('').map((el) => el);
  // data = line.split(' ').map((el) => el);
  // data = line.split('').map((el) => +el);

  rl.close();
}).on('close', function () {
  solution(data);
  process.exit();
});
*/

//여러줄 입력 (테케 넘버가 없는 경우)
/* 

const solution = (N, info, data) => {
  console.log(N);
  const [X, Y] = info;
  console.log(X, Y);
  console.log(data);
};

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let N = null;
let info = null;
let count = 0;
const data = [];

rl.on('line', function (line) {
  if (!N) { // N이 null이면
    N = +line;
  } else if (!info) { // N이 null이 아닌데, info가 null이면
    info = line.split(' ').map((el) => +el);
  } else { // N과 info가 null이 아니면
    data.push(line);
    // data.push(line.split('').map((el) => +el));
    // data.push(line.split('').map((el) => el));
    // data.push(line.split(' ').map((el) => +el));
    count += 1; // data를 입력받으면 count를 증가시켜주고
  }
  if (count === N) { // count가 N일때 rl.close()를 호출해준다.
    rl.close();
  }
}).on('close', function () { // rl.close()를 호출하면 이 콜백함수로 들어오고
  solution(N, info, data); // solution을 호출 한 후
  process.exit(); // 프로세스를 종료한다.
});

*/

//여러줄 with tc
/* 
const solution = (N, data) => {
  console.log(N);
  console.log(data);
};

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let T = null;
let N = null;
let info = null;
let countN = 0;
let countT = 0;
let data = [];

rl.on('line', function (line) {
  if (!T) {
    T = +line;
  } else if (!N) {
    N = +line;
  } else {
    data.push(line);
    // data.push(line.split('').map((el) => +el));
    // data.push(line.split('').map((el) => el));
    // data.push(line.split(' ').map((el) => +el));
    countN += 1; // data를 입력받으면 countN을 증가시켜주고
  }
  if (countN === N) { // N만큼 data를 잘 입력 받았으면
    solution(N, data); // solution을 호출하고
    N = null; // T, countT를 제외한 값들을 초기화해준다.
    info = null;
    countN = 0;
    data = [];

    countT += 1; // 그리고 테스트 케이스 하나를 통과했으니 countT를 1 올려준다.
  }
  if (countT === T) { // 입력받은 T 만큼 테스트 케이스를 통과하게되면
    rl.close(); // rl.close()를 호출하고
  }
}).on('close', function () {
  process.exit(); // 종료한다.
});
*/
