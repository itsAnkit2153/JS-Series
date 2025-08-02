// for 

for(let i=0; i<10; i++){
    const element  = i
    if(i==5){
        console.log("Finally it arrived at 5")
    }
    console.log(element);
}

for(let i=2; i<=3; i++){
    console.log(`Table of ${i}`);
    for(let j=1; j<=10; j++){
        //console.log(`Inner loop ${j}`);
        console.log(i + "*" + j + "=" + i*j);
    }
}

//array

const myArray = ["Superman", "Wanda", "IronMan"]
for(let i=0; i<myArray.length; i++){
    let element = myArray[i];
    console.log(element);
}

//break and continue

for(let i=0; i<=10; i++){
    if(i==3){
        console.log(`We skipped ${i}`);
        continue;
    }
    if(i==6){
        console.log(`End`);
        break;
    }
    console.log(`Value of i is ${i}`);
}