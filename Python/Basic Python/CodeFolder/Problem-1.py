unit = int(input("Unit: "))
price = int(input("Price/Unit: "))
member = input("Are you member?[y/n]: ")
isMember = ["y", "n"]

discount = 0
total = unit * price
amount = 0

if member == isMember[0]:
    if total <= 500:
        discount = (10/100) * total
        amount = total - discount
    elif total > 500 and total< 1000: 
        discount = (15/100) * total
        amount = total - discount
    elif total > 1000:
        discount = (20/100) * total
        amount = total - discount

elif member == isMember[1]:
    if total <= 500 :
        discount = (5/100) * total
        amount = total - discount
    elif total > 500 and total < 1000:
        discount = (10/100) * total
        amount = total - discount
    elif total > 1000:        
        discount = (15/100) * total
        amount = total - discount

print("Total %.2f" %(total))
print("Discount %.2f" %(discount))
print("Amount %.2f" %(amount))