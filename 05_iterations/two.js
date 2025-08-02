//while and do-while loop

//while 

let i=1
while(i<=10){
    console.log(`Value of i is ${i}`);
    i+=2;
}

// Array

let myArray = ["BlackAdam", "Wanda", "IronMan"]
let j=0
while(j<myArray.length){
    console.log(`${myArray[j]}`);
    j++;
}

//do-while

let score = 0
do{
    console.log(`Score is ${score}`); // atleast one time always even loop breaked
    score++;
}while(score<=5);