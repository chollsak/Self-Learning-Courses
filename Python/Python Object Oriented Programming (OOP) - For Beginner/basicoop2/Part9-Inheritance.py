#inheritance
class Employee:

    #class variable
    __min_salary = 12000
    __max_salary = 50000
    __company_name = "TN"
    
    def __init__(self, name, salary, department):
        #instance variable
        self.__name = name #protected
        self.__salary = salary 
        self.__department = department

    #private method
    def _get_detail(self):
        print("Employee's name: %s" %self.__name)
        print("Employee's salary: %d" %self.__salary)
        print("Employee's department: %s" %self.__department)

class Accounting(Employee):
    __department_name = "เเผนกบัญชี"
    def __init__(self):
        pass

class Programmer(Employee):
    __department_name = "พัฒนาระบบ"    
    def __init__(self):
        pass

class Sale(Employee):
    __department_name = "ฝ่ายขาย"    
    def __init__(self):
        pass


accout = Accounting()
programmer = Programmer()
sale = Sale()


print(programmer._Programmer__department_name)
