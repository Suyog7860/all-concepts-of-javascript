var con = document.querySelector("#container")
var love = document.querySelector("i")

con.addEventListener("dblclick", function(){

    love.style.transform = "translate(-50%, -50%) scale(1)"
    love.style.opacity = 0.8

    // setTimeout is function or method of browser 
    // setTimeout एक ब्राउज़र का फ़ंक्शन है जो किसी कोड 
    // को निर्धारित समय (मिलीसेकंड में) बाद चलाने के लिए उपयोग होता है।
    // aur ye humare code ko asynchronous bhi bana deta hain

    setTimeout(function(){
        love.style.transform = 0
    },1000);

    setTimeout(function(){
    love.style.transform = "translate(-50%, -50%) scale(0)"

    },2000);
})
  

