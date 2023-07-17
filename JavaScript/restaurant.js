var prompt = require("prompt-sync")();

let menu = ["Espresso", "Cappuccino", "Latte"];
let type = ["Hot", "Cold"];
let price = [55, 60];

let customer_order = [];
let input2 = 0;

let selecter1 = prompt("Please type 1 to show the menu: ");

if (selecter1 == 1) {
  console.log(" ");
  console.log("---Choose the menu---");
  for (let i = 0; i < menu.length; i++) {
    console.log(i + 1 + ". " + menu[i]);
  }
  console.log(" ");

  let menu_selected = prompt("Select coffee: ");
  if (menu_selected >= 1 && menu_selected <= menu.length) {
    customer_order.push(menu[menu_selected - 1]);

    console.log(" ");
    console.log("---Choose the type of coffee---");
    for (let i = 0; i < type.length; i++) {
      console.log(i + 1 + ". " + type[i] + " " + price[i] + " baht");
    }
    console.log(" ");

    let type_selected = prompt("Select type: ");
    if (type_selected >= 1 && type_selected <= type.length) {
      customer_order.push(type[type_selected - 1]);
      customer_order.push(price[type_selected - 1]);

      console.log(" ");
      console.log(
        "---You chose " +
          customer_order[1] +
          " " +
          customer_order[0] +
          " " +
          customer_order[2] +
          " baht---\n"
      );

      let input = Number(prompt("Input your money: "));
      let change_amount = input - customer_order[2];

      if (change_amount > 0) {
        console.log("You received a change of " + change_amount + " baht");
        console.log("---Thank you---");
      } else if (change_amount < input) {
        console.log("You don't have enough money, please insert more");
        input2 += input;
        while (true) {
          let additional_input = Number(prompt("Please enter more money: "));
          input2 += additional_input;
          if (input2 === customer_order[2]) {
            console.log("---Thank you---");
            break;
          } else if (input2 > customer_order[2]) {
            console.log(
              "You received a change of " +
                (input2 - customer_order[2]) +
                " baht"
            );
            console.log("---Thank you---");
            break;
          } else if (input2 < customer_order[2]) {
            console.log("Remaining " + (customer_order[2] - input2) + " baht");
          }
        }
      } else {
        console.log("---Thank you---");
      }
    } else {
      console.log("Invalid type selection. Please try again.");
    }
  } else {
    console.log("Invalid menu selection. Please try again.");
  }
}

//https://drive.google.com/file/d/1_zQ4jQ3jesdjWt7rWjx079s2VLxbFq5t/view?usp=sharing//