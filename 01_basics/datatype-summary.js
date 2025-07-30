// datatype => kis tarah se data ko rakha aur access kiya jata hai aur ye 2 types ke hai primitive and non-primitive

//Primitive

// 7 types: String, Number, Boolean, null(Empty), undefined(variable is declared but value is not defined), symbol(help to make value unique), BigInt(scientific value or large value/integer)

const score = 100
const scoreValue = 100.3 //both score and scoreValue comes in number type(because here float not exist)
const isLoggedIn = false
const outsideTemp = null
let userEmail; // you can also write 'userEmail = undefined'

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);

bigNumber = 23324255546342242n


// Reference type (Non-Primitive)

// Array, Objects, Functions

//Array
const superHeros = ["IronMan", "Hulk", "Thor", "DoctorStrange"]

// objects

let myObj = {
    name:"Ankit",
    age:22,
    branch:"AIML",

}

//functions

const myFunction = function(){
    console.log("Hello, World");
}

// if we check 'typeof' =>
// undefined => 'undefined'
// null => 'object'
// number => 'number'
// string => 'string'
// eg. myFunction => 'function' , it is also said 'object function'
// eg. myObj => 'object'
// eg. anotherId => 'symbol'

