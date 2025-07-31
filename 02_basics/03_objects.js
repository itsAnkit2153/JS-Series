//singleton
//object.create


//objects literals

const mysym = Symbol("key1")
const JsUser = {
    name:"Ankit",
        "full name":"Ankit Vishwakarma",  // this is for full name
            age:22, 
                mysym: "mykey1", //yaha ye ek normal key jo ki string ki tarah hai // this is 'Symbol' which is known for unique()

                  // [mysym]:"mykey1",// yaha jab symbol ko refer karte hai tab hum [mysym] bracket ke andar likhte hain
                       location:"Greater Noida",
                           email:"ankit@gmail.com",
                               isLoggedIn: false,
                                   lastLoggindays: ["monday", "saturday"]

                                   }
                                   console.log(JsUser.name);
                                   console.log(JsUser["name"]); // you can use both ways to find answer

                                   console.log(JsUser["lastLoggindays"]);
                                   console.log(JsUser["full name"]);
                                   //console.log(JsUser["mysym"]); // this is for string 'mysym:"mykey1"
                                   
                                   console.log(JsUser["mysym"]);// this is for symbol 
                                   console.log(typeof JsUser.mysym);

                                   JsUser.email = "lucifer@gmail.com"
                                   //Object.freeze(JsUser);// once you freeze the object then it will not change in future

                                   JsUser.email = "ankit@gmail.com"
                                   console.log(JsUser["email"]); // it will not show any output because it freezed already

                                   JsUser.greeting = function(){
                                    console.log("Hello, JS user");
                                   }

                                   JsUser.greetingTwo = function(){
                                    console.log(`Hello , Js User ${this.name}`);
                                   }

                                   console.log(JsUser.greeting());// Hello, JS user
                                   console.log(JsUser.greetingTwo());//Hello, Js User Ankit

                                   //Note : object ko access karne ke liye hum [] and . ka use karte hai