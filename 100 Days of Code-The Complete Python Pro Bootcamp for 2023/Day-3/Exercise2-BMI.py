def get_BMI(h, w):
    bmi = round(w / (h*h), 0)
    if bmi < 18.5:
        return ("Your BMI is %d, you are %s." %(bmi, "underweight"))
    elif 18.5 < bmi < 25:
        return ("Your BMI is %d, you have a %s." %(bmi, "normal weight"))
    elif 25 < bmi < 30:
        return ("Your BMI is %d, you are %s." %(bmi, "slightly overweight"))
    elif 30 < bmi < 35:
        return ("Your BMI is %d, you are %s." %(bmi, "obese"))
    else:
        return ("Your BMI is %d, you are %s." %(bmi, "clinically obese"))

# 🚨 Don't change the code below 👇
height = float(input("enter your height in m: "))
weight = float(input("enter your weight in kg: "))
# 🚨 Don't change the code above 👆

#Write your code below this line 👇
print(get_BMI(height, weight))