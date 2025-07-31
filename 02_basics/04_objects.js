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

// OR

const obj6 = {...obj1, ...obj2, ...obj5}// spread method

console.log(obj4);//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }
console.log(obj6);//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

//array ke andar kai saare object aur use kaise access karna hai

const users = [
    {
        id: 1,
        email:"ankit@gmail.com"
    },
    {
        id: 2,
        email:"two@.com"
    },
    {
        id: 3,
        email:"three@.com"
    }
]


users[1].email

console.log(Object.keys(tinderuser));//[ 'id', 'name', 'age', 'isLoggedIn' ]
// yaha per hum 'tinderuser' ka saari keys print kara rahe hai from 'key:value' pair
console.log(Object.values(tinderuser));//[ '123abc', 'Ankit', '22', false ]
console.log(Object.entries(tinderuser));
//entries of tinderuser
/*[
  [ 'id', '123abc' ],
  [ 'name', 'Ankit' ],
  [ 'age', '22' ],
  [ 'isLoggedIn', false ]
]
  */

console.log(tinderuser.hasOwnProperty("isLoggedIn")); // 'hasOwnProperty' check karte hai ki ye exist karta hai ki nahi in true/false 

//******************************************************************** */

const course = {
    coursename: "javascript",
    price: 999,
    courseinstructor:"hitesh"
}

//course.courseinstructor
//OR

const {courseinstructor} = course // value extract karna hai kaha se 'course' se , kiska 'courseinstructor' ka
console.log(courseinstructor);

//OR

const {courseinstructor:instructor} = course // agar 'courseinstructor' naam bada lagta hai to ish tarah se kar sakte ho
console.log(instructor); // o/p => hitesh

//how API file look like means JSON file

// {
//     "name": "Ankit",
//     "age":22,
//     "location":"prayagraj"
// }
//it is also contain in array where object declare
[
    {},
    {},
    {}
]