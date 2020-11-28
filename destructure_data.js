// const user = [ "sairaj", 3, "admin" ];

// var name = user[0];
// var role = user[2];

// var [ name, courseCount, role ] = user

// console.log(role);

const MyUser = {
    name : "sairaj",
    courseCount : 5,
    role : "admin",
};

console.log(MyUser.name);

const { name, myCourseCount, role } = MyUser;

console.log(name);