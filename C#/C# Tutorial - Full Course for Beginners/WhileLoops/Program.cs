// See https://aka.ms/new-console-template for more information

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WhileLoops
{
    class Program
    {
        static void Main(string[] args)
        {
            int start = 1;

            Console.WriteLine("Enter number to stop at: ");
            int stop = Convert.ToInt32(Console.ReadLine());
            while(start <= stop){
                Console.WriteLine(start);
                start++;
            }
        }
    }
}
