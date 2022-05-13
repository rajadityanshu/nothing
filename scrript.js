var vid = document.getElementById("video");
img = document.querySelector(".img");
video=document.querySelector(".video");
var sound = new Audio("img/1.mp3");
img.classList.add("imgani");
function btn() {
    
    video.style.visibility="visible";
    vid.play();
sound.play();
    setTimeout(() => {
        video.style.visibility="hidden";
    }, 1100);
  
}
//  setInterval(() => {
//    
// }, 1100);