// arrays = hum 1 variable mein 1 value store kar pate hain 
// par jab hame 1 se jada values store karni hoti hain tab 
// arrays ka use hota hain

// arrays = array aapko 1 variable mein multiple values store
// aur use karne ka freedom deta hain

//  array is a group of values

var arr = [1, 2, 3, 4, 5];
// index = counting
// array always start from 0 index its meaning in following line
// array values = 1 2 3 4 5 (this is values)
// index        = 0 1 2 3 4 (this is index of values)


// how arrays are made behind the scenes --

//  javascript convert the array into object like following example

var arr = [1,2,3,4,5];

// arr = {
//     0 : 1,
//     1 : 2,
//     2 : 3,
//     3 : 4,
//     4 : 5
// }

// array hain ya object pata karne ka tarika 

Array.isArray([]);
Array.isArray({});



//  why we can make negative indexes arrays in js --