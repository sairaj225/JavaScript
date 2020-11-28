var user = {
    firstName : "sai",
    lastName  : "king",
    role : "admin",
    loginCount : "23",
    googleSignIn : true
};

// Accessing object

console.log ( user.firstName );

console.log ( user [ "firstName"] );

console.log ( user );

//Updating

user.loginCount = 33;
console.log ( user.loginCount );

console.table ( user );