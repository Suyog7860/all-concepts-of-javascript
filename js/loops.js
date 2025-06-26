// loops = loop ka matlab repeat hota hai
// 1 1 1 1 1 1 1 1 1 = repeatation of Number and print
// 1 2 3 4 5 6 7 8 9 = 9 time print repeated

// 3 baar Suyog print karna hai
// console.log("Suyog");
// console.log("Suyog");
// console.log("Suyog");
// 1 se jada baar print karne ke liye loop ka use karte hai 


// 1] for loop

// for (start; end; increment) {
//     // code to be executed
// }

// 0 - 10 tak print karte hai

// for (var i = 0; i < 11; i++){
//     console.log(i);
// }


// 2] while loop

// while (condition) {
//     // code to be executed
// }

// example of while loop
var a = 12;
while (a < 20) {
    console.log(a);
    a++;
}

// 3] for each loop

// for each loop = ye sirf array pe chalta hain matlab jab bhi tumhare paas 1 array ho, 
// tab for each use me aata hain

// example of foreach loop
var a = [1,2,3,4,5,6,7,8,9];
a.forEach(function(val){
    console.log(val + 2);
})

//  foreach loop kabhi bhi by default aapke main array mein change nahi karta 
//  wo aapko array ki temporary copy par changes karke deta hain jiske karan 
//  array humesha same rehta hain

// 4] for in loop

// objects ke uper loop lagane ke liye for-in loop ka use hota hain
// example of for-in loop

var obj = {
    name:"Suyog",
    age:24,
    city:"Pune"
}

for(var key in obj){
    console.log(key, obj[key]);
}


// 5] do while loop

// to aise cases jinme aapko atleast 1 bar kuch karna ho ya phir print karna ho to waha do while loop use hota hain
// example of do while loop

var a = 12;
do{
    console.log("Hi");
    a++;
}
while(a<15);