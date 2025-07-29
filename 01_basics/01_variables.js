const accountId = 1455
let accountEmail = "ankit@gmail.com"
var accountPassword = "1234"
accountCity = "jaipur"
let state; // this is "undefined"
console.log(accountId)

accountEmail = "kritika@gmail.com"
accountPassword = "3234"
accountCity = "Hydrabad"

/*
don't use "var" , try to use only "let"
because of issue in block scope and functional scope (like if-else, for i.e for(){.... })
*/

console.table([accountId, accountEmail, accountPassword, accountCity]);