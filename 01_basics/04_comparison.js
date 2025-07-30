// console.log(2<1);
// console.log(2<=1);
// console.log(2>1);
// console.log(2==1);
// console.log(2>=1);
//console.log(2!=1);

//console.log("2" > 1);

console.log(null>0);
console.log(null<0);
console.log(null == 0);
console.log(null>=0);

// The reason is that the equality check == and >, < , <=, >= work differently 
//comparison convert null into number , treat is as 0, That's why null >= 0 is true and null > 0 is false

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// strict check- "===" => basically it check both 'type' as well as 'value'

console.log("2" === 2); // not equal