var output = [];
var count = 1;

function fizzBuzz() {

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
    
    console.log(output);
}

//or 

/* if(count % 3 === 0 && count % 5 === 0){
    output.push("FizzBuzz");
}else if(count % 3 === 0){
    output.push("Fizz");
}
else if(count % 5 === 0){
    output.push("Buzz");
}
else{
    output.push(count);
}

count ++;

console.log(output);
*/