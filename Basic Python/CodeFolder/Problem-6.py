num1, num2, num3 = map(int, input().split())

if num1 == num2  and num2 == num3:
    print("all the same")
elif num1 != num2 and num2 != num3 and num3 != num1:
    print("all different")
else:
    print("neither")