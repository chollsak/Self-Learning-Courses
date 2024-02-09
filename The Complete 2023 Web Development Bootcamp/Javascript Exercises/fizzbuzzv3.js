var output = [];

function fizzBuzz() {

    for (var count = 1; count <= 100; count ++){
        
    

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

    }
    
    console.log(output);
}