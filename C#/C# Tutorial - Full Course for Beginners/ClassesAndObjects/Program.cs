// See https://aka.ms/new-console-template for more information

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ClassesAndObjects
{
    class Program
    {
        static void Main(string[] args)
        {
            Book book1 = new Book(); //create an object
            book1.title = "Harry Potter"; //assign values to the object
            book1.author = "JK Rowling";
            book1.pages = 400;

            Book book2 = new Book();
            book2.title = "Lord of the Rings";
            book2.author = "Tolkein";
            book2.pages = 700;

            Console.WriteLine(GetBookInfo(book1));
        }

        static string GetBookInfo(Book book){
            return $"Book Tile: {book.title} \nwas written by {book.author} \nand has {book.pages} pages.";
        }

}
}
