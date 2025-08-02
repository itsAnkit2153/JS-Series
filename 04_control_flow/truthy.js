// Not Empty => true
const userEmail = "ankit@.com"
if(userEmail){ // yaha maan liya gya hi ki ye true hai
    console.log("Got the Email");// it will print 'Got the Email'
}else{
    console.log("Don't have email");
}

// Empty string => false
const user = "" 
if(user){
    console.log("yes");
}else{
    console.log("No");// it will print 'No'
}

// Empty array => true
const usertwo = []
if(usertwo){
    console.log("right");// it will print 'right'
}else{
    console.log("Wrong");
}

//Conclusion: (how we recognise truthy or falsy)
//Falsy values:
// false, 0, -0, BigInt 0n, "", null, undefined, NaN(not a number)
//Truthy values:
//Except falsy all are truthy like "0"(string), 'false'(written in string), " "(if you make space then it is truthy), [], {}, function(){}

//checking array is empty or not
const arr = []
if(arr.length==0){
console.log("Array is empty");
}

//checking object is empty or not

const emptyObj = {}
if(Object.keys(emptyObj).length==0){
    console.log("Object is empty");
} 

//Nullish Coalescing Operator (??) // here you will see 'null' and 'undefined'

// it uses in 'firebase' and 'database' when you have to option

let val1;
val1 = 5 ?? 10 // it will print '5' becoz it check safety of program then accordingly print
//val1 = null ?? 10 // it will print 10

// val1 = undefined ?? 10 // it will print 10
// val1 = null ?? 10 ?? 15 // here after null , which has first value it will print like 10
console.log(val1);

// Terniary Operator (?) => it is like if-else

//condition ? true: false

const iceTeaPrice = 100
iceTeaPrice >=80 ? console.log("More than 80") : console.log("less than 80")
 