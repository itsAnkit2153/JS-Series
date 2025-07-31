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
