using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Inheritance
{
    class ItalianChef : Chef // ItalianChef inherits from Chef, so ItalianChef has all the methods of Chef
    {
        public void MakePasta()
        {
            Console.WriteLine("The chef makes pasta");
        }

        public override void MakeSpecialDish()
        {
            Console.WriteLine("The chef makes chicken parm");
        }//tell c sharp that we are overriding the method from the parent class
    }
    {
        
    }
}