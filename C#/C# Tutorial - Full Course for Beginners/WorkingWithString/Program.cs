// See https://aka.ms/new-console-template for more information
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WorkingWithString
{
    class Program
    {
        static void Main(string[] args)
        {
            string phrase = "Giraffe Academy";
            Console.WriteLine(phrase);
            Console.WriteLine(phrase.Length);
            Console.WriteLine(phrase.ToUpper());
            Console.WriteLine(phrase.ToLower());
            Console.WriteLine(phrase.Contains("Academy"));// check if the string contains a certain word
            Console.WriteLine(phrase[0]);
            Console.WriteLine(phrase.IndexOf("Academy"));
            Console.WriteLine(phrase.IndexOf('a'));
            Console.WriteLine(phrase.IndexOf('z'));
            Console.WriteLine(phrase.Substring(8));
            Console.WriteLine(phrase.Substring(8, 3));
            Console.WriteLine(phrase.Substring(8, 5));
        }
    }
}