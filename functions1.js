function sayMyName(){
    console.log("Prikshit");
}
sayMyName // reference
sayMyName();// execution

function addTwoNumbers(num1, num2){ // parametrs
let result =num1+num2;
return result
}

const ans =addTwoNumbers(1,2) // arguments
console.log(ans);



function loginUserMessage(username){
     if(!undefined){ //username=== undefined , undefined false hota
      console.log("please enter a username");
      return
     }
    return `${username} just logged In`
}

const username =loginUserMessage()
console.log(username);


