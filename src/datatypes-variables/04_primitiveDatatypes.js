var myInteger = 12; // 32-bit number (from -2,147,483,648 to 2,147,483,647)
var myLong = 9310141419482; // 64-bit number (from -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807)
var myFloat = 5.5; // 32-bit floating-point number (decimal)
var myDouble = 9310141419482.22; // 64-bit floating-point number
var myBoolean = true; // 1-bit true/false (0 or 1)
var myBoolean2 = false;
var myNotANumber = NaN;
var NaN_Example = 0/0; // NaN: Division by Zero is not possible
var notDefined; // undefined: we didn't define it to anything yet

// console.log(aRandomVariable); // undefined // It will throw a ReferenceError
console.log(myInteger,myLong,myFloat,myDouble,myBoolean,myNotANumber,NaN_Example,notDefined);

let s = "Hello JavaScript"; // String Datatype
let empty = null; // Null Datatype: Represents an intentional absence of any value.
let sym = Symbol('unique'); // Symbol Datatype: Represents unique and immutable values, often used as object keys.
let bigNumber = 123456789012345678901234567890n; // BigInt Datatype: Represents integers larger than Number.MAX_SAFE_INTEGER.

console.log(s,empty,sym,bigNumber);