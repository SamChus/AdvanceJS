
// alert("Hello, World!");
// prompt("What is your name?");
// confirm("Are you sure you want to do that?");
// console.log("Hello, World!");

// let name = prompt("What is your name?");
// const message = "Hello, " + name + "!";

// console.log(message);

//write a function that takes in a name and returns a greeting
// function greet(name) {
//     return alert("Hello, " + name + "!");
// }


// greet("John");


const cart = ["apple", "banana", "pear"];

console.log(cart[0]);

const person = {
    name: "John", 
    age: 30, 
    isStudent: false
};

const person1 = {
  name: "James",
  age: 45,
  isStudent: true,
};

person.name = "Peter"


alert(person.isStudent);

const user = {
    name: "John",
    age: 30,
    isStudent: false,
    greet: function() {
        return alert("Hello, " + this.name + "!");
    }
};


