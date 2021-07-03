var txt = document.querySelector(".myProfession");

var texts = ["A Software Developer", "A Web Developer", "A Programmer"];
var i = 0;
var timer;
function typingEffect(){
    var text = texts[i].split("");
    var loopTyping = function (){
        if (text.length > 0) {
            txt.innerHTML += text.shift()
        }else {
            deletingEffect();
            return false;
        };
        timer = setTimeout(loopTyping, 500);
    }
    loopTyping()
}
function deletingEffect(){
    var text = texts[i].split("");
    var loopDeleting = function(){
        if (text.length > 0) {
            text.pop();
            txt.innerHTML = text.join("");
        }else {
            if (text.length > (i + 1)) {
                i++
            } else{
                i = 0;
            };
            typingEffect();
            return false;
        };
        timer = setTimeout(loopDeleting, 200);
    }
    loopDeleting();
}
typingEffect();