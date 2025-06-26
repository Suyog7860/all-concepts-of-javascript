// 1] DOM => Document Object Model
/*
Definition:
The DOM (Document Object Model) is a programming interface for web documents. 
It represents the page so that programs can change the document structure, 
style, and content.

Types:
1. Document Node - Represents the entire document.
2. Element Node - Represents HTML elements (e.g., <div>, <p>).
3. Attribute Node - Represents attributes of HTML elements.
4. Text Node - Represents the text inside elements.
5. Comment Node - Represents comments in the HTML.

Example:
Suppose you have this HTML:
    <div id="demo">Hello World</div>

You can access and modify it using JavaScript and the DOM:
*/
// const demoDiv = document.getElementById('demo');
// demoDiv.textContent = 'Hello, DOM!';

// 2] 4 pillers of DOM
//    A) selecting of an element = aisa koi element jo HTML me likha hai aur mujhe ise js me select karna hai
//    B) changing HTML
//    C) Changing CSS
//    D) Event Listeners


// A) selecting of an element
// var a = document.querySelector("h1")
// console.log(a); 


// B) changing HTML

// first way
// var a = document.querySelector("h1")
// a.innerHTML = "Mood changed"
// console.log(a);

// second way
// var a = document.querySelector("h1").innerHTML = "Mood changed"
// console.log(a); 


// C) Changing CSS
// var a = document.querySelector("h1")
// a.style.color = "white"
// a.style.backgroundColor = "black"


// D) Event Listeners
// var a = document.querySelector("h1")
// a.addEventListener("click", function(){
//     a.innerHTML = "Aaj Nahi Padhunga Dosto"
//     a.style.color = "grey"
//     a.style.backgroundColor = "wheat"
//     console.log("auther : Suyog");
    
// })



// 3] simple example of bulb or whatever clicking on the same button
// var bulb = document.querySelector("#bulb")
// var btn = document.querySelector("button")
// var flag = 0

// btn.addEventListener("click", function(){
//     if(flag == 0){
//         bulb.style.backgroundColor = "yellow"
//         console.log("ON");
//         flag = 1
//     }else{
//         bulb.style.backgroundColor = "transparent"
//         console.log("OFF");
//         flag = 0     
//     }
// } )
    

// 4] multiple events

//  agar hume koi bhi element id ki help se chalana hai to queryselector ki
//  jagah hum getelementbyid ka istemal kar sakte hai

//  agar hume koi bhi element class ki help se chalana hai to queryselector aur
//  getelementbyid ki jagah hum getelementbyclassname ka istemal kar sakte hai

// innerhtml //alternative// textcontent = all text are treat as a simple text

var h = document.querySelectorAll("h2")
h.forEach(function(e){
console.log(e);
})

