// See https://aka.ms/new-console-template for more information

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Variables
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("There once was a man named George");
            Console.WriteLine("He was 70 years old");
            Console.WriteLine("He really liked the name George");
            Console.WriteLine("But he didn't like being 70");

            Console.WriteLine("----------Using string interpolation----------");

            string characterName = "John";
            int characterAge = 35;
            Console.WriteLine($"There once was a man named {characterName}");
            Console.WriteLine($"He was {characterAge} years old");
            Console.WriteLine($"He really liked the name {characterName}");
            Console.WriteLine($"But he didn't like being {characterAge}");
            
        }
    }
}
