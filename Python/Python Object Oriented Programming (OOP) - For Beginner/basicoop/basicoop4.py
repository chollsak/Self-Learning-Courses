#Encapsulation
class Employee: 

    def __init__(self, empname, empsalary, empposition):
        #protected attribute
        self._name = empname
        self._salary = empsalary
        self._position = empposition
        self._showData()

    #protected method
    def _showData(self):
        print("Employee name: %s" %(self._name))
        print("Salary: %d" %(self._salary))
        print("Position: %s\n" %(self._position))

obj1 = Employee("Paul", 100000, "Senior Programmer")
obj1._name = "Mark"


