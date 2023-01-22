char = ord(input("Enter a character: ")[0])
passcode = int(input())

if char != 72 and passcode != 4567:
    print("safe locked")
else:
    if char == 72 and passcode != 4567:
        print("safe locked - change digit")
    elif char != 72 and passcode == 4567:
        print("safe locked - change char")
    else:
        print("safe unlocked")        
