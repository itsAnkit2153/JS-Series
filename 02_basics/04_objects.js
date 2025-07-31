//const tinderuser = new Object() // this is singleton Object

const tinderuser = {}  // this is Non-singleton Object But both are same because they same output i.e {} empty

tinderuser.id = "123abc"
tinderuser.name = "Ankit"
tinderuser.age = "22"
tinderuser.isLoggedIn = false 

console.log(tinderuser);//{ id: '123abc', name: 'Ankit', age: '22', isLoggedIn: false }

const regularUser = {
    email: "ankit@gmail.com",
    fullname:{
        userfullname:{
            firstname: "Ankit",
            lastname: "Vishwakarma"
        }
    }
}

console.log(regularUser.fullname);//{ userfullname: { firstname: 'Ankit', lastname: 'Vishwakarma' } }
console.log(regularUser.fullname.userfullname);//{ firstname: 'Ankit', lastname: 'Vishwakarma' }
console.log(regularUser.fullname.userfullname.firstname);//Ankit

//object assign

const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);
// Expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget === target);
// Expected output: true


const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}
const obj5 = {5:"a", 6:"b"}

const obj3 = {obj1, obj2}

console.log(obj3);//{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

const obj4 = Object.assign({}, obj1, obj2, obj5) // {} braces me saari value stored ho rahi hai and obj1, obj2 is source hai jise hume store karna hai in braces {} 
//Note: agar {} braces nahi hoga to saari value obj1 me store ho jayega

console.log(obj4);//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }