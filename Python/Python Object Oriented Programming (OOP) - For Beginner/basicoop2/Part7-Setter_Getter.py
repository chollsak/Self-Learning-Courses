#class constructor
class Employee:
    
    def __init__(self, name, salary, department):
        #private attribute
        self.__name = name #protected
        self.__salary = salary 
        self.__department = department
        self.__get_detail()

    #private method
    def __get_detail(self):
        print("Employee's name: %s" %self.get_name())
        print("Employee's salary: %d" %self.get_salary())
        print("Employee's department: %s" %self.get_department())

    # setter method
    def set_name(self, newname):
        self.__name = newname   

    def set_salary(self, newsalary):
        self.__salary = newsalary     

    def set_department(self, newdepartment):    
        self.__department = newdepartment


    #getter method
    def get_name(self):    
        return self.__name
    def get_salary(self):    
        return self.__salary
    def get_department(self):    
        return self.__department
    

# object creation
obj1 = Employee("Chollsak", 50000, "Programmer")
obj1.set_name("Cristiano")
print(obj1.get_name())


