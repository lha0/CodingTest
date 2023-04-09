function solution(s) {
    let answer = '';
    let space = s.length + 1;
    for (let i = 0; i < s.length; i++) {
        if (i === 0)    answer += s[0].toUpperCase();
        else if (i-1 === space)    answer += s[i].toUpperCase();
        else answer += s[i].toLowerCase();
        
        if (s[i] === " ") space = i;       
        
    }
    return answer;
}

