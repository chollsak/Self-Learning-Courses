def get_Price(s, ap, ec):
    total_price = 0
    if s == 'S':
        total_price += 15
        if ap == 'Y':
            total_price += 2
            if ec == 'Y':
                total_price += 1
                return ("Your final bill is: $%d."%total_price) 
            elif ec == 'N':
                total_price += 0   
                return ("Your final bill is: $%d."%total_price) 
        elif ap == 'N':
            total_price += 0   
            if ec == 'Y':
                total_price += 1
                return ("Your final bill is: $%d."%total_price) 
            elif ec == 'N':
                total_price += 0    
                return ("Your final bill is: $%d."%total_price) 


    elif s == 'M':
        total_price += 20    
        if ap == 'Y':
            total_price += 3
            if ec == 'Y':
                total_price += 1
                return ("Your final bill is: $%d."%total_price) 
            elif ec == 'N':
                total_price += 0   
                return ("Your final bill is: $%d."%total_price) 
        elif ap == 'N':
            total_price += 0   
            if ec == 'Y':
                total_price += 1
                return ("Your final bill is: $%d."%total_price) 
            elif ec == 'N':
                total_price += 0     
                return ("Your final bill is: $%d."%total_price) 


    elif s == 'L':
        total_price += 25
        if ap == 'Y':
            total_price += 3
            if ec == 'Y':
                total_price += 1
                return ("Your final bill is: $%d."%total_price) 
            elif ec == 'N':
                total_price += 0    
                return ("Your final bill is: $%d."%total_price) 
        elif ap == 'N':
            total_price += 0   
            if ec == 'Y':
                total_price += 1
                return ("Your final bill is: $%d."%total_price) 
            elif ec == 'N':
                total_price += 0    
                return ("Your final bill is: $%d."%total_price)    

# 🚨 Don't change the code below 👇
print("Welcome to Python Pizza Deliveries!")
size = input("What size pizza do you want? S, M, or L ")
add_pepperoni = input("Do you want pepperoni? Y or N ")
extra_cheese = input("Do you want extra cheese? Y or N ")
# 🚨 Don't change the code above 👆

#Write your code below this line 👇
print(get_Price(size, add_pepperoni, extra_cheese))