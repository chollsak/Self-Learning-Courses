var output = [];
var count = 1;

function fizzBuzz() {

    while (count <= 1000){
        
    

    output.push(count);
    
    if(count % 3 === 0 && count % 5 === 0){
        output.pop();
        output.push("FizzBuzz") 
    }    
    else if(count % 3 === 0){
        output.pop();
        output.push("Fizz")
    }else if(count % 5 === 0){
        output.pop();
        output.push("Buzz")        
    }

    count ++;
    }
    console.log(output);
}