const uno = () => {

    return "I am One";
};

// const dos = async() => {
//     setTimeout( () => {
//         return "I'm Two";
//     }, 3000);
// };

const dos = () => {
    return new Promise( (resolve, reject) => {
      setTimeout( () => {
        resolve("I am two");
      }, 3000);
    });
};

const tres = () => {
    return "I am Three";
};

const callMe = async () => {
    
    let valueOne = uno();
    console.log(valueOne);

    let valueTwo = await dos();
    console.log(valueTwo);

    let valueTree = tres();
    console.log(valueTree);
};

callMe();