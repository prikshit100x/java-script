const score =90

const balance =new Number(100)
console.log(balance);
console.log(balance.toString().length);
console.log(balance.toFixed(2)); // 100.00

const otherNumber = 123.8977
console.log(otherNumber.toPrecision(3));

const hunders =100000
console.log(hunders.toLocaleString('en-IN')); // comme aa jate


//Maths

console.log(Math); // object
console.log(Math.abs(-8)); // 8
console.log(Math.round(4.3)); // 4
console.log(Math.round(4.6));
console.log(Math.ceil(4.2)); // 5
console.log(Math.floor(4.9)); // 4
console.log((Math.random() * 10) + 1);

const min =10
const max = 20


 console.log(Math.floor(Math.random() * (max -min +1)) + min); 