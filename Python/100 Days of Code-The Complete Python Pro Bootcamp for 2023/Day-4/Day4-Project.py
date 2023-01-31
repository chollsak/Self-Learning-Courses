#Rock Paper Scissors

import random
result_list = ["""
    _______
---'   ____)
      (_____)
      (_____)
      (____)
---.__(___)
""", """
     _______
---'    ____)____
           ______)
          _______)
         _______)
---.__________)
""", """
    _______
---'   ____)____
          ______)
       __________)
      (____)
---.__(___)
"""]

def get_Result(player_chose):
    
    while True:
        if player_chose in [0, 1, 2]:
            print(result_list[player_chose])
            break
        
        else:
            print("Invalid number, please type again") 
            player_chose = int(input())

    computer_chose = random.choice([0,1,2])
    print("Computer chose:")
    if computer_chose == 0:
        print(result_list[0])
        if player_chose == 0:
            return ("Draw!")
        elif player_chose == 1:
            return ("You win!")
        else:
            return ("You lose!")

    elif computer_chose == 1:
        print(result_list[1])
        if player_chose == 0:
            return "You lose!"
        elif player_chose == 1:
            return "Draw!"
        else:
            return "You win!"

    else:
        print(result_list[2])
        if player_chose == 0:
            return "You win!"
        elif player_chose == 1:
            return "You lose!"
        else:
            return "Draw!"    

print("What do you choose? Type 0 for Rock, 1 for Paper or 2 for Scissors.")
print(get_Result(int(input())))