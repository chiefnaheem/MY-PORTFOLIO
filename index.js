let txt = document.querySelector(".myProfession");

let texts = "A Software Developer,A Web Developer,& A Pharmacist";
let movingText = texts.split(",")
let timer;

function typingEffect(n){
    n = n>=movingText.length?0:n

        let text = movingText[n].split("");
        let loopTyping = function (){
            if (text.length > 0) {
                txt.innerHTML += text.shift()
            }else {
                deletingEffect(n);
                return false;
            };
            timer = setTimeout(loopTyping, 200); 
        }
    loopTyping()
 } 
   

function deletingEffect(j){
        let textDelete = movingText[j].split("");
        let loopDeleting = function(){
            if (textDelete.length > 0) {
                textDelete.pop();
                txt.innerHTML = textDelete.join("");
            }else {
                clearTimeout(timer)
                typingEffect(j+1);
                return false
            };
            timer = setTimeout(loopDeleting, 400);
        }
        loopDeleting();
    }

typingEffect(0);

