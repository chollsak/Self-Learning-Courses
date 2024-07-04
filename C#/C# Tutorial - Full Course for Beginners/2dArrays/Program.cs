// See https://aka.ms/new-console-template for more information

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _2dArrays
{
    class Program
    {
        static void Main(string[] args)
        {
            int[,] numberGrid = {
                {1, 2},
                {3, 4},
                {5, 6}
            };

            Console.WriteLine(numberGrid[0, 1]); // 0 is the first row, 1 is the second column

            //if you want to print out 3
            Console.WriteLine(numberGrid[1, 0]);
        }
    }
}
