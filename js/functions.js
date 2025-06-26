//  functions in javascript = functions ka matlab aap kuch code ko likh kar
//  koi naam de sakte ho aur baad mein us naam se call karke use sakte ho 

//  function = code ko naam dena aur baad mein use karna
//  function ka naam likhte hai aur () ke andar code likhte hai

//  example: 
//  function suyog() {
//      console.log("Suyog Ganesh Bhalerav");
//  }

//  suyog(); // function ko call karne ke liye function ka naam likhte


//  functions mainly 3 kaam ke liye use hota hai
//  1. jab aapka code aap turant nahi chalana chahte future mein chalana chahte ho
//  2. jab aapka code reuse karna cahhte ho
//  3. jab aap code chalana chahte ho har baar with different data 

//  total 6 styles hain function likhne ke
//  ES5 mein 3 tarike hain function likhne ke (old style js)
//  1. function declaration
//  2. function expression
//  3. function expression with anonymous function


//  ES6 mein 3 tarike hain function likhne ke (new style js)
//  1. Arrow function
//  2. Function expression with arrow function
//  3. Function expression with anonymous arrow function

 
// function examples

// function no = 1
function helloBolo(){
    console.log("Hello Everyone, I am Suyog Bhalerav, I am a Full Stack Developer");
}
helloBolo(); 

// function no = 2
function maggiRecipe() {
    console.log("Maggi Recipe: 1. Boil water, 2. Add Maggi noodles, 3. Add tastemaker, 4. Cook for 2 minutes, 5. Serve hot");
}
maggiRecipe();


// function no = 3
function abcd(a){ // a is variable and 12 is value it will be print.
    console.log(a);
}
abcd(12);


// function no = 4
function add(a, b) { // a and b are variables and 12 and 13 are values it will be print.
    console.log(a + b);
}
add(12, 13); // calling the function with values 12 and 13


// function no = 5
function abcd(a, b, c){
    console.log(a, b, c);
}
abcd(12, 13, 14); // calling the function with values 12, 13 and 14


// arguments = real value jo hum dete hai function chalate wakt
// parameters = function ke andar likhe variables jinme arguments wali value store hoti hai


// ****higher order class --  = aisa function jo accept karle 1 aur function ya phir wo 
// return karde 1 aur function  

// tarika n = 1 
function abcd (val){ // abcd is a higher order function 

}
abcd (function(){})


// tarika no = 2
function abcd (){
    return function(){}
}


// *** constructor function -- = normal function jis mein this ka istemaal ho and function ko
// call karte wakt new keyword ka use kare

// jab aapke pass aisa koi bhi moka ho ke aapko 1 jaisi properties waale bahot saare
// elements banane hain us wakt hum constructor use karte hain

function saanchaOfBiscuit (){
    this.width = 12;
    this.height = 22;
    this.color = "brown";
    this.taste = "sweet";
}

new saanchaOfBiscuit();


function circularButtonBanao(color){
    this.radius = 2;
    this.color = color;
    this.pressable = true;
}

var redbtn = new circularButtonBanao("red");
var bluebtn = new circularButtonBanao("blue");


// first class function -- = 