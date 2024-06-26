function solution(operations) {
    var answer = [];
    let queue = [];
    let max = -Infinity;
    let min = Infinity;

    for (let i = 0; i < operations.length; i++) {
        const inst = operations[i].split(" ")[0];
        const num = operations[i].split(" ")[1] - "";

        if (i == 0) {
            max = num;
            min = num;
        }

        //console.log(operations[i]);
        //console.log("before", queue, max, min);

        if (inst == "I") {
            if (num >= max) {
                queue.unshift(num);
            } else if (num <= min) {
                queue.push(num);
            } else {
                for (let i = 0; i < queue.length; i++) {
                    if (num > queue[i]) {
                        let front = queue.slice(0, i);
                        let back = queue.slice(i);
                        front.push(num);
                        queue = front.concat(back);
                        break;
                    }
                }
            }
            max = queue[0];
            min = queue[queue.length - 1];
        } else {
            if (queue.length == 0) continue;
            if (num == 1) {
                queue.shift();
            } else {
                queue.pop();
            }
            if (queue.length == 0) {
                max = -Infinity;
                min = Infinity;
            } else {
                max = queue[0];
                min = queue[queue.length - 1];
            }
        }
        //console.log("after", queue, max, min);
    }

    if (queue.length == 0) answer = [0, 0];
    else answer = [queue[0], queue[queue.length - 1]];

    console.log(answer);

    return answer;
}

const operations = ["I 1", "I 2", "D 1", "D -1", "I 3", "I 4", "D 1"];

solution(operations);
