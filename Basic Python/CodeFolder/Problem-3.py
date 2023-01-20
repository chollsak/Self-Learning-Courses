original_string = input()
new_string = ""
count = 1
for i in range(1, len(original_string)):
    if original_string[i] == original_string[i-1]:
        count += 1
    else:
        new_string += str(count) + original_string[i-1]
        count = 1
new_string += str(count) + original_string[-1]
print(new_string)
