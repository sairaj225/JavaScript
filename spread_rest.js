
// var result = Math.max( 2, 4, 6, 7, 8, 55, 67 );
// console.log(result);

// var myObject = {}

// Object.assign( myObject, { a : 1, b: 3}, { c : 6, g : 7} );

// console.log(myObject);

function sumOne( a, b ) {
    return a + b;
}

var myA = [ 5, 4, 5, 7 ];
// console.log(sumOne( ...myA )); //Spread operator

// function sumTwo( ...args ) {
//     let sum = 0;
//     for ( const arg of args ) {
//         sum += arg;
//     }
//     return sum;
// }

// console.log(sumTwo(...myA));

function sumTwo( a, b, ...args ) {
    
    let mul = a * b;
    let sum = 0;
    for ( const arg of args ) {
        sum += arg;
    }
    return [ sum, mul ];
}

console.log(sumTwo( 1, 4, 5, 6, 8 ));