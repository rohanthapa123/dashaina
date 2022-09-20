const audio = new Audio('dashainDhun.mp3');
let starter = document.querySelector(".container").firstElementChild;
function playSound(){
    audio.play();
    starter.innerHTML = "";
    starter.style.backdropFilter = "none";
}
