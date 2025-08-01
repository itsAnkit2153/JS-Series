// functions means app jitna bhi code likhe he 10 ya 20 line ki ye use package me convert kar deta hai phir uski copy banakar jitne bar jarurat ho use kar sakte hain

function saymyname(){
    console.log("A");
    console.log("N");
    console.log("K");
    console.log("I");
    console.log("T");
}

saymyname();

function addTwoNumbers(number1, number2){ // here number1 and number2 is parameter
    console.log(number1 + number2);
}

addTwoNumbers(3, 4); // here 3 and 4 is argument

// Note : const result = addTwoNumbers(3, 4) but it will not store any value to 'result' and it will show 'undefined'
// so if we want to store then do this


function addTwoNumbers(number1, number2){
            let result = number1 + number2
            return result;                           
}

const result = addTwoNumbers(3, 4)
console.log("Result: ", result);

function loginuserMessage(username){ // if you want that username not be empty wheather you pass or not then     '(username="sam")' like this
    if(!username){
        console.log("Please enter the username")
        return 
    }
    return `${username} just loggged in`
}

//console.log(loginuserMessage("Kritika")); // Kritika just loggged in
// if we don't pass any number then it will give "undefined" not null   

console.log(loginuserMessage())


/************************************************************************************ */

function calculateCartPrice(num1){
    return num1
}
console.log(calculateCartPrice(200)); // 200
//but if we pass a lot of value like 200, 500, 600 then we should use '...num1' method which called 'REST OPERATOR' or 'SPREAD METHOD' which help to pass multiple value
function cartPrice(...num1){
    return num1
}
console.log(cartPrice(200,500,600));//[ 200, 500, 600 ]

function priceCart(val1, val2, ...num1){
    return num1
}
console.log(priceCart(200,500,700,800));//[ 700, 800 ] becoz val1=200, val2=500, ...num1=700,800

const user = {
    username: "Ankit",
    price: 299
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and Price is ${anyobject.price}`);
}
handleObject(user);
//OR
handleObject({
    username: "Rakesh",
    price: 500
})

const newArray = [200, 500, 600, 700]

function secondElement(getarray){
    console.log(getarray[1]);
}

secondElement(newArray);
//OR
secondElement([
    599,644,344,233
]);