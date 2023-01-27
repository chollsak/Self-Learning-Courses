# 🚨 Don't change the code below 👇
student_heights = input("Input a list of student heights ").split()
for n in range(0, len(student_heights)):
  student_heights[n] = int(student_heights[n])
# 🚨 Don't change the code above 👆

#Write your code below this row 👇
def get_Average():
    count = 0
    sum = 0
    avg = 0
    for i in student_heights:
        count += 1
        sum += i
    avg = int(round(sum/count))
    return avg

print(get_Average())   