// function init () {
//     var firstName = "sairaj";
//     console.log("im init");
//     function sayFirstName() {
//         console.log( firstName );
//     }
//     return sayFirstName;

// }

// var value = init();

// value();

function doAddition (x) {
    return function (y) {
        return x+y;
    };
}

// var add5 = doAddition(4);

// console.log(add5(7));

console.log(doAddition(5)(5));