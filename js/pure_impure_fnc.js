// pure functions => 1] it should always return same output from same input 
// 2] it will never change/update the value of a global variable


// this is not pure function this is impure function
// function abcd(val){
//     return Math.random()*val;
// }

// var ans1 = abcd(2);
// var ans2 = abcd(2);

// this is not impure function this is pure function

function abcd(a,b){
    return a*b;
}
var ans1 = abcd(1,2);
var ans2 = abcd(1,2);
console.log(ans1);
console.log(ans2);
