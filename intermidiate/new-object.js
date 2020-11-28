
var User = function ( firstName, courseCount ) {
    this.firstName = firstName;
    this.courseCount = courseCount;
    this.getCourseCount = function () {
        console.log( `course count is: ${ this.courseCount }`);
    };
};


User.prototype.getFirstName = function () {
    console.log( `your first name: ${this.firstName}`);
};


var sairaj = new User( "sai", 2 );

sairaj.getCourseCount();

if ( sairaj.hasOwnProperty("firstName")) {
    sairaj.getFirstName();
}

// console.log(sairaj);

var saavi = new User("saavi", 4);
saavi.getCourseCount();

// console.log(saavi);