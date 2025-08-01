// Immediately Invoked Function Expressions (IIFE) : jo funtion immediately execute ho jai and represented as ()() per yaha per ishe kaha end hone ye nahi pata hota hain to hume last me ()(); 'colon' lagana hoga

// why we use IIFE : global scope ke pollution se problem hoti hain kai baar , to global scope ke jo  variabe hain vaha per pollution hatane ke liye hum IIFE ka use karte hain

(function chai(){ // this is NAMED IIFE becoz of function name
    console.log(`DB CONNECTED`);
})
();

// NOTE: yah '1st' parenthesis () me hum function ki definition likh rahe hai and '2nd' parenthesis () me hum Execution kar rahe hai aur jo hum function ko call karte the use hum '1st' parenthesis () me rap kar diye hain

// arrow function

( () => { // this is UN-NAMED IIFE becoz no function name declared
    console.log(`DB CONNECTED TWO`);
})
();

// name pass in arrow function

( (name) => {
    console.log(`DB CONNECTED ${name}`);
})
("Sir"); // here we passing the value