num1, num2, num3 = map(int, input().split(" "))

if num1 < num2 < num3:
    print("increasing")
elif num1 > num2 > num3:
    print("decreasing")
else:
    print("neither")