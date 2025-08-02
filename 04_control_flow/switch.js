// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

// Switch: it is uses for multiple condition 

const month = 3
switch(month){
    case 1:
        console.log("january");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("march");
        break; // if we comment 'break' then it will print both 'march as well as april' so it required
    case 4:
        console.log("April");
        break;
    default:
        console.log("Not match");
        break;
}