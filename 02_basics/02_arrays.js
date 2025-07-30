const marvel_heros = ["IronMan", "Hulk", "Thor"]
const dc_heros = ["Superman", "Flash", "Batman"]

// marvel_heros.push(dc_heros); // it is actually add 2nd array as a last element in 1st array
// console.log(marvel_heros);
// console.log(marvel_heros[4][0]);  

// const allheros = marvel_heros.concat(dc_heros);
// console.log(allheros); // it is actually give new array after adding both array

const all_new_heros = [...marvel_heros, ...dc_heros] // it is spread method like drop a glass then spread all over around
console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 11, [7, 8, [9, 10]]]
const real_another_array = another_array.flat(Infinity) // here flat helps to remove all nested array and make it one 
console.log(real_another_array);

console.log(Array.isArray("Ankit"));// it will return true or false 
console.log(Array.from("lucifer"));// it will break each word and then store in array 
console.log(Array.from({name:"Ankit"})); // it will give empty [] because here you have to mention key or value then it will give the output and most important {key:value} pair must be in {} i.e object 

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3)); // it will combine all three and then store in array