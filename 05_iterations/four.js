//for in

const myObj = {
    JS : "JavaScript",
    OS : "OperatingSystem",
    TS : "TypeScript"
}

for(const key in myObj){
    console.log(key); // it will show only key like JS,OS,TS
}

for(const key in myObj){
    console.log(myObj[key]); // it will show value of key like JavaScript, OperatingSystem, TypeScript
}

for(const key in myObj){
    console.log(`${key} is shortcut for ${myObj[key]}`);
}

// Array

const myArray = ["Rohan", "Rohit", "Rakesh", "Rashmi"]

for(const key in myArray){
    console.log(key); // it will print only key not value like 0, 1, 2, 3
}
// if you want to print value in array
for(const key in myArray){
    console.log(myArray[key]); // Rohan, Rohit, Rakesh, Rashmi
}

// can we use 'for in' in map, lets check

const map = new Map()

map.set('IN', "India")
map.set('USA', "United State of America")
map.set('FR', "France")

for(const key in map){
    console.log(key); // No, it can't work 
}