//Reduce Js

const array = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);
// first time initialvalue ka value accumulator me store hota hai jo zero hai, phir uske baad 'accumulator + currentvalue' ka sum 'accumulator' me store hota hai .. iske baad ye repeat hota rahega, where 'currentvalue' array ko kaha gya hai
console.log(sumWithInitial);
// Expected output: 10

const myArray = [1, 2, 3]

const myTotal = myArray.reduce(function(num) => ({

}))