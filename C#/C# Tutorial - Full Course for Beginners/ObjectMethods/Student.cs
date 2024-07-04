using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ObjectMethods
{
    class Student
    {
        public string name;
        public string major;
        public double gpa;

        //creating a cobstructor
        // why we have to create a constructor?
        // because we want to create a student object with some initial values 
        //and we want to set those values when we create the object.
        public Student(string aName, string aMajor, double aGpa)
        {
            name = aName;
            major = aMajor;
            gpa = aGpa;

        }

        //creating a method
        public bool HasHonors()
        {
            if (gpa >= 3.5)
            {
                return true;
            }
            return false;
        }

        public string Details()
        {
            return $"The student name is {name}, major is {major}, and gpa is {gpa}";
        }

    }
}