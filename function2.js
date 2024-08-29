function calculateCartPrice(val1,val2,...num1){
    return num1  // array return hoga
}

console.log(calculateCartPrice(200,400,500,2000)) // num1 => 500 2000

const user ={
    username:"prikshit",
    price:999
}

function handleObject(anyobject){
console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)

handleObject({
    username:"bawa",
    price:399
})


//passing array to function


const myNewArray =[200,400,100,600]


function returnsecondValue(getArray){
  return getArray[1]
}
console.log(returnsecondValue(myNewArray   
));