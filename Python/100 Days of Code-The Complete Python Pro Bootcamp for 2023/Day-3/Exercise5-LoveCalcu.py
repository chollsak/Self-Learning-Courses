def get_TrurLoveScore(n1,n2):
    n1 = n1.lower()
    n2 = n2.lower()
    combined_name = n1+n2
    t = combined_name.count('t')
    r = combined_name.count('r')
    u = combined_name.count('u')
    e = combined_name.count('e')
    first_digit = t + r + u + e

    l = combined_name.count('l')
    o = combined_name.count('o')
    v = combined_name.count('v')
    second_digit = l + o + v + e

    love_score = int(str(first_digit) + str(second_digit))

    if love_score < 10 or love_score > 90:
        return ("Your score is %d, you go together like coke and mentos." %(love_score))
    elif 40 < love_score < 50  :
        return ("Your score is %d, you are alright together." %love_score)
    else:
        return ("Your score is %d." %love_score)

# 🚨 Don't change the code below 👇
print("Welcome to the Love Calculator!")
name1 = input("What is your name? \n")
name2 = input("What is their name? \n")
# 🚨 Don't change the code above 👆

#Write your code below this line 👇
print(get_TrurLoveScore(name1, name2))
