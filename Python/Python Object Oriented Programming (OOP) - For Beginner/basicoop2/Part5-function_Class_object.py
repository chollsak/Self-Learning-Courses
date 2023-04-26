#addtional function

class Employee:
    
    def __init__(self, name, salary, department):
        self.name = name
        self.salary = salary
        self.department = department

    #method
    def get_detail(self):
        print("Employee's name: %s" %self.name)
        print("Employee's salary: %d" %self.salary)
        print("Employee's department: %s" %self.department)


# object creation
obj1 = Employee("Chollsak", 50000, "Programmer")
obj2 = Employee("Paul", 100000, "CEO")
obj2 = Employee("Jack", 10000, "Rider")

print(obj1.__class__)
print(isinstance(obj1, Employee))