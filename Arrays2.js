const marvel_Heros =["thor","spiderman","ironman"]

const dc_heros =["superman","flash","batman"]

// marvel_Heros.push(dc_heros);
// console.log(marvel_Heros); // array ke andar array

// concat method => new array
 const allheros =marvel_Heros.concat(dc_heros)
console.log(allheros);



//spread operator

const all_new_heros = [...marvel_Heros,...dc_heros]
console.log(all_new_heros);

const another_array =[1,2,3,[4,5,6],7,[6.7,[4,5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);




// data scraping
console.log(Array.isArray("prikshit")) //false
console.log(Array.from("prikshit"));
console.log(Array.from({name:"prikshit"})); // empty array dega kyuki usko ni pta key se bnana ya pair se bnana



let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3));