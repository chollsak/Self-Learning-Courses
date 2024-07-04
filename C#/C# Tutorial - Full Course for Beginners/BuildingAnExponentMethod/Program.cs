// See https://aka.ms/new-console-template for more information

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BuildingAnExponentMethod
{
    class Program
    {
        static void Main(string[] args)
        {   
            Console.WriteLine("Enter a base number: ");
            int baseNum = Convert.ToInt32(Console.ReadLine());

            Console.WriteLine("Enter a power number: ");
            int powNum = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine(GetPow(baseNum, powNum));
        }

        static int GetPow(int baseNum, int powNum){
            int result = 1;

            for(int i = 0 ; i < powNum; i++){
                result = result * baseNum;
            }

            return result;
        }
    }
}


