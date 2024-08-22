const gameScores = [14, 21, 33, 42, 59]
const favouriteThings = ["raindrops on roses", "whiskers on kittens", "bright copper kettles", "warm woolen mittens"]
const voters = 
[{
    name: "Alice",
    age: 42
},
{
    name: "Bob",
    age: 31
}
]

function getLastItems<Type>(array: Type[]){
    return array[array.length - 1]
}

console.log(getLastItems(gameScores))
console.log(getLastItems(favouriteThings))
console.log(getLastItems(voters))