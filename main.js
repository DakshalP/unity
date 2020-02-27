const fancyText = document.querySelector('.fancy-animate');

function isMobile() {
    return window.matchMedia("(max-width: 600px)").matches;
}

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
        if(isMobile()){fancyText.innerHTML += "<br>"};
    }
}

function onTick(){
    const span = fancyText.querySelectorAll('span')[char];
    const tagline = document.querySelector("#tagline");
    span.classList.add('popFade');
    char++;
    if(char===splitText.length) {
        complete();
        //animate tagline to make it appear
        tagline.classList.add('fadeInUp');
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
const trigger = document.querySelector(".trigger");
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

/* Sidenav */
/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.height = "100vh";
  }
  
  /* Set the width of the side navigation to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.height = "0";
  }