const fs = require("fs");
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function writeFile() {
  fs.writeFile("message.txt", "Hello Choll\n", (err) => {
    if (err) throw err;
    console.log("The file has been saved!");
    rl.close(); // Close the readline interface after writing the file
  });
}

function readFile() {
  fs.readFile("message.txt", "utf8", (err, data) => {
    if (err) throw err;
    console.log(data);
    rl.close(); // Close the readline interface after reading the file
  });
}

function appendFile() {
  fs.appendFile("message.txt", "Added from Choll\n", (err) => { // append file
    if (err) throw err;
    console.log("The message has been appended to the file!");
    rl.close(); // Close the readline interface after appending the file
  });
}


rl.question("Enter 'write' to write to file, 'read' to read from file or 'append' to add txt to file: ", (answer) => {
  if (answer === "write") {
    writeFile();
  } else if (answer === "read") {
    readFile();
  }else if(answer === "append"){
    appendFile();
  }
   else {
    console.log("Invalid input");
    rl.close(); // Close the readline interface for invalid input
  }
});
