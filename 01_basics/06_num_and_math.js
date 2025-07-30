const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);
//number has very less methods in campare to 'string' so we convert into string then we can use string methods

console.log(balance.toString().length);
console.log(balance.toFixed(2)); // it shows no. of zeros after decimal

const num = 23.4553
console.log(num.toPrecision(3)); //23.5 // it shows that kitne value per mujhe focus karne hai
console.log(num.toPrecision(2)); //23

const num2 = 1000000
console.log(num2.toLocaleString()) // 1.000,000 but it shows foreign style
console.log(num2.toLocaleString('en-IN')); // 10,00,000 now it shows indian style

//******************************Maths******************************* */
console.log(Math.abs(-4));
console.log(Math.round(2.8));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.2));
console.log(Math.min(4,3,2,1,5));
console.log(Math.sqrt(25));
console.log(Math.pow(2,2));
console.log(Math.random()); // always come between 0 and 1;
console.log((Math.random()*10) +1); // here one value shift to the left , and if any number 0.04 then after sifting it wiil show 0 that's why we add 1 to avoid
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max-min+1)+min)); // here we min 10+ value
/*
Math.abs(-5)            // 5           // Absolute value
Math.acos(1)            // 0           // Arc cosine (in radians)
Math.acosh(2)           // 1.316...    // Inverse hyperbolic cosine
Math.asin(0)            // 0           // Arc sine (in radians)
Math.asinh(1)           // 0.881...    // Inverse hyperbolic sine
Math.atan(1)            // 0.785...    // Arc tangent (in radians)
Math.atan2(1, 1)        // 0.785...    // Arc tangent of y/x (in radians)
Math.atanh(0.5)         // 0.549...    // Inverse hyperbolic tangent

Math.cbrt(27)           // 3           // Cube root

Math.ceil(1.2)          // 2           // Rounds up
Math.clz32(1)           // 31          // Leading zero bits in 32-bit integer

Math.cos(Math.PI)       // -1          // Cosine (argument in radians)
Math.cosh(0)            // 1           // Hyperbolic cosine

Math.exp(1)             // 2.718...    // Exponential (e^x)
Math.expm1(1)           // 1.718...    // exp(x) - 1

Math.f16round(1.337)    // 1.3359375   // Round to Float16 precision (ES2023+)
Math.floor(1.9)         // 1           // Rounds down
Math.fround(1.337)      // 1.3370000123977661  // Round to nearest 32-bit float

Math.hypot(3, 4)        // 5           // Square root of sum of squares

Math.imul(2, 4)         // 8           // 32-bit integer multiplication

Math.log(1)             // 0           // Natural log (ln)
Math.log1p(1)           // 0.693...    // log(1 + x)
Math.log2(8)            // 3           // Base 2 logarithm
Math.log10(100)         // 2           // Base 10 logarithm

Math.max(1, 7, 3)       // 7           // Largest value
Math.min(1, 7, 3)       // 1           // Smallest value

Math.pow(2, 3)          // 8           // Power: base^exponent

Math.random()           // 0.123...    // Random [0, 1)

Math.round(1.6)         // 2           // Rounds to nearest integer

Math.sign(-5)           // -1          // Sign: -1, 0, or 1

Math.sin(Math.PI/2)     // 1           // Sine (argument in radians)
Math.sinh(0)            // 0           // Hyperbolic sine

Math.sqrt(9)            // 3           // Square root

Math.tan(0)             // 0           // Tangent (argument in radians)
Math.tanh(0)            // 0           // Hyperbolic tangent

Math.trunc(1.9)         // 1           // Truncate towards zero

 */