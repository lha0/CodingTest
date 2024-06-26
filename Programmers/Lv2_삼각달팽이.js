function solution(n) {
    var answer = [];

    let fill = Array.from(Array(n), () => Array(n).fill(0));

    let end = 0;
    for (let i = n; i >= 1; i--) {
        end += i;
    }

    let numFill = 1;
    let side = 0;
    let i = 0;
    let j = 0;
    let loop = true;
    let times = 0;

    while (loop) {
        times++;

        if (side % 3 == 0) {
            if (fill[i][j] != 0) {
                loop = false;
                break;
            }

            fill[i][j] = numFill;

            if (times == n) {
                side++;
                j++;
                times = 0;
                n--;
            } else {
                i++;
            }
        } else if (side % 3 == 1) {
            if (fill[i][j] != 0) {
                loop = false;
                break;
            }
            fill[i][j] = numFill;

            if (times == n) {
                side++;
                i--;
                j--;
                times = 0;
                n--;
            } else {
                j++;
            }
        } else if (side % 3 == 2) {
            if (fill[i][j] != 0) {
                loop = false;
                break;
            }
            fill[i][j] = numFill;

            if (times == n) {
                side++;
                i++;
                times = 0;
                n--;
            } else {
                i--;
                j--;
            }
        }

        numFill++;
    }

    for (let i = 0; i < fill.length; i++) {
        let list = fill[i];
        list.map((v) => {
            if (v !== 0) answer.push(v);
        });
    }

    return answer;
}

solution(4);
