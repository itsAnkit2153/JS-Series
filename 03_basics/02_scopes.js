var c = 300 // global scope
let a = 100
const b = 500
if(true){ // scope means => line 3 to 8 tak jo curly braces {} ke andar hai use bolte hain scope
    let a = 10 // local scope
    const b = 20
    console.log("Inner", a);
    var c = 30

}

console.log(a); // it will shows 'a is not defined' if a is declared only in local // 'let' work according to 'local and global scope'
console.log(b); // it will shows 'b is not defined' if b is declared only in local  // 'const' work according to 'local and global scope'
console.log(c); // but it will work i.e 30 means even it declared only in local // if c is declared in both local as well as global then it follow only 'local scope' so this is not good 


function one(){
    const username = "Ankit"
    function two(){
        const website = "youtube"
        console.log(username);
    }

    // console.log(website) => it can't access becoz it's declared in local scope
    two() // Ankit
}
one() // Ankit


if(true){ // agar hum 'true' likhte hain to iska matlab yaha to jarur aana hai
    const username = "Ankit"
    if(username === "Ankit"){
        const website = " youtube"
        console.log(username + website)
    }
    //console.log(website); // it will show 'website is not defined' becoz aap scope(if{}) ke bahar hain
}
//console.log(username); // it will show 'username is not defined' becoz aap scope(if{}) ke bahar hain


//+++++++++++++++++++++++++Intresting+++++++++++++++++++++++++++++++++++


console.log(addone(5)); // it will show 6 (kiuki yaha per hum sirf declare kiye hain)
function addone(num){ // ye ek function hain
    return num + 1
}


console.log(addTwo(5)); // but it will show 'cannot access "addTwo" before initialization (kiuki yaha per hum declare karne ke saath variable me hold bhi kiye hain)
const addTwo = function(num){  // ye bhi function hain but yaha 'addTwo' ko hum isse 'expression' kahte hain
    return num +2
}
