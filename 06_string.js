// Strings
const name = "prikshit"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);


const gameName = new String('prikshit')
console.log(gameName[0]);
console.log(gameName.length);

console.log(gameName.toUpperCase());
console.log(gameName.charAt(7));
console.log(gameName.indexOf('t'));



const newString =gameName.substring(0,4)
console.log(newString);

const anotherString =gameName.slice(-9,4)
console.log(anotherString);


const newStringOne ="        hitesh   "
console.log(newStringOne.trim());


const url ="https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20','-'));

console.log(gameName.split('-'));
