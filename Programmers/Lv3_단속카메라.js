function solution(routes) {
    var answer = [];

    routes.sort((a, b) => {
        if (a[1] === b[1]) {
            return a[0] - b[0];
        } else {
            return a[1] - b[1];
        }
    });

    console.log(routes);

    for (let i = 0; i < routes.length; i++) {
        if (i == 0) answer.push(routes[i][1]);
        else {
            let find = false;
            for (let j = 0; j < answer.length; j++) {
                let curCCTV = answer[j];

                if (routes[i][0] > curCCTV) {
                    find = false;
                    continue;
                } else {
                    find = true;
                    break;
                }
            }
            if (!find) answer.push(routes[i][1]);
        }
    }
    console.log(answer);

    return answer.length;
}

solution([
    [-20, -15],
    [-14, -5],
    [-18, -13],
    [-5, -3],
]);
