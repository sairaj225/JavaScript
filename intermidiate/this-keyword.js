//TODO: Part 1 for this key word

// console.log(this);

// var game = "basketball";

// function sayName() {
//     var name = "saiking";
//     console.log(this);
// }

// sayName();

var user = {
    firstName : "sairaj",
    courseCount : 4,
    getCourseCount : function () {
        console.log("this belongs to object");
        function imRegularFunction () {
            console.log(" I'm Regualar function ");
            console.log(this);
        }
        imRegularFunction();
    }

}

user.getCourseCount();