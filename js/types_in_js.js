//  types in js
// 1. primitive types
// 2. reference types
// 3. special types
// 4. user-defined types
// 5. built-in types
// 6. dynamic types
// 7. static types
// 8. weakly typed types
// 9. strongly typed types
// 10. duck typed types
// 11. null types
// 12. undefined types
// 13. symbol types
// 14. bigint types
// 15. function types
// 16. object types
// 17. array types
// 18. date types
// 19. regex types
// 20. error types
// 21. promise types
// 22. map types
// 23. set types
// 24. weakmap types
// 25. weakset types
// 26. typedarray types 
// 27. arraybuffer types
// 28. dataview types
// 29. json types
// 30. module types
// 31. class types
// 32. interface types
// 33. enum types
// 34. namespace types
// 35. type alias types
// 36. type assertion types
// 37. type inference types
// 38. type guard types
// 39. type predicate types
// 40. type mapping types

// 1. primitive types
//    It means aisi koi bhi value jisko copy karne par real copy hota hai, 
//    use hum primitive type kahte hai, ya phir wo value primitive hoti hai.
//    Primitive types are the most basic data types in JavaScript.
//    They are immutable and do not have methods or properties.

// 2. reference types = [], (), {}
//    It means aisi koi bhi value jisko copy karne par real copy nahi hota, 
//    balki us main value ka reference pass ho jata hai, 
//    use hum reference type kahte hai.

var a = 12;  // a is a primitive type, so it is a copy of the value 12
var b = a; // b is a copy of a, so b = 12
    b = 12 + 2; // b is now 14, but a is still 12
    console.log(a); // 12
    console.log(b); // 14


var a = [12,13]; // a is a reference type, so it is a reference to the array [12, 13]
// a is an array, which is a reference type in JavaScript.
var b = a; // b is a reference to a, so b = [12, 13]
b.push(14); // b is now [12, 13, 14], and a is also [12, 13, 14]
b.pop(); // b is now [12], but a is still [12, 13]
console.log(a); // [12]
console.log(b); // [12]
