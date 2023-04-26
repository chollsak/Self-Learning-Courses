#class creation
class Employee:
    
    #method
    def detail(self, name, salary, department):
        self.name = name
        self.salary = salary
        self.department = department

    def get_detail(self):
        print("Employee's name: %s" %self.name)
        print("Employee's salary: %d" %self.salary)
        print("Employee's department: %s" %self.department)


# object creation
obj1 = Employee()
obj2 = Employee()

obj1.detail("Chollsak", 50000, "Programmer")
obj2.detail("Paul", 100000, "CEO")

obj1.get_detail()
obj2.get_detail()