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

// const myTotal = myArray.reduce(function(acc, currval){
//   console.log(`accumulator value ${acc} and current value ${currval}`);
//  return acc + currval
// },0)// here initialize with zero which going to store 'acc' only first time after that sum of (acc+currvalue)

//OR

const myTotal = myArray.reduce((acc,currval) => acc+currval,0);
console.log(myTotal);// 6

const shoppingCart = [
  {
    onlineCourse: "java",
    price: 1999
  },
  {
    onlineCourse: "python",
    price: 999
  },
  {
    onlineCourse: "data science engg",
    price: 2999
  }
]

const paytoPrice = shoppingCart.reduce((acc,item) => (acc+item.price),0)
console.log(paytoPrice);// total : 5997