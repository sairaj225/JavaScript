
var user = {
    firstName : "sai",
    lastName  : "king",
    role : "admin",
    loginCount : "23",
    googleSignIn : true,
    courseList : [],
    buyCourse : function ( courseName ) {
        this.courseList.push ( courseName );
    },
    getCourseCount : function () {
        return `${ this.firstName } is enrolled in total of ${ this.courseList.length } courses`;
    },
    info : function () {
        return `first name : ${ this.firstName }
        last name : ${ this.lastName }`
    }
};

console.log ( user.firstName );
user.buyCourse ( "Python Advanced" );
user.buyCourse ( "JavaScript Advanced" );
console.log ( user.getCourseCount () );
console.log ( user.info () );