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