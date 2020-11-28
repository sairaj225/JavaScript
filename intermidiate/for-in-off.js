// const names = [ "saiking", "saavi", "raj", "chingu", "madam"];

// for ( const n of names) {
//     console.log( n );
// }

const symbols = {
    name : "sai",
    age : "22",
    weight : "64"
}

for ( n in symbols ) {
    // console.log( symbols[ n ] );
    console.log( `Key is : ${n} and value is : ${symbols[ n ]}` );
}