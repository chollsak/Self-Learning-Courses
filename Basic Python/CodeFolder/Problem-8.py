def my_function(isleapyear):
    if isleapyear < 1582:
        print("Invalid year, leap year calculation not applicable.")
    elif (isleapyear % 4 == 0 and isleapyear % 100 != 0) or (isleapyear % 400 == 0):
        return True
    else:
        return False

year = int(input("Enter the year: "))
if my_function(year) == True:
    print("%d is a leap year")
else:
    print("%d is not a leap year")