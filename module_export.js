// import User from "./classes";

const User = require("./classes");

const sai = new User( "sai", "saiking@gmail.com");

console.log( sai.getInfo().email );

sai.enrollCourse("Python")
sai.enrollCourse("JavaScript")

console.log(sai.getCourseList());