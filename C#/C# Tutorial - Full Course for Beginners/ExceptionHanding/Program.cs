// See https://aka.ms/new-console-template for more information

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ExceptionHanding
{
    class Program
    {
        static void Main(string[] args)
        {
            while (true)
            {
                try
                {
                    Console.Write("Enter a number: ");
                    int num1 = Convert.ToInt32(Console.ReadLine());
                    Console.Write("Enter another number: ");
                    int num2 = Convert.ToInt32(Console.ReadLine());

                    Console.WriteLine(num1 / num2);
                    break;
                }
                catch (DivideByZeroException e)
                {
                    Console.WriteLine(e.Message);
                }
                catch (FormatException e)
                {
                    Console.WriteLine(e.Message);
                }

            }
        }
    }
}
