function solution(bridge_length, weight, truck_weights) {
    var answer = 0;
    let ing = Array(bridge_length).fill(0);
    let time = 0;

    //맨 첫번째 트럭
    time++;
    ing.shift();
    ing.push(truck_weights.shift());
    let ingSum = ing.reduce((a, c) => a + c);

    while (ingSum > 0) {
        time++;
        ingSum -= ing.shift();
        if (ingSum + truck_weights[0] <= weight) {
            ing.push(truck_weights.shift());
        } else {
            ing.push(0);
        }
        ingSum = ing.reduce((a, c) => a + c);
    }

    console.log(time);
    return time;
}
const bridge_length = 2;
const weight = 10;
const truck_weights = [7, 4, 5, 6];

solution(bridge_length, weight, truck_weights);
