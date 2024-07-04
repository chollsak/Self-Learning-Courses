// See https://aka.ms/new-console-template for more information

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BuildingAGuessingGame{
    class Program{
        static void Main(string[] args){

            string secretWord = "chollsak";
            string guess = "";
            bool outOfGuess = false;

            int timePlayed = 0;
            while(guess != secretWord){
                Console.Write($"Enter guess[You have played {timePlayed} times]: ");
                guess = Console.ReadLine();

                if(guess != secretWord){
                    Console.WriteLine("Wrong! Try again!");
                }else{
                    Console.WriteLine("You got it!");
                    outOfGuess = true;
                    
                }

                timePlayed++;

                if(timePlayed > 15){
                    Console.WriteLine("You have played too many times! Go do something else!");
                    break;
                }
            }

        }
    }
}
