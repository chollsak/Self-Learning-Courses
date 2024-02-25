// See https://aka.ms/new-console-template for more information
using   System;
using   System.Collections.Generic;
using   System.Linq;
using   System.Text;
using   System.Threading.Tasks;

namespace GettingUserInput
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.Write("Enter your name: ");
            string name = Console.ReadLine(); // Waits for the user to input something
            
            //string? input = Console.ReadLine();
            //string name = input ?? "";
            
            Console.Write("Enter your age: ");
            int age = int.Parse(Console.ReadLine()); // Converts the input to an int

            //string? input = Console.ReadLine();
            //int age = int.TryParse(input, out int result) ? result : 0;

            Console.WriteLine($"Hello {name}, you are {age} years old");

            Console.Write("Enter a number: ");
            if (int.TryParse(Console.ReadLine(), out int num1))
            {
                for (int i = 0; i < num1; i++)
                {
                    Console.WriteLine(i);
                }
            }
            else
            {
                Console.WriteLine("Invalid input. Please enter a valid number.");
            }
        }
    }
}

/*
These warnings indicate potential issues in your code related to nullability. 

1. `CS8600: Converting null literal or possible null value to non-nullable type`: 
This warning indicates that you are converting a value that could be null to a non-nullable type. 
In your case, it's likely referring to the `Console.ReadLine()` method, which can return `null` if there is no more input to read. 
To address this warning, you can use the null-coalescing operator (`??`) to provide a default value if `Console.ReadLine()` returns `null`. 

For example:

   ```
   string? input = Console.ReadLine();
   string name = input ?? "";
   ```

2. `CS8604: Possible null reference argument for parameter 's' in 'int int.Parse(string s)'`: 
This warning indicates that you are passing a potentially null string to the `int.Parse` method, which does not accept null values. 
To address this warning, you can use the null-coalescing operator (`??`) to provide a default value if the string is null, or you can use `int.TryParse` to safely parse the integer value. 

For example:

   ```
   string? input = Console.ReadLine();
   int age = int.TryParse(input, out int result) ? result : 0;
   ```

   This code uses `int.TryParse` to parse the input string and assigns the result to `age`, or `0` if the parsing fails or the input is null.
*/