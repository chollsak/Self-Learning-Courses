// See https://aka.ms/new-console-template for more information
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataTypes
{
    class Program{
        static void Main(string[] args){
            string phrase = "Giraffe Academy"; // string is a sequence of characters
            char grade = 'A'; // char is a single character
            int age = 30; // int is a whole number
            double gpa = 3.2; // double is a decimal number
            bool isMale = true; // bool is a true or false value
            
            Console.WriteLine($"DataType of phrase: {phrase.GetType()}");
            Console.WriteLine($"DataType of grade: {grade.GetType()}");
            Console.WriteLine($"DataType of age: {age.GetType()}");
            Console.WriteLine($"DataType of gpa: {gpa.GetType()}");
            Console.WriteLine($"DataType of isMale: {isMale.GetType()}");
            
        }
    }
}