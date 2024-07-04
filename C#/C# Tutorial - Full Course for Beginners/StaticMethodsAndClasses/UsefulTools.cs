
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StaticMethodsAndClasses
{
    static class UsefulTools
    {
        public static void SayHi(string name)
        {
            Console.WriteLine("Hello " + name);
        }
    }
}

//note: static methods can be called without creating an object of the class