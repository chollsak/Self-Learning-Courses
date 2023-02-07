class Employee:

    def __init__(self, name):
        self.name = name

    def showData(self):     
        print("Employee name: %s" %self.name)


emp1 = Employee("New")      
emp1.showData()  