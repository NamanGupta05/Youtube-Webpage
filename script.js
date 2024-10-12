var menuico = document.querySelector(".menu-icon");
var sidemunu = document.querySelector(".side-bar");
var conatiner = document.querySelector(".container");
menuico.onclick = function(){
    sidemunu.classList.toggle("Small-side");
    conatiner.classList.toggle("large-container");
}
