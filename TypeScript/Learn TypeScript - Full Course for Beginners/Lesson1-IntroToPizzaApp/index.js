const menu = [
    {name: "Margherita", price: 8},
    {name: "Pepperoni", price: 10},
    {name: "Hawaiian", price: 10},
    {name: "Veggie", price: 9},
]

let cashInRegister = 100
let nextOrderId = 1
const orderQueue = []

/**
 * Challenge: Add a utility function "addNewPizza" that take a pizza objectv and adds it to the menu
 */

function addNewPizza(pizzaObj) {
    menu.push(pizzaObj)
    console.log(menu)
}

/**
 * Write another utility fuction, placeOrder, that takes a pizza name parameter and:
 * 1. finds that pizza object in the menu,
 * 2. adds the income to the cashRegister,
 * 3. pushes a new "order object" to orderQueue
 *      (eg. {pizza: selectedPizzaObjectFromStep1, status: "ordered"})
 * 4. returns the new order object (just in case we need it later)
 */

function placeOrder(name) {
    pizzaOrderedObj = menu.find(pizzaObj => pizzaObj.name == name)
    
    if (pizzaOrderedObj == undefined){
        console.log("Input pizza is not match any in the menu.")
    }else{
        incomePrice = pizzaOrderedObj.price
        cashInRegister += incomePrice
        newOrder = {id : nextOrderId++, pizza: pizzaOrderedObj, status: "ordered"}
        orderQueue.push(newOrder)
        console.log(orderQueue)
        return newOrder
    }
}

/**
 * Challenge: Write another utility function, completeOrder, that takes an orderId as a parameter
 * finds the correct oreder in the orederQueue, and marks its status as "completed". For good measure, 
 * return the found oreder from the fuction.
 * 
 * Note: you'll need to ensure that we're adding IDs to our orders when we create new orders. You
 * can use a global `nextOrderId` variable and increment it every time a new order is created to
 * simulate real IDs being managed for us by database.
 */

function completeOrder(orderId) {
    selectedOrderQueue = orderQueue.find(pizzaObj => pizzaObj.id == orderId)
    selectedOrderQueue.status = "completed"
    return selectedOrderQueue
}

addNewPizza({name: "Chicken Bacon Ranch", price: 12})
addNewPizza({name: "BBQ Chicken", price: 12})
addNewPizza({name: "Spicy Sausage", price: 11})

placeOrder("Chicken Bacon Ranch")
completeOrder(1)

console.log("Menu: ", menu)
console.log("Cash in register: ", cashInRegister)
console.log("Order queue: ", orderQueue)

/**
  
  
const menu = [
    {name: "Margherita", price: 8},
    {name: "Pepperoni", price: 10},
    {name: "Hawaiian", price: 10},
    {name: "Veggie", price: 9},
]

const cashInRegister = 100
const nextOrderId = 1
const orderQueue = []


function addNewPizza(pizzaObj) {
    menu.push(pizzaObj)
    console.log(menu)
}


function placeOrder(name) {
    pizzaOrderedObj = menu.find(pizzaObj => pizzaObj.name == name)
    
    if (pizzaOrderedObj == undefined){
        console.log("Input pizza is not match any in the menu.")
    }else{
        incomePrice = pizzaOrderedObj.price
        cashInRegister += incomePrice
        newOrder = {id : nextOrderId++, pizza: pizzaOrderedObj, status: "ordered"}
        orderQueue.push(newOrder)
        console.log(orderQueue)
        return newOrder
    }
}


function completeOrder(orderId) {
    selectedOrderQueue = orderQueue.find(pizzaObj => pizzaObj.id == orderId)
    selectedOrderQueue.status = "completed"
    return selectedOrderQueue
}

addNewPizza({name: "Chicken Bacon Ranch", price: 12})
addNewPizza({name: "BBQ Chicken", price: 12})
addNewPizza({name: "Spicy Sausage", price: 11})

placeOrder("Chicken Bacon Ranch")
completeOrder("1")

console.log("Menu: ", menu)
console.log("Cash in register: ", cashInRegister)
console.log("Order queue: ", orderQueue)

---------
console:


! TypeError: Assignment to constant variable      (We gonna fix it in TypeScript!)


*/