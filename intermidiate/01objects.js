console.log("helo");
var User = {
    name : "",
    getUserName : function () {
        console.log(`user name is : ${this.name}`);
    },
};

var sai = Object.create(User);

console.log(sai);
sai.name = "sairaju";
sai.getUserName();

var saavi = Object.create(User, {
    name : {value : "saavi"},
    courseCount: {value : 3},
});
saavi.getUserName();
