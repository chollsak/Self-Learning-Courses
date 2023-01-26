# 🚨 Don't change the code below 👇
age = input("What is your current age? ")
# 🚨 Don't change the code above 👆

#Write your code below this line 👇
def get_Day(age):
    days = (90-age)*365
    return days

def get_Week(age):
    weeks = (90-age)*52
    return weeks

def get_Month(age):
    months = (90-age)*12
    return months

age = int(age)
print("You have %d days, %d weeks, and %d months left." %(get_Day(age), get_Week(age), get_Month(age)))
