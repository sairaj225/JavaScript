//Global context of javascript

// sayHello();

// function sayHello () {
//     console.log("hello");
// }

// if (2 === '2') {
//     console.log("this is true");

tipper("5");//Global context

function tipper(a) {
    var bill = parseInt(a);
    console.log(bill + 5);
}



var bigTipper = function (a) {
    var bill = parseInt(a);
    console.log(bill + 15);
}

bigTipper("200");

console.log(name);

var name = "saiking";

console.log(name);

function sayHai() {
    var name = "MR. SaiRaje";
    console.log(name);
}
sayHai();

console.log(name);