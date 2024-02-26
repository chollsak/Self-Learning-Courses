// See https://aka.ms/new-console-template for more information
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GettersSetters
{
    class Program
    {
        static void Main(string[] args)
        {
            Movies avengers = new Movies("The Avengers", "Joss Whedon", "PG-13");
            Movies shrek = new Movies("Shrek", "Andrew Adamson", "PG");

            Console.WriteLine(avengers.Rating);
            // user can not change to an invalid rating

        }
    }
}