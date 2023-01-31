input_number = int(input())

if input_number < 0 or input_number > 100:
    print("Error, invalid range of number")
else:
    operator_selection = input()
    if operator_selection not in ['+', '-', '*', '/']:
        print("Error, invalid operator")
    else:    
        temp_list = list(str(input_number))
        temp_var1 = temp_list[1]
        temp_var2 = temp_list[0]
        seperated_num = int(temp_var1 + temp_var2)
        
        if operator_selection == '+':
            print("%d + %d = %d" %(input_number, seperated_num, (input_number + seperated_num)))
        elif operator_selection == '-':
            print("%d - %d = %d" %(input_number, seperated_num, (input_number - seperated_num)))
        elif operator_selection == '*':
            print("%d * %d = %d" %(input_number, seperated_num, (input_number * seperated_num)))        
        else:
            print("%d / %d = %d" %(input_number, seperated_num, (input_number / seperated_num)))