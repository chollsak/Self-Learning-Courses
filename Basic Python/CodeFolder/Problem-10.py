card = input("Enter the card symbol: ")

if len(card) == 2:
    if card[0] in ['2', '3', '4', '5', '6', '7', '8', '9', '10']:
        card_name = card[0] + " of "
    elif card[0] == "A":
        card_name = "Ace of "
    elif card[0] == "J":
        card_name = "Jack of "
    elif card[0] == "Q":
        card_name = "Queen of "
    elif card[0] == "K":
        card_name = "King of "
    else:
        card_name = "Invalid card symbol"    

    if card[1] == "D":
        card_name += "Diamonds"
    elif card[1] == "H":
        card_name += "Hearts"
    elif card[1] == "S":
        card_name += "Spades"
    elif card[1] == "C":
        card_name += "Clubs" 
    else:
        card_name = "Invalid card symbol"               

elif len(card) == 3:
    if int(card[0] + card[1]) == 10:
        card_name = card[0] + card[1] + " of "     

        if card[2] == "D":
            card_name += "Diamonds"
        elif card[2] == "H":
            card_name += "Hearts"
        elif card[2] == "S":
            card_name += "Spades"
        elif card[2] == "C":
            card_name += "Clubs"   
        else:
            card_name = "Invalid card symbol"   

    else:
        card_name = "Invalid card symbol"


print(card_name)                      