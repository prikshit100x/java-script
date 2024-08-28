// const tinderUder = new Object(); // singelton

const tinderUser ={
    // non singelton
}

tinderUser.id ='123abc'
tinderUser.name ="sammy"
tinderUser.isLoggedIn =false
// console.log(tinderUser);


const regularUser ={
    email: "some@gmail.com",
    fullname:{
        username: {
            firstname:"prikshit",
            lastname:"sharma"
        }
    }
}

// console.log(regularUser.fullname?.username.firstname);


const obj1 ={1:"a",2:"b"}
const obj2={3:"a",4:"b"}


// adding objects
// const obj3=Object.assign({},obj1,obj2)
// console.log(obj3);


const obj3 ={...obj1,...obj2}
console.log(obj3);

//database se values aaege
const users=[
    {id:1,
    email:"h@gmail.com",
},{},{}
]

users[1].email



console.log(tinderUser);


console.log(Object.keys(tinderUser));// keys de deta

console.log(Object.values(tinderUser));

console.log(Object.entries(tinderUser));// arrays bna deta


console.log(tinderUser.hasOwnProperty('isLoggedIn'));// value exist krti ya ni