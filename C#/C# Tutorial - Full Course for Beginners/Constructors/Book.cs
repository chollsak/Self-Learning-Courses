using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Constructors
{
    class Book
    {
        public string title ;
        public string author ;
        public int pages ;

        public Book(string aTitle, string aAuthor, int aPages){

            title = aTitle;
            author = aAuthor;
            pages = aPages;

            Console.WriteLine("Thanks for creating a book!\n--------------------");
            Console.WriteLine($"The title of the book: {title}, \nthe author: {author}, \nand it has {pages} pages.");
        }

    }
}

//note: you coundn't define public fields in side the constructor. It's not valid syntax.