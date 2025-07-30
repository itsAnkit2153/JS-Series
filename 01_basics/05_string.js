const name = "Ankit"
const age = 22

//concatenate
//console.log(name + age + " brief"); // outdated means old way to use

//modern concatenation
console.log(`my name is ${name.toUpperCase()} and my age is ${age}`); // here we can also use like 'toUpperCase'

//string property

const gameName = new String("Lucifer")
console.log(gameName[0]);
console.log(gameName.__proto__); // tells about object
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('i'));

const newString = gameName.substring(0, 3); // yaha end se 1 kam leta hai like here it prints 0 to 2
console.log(newString);

const anotherString = gameName.slice(-7, 4);
console.log(anotherString); // only slice hi hai jo peeche se substring deta hai per 'substring' aisa nahi karta
const city = "  allahabad   "
console.log(city);
console.log(city.trim());
const website = "https://ankit@.com/%20Choudhary"
console.log(website.replace("%20", "-"));
console.log(website.includes("ankit"));
const content = "how-are-you"
console.log(content.split("-")); //it can transform into array on basis of separater which you declare
/* 
// String name = "lucifer"
// Properties
"lucifer".length           // 7

// Character Access
"lucifer".charAt(2)        // "c"
"lucifer".at(-1)           // "r"

// Character Codes
"lucifer".charCodeAt(0)    // 108
"lucifer".codePointAt(0)   // 108

// Searching
"lucifer".indexOf("f")     // 4
"lucifer".lastIndexOf("e") // 5
"lucifer".includes("ci")   // true
"lucifer".startsWith("lu") // true
"lucifer".endsWith("fer")  // true
"lucifer".search(/i/)      // 3

// Extracting & Modifying
"lucifer".slice(2, 5)           // "cif"
"lucifer".substring(2, 5)       // "cif"
"lucifer".substr(2, 3)          // "cif"   (legacy)
"lucifer".replace("i", "X")     // "lucXfer"
"lucifer".replaceAll("e", "X")  // "lucifXr"

// Splitting & Joining
"lucifer".split("i")       // ["luc", "fer"]
"lucifer".concat(" morning") // "lucifer morning"

// Repeating & Padding
"lucifer".repeat(2)        // "luciferlucifer"
"lucifer".padStart(10, ".")// "...lucifer"
"lucifer".padEnd(10, ".")  // "lucifer..."

// Case Conversion
"lucifer".toUpperCase()    // "LUCIFER"
"lucifer".toLowerCase()    // "lucifer"

// Trimming
" lucifer ".trim()         // "lucifer"
" lucifer ".trimStart()    // "lucifer"
" lucifer ".trimEnd()      // " lucifer"

// Matching
"lucifer".match(/ci/)      // ["ci"]
// [..."lucifer".matchAll(/i/g)]      // All "i" matches, as iterator

// Others
// "lucifer".normalize()
// "lucifer".localeCompare("lucy")
// "lucifer".valueOf()
// "lucifer".toString()

// Iteration
// for (let char of "lucifer") { ... }

// Legacy HTML methods (rarely used)

*/