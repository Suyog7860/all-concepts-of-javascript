// hoisting is a JavaScript mechanism where variables 
// and function declarations are moved to the top of 
// their containing scope during the compile phase.

// This means that you can use variables and functions
// before they are declared in the code, but the value
// of the variable will be `undefined` until the line
// where it is assigned a value is executed.

// hoisting defination = Variables and functions are hoisted 
// which means there declaration is moved on the top of the code 
// Example of hoisting with variables

// var a = 10; // variable declaration and initialization
// convert the above code to this
// var a;  // variable declaration (hoisted to the top)
// a = 10; // variable initialization (not hoisted)
var a;  // variable declaration (hoisted to the top)
a = 10; // variable initialization (not hoisted)


// difference between undefined and not defined
// undefined = variable is declared but not initialized
// not defined = variable is not declared at all