//Telegram bot
var submit = document.querySelector('#submit_btn');
submit.addEventListener('click', sendForm);
function sendForm() {
    let name = document.querySelector('#name').value;
    let lastName = document.querySelector('#lastName').value;
    let phone = document.querySelector('#phone').value;
    let email = document.querySelector('#email').value;
    let userQuestion = document.querySelector('#userQuestion').value;
    const token = "1025254186:AAG4f-ymQTmEbtON1PLHTC7ayrpAA2u-kTU";
    const chatId = "-1001308747027";
    let url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=`;

    let xhttp = new XMLHttpRequest();
    xhttp.open("GET", url + `Hello Ulyana, you have a new client. Name: ${name}, LastName: ${lastName}, Phone: ${phone}, Email: ${email}. His question is : "${userQuestion}" Please contact him.`, true);
    xhttp.send();
}

// Smooth transition
$(document).ready(function () {
    $("nav").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 1500);
    });
    $("#up").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 1500);
    });
});

