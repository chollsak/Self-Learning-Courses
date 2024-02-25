// See https://aka.ms/new-console-template for more information
using   System;
using   System.Collections.Generic;
using   System.Linq;
using   System.Text;
using   System.Threading.Tasks;

namespace BuildingACalculator
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Enter a number: ");
            double num1 = Convert.ToDouble(Console.ReadLine());
            Console.WriteLine("Enter another number: ");
            double num2 = Convert.ToDouble(Console.ReadLine());
            Console.WriteLine("The sum of the two numbers is: " + (num1 + num2));
            Console.WriteLine("The difference of the two numbers is: " + (num1 - num2));
            Console.WriteLine("The product of the two numbers is: " + (num1 * num2));
            Console.WriteLine("The quotient of the two numbers is: " + (num1 / num2));
            Console.WriteLine("The remainder of the two numbers is: " + (num1 % num2));

            Console.WriteLine("----Input a math operation----");
            
            Console.WriteLine("Enter a number: ");
            double num3 = Convert.ToDouble(Console.ReadLine());
            Console.WriteLine("Enter a operator [+,-,*,/,^]: ");
            string operation = Console.ReadLine();
            Console.WriteLine("Enter another number: ");
            double num4 = Convert.ToDouble(Console.ReadLine());

            if(operation == "+"){
                Console.WriteLine(num3 + num4);
            } else if(operation == "-"){
                Console.WriteLine(num3 - num4);
            } else if(operation == "*"){
                Console.WriteLine(num3 * num4);
            } else if(operation == "/"){
                Console.WriteLine(num3 / num4);
            }else if(operation == "%"){
                Console.WriteLine(num3 % num4);
            }else if(operation == "^"){
                Console.WriteLine(Math.Pow(num3, num4));
            }
            else {
                Console.WriteLine("Invalid operator");
            }

        
        }
    }
}
