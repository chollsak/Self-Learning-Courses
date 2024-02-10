let randomNumber1 = Math.ceil(Math.random() * 6);
let randomNumber2 = Math.ceil(Math.random() * 6);

console.log("first dice: " + randomNumber1);
console.log("second dice: "+ randomNumber2);

document.querySelector(".img1").setAttribute("src", "images/dice" + String(randomNumber1) + ".png");
document.querySelector(".img2").setAttribute("src", "images/dice" + String(randomNumber2) + ".png");

if(randomNumber1 > randomNumber2){
    console.log("player 1 wins");
    document.querySelector('h1').innerHTML = "🚩Player 1 Wins!";
}else if(randomNumber1 < randomNumber2){
    console.log("player 2 wins");
    document.querySelector('h1').innerHTML = "Player 2 Wins!🚩";
}else{
    console.log("Draw!");
    document.querySelector('h1'.innerHTML = "Draw!");
}

// if not refreshing the page, the alert will shown up
setTimeout(function(){
    alert("Refresh the page to play again!");
}, 10000);

