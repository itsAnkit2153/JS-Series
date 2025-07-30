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