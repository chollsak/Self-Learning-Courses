import math

# 🚨 Don't change the code below 👇
two_digit_number = input("Type a two digit number: ")
# 🚨 Don't change the code above 👆

####################################
#Write your code below this line 👇
tens = math.floor(int(two_digit_number) / 10)
digit = int(two_digit_number) % 10

print("%d" %(digit+tens))