//Date 
let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toISOString());
console.log(myDate.toTimeString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleTimeString());
console.log(typeof(myDate)); // typeof => 'object'

let myCreateDate = new Date(2025, 3, 28)
console.log(myCreateDate.toDateString());

let myCreateTime = new Date(2024, 3, 28, 5, 3)
console.log(myCreateTime.toLocaleString());

let myTimeZone = new Date("2023-01-12")
console.log(myTimeZone.toLocaleString());

let getTimeStamp = Date.now();
console.log(getTimeStamp); // it gives you the current exact time in millisecond
console.log(myTimeZone.getTime());// it gives you the exact time in millisecond for any specific date/time which you store in variable like 'myTimeZone'

console.log(Math.floor(Date.now()/1000)); // now it will show in seconds

let newDate = new Date()  // This creates a new object that holds all the information about the current date and time (like the year, month, day, hour, minute, second, and even time zone).

console.log(newDate);
console.log(newDate.getDate());

console.log(newDate.getDay()); // day gives in number if 3 means 'wednesday'
console.log(newDate.getMonth());
console.log(newDate.getFullYear());

const now = new Date(); // basically it is timezone where we can customized

const formattedDate = now.toLocaleString('default', {
    weekday: 'long',    // e.g., "Wednesday"
    year: 'numeric',    // e.g., "2025"
    month: 'long',      // e.g., "July"
    day: 'numeric',     // e.g., "30"
    hour: '2-digit',    // e.g., "05 PM"
    minute: '2-digit',  // e.g., "45"
    second: '2-digit',  // e.g., "09"
    timeZoneName: 'short' // e.g., "IST"
});

console.log(formattedDate);