const myArr =[0,1,2,3,4,5]
// shallow copy -> original array change

const myHeros =["shaktiman","nagraj"]

const myArr2= new Array(1,2,3,4)
console.log(myArr[1]);

//Array Methods
myArr.push(6)
myArr.pop();
myArr.unshift(0) // starting me add
myArr.shift() // starting se remove
console.log(myArr);

console.log(myArr.includes(6)); // boolean type result
console.log(myArr.indexOf(-8)); // -1 


const newArr = myArr.join() // bind kr deta or string me convert hoti
console.log(typeof newArr); // string



//slice , splice
console.log("A",myArr);

const myn1 =myArr.slice(1,3)
console.log(myn1);

console.log("b",myArr);


const myn2 =myArr.splice(1,3)
console.log(myn2);
console.log(myArr);

// diff bw slice splice 
// slice -> (1,3)=> 1,2
//splice ->(1,3) => 1,2,3 || orignal array ko chnage krta , range ko delete kr deta






