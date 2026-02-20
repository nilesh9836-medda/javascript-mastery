a = [1,2,3,4,5];
console.log(`Array Length: ${a.length}`) // Array length

// Increase the array length to 7
a.length = 7;

console.log("After Increasing Length: ", a);

// Decrease the array length to 2
a.length = 2;
console.log("After Decreasing Length: ", a)
console.log("After Decreasing Length: ", +a) // NaN