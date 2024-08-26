// Date
let myDate =new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString()); // simple date
console.log(myDate.toLocaleString()); // simple date with time sec

let createdDate = new Date("01-14-2024")
console.log(createdDate);


let myTimeStanp =Date.now()
console.log(myTimeStanp); // quiz me use hote
console.log(createdDate.getTime());
// sec me convert
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getMonth());


newDate.toLocaleDateString('default',{
    weekday:"long",
    timeZone:''
})