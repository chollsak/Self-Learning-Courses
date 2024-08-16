type Pizza = {
    name: string;
    price: number;
};

type Order = {
    id: number;
    pizza: Pizza;
    status: string;
};

const menu: Pizza[] = [
    { name: "Margherita", price: 8 },
    { name: "Pepperoni", price: 10 },
    { name: "Hawaiian", price: 10 },
    { name: "Veggie", price: 9 },
];

let cashInRegister: number = 100;
let nextOrderId: number = 1;
const orderQueue: Order[] = [];

function addNewPizza(pizzaObj: Pizza): void {
    menu.push(pizzaObj);
    console.log(menu);
}

function placeOrder(name: string): Order | undefined {
    const pizzaOrderedObj = menu.find(pizzaObj => pizzaObj.name === name);

    if (!pizzaOrderedObj) {
        console.log("Input pizza does not match any in the menu.");
        return undefined;
    } else {
        const incomePrice = pizzaOrderedObj.price;
        cashInRegister += incomePrice;
        const newOrder: Order = { id: nextOrderId++, pizza: pizzaOrderedObj, status: "ordered" };
        orderQueue.push(newOrder);
        console.log(orderQueue);
        return newOrder;
    }
}

function completeOrder(orderId: number): Order | undefined {
    const selectedOrder = orderQueue.find(orderObj => orderObj.id === orderId);

    if (selectedOrder) {
        selectedOrder.status = "completed";
        return selectedOrder;
    }

    console.log("Order ID not found.");
    return undefined;
}

addNewPizza({ name: "Chicken Bacon Ranch", price: 12 });
addNewPizza({ name: "BBQ Chicken", price: 12 });
addNewPizza({ name: "Spicy Sausage", price: 11 });

placeOrder("Chicken Bacon Ranch");
completeOrder(1);

console.log("Menu: ", menu);
console.log("Cash in register: ", cashInRegister);
console.log("Order queue: ", orderQueue);
