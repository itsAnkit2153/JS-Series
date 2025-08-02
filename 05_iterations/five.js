// for each: it is basically 'callbackfunction' means mujhe koi 'function' de do
// callbackfunction: isme function ka naam nahi liha jata hai 
// function ka parameter kuch bhi le sakte ho

const coding = ["JS", "CPP", "PYTHON", "JAVA"]

coding.forEach(function (item){
    console.log(item); // it will print all value of array like js, cpp, python, java
})

// arrow function
coding.forEach((val) => {
    console.log(val); // similarly print all value
})

//you can define more parameter 

coding.forEach((item, index, arr) => {
    console.log(item, index, arr);
})
/** OUTPUT:
 JS 0 [ 'JS', 'CPP', 'PYTHON', 'JAVA' ]
CPP 1 [ 'JS', 'CPP', 'PYTHON', 'JAVA' ]
PYTHON 2 [ 'JS', 'CPP', 'PYTHON', 'JAVA' ]
JAVA 3 [ 'JS', 'CPP', 'PYTHON', 'JAVA' ]
 */

//Object in Array

const myCoding = [
    {
        languageName:"JavaScript",
        languageFile: "Js"
    },
    {
        languageName: "Python",
        languageFile: "Py"
    },
    {
        languageName: "Java",
        languageFile: "java"
    }
]

myCoding.forEach((item) => {
    console.log(item.languageName);// it will give javaScript, python, java
})