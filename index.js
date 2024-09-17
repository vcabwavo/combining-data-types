// Your code goes here

let addStr = "cheese" + 42
console.log (addStr)

// ^ Got "Cheese42"

let addStr2 = "4" + 2
console.log(addStr2)

// ^ Got "42"

console.log(typeof(addStr), typeof(addStr2))

// ^ Got a string for both.

let addPie = "pie" +  true
console.log(addPie)

// ^ Got "pietrue"

let addFalse = 8 + false
console.log(addFalse)

// ^ Got 8

let addTrue = 8 + true 
console.log(addTrue)

let addNull = null + 7
console.log(addNull)

let addUndef = undefined + 7
console.log(addUndef)

// ^ You get 7 and NaN (for undefined)


let addCat = null + "cat"
console.log(addCat)

let addUndefCat = undefined + "cat"
console.log(addUndefCat)

// ^ You get "nullcat" and "undefined cat"


let stringCut = "This is a string" - 35
console.log(stringCut)

// ^ You get NaN

let boolCut = 17 - true
console.log(boolCut)

let falseCut = 17 - false
console.log(falseCut)

// ^ Got 16 and 17