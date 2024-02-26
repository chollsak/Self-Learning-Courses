using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GettersSetters
{
    public class Movies
    {
        public string title;
        public string director;
        private string rating; // private means it can only be accessed within the class

        public Movies(string aTitle, string aDirector, string aRating)
        {
            title = aTitle;
            director = aDirector;
            rating = aRating;
        }

        public string Rating
        {
            get 
            { 
                return rating;
            }
            set 
            {
                if (value == "G" || value == "PG" || value == "PG-13" || value == "R" || value == "NR")
                {
                    rating = value;
                }
                else
                {
                    rating = "NR";// NR = Not Rated

                }
            }
        }

    }
}
// note: get and set are used to access and modify private fields or another word is makeing it more secure.