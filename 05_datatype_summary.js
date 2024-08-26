// primitive =>
// non primitve =>
    // kis tarah data ko memory me rakha jata and unhe access kiya jata us basis pe krte categrize

//Primitive =>call by value , original data ni , copy di jati unki
// 7 types: string , number , boolean, null, undefined , symbol , BigInt

// non primitive : reference
//Array , objects , Functions

const id  =Symbol('123')
const anotherId =Symbol('123')

console.log(id === anotherId); // false

const bigNumber1 = 43715827901478675n


// refrence 
//array , obj , func

const heros =["shaktiman","nagraj","doga"]

let obj ={
    name:"prikshit",
    age:22,
}

const myFunction = function(){
console.log("Hello World! ");
}

console.log(typeof bigNumber1);

///////////

let myYouTubeName ="prikshitsharma"
let anotherName =myYouTubeName
anotherName="bawa"
console.log(anotherName); // bawa
console.log(myYouTubeName); // prikshitsharma

let userOne ={
    email:"user@gmail.com",
    upi:"user@ybl"
}

let userTwo = userOne
userTwo.email="prikshit@gmail.com"

console.log(userOne.email);