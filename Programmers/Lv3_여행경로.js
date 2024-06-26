function solution(tickets) {
    const answer = [];
    const goal = tickets.length + 1;
    const check = Array(tickets.length).fill(0);

    const dfs = (path) => {
        if (path.length === goal) {
            answer.push(path);
        } else {
            for (const i in tickets) {
                //방문한 티켓인지 아닌지 체크
                if (check[i] === 0) {
                    const [start, end] = tickets[i];
                    //가장 마지막에 방문한 공항이 출발하는 공항과 같은가?
                    if (path[path.length - 1] === start) {
                        check[i] = 1;
                        dfs([...path, end]);
                        check[i] = 0;
                    }
                }
            }
        }
    };

    dfs(["ICN"]);
    console.log(answer.sort()[0]);
    return answer.sort()[0];
}

const tickets = [
    ["ICN", "A"],
    ["ICN", "B"],
    ["B", "ICN"],
];
//입력: 답: ["ICN", "B", "ICN", "A"];

console.log(solution(tickets));
