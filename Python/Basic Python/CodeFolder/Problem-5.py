def check_range(x):
    roman_number = ["I", "II", "III", "IV", "V","VI", "VII", "VIII", "IX" ]
    if x > 9:
        print("Error: Out of range")
    elif x < 1:
        print("Error: Please input positive number")
    else:
        print(roman_number[x-1])

input_number = int(input())
check_range(input_number)