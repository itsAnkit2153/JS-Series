//JavaScript Execution Context

/**
{} : Global Execution context 
 isme hum 'this' ko refer karte hain
 NOTE: Browser(means jab browser me inspect karte hain) ka 'Global Execution Context' thoda alag hota 'Node.js'  se (means jisme hum abhi execute kar rahe hain vo Node.js hain)

 [Normally two types Execution:
 1. Global Execution Context
 2. Function Execution Context 

 But in Mongoose
 3. Eval Execution Context]

 there are two phase in code:
 1. Memory Creation Phase or Creation Phase
 2. Execution Phase

 //EXAMPLE:

 let val1 = 10
 let val2 = 20
 function addNum(num1, num2){
    let total = num1 + num2
    return total
 }
let result1 = addNum(val1, val2)
let result2 = addNum(3, 4)

// steps to do:
1st: Global Execution, where we refer to 'this' keyword
2nd: Memory Phase,
here, 
        val1 = undefined
        val2 = undefined
        addNum = definition
        result1 = undefined
        result2 = undefined

3rd: Execution Phase
here, 
        val1 = 10
        val2 = 20
        Note: yah function or function ke andar koi execution nahi hoga
        so direct 'result1' ke 'addNum' ko execute karenge
        addNum = creation of Global Execution [new variable environment + execution thread]
now inside of creation of Global Execution :
    1.Memory Phase:
        val1 = undefined
        val2 = undefined
        total = undefined
    2.Execution Context
        val1 = 5
        val2 = 10
        total = 15

    NOTE: now value of 'total' move and store in  initial or 1st step i.e Global Execution

    NOTE: one step hone ke baad 'creation global execution' delete hoga aur phir se repeat hoga

/*************************CALL STACK //

if there is more than one call function like one(), two(), three()
then here it follow 'last in first out' LIFO means jo last me 'global execution' stack ke andar gaya hai vo pahle niklega


NOTE: ishe aur ache se samajhne ke liye browser per ja  kar 'inspect' karna aur phir find 'source' aur vaha per ek naya snippet banana like 'chaiaurcode.js'  aur 3 function create kariyega like one(), two(), three() then step by step run kariyega 


 */