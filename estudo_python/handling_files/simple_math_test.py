txt_file = open('questions.txt', 'r')
content = [line.strip() for line in txt_file.readlines()]
txt_file.close()

score = 0
line_qtt = 0
for line in content:
    answer = input(f"{line.split('=')[0]}=")
    if answer == line.split('=')[1]:
        score += 1
    line_qtt += 1

result_file = open('result.txt', 'w')
result_file.write(f'Your final score is {score}/{line_qtt}.')