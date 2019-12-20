var header = document.querySelector('.header');
var paralax = document.querySelector('.paralax');
var navigation = document.querySelector('nav');
window.addEventListener("scroll", parallax);

function parallax(event) {
    let offset = window.pageXOffset;
    header.style.backgroundPositionY = offset + `px`;
    paralax.style.backgroundPositionY = offset + `px`;
}
