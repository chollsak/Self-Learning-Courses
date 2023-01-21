input_num = int(input())
roman_list = ["I", "II", "III", "IV", "V","VI", "VII", "VIII", "IX", ] #roman number list

if input_num > 9:
    print("Error: Out of range")
elif input_num < 0:
    print("Error: Please input positive number")
else:
    if input_num == 1:
        print(roman_list[1-1])
    elif input_num == 2:
        print(roman_list[2-1])    
    elif input_num == 3:
        print(roman_list[3-1])
    elif input_num == 4:
        print(roman_list[4-1])        
    elif input_num == 5:
        print(roman_list[5-1])
    elif input_num == 6:
        print(roman_list[6-1])       
    elif input_num == 7:
        print(roman_list[7-1])     
    elif input_num == 8:
        print(roman_list[8-1])
    else:
        print(roman_list[9-1])                