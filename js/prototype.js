// Definition:
// In JavaScript, every function has a property called 'prototype'.
// The prototype is an object that is shared among all instances created by that function (when used as a constructor).
// Properties and methods added to the prototype are accessible to all instances via inheritance.


//  jitne bhi objects aap banate ho unme [[prototype]] ye banta hain
//  thats mean object contain prototype
//  prototype contains lots of methods 
//  prototypes means wo features hain jo humne nahi diye the but by default mile the object ko 

var obj = { firstname : "Suyog"}
// obj(); // Removed because obj is not a function
console.log(obj.hasOwnProperty('firstname')); // true


// Example:
function Person(name) {
    this.name = name;
}

// Adding a method to the prototype
Person.prototype.sayHello = function() {
    console.log("Hello, my name is " + this.name);
};

const person1 = new Person("Alice");
const person2 = new Person("Bob");

person1.sayHello(); // Output: Hello, my name is Alice
person2.sayHello(); // Output: Hello, my name is Bob



// prototype inheritance
//  every extra properties given by javascript to every object it is called prototype
//  prototypes means wo features hain jo humne nahi diye the but by default mile the object ko 
//  aur wahi features ko pass kar dena via prototype it means prototypal inheritance

//  we will inharit human object to sheryiansstudent object in following example
var human ={
    canFly : false,
    canTalk : true,
    haveEmotions:true,
    haveFourLegs:false
}

var sheryiansStudent = {
    canMakeAmazingWebsites:true,
    canMakeAwesomeAnimations:true,
    canMakeWorldClassDesigns:true
}

sheryiansStudent.__proto__ = human;