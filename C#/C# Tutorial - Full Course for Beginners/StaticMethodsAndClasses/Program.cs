// See https://aka.ms/new-console-template for more information
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StaticMethodsAndClasses
{
    class Program
    {
        static void Main(string[] args)
        {
            //UsefulTools tools = new UsefulTools(); //this will not work because the class is static
            UsefulTools.SayHi("Mike");
        }
    }
}

//note: static methods can be called without creating an object of the class