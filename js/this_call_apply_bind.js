// 1] this
// this keyword is a special keyword in js which changes it's value in different context

// global => window
// function => window
// method => obj
// object ke andar ke function ko method kaha jata hain
// method ke andar this ki value object hoti hain

//  event listeners
// var button = document.querySelector("button");
// button.addEventListener("click", function (){
//     this.style.color = "red";
// })

// 2] call, apply, bind => agar tumhare pass koi function hai and koi object hai and tumhe function chalana hai aur 
// by default jo this ki value window hai use window na rakh kar point karawana hai kisi object taraf niche diye gaye 
// example ki taraha

// 1
function abcd(){
    console.log(this);
    
}
var obj ={name:"Suyog",age:24}

abcd.call(obj);

// 2
function wxyz(val1, val2, val3){
    console.log(this, val1, val2, val3);
    
}
var myobj ={name:"Ramu",age:34}

// call
wxyz.call(myobj,1,2,3);

// apply
wxyz.apply(myobj, [1,2,3]);


// 3
function abcd(){
    console.log(this);
    
}
var obj ={name:"Suyog",age:24}

var bindedfunc = abcd.bind(obj); // ye abcd ko obj se bind kar dega aur 1 naya binded function aapko de dega
bindedfunc();