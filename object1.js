// singelton using contructor apni tarah ka ek hi hota

//literal se singleton

// Object.create constrcutor

// object literal

const mySym =Symbol("key1")
//symbol ko key ki tarah use kro or print kro?
// [symbol] =""
const jsUser ={
    name:"prikshit",
    "full name":"Priksiht sharma",
    age:18,
    location:"dharamshala",
    email:"prikshit@gmail.com",
    isLoggedIn: false,
    lastLoggedIn: false,
    lastLogInDays: ["Monday","Saturday"],
    [mySym]:"mykey1"
}
console.log(jsUser.name);
console.log(jsUser["full name"]); // sqr notation

console.log( jsUser[mySym]); // string

jsUser.email="prikshit@amazon.com"
// jsUser.freeze(jsUser)


jsUser.greeting =function(){
    console.log(`hello js user ${this.name}`);
}

console.log(jsUser.greeting());