

//Array string
["", "", ""]

//Array object
[{}, {}, {}]

// for of : similar to for(auto m : arr) where ':' replace with 'of'

const arr = [1, 2, 3, 4, 5]

for(const num of arr){ // it define that kis cheez per loop lagana hai like yaha per 'arr' per loop laga rahe hai
    console.log(num);

}

const greetings = "Hello World!"
for(const greet of greetings){
    console.log(`${greet}`);
}

// maps : it print unique value

const map =  new Map()
map.set('IN', "India")
map.set('USA', "United State of America")
map.set('FR', "France")
map.set('IN', "India")
console.log(map);

//we can also use 'for of' in map
for(const [key, value] of map){// if you want to print 'key and value' both then use [key, value]
    console.log(key, ":-", value);
}

// can we use 'for of' in object , lets check

const myObj = {
    game1:"Pubg",
    game2:"Cricket"
}

for(const [key, value] of myObj){
    console.log(key, ":-", value); // so there is a error //myObj is not iterable
}

// we can study other method to use in future like 'for in'