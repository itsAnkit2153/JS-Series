const newArray = new Array(2,3,4,5,6)
console.log(newArray[1]);

//Array methods

const myarr = [0,1,2,3]
myarr.push(6);
myarr.push(8);
myarr.pop();
console.log(myarr);

myarr.unshift(9); // it stored in starting of the array but we had to shift all element of array so it is not good
myarr.unshift(12);
myarr.shift(); //it helps to delete element of starting of array
console.log(myarr);
console.log(myarr.indexOf(1));
console.log(myarr.includes(3));

const newArr = myarr.join();
console.log(typeof(newArr));
console.log(newArr)

console.log("A",myarr);
const myn1 = myarr.slice(1,3) // yaha end se ek kam leta hai
console.log(myn1);

console.log("B", myarr);
const myn2 = myarr.splice(1,3) // 1st change => per yaha end wala bhi include karta hai 
console.log("C", myarr); // 2nd change => jitna hum range diye the vo sara element nikal jata hai original element se aur jab hum print karte hai tab original array hume range minus hokar milte hai
console.log(myn2);
