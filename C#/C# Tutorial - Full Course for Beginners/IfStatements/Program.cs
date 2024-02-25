// See https://aka.ms/new-console-template for more information
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IfStatements
{
    class Program
    {
        static void Main(string[] args)
        {
           Console.WriteLine(GetMax(5.199999, 5.2));
        }

        static double GetMax(double num1, double num2){
            double result;
            if (num1 > num2)
            {
                result = num1;
            }
            else
            {
                result = num2;
            }

            return result;
        }

        static void IsTallMale(){
             bool isMale = true;
            bool isTall = true;

            if (isMale && isTall)
            {
                Console.WriteLine("You are a tall male");
            }
            else if (isMale && !isTall)
            {
                Console.WriteLine(" You are a short male");
            }
            else if (!isMale && isTall)
            {
                Console.WriteLine("You are not a male but are tall");
            }
            else
            {
                Console.WriteLine("You are not a male and not tall");
            }
        }
    }
}
