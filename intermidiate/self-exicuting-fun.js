//TODO: Self exicting anonymouse function

function sayHello () {
    console.log("hello");
}

sayHello();

//anonymouse IIFE

(function () {
    console.log("im anonymouse");
} () );