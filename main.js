const fancyText = document.querySelector('.fancy-animate');

/* Single letter 'fancy' animation*/
const strText = fancyText.textContent;
const splitText = strText.split('');
fancyText.textContent = "";

for(let i=0;i<splitText.length;i++) {
    fancyText.innerHTML += "<span>" +splitText[i] + "</span>";
    //fix spans with spaces not having width
    if(splitText[i] === " ") {
        let currentSpans = fancyText.querySelectorAll('span');
        currentSpans[currentSpans.length-1].innerHTML = "&nbsp";
        //since all letter spans become individual inline blocks, must add line break on smaller screens
        if(window.matchMedia("(max-width: 600px)").matches){fancyText.innerHTML += "<br>"};
    }
}

function onTick(){
    const span = fancyText.querySelectorAll('span')[char];
    span.classList.add('popFade');
    char++;
    if(char===splitText.length) {
        complete();
        return;
    }
}

function complete() {
    clearInterval(timer);
    timer = null;
}

let char = 0;
let timer = setInterval(onTick, 50);

/* Modal */
const modal = document.querySelector(".modal");
const trigger = document.querySelector(".info");
const closeButton = document.querySelector(".close-button");
function toggleModal() {
    modal.classList.toggle("show-modal");
}
function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}
trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);