#class constructor
class Employee:
    
    def __init__(self, name, salary, department):
        #private attribute
        self._name = name #protected
        self.__salary = salary 
        self.__department = department
        self.__get_detail()

    #private method
    def __get_detail(self):
        print("Employee's name: %s" %self._name)
        print("Employee's salary: %d" %self.__salary)
        print("Employee's department: %s" %self.__department)


# object creation
obj1 = Employee("Chollsak", 50000, "Programmer")

obj2 = Employee("Paul", 100000, "CEO")



