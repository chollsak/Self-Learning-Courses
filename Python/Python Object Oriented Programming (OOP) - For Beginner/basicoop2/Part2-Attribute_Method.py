#class creation
class Employee:
    
    #method
    def detail(self):
        self.name = "Chollasak Anuwareepong"
        self.salary = 50000
        print("Set properties completely")
        print("Employee's name: %s" %self.name)
        print("Employee's salary: %d" %self.salary)

# object creation
obj1 = Employee()

obj1.detail()