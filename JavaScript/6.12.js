var prompt = require('prompt-sync')();

let midterm_score = prompt();
let final_score = prompt();

if (0 <= midterm_score && midterm_score <=60 ) {
    if (0 <= midterm_score && midterm_score <=60 ){
        console.log("Total: " + (Number(midterm_score) + Number(final_score)));
        console.log("Average: " + ((Number(midterm_score) + Number(final_score)) / 2));
    }
}