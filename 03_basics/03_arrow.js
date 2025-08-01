// Arrow function => arrow function ke 'This' keyword ke baare mein dekhenge
// 'This' keyword current context ke baare mein batata hain

const user = {
    username: "Ankit",
    price: 999,
    
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`); // yaha per 'this' , jab hume same scope('{}') me kuch access karna hota hai tab hum use karte hain 'this' like 'this.username'(kiuki hum 'username' direct nahi access kar sakte hain)
        console.log(this); // ye current context dikhayega
        /**{
  username: 'Ankit',
  price: 999,
  welcomeMessage: [Function: welcomeMessage]
} */

    }
}
user.welcomeMessage();
user.username = "Rohan" // yaha per context(value) ko change kar diya gya hain means baat kiske baare me ho rahi hai
user.welcomeMessage();

console.log(this); // ye bhi current context dikhyega jo change hua hain
/** {
  username: 'Rohan',
  price: 999,
  welcomeMessage: [Function: welcomeMessage]
}*/

//NOTE: console.log(this) => agar hum kewal ishe hi print karenge to ye '{}' empty show karega


function chai(){
    console.log(this); // ab yaha per jab hum 'this' function ke andar execute karte hain to bahut saari information deta hai
    const username = "Ankit"
    console.log(this.username) //it will show 'undefined' becoz 'this' ko hum kewal 'object' ke andar use kar sakte hain na ki 'function' ke andar
}
chai() 

//OR

const chaiCode = function(){
    const username = "Ankit"
    console.log(this.username) // it will also show same 'undefined'
}
chaiCode()

/**********************Basic Arrow function */

const chaiArrow = () => { // for 'Arrow function' : replace "function()" to "() => "
    console.log(this);
}
chaiArrow() // it will still show '{}'

/*************************Main Arrow function */

const addTwo = (num1, num2) => {
    return num1 + num2
}
console.log(addTwo(3, 4));

//OR

// Implicit return : iska matlab main maan leta hu to tumhe 'return' aur '{}' parenthesis likhne ki jarurat nahi hai

const addThree = (num1, num2, num3) => num1 + num2 + num3
console.log(addThree(2, 3, 3)); 

//OR

const addNum = (num1, num2, num3) => (num1 + num2 + num3)  // yaha "curly braces" me rap kiye like {num1 + num2 + num3} to 'return' keyword likhna padega like {return num1 + num2 + num3}
// but agar "parenthesis" me rap kiye like (num1 + num2 + num3) tab 'return' keyword nahi likhna padega
console.log(addNum(2, 3, 10));

// agar apko 'object' return karna ho to 

const addnum = (num1, num2) => ({username:"Ankit"}) // if use only curlybraces like {username: "Ankit"} it will show 'undefined' so use for 'object' declaration inside parenthesis ({...})
console.log(addnum());


// Explicit return : jab apko 'return' keyword lagana padta hain