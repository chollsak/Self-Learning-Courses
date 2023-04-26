#class variable
class Employee:

    #class variable
    _min_salary = 12000
    _max_salary = 50000
    _company_name = "TN"
    
    def __init__(self, name, salary, department):
        #instance variable
        self.__name = name #protected
        self.__salary = salary 
        self._department = department

    #private method
    def _get_detail(self):
        print("Employee's name: %s" %self.__name)
        print("Employee's salary: %d" %self.__salary)
        print("Employee's department: %s" %self._department)


# object creation
obj1 = Employee("Chollsak", 50000, "Programmer")
print(Employee._company_name)


