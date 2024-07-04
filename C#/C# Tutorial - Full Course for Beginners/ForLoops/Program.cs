// See https://aka.ms/new-console-template for more information

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ForLoops{
    class Program{
        static void Main(string[] args){
            int[] listOfNumbers = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};

            for (int i = 0; i < listOfNumbers.Length; i++){
                Console.WriteLine(listOfNumbers[i]);
            }
        }
    }   

}
