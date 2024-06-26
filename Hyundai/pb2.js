//encrypt secretword 3 helloworld => cspkfcgzin
//decrypt secretword 3 cspkfcgzin => helloworld

const solution = (input) => {
    let [order, key, rotate, message] = input[0].split(" ");
    key = key.repeat(3);
    //암호화
    //1. key를 숫자로 변환
    //2. message를 숫자로 변환
    //3. 두 개 더하기
    //4. 더한 값을 rotate , rotate가 양수면 왼쪽, 음수면 오른쪽
    //5. 숫자를 다시 알파벳으로
    if (order == "encrypt") {
        //1, 2
        let keyToNum = [];
        let mesToNum = [];
        for (let i = 0; i < message.length; i++) {
            keyToNum.push(key.charCodeAt(i) - 97);
            mesToNum.push(message.charCodeAt(i) - 97);
        }
        //3
        let sumArr = mesToNum.map((v, i) => {
            let sum = v + keyToNum[i];
            if (sum > 25) sum -= 26;

            return sum;
        });
        //[ 25,  8, 13, 2, 18, 15, 10,  5, 2,  6]
        //rotate 3 => [2, 18, 15, 10, 5, 2, 6, 25, 8, 13]
        let resultRotate = [];
        if (rotate >= 0) {
            let slice = sumArr.slice(0, rotate);
            let afterSlice = sumArr.slice(rotate);
            resultRotate = afterSlice.concat(slice);
        }
        //rotate -3 => [5, 2,  6, 25,  8, 13, 2, 18, 15, 10]
        else {
            let slice = sumArr.slice(-rotate);
            let afterSlice = sumArr.slice(0, sumArr.length + rotate);
            resultRotate = afterSlice.concat(slice);
        }

        let result = [];
        for (let i = 0; i < resultRotate.length; i++) {
            result.push(String.fromCharCode(resultRotate[i] + 97));
        }
        console.log(result.join(""));
    }

    //복호화
    //1. key를 숫자로 변환
    //2. message를 숫자로 변환
    //3. rotate가 양수면 오른쪽, 음수면 왼쪽
    //4. 두 개 빼기
    //5. 숫자를 다시 알파벳으로
    else {
        //1, 2
        let keyToNum = [];
        let mesToNum = [];
        for (let i = 0; i < message.length; i++) {
            keyToNum.push(key.charCodeAt(i) - 97);
            mesToNum.push(message.charCodeAt(i) - 97);
        }

        let resultRotate = [];
        if (rotate >= 0) {
            let slice = mesToNum.slice(-rotate);
            let afterSlice = mesToNum.slice(0, mesToNum.length - rotate);
            resultRotate = slice.concat(afterSlice);
        }
        //rotate -3 => [5, 2,  6, 25,  8, 13, 2, 18, 15, 10]
        else {
            let slice = mesToNum.slice(0, rotate);
            let afterSlice = mesToNum.slice(rotate);
            resultRotate = afterSlice.concat(slice);
        }

        //[ 25,  8, 13, 2, 18, 15, 10,  5, 2,  6] = [18,  4,  2, 17, 4, 19, 22, 14, 17, 3] + [7, 4, 11, 11, 14, 22, 4, 17, 11, 3]
        // 17 + 11 = 28 - 26 = 2 -15 + 26 = 11
        let minArr = resultRotate.map((v, i) => {
            let min = v - keyToNum[i];
            if (min < 0) min += 26;
            return min;
        });

        let result = [];
        for (let i = 0; i < minArr.length; i++) {
            result.push(String.fromCharCode(minArr[i] + 97));
        }
        console.log(result.join(""));
    }
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
