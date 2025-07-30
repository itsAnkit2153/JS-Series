let score = "33"
console.log(typeof(score));
let valueInNumber = Number(score)
console.log(typeof(valueInNumber));
console.log(valueInNumber);

let score2 = "33abc"
console.log(typeof(score2));
let valueInNumber2 = Number(score2)
console.log(typeof(valueInNumber2));
console.log(valueInNumber2);

//"33" => 33
//"33abc" => NaN("not in number" but type is number)
//"null" => 0
//"undefined" => NaN
//true => 1 or false => 0
//"ankit" => NaN

let isLoggedIn = 1
let booleanisLoggedIn = Boolean(isLoggedIn)
console.log(booleanisLoggedIn);

//1 => true or 0 => false
//"" => false
//"ankit" => true

let number = 33
let stringNumber = String(number)
console.log(typeof (stringNumber));
console.log(stringNumber);

// ***************************Operations**************************

let value = 3
let negValue = -value
console.log(negValue); 

// console.log(2**3);
// console.log(2/3);
// console.log(2+3);
// console.log(2-3);
// console.log(2*3);
// console.log(2%3);

let str1 = "Hello"
let str2 = " Ankit!"
console.log(str1 + str2);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");

console.log(+true);
console.log(+"");

let num1, num2, num3
num1 = num2 = num3 = 2 + 2

let gameCounter = 100
gameCounter++
console.log(gameCounter);
++gameCounter
console.log(gameCounter);

// search => prefix and postfix mdn javascript(where you clearly understand about pre/pos increment)

let x = 3;
const y = x++;
// x is 4; y is 3

let a = 3;
const b = ++a;
// a is 4; b is 4