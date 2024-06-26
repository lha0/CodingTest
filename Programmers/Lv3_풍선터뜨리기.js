function solution(a) {
    var answer = 0;

    //각 인덱스별로 나보다 왼쪽에서 작은값, 오른쪽에서 작은값에 대한 리스트 따로 구현
    //마지막에 왼쪽, 오른쪽, 원래 a 리스트 세개 비교하면서 정답 ++
    let leftArr = Array(a.length).fill(0);
    let rightArr = Array(a.length).fill(0);

    leftArr[0] = a[0];
    rightArr[a.length - 1] = a[a.length - 1];

    for (let i = 1; i < a.length; i++) {
        leftArr[i] = Math.min(leftArr[i - 1], a[i]);
    }

    for (let i = a.length - 2; i >= 0; i--) {
        rightArr[i] = Math.min(rightArr[i + 1], a[i]);
    }

    for (let i = 0; i < a.length; i++) {
        if (a[i] > leftArr[i] && a[i] > rightArr[i]) continue;
        else answer++;
    }
    return answer;
}

const a = [-16, 27, 65, -2, 58, -92, -71, -68, -61, -33];
console.log(solution(a));
