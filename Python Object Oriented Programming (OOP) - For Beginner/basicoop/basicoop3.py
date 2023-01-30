#additional functions
class Employee: 

    def __init__(self, empname, empsalary, empposition):
        self.name = empname
        self.salary = empsalary
        self.position = empposition

    #creat method
    def showData(self):
        print("Employee name: %s" %(self.name))
        print("Salary: %d" %(self.salary))
        print("Position: %s\n" %(self.position))

#creat object  
obj1 = Employee("Joe", 50000, "IT Support")
obj2 = Employee("Jack", 30000, "Marketing")
obj3 = Employee("Paul", 10000, "Senior Programmer")

#here!
print(isinstance(obj1, Employee)) #check if obj1 is in Employee

print(dir(obj1)) #check method

print(obj1.__class__) #check object's class
