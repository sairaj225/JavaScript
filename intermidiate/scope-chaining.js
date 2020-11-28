var name = "saiking";

console.log("Line number 3 ", name);

function sayName() {
    var name = "saavi";
    console.log("Line number 6 ", name);

    sayNameTwo();
    function sayNameTwo() {
        var name = "Raj";
        console.log("Line number 10", name);
    }
    
}



sayName();
