def isLeapYear(y):
    if y % 4 == 0:
        return "Leap year"
    elif y % 100 == 0:
        if y % 400 == 0:
            return "Leap year."
        else:
            return "Not leap year."
    else:
        return "Not leap year."
    
# 🚨 Don't change the code below 👇
year = int(input("Which year do you want to check? "))
# 🚨 Don't change the code above 👆

#Write your code below this line 👇
print(isLeapYear(year))


