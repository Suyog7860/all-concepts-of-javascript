//  new keyword => jab bhi new lagta hai humesha 1 blank object apne man mein banalo 

function abcd(){
    this.age = 24;
}

new abcd();

// new keyword always creates a blank object for the constructor function 
// which is getting called just after new keyword.



// iife = immediately invoked function expression

// normal function
 function abcd (){

}

// iife we cannot access private variable here
(function (){
    var a = 12;
}) ()


// we can access private variable like this
var ans = (function (){
    var privateval = 12;
    return {
        getter: function(){
            console.log(privateval);
            ans.getter()
        },
        setter: function(val){
            privateval = val;
        }
    }
}) ()