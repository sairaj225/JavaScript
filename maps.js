var myMap = new Map();

myMap.set(1, "Uno");
myMap.set(2, "dos");
myMap.set(3, "tres");
myMap.set(4, "cuatro");

console.log(myMap);

for(let key of myMap.keys()) {
    console.log(`Key is ${key}`);
}

for(let values of myMap.values()) {
    console.log(`value is ${values}`);
}

myMap.forEach( (val, s) => console.log(`${s}: ${val}`));

myMap.delete(2);

console.log(myMap);