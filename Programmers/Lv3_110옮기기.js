function solution(s) {
    var answer = [];

    for (let i = 0; i < s.length; i++) {
        const cur = s[i];
        const stack = [];
        let str = "";

        for (let j = 0; j < cur.length; j++) {
            if (stack.length > 1) {
                let mid = stack.pop();
                let first = stack.pop();
                if (first + mid + cur[j] == "110") str += "110";
                else {
                    stack.push(first);
                    stack.push(mid);
                    stack.push(cur[j]);
                }
            } else {
                stack.push(cur[j]);
            }
        }

        let cutStr = stack.join("");
        let lastIndexof0 = cutStr.lastIndexOf("0");
        if (lastIndexof0 == -1) {
            //0이 없음
            answer.push(str + cutStr);
        } else {
            answer.push(
                cutStr.slice(0, lastIndexof0 + 1) +
                    str +
                    cutStr.slice(lastIndexof0 + 1)
            );
        }
    }
    return answer;
}

const s = ["1110", "100111100", "0111111010"];

solution(s);
