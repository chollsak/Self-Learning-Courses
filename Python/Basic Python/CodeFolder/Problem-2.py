month31_list = [1,3,5,7,8,10,12]
month30_list = [4,6,9,11]
month29_list = 2

y1, m1, d1 = input("Enter y1, m1, d1: ").split()
y1 = int(y1)
m1 = int(m1)
d1 = int(d1)

y2, m2, d2 = input("Enter y2, m2, d2: ").split()
y2 = int(y2)
m2 = int(m2)
d2 = int(d2)

if y1 % 4 == 0 and (y1 % 100 != 0 or y1 % 400 == 0):
    leap1 = True
else:
    leap1 = False

if y2 % 4 == 0 and (y2 % 100 != 0 or y2 % 400 == 0):
    leap2 = True
else:
    leap2 = False

if m1 in month31_list and m2 in month31_list:
    if d1 > 31 or d2 > 31:
        print("Error")
    else:    
        if y1 > y2 :
            print(2)
        elif y1 == y2 and m1 > m2:
            print(2)
        elif y1 == y2 and m1 == m2 and d1 > d2:
            print(2)
        elif y1 == y2 and m1 == m2 and d1 == d2:
            print("equal")
        else:
            print(1)

elif m1 in month30_list and m2 in month30_list:
    if d1 > 30 or d2 > 30:
        print("Error")
    else:    
        if y1 > y2 :
            print(2)
        elif y1 == y2 and m1 > m2:
            print(2)
        elif y1 == y2 and m1 == m2 and d1 > d2:
            print(2)
       
elif m1 == month29_list or m2 == month29_list:
    if leap1 and d1 > 29:
        print("Error")
    elif leap2 and d2 > 29:
        print("Error")
    elif d1 > 28 or d2 > 28:
        print("Error")
    else:
        if y1 > y2 :
            print(2)
        elif y1 == y2 and m1 > m2:
            print(2)
        elif y1 == y2 and m1 == m2 and d1 > d2:
            print(2)
        elif y1 == y2 and m1 == m2 and d1 == d2:
            print("equal")
        else:
            print(1)
