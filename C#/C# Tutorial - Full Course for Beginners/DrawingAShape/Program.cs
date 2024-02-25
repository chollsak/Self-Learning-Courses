// See https://aka.ms/new-console-template for more information
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DrawingAShape
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
            Console.WriteLine("   /|");
            Console.WriteLine("  / |");
            Console.WriteLine(" /  |");
            Console.WriteLine("/___|");

            Console.WriteLine(" ");

            Console.WriteLine("Enter the height of the triangle: ");
            string? input = Console.ReadLine(); //pauses the program and waits for the user to input something
            int height = int.Parse(input ?? "0"); // Set the height of the triangle by input from the user
            
            while(height > 50 || height < 1){
                Console.WriteLine("The height of the triangle is too big or cannot input negative, please enter a smaller number: ");
                input = Console.ReadLine();
                height = int.Parse(input ?? "0");
            }
            for (int i = 0; i < height - 1; i++)
            {
                // Print spaces before the '/'
                for (int j = 0; j < height - i - 1; j++)
                {
                    Console.Write(" ");
                }

                // Print the '/'
                Console.Write("/");

                // Print spaces and the '|' for the right side of the triangle
                for (int j = 0; j < i; j++)
                {
                    Console.Write(" ");
                }
                Console.Write("|");

                // Move to the next line
                Console.WriteLine();
            }

            // Print the bottom line of the triangle
            Console.Write("/");
            for (int i = 0; i < height - 1; i++)
            {
                Console.Write("_");
            }
            Console.Write("|");

            // Move to the next line
            Console.WriteLine();





        }
    }
}
