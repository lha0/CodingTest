function solution(s) {
    var answer = [];
    let len = 0;
    let countZero = 0;
    let countTime = 0;
    while (s !== "1") {
        while (s.includes("0")) {
            let idx = s.lastIndexOf("0");
            s = s.substr(0, idx) + s.substr(idx + 1);
            countZero++;
        }

        len = s.length;
        s = len.toString(2);
        countTime++;
    }

    answer.push(countTime, countZero);

    //console.log(answer);
    return answer;
}

const s = "110010101001";
solution(s);
