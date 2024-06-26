import sys
data = []
n = int(sys.stdin.readline())
for i in range(n):
    data.append(list(map(int,sys.stdin.readline().split())))

answer = []
for i in range(len(data)):
    turn = i+1
    sum = 0
    for j in range(len(data[i])):
        if data[i][j] % 2 == 1:
            sum += data[i][j]
    answer.append(f"#{turn} {sum}")

for i in range(len(answer)):
    print(answer[i])