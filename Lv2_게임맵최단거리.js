function solution(maps) {
    let n = maps.length-1;
    let m = maps[0].length-1;
    
    let px = [0, 0, 1, -1];
    let py = [1, -1, 0, 0];
    let flag = [0, 0];
    
    let push = true;
    while (push) {
        push = false;
        let x = flag[0];
        let y = flag[1];
        
        for (let i = 0; i < 4; i++) {
            let cx = px[i];
            let cy = py[i];
            
            if (x+cx >= 0 && x+cx <= n && y+cy >= 0 && y+cy <= m && maps[x + cx][y + cy] === 1) {
                maps[x + cx][y + cy] = maps[x][y] + 1;
                flag = [x + cx, y + cy];
                maps[x][y]++;
                push = true;
                break;
            }
        }
    }
    
    if (flag[0] === n && flag[1] === m) return maps[n][m];
    return -1;
    
}