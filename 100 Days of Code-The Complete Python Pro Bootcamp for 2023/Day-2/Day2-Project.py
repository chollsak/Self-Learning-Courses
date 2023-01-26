#Tip Calculator

def get_each_payment(p, t, s):
    while True:
        if p not in [10, 12, 15]:
            print("Please enter again")
            p = int(input("What percentage tip would you like to give? 10, 12, or 15? "))
        else:
            t = t/s  #24.9
            t = round(t + t*(p/100),1) #24.9 + 2.49
            return t

print("Welcome to the tip calculator.")
total = float(input("What is the total bill? $"))
split = int(input("How many people to split the bill? "))
percentage_of_tip = int(input("What percentage tip would you like to give? 10, 12, or 15? "))
print("Each person should pay: $%.1f" %get_each_payment(percentage_of_tip, total, split))