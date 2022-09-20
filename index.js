const audio = new Audio('songs.mp3');
let starter = document.querySelector(".container").firstElementChild;
function playSound(){
    audio.play();
    starter.innerHTML = "";
    starter.style.backdropFilter = "none";
}
