// See https://aka.ms/new-console-template for more information
using System;
using System.Collections.Generic;
using System.Linq;  
using System.Text;
using System.Threading.Tasks;

namespace BuildingAMadLib
{
    class Program
    {
        static void Main(string[] args)
        {   
            SayHi("Mike");
            SayHi("Tom");
            SayHi("Oscar");

            Console.WriteLine(Cube(5));

            Console.WriteLine(GetDay(0));
            Console.WriteLine(GetDay(3));
            Console.WriteLine(GetDay(6));
            Console.WriteLine(GetDay(8));
        }

        static void SayHi(string name) /*void is a return type*/
        {
            Console.WriteLine($"Hello {name}");

        }

        static int Cube(int num) /*int is a return type*/
        {
            int result = num * num * num;
            return result;
        }

        static string GetDay(int dayNum) /*string is a return type*/
        {
            string dayName;
            switch (dayNum)
            {
                case 0:
                    dayName = "Sunday";
                    break;
                case 1:
                    dayName = "Monday";
                    break;
                case 2:
                    dayName = "Tuesday";
                    break;
                case 3:
                    dayName = "Wednesday";
                    break;
                case 4:
                    dayName = "Thursday";
                    break;
                case 5:
                    dayName = "Friday";
                    break;
                case 6:
                    dayName = "Saturday";
                    break;
                default:
                    dayName = "Invalid Day Number";
                    break;
            }
            return dayName;
        }
    }
}
