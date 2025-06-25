//  1] single minus 

//  var let const difference
// var, let, const are all used to declare variables in JavaScript, 
// but they have different scopes and behaviors.

// variables and constants (these are just english words, not keywords)

// var (this is a keyword) = it is used to declare a variable
// score = 10
// lives = 0
//  code mein koi bhi data store karne ke liye jiska use
//  hota hai use variable kahte hain

// const (this is a keyword) = it is used to declare a constant
// pi = 3.14 (this is a constant value, it cannot be changed)
//  code mein koi bhi data store karne ke liye jiska value change
//  nahi hota hai use constant kahte hain
var dulha = "ram";
var dulhan = "sita";
dulha = "Haramkhor"; // var allows re-assignment
console.log(dulha + " weds " + dulhan);
const dulha = "ram";
const dulhan = "sita";
dulha = "Haramkhor"; // const not allow re-assignment
console.log(dulha + " weds " + dulhan);

// let (this is a keyword) = it is used to declare a block-scoped variable

//  2] double minus topics
//  difference between var, let, and const

//  jisne javascript banai usne 2 version banaye javascript ke 
//  1] ES5 (old version of JavaScript, also known as ECMAScript 5) 
//  => var

//  2] ES6 (new version of JavaScript, also known as ECMAScript 6 or ES2015)
//  => let and const

//  we use ES5 and ES6 mix to write JavaScript code
// how this is possible?
// possible aise hain ki humara jo web browser install hota hain update hota 
// hain uske sath sath HTML, CSS, aur JavaScript ki new properties aur concepts
// automatically install / update ho jati hain 

// iska matalb hume kabhi html, css, aur javascript ko alag se install nahi 
//  karna padta, wo preinstalled hote hain web browser me.

//  we can use var, let, and const in the same code

//  difference between var, let, and const
// *{var}*
// 1] var old js me tha
// 2] var function scoped hota hain => iska matlab ye hain ki var apne parent function 
//    me kahi bhi use ho sakta hain, lekin let sirf usi block me use ho sakta hain 
// 3] var adds itself to the window object =>  iska matlab javascript language me kuch
//    cheeje nahi hain lekin hum phir bhi use kar sakte hain aur wo cheeje hume javascript 
//    se nahi balki browser se milti hain, aise sare features jo js ka part nahi hain
//    but phir bhi usko use kar sakte hain unhe hum dhoond sakte hain ek particular 
//    object mein jiska naam *window* hai
//    example of window object=1]alert,2]prompt,3]console,4]fetch,5]localstorage,6]print 

// *{let}*
// 1] let and new js me hain
// 2] let braces scoped hota hain 
// 3] let doesn't adds itself to the window object

// *{const}*
// 1] const and new js me hain
// 2] const braces scoped hota hain
// 3] const doesn't adds itself to the window object