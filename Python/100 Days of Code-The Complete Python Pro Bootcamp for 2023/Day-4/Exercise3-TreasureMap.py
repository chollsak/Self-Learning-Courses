import math
# 🚨 Don't change the code below 👇
row1 = ["⬜️","️⬜️","️⬜️"]
row2 = ["⬜️","⬜️","️⬜️"]
row3 = ["⬜️️","⬜️️","⬜️️"]
map = [row1, row2, row3]
print(f"{row1}\n{row2}\n{row3}")
position = input("Where do you want to put the treasure? ")
# 🚨 Don't change the code above 👆

#Write your code below this row 👇
position = int(position)
coluum = math.floor((position/10))
row = (position%10) 

if row == 1:
        map[0][coluum-1] = 'X'
elif row == 2:
        map[1][coluum - 1] = 'X'
elif row == 3:
        map[2][coluum - 1] = 'X'                

#Write your code above this row 👆

# 🚨 Don't change the code below 👇
print(f"{row1}\n{row2}\n{row3}")
