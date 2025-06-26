// first class functions

// javascript mein 1 concept hain jiski help se hum function ko as a value use kar sakte hain

function abcd(a){
    a();
}

abcd(function(){console.log("Hello")})