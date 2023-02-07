#Encapsulation
class Employee: 

    def __init__(self, empname, empsalary, empposition):
        #private attribute
        self._name = empname #protected
        self.__salary = empsalary 
        self.__position = empposition
        self._showData()

    #private method
    def _showData(self):
        print("Employee name: %s" %(self._name))
        print("Salary: %d" %(self.__salary))
        print("Position: %s\n" %(self.__position))

obj1 = Employee("Paul", 100000, "Senior Programmer")
obj2 = Employee("Jack", 80000, "Junior Programmer")
