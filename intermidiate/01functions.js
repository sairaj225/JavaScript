
function sayHello () {
    console.log("Hello saiking")

}

// sayHello();
// sayHello; //Referencing a function

function printName (name) {
    console.log("your name is " + name);
    console.log(`
    Hello there, ${name}. How are you?`);
    console.log(`
    your name : ${name}`);
}

// printName("saiking");

// function namastey () {
//     return "hello in india";
// }

// var greetings = namastey();

// console.log(greetings);
// console.log(namastey());

var greeting = function (name) {
    console.log(`your name: ${name}`);
}

greeting("saiking");
