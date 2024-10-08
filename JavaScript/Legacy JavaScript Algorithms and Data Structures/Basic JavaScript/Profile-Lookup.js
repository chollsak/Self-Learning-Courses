const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];


function lookUpProfile(name, prop) {
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName === name) {
      if (contacts[i].hasOwnProperty(prop)) {
        return contacts[i][prop]; 
      } else {
        return 'No such property'; 
      }
    }
  }
  return 'No such contact';
}

// Test the function
console.log(lookUpProfile("Kristian", "lastName")); // Output: "Vos"
console.log(lookUpProfile("Sherlock", "likes"));    // Output: ["Intriguing Cases", "Violin"]
console.log(lookUpProfile("Akira", "address"));     // Output: "No such property"
console.log(lookUpProfile("John", "number"));       // Output: "No such contact"
