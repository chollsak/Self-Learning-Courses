#create class
class Employee: 
    #creat method
    def detail(self, empname, empsalary, empposition):
        self.name = empname
        self.salary = empsalary
        self.position = empposition

    def showData(self):
        print("Employee name: %s" %(self.name))
        print("Salary: %d" %(self.salary))
        print("Position: %s\n" %(self.position))

#creat object 
obj1 = Employee()
obj1.detail("Joe", 50000, "IT Support")
obj2 = Employee()
obj2.detail("Jack", 30000, "Marketing")
obj3 = Employee()
obj3.detail("Paul", 10000, "Senior Programmer")

obj1.showData()
obj2.showData()
obj3.showData()


