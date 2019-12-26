var header = document.querySelector('.header');
var paralax = document.querySelector('.paralax');
var navigation = document.querySelector('nav');
window.addEventListener("scroll", parallax);

function parallax(event) {
    let offset = window.pageXOffset;
    header.style.backgroundPositionY = offset + `px`;
    paralax.style.backgroundPositionY = offset + `px`;
}

//Telegram bot
var submit = document.querySelector('#submit_btn');
submit.addEventListener('click', sendForm);
function sendForm() {
    let name = document.querySelector('#name').value;
    let lastName = document.querySelector('#lastName').value;
    let phone = document.querySelector('#phone').value;
    let email = document.querySelector('#email').value;

    const token = "1025254186:AAG4f-ymQTmEbtON1PLHTC7ayrpAA2u-kTU";
    let url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=1025254186&text=`;

    let xhttp = new XMLHttpRequest();
    xhttp.open("GET", url + `Hello Ulyana, you have a new client. Name: ${name}, LastName: ${lastName}, Phone: ${phone}, Email: ${email}. Please contact him.`, true);
    xhttp.send();
}