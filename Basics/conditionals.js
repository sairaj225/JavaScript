var temperature;

//TODO:  Go to gooogle and get the data

temperature = 39;

// var result = temperature < 20;
// console.log(result);

if (temperature < 20) {
    console.log("it's very cold outside");
}

if (temperature < 30) {
    console.log("It's moderate outside");
} else {
    console.log("it's really hot outside");
}

var email = true;
var facebook = false;
var google = false;

if (email || facebook || google) {
    console.log("Login Success");
}