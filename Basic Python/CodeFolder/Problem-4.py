import math
num1, num2 = map(int, input().split())
operator_selection = int(input())
result = 0

# 1 = + 
# 2 = -
# 3 = x
# 4 = /
# 5 = %
# 6 = power
# 7 = avg

if operator_selection == 1:
    result = num1 + num2
    print("%.5f" %(result))
elif operator_selection == 2:
    result = num1 - num2
    print("%.5f" %(result))
elif operator_selection == 3:
    result = num1 * num2
    print("%.5f" %(result))
elif operator_selection == 4:
    result = num1 / num2
    print("%.5f" %(result))
elif operator_selection == 5:
    result = num1 % num2      
    print(int(result)) 
elif operator_selection == 6:
    result = math.pow(num1, num2)
    print("%.5f" %(result))
elif operator_selection == 7:
    result = (num1+num2)/2
    print("%.5f" %(result))
else:
    print("Error")    
