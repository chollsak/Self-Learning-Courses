type Pizza = {
    id: number
    name: string
    price: number
}

type Order = {
    id: number
    pizza: Pizza
    status: OrderStatus
}

type OrderStatus = "ordered" | "completed" | "cancel"

const menu:Pizza[] = [
    {id:101 ,name: "Margherita", price: 8},
    {id:102 ,name: "Pepperoni", price: 10},
    {id:103 ,name: "Hawaiian", price: 10},
    {id:104 ,name: "Veggie", price: 9},
]

let cashInRegister = 100
let nextOrderId = 1
const orderQueue:Order[] = []

function addNewPizza(pizzaObj:Pizza): void {
    menu.push(pizzaObj)
}

function placeOrder(name: string) {
    const pizzaOrderedObj = menu.find(pizzaObj => pizzaObj.name === name)
    
    if (pizzaOrderedObj == undefined){
        console.log("Input pizza is not match any in the menu.")
    }else{
        let incomePrice = pizzaOrderedObj.price
        cashInRegister += incomePrice
        let newOrder:Order = {id : nextOrderId++, pizza: pizzaOrderedObj, status: "ordered"}
        orderQueue.push(newOrder)
        return newOrder
    }
}

function completeOrder(orderId: number):Order | undefined {
        const selectedOrder = orderQueue.find(pizzaObj => pizzaObj.id === orderId)
        if(!selectedOrder){
            console.error(`${orderId} was not found in orderQueue`)
            throw new Error()
        }
        selectedOrder.status = "completed"
        return selectedOrder
    }

export function getPizzaDetail(identifier: string | number):string | undefined{
    let pizza
    if(typeof(identifier) === "string"){
        pizza = menu.find(pizza => pizza.name.toLowerCase() === identifier.toLowerCase())
        if(!pizza){
            console.error(`${identifier} was not found in Menu`)
            throw new Error()
        }
        return String(`id: ${pizza.id}, ${pizza.name}, ${pizza.price}$`) 
    }else{
        let pizza = menu.find(pizza => pizza.id === identifier)
        if(!pizza){
            console.error(`${identifier} was not found in id of Menu`)
            throw new Error()
        }
        return String(`id: ${pizza.id}, ${pizza.name}, ${pizza.price}$`)  
    }
    
}

addNewPizza({id:110 ,name: "Chicken Bacon Ranch", price: 12})
addNewPizza({id:111 ,name: "BBQ Chicken", price: 12})
addNewPizza({id:112 ,name: "Spicy Sausage", price: 11})

// placeOrder("Spicy Sausage")
// completeOrder(1)

// console.log("Menu: ", menu)
// console.log("Cash in register: ", cashInRegister)
// console.log("Order queue: ", orderQueue)

console.log(getPizzaDetail(110))
// getPizzaDetail("spicy sausage")