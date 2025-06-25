// splice in js

// splice is the method to delete the values by their indexes
// is example mein humne sirf 3 value ko target kara hain 
//  yani ki 3 ke baad jitni bhi values hain vo sab delete hogi
var arr = [1,2,3,4,5];
arr.splice(3);  
console.log(arr);


// this is the correct way to use splice method 
// it means you need to first give splice the index and then 
// value count how many you want to cut
//  then splice working properly
var arr = [1,2,3,4,5];
arr.splice(3,1);  
console.log(arr);