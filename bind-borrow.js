const Admin = {
    firstName : "sairaj",
    lastName : "atukuri",
    getInfo : function () {
        console.log(`
        Name : ${this.firstName} ${this.lastName}
        `);
    }

}

// Admin.getInfo();

const subAdmin = {
    firstName : "rajeswari",
    lastName : "atukuri",
}

// Admin.getInfo.bind(subAdmin)();
var info = Admin.getInfo.bind(subAdmin);
info();

Admin.getInfo.call(subAdmin);