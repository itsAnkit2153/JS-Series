//if

if(true){
//it will execute
}
if(false){
    //it will not execute
}

//assign 

const isLoggedIn = true
if(isLoggedIn){
    //it will return true
}

// there is serveral conditional ways
// <, >, <=, >=, ==, !=, ===(checking value as well as datatype), !==(checking negative)

if(2 == "2"){
    console.log("only value same not datatype");
}

if(2 === "2"){
    console.log("datatype as well as value are same")
}else{
    console.log("value same but not datatype")
}

const temp = 41
if(temp<50){
    console.log("less than 50");
}else{
    console.log("Greater than 50");
}
console.log("it always print");

const score = 200
if(score > 100){
    const power = "fly"
    console.log(`User Power: ${power}`);
}
//console.log(`User Power: ${power}`); // it will show 'power is not defined' becoz it is out of scope means if() 

// NOTE: But if we 'var power = "fly"' then it will print becoz 'var' is global it doesn't care about 'scope' either out of 'scope' or not

//Implicit Scope: man liya hai ki scope hai but it is valid for only 'one' line

const balance = 5000
if(balance > 500) console.log("Implicit");

// there is other way to print multiple times without '{}' but it is unreadable not good

if(balance > 100) console.log("test"),
console.log("test2"),
console.log("test3");

// checking multiple condition

if(balance>500){
    console.log(`${500} is less than ${5000}`); // first print this 
}else if(balance>750){
    console.log(`${750} is less than ${5000}`); // it will not print becoz 1st condition already match if 1st is not right then it will print 2nd
}

// use in shopping 

const userLoggedIn = true
const debidCard = true
if(userLoggedIn && debidCard){ // you can also multiple '&&' check like (one && two && three && four)
    console.log("Allow to buy course");     
}

const loggedInFromGoogle = false
const loggedInFromEmail = true
if( loggedInFromGoogle || loggedInFromEmail){// similarly here (one || two || three || four)
    console.log("user id identified");
}