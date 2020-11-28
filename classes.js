
class User {

    constructor( name, email ) {
        this.name = name;
        this.email = email;
    }

    #courseList = []; // Private variable

    getInfo () {
        return { name : this.name, email : this.email }
    }

    enrollCourse ( name ) {
        this.#courseList.push( name );
    }

    getCourseList () {
        return this.#courseList;
    }
    static login () {
        console.log("you successfully loged in");
    }
}

class SubAdmin extends User {

    constructor( name, email ) {
        super( name, email);
    }

    getAdminInfo () {
        console.log("im sub admin");
    }
}
const john = new SubAdmin("saiking", "saavi");


console.log(john.getAdminInfo());
console.log(john.login());
console.log(john.getInfo());


// module.exports = User;