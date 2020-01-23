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

    xhttp.onreadystatechange = function () {
        let modalWindowContent = document.getElementById("modalWindowContent");
        let modalWindow = document.getElementById("modalWindow");
        if (this.readyState == 4 && this.status == 200) {
            modalWindowContent.innerHTML = "The request was sent!";
            modalWindow.style.display = "flex";
            setTimeout(showModalWindow, 1000);
            function showModalWindow() {
                modalWindow.style.opacity = 1;
            }
            modalWindow.style.visibility = 'visible';
            let buttoncloseCustomerAlert = document.getElementById('closemodalWindow');
            buttoncloseCustomerAlert.addEventListener('click', closemodalAlertWindow);
        } else {
            modalWindowContent.innerHTML = "The request was not sent! Please check your internet connection!";
            modalWindow.style.display = "flex";
            setTimeout(showModalWindow, 1000);
            function showModalWindow() {
                modalWindow.style.opacity = 1;
            }
            modalWindow.style.visibility = 'visible';
            let buttoncloseCustomerAlert = document.getElementById('closemodalWindow');
            buttoncloseCustomerAlert.addEventListener('click', closemodalAlertWindow);
        }
    };
    xhttp.open("GET", url + `Hello Ulyana, you have a new client. Name: ${name}, LastName: ${lastName}, Phone: ${phone}, Email: ${email}. His question is : "${userQuestion}" Please contact him.`, true);
    xhttp.send();
};

// close modal window
function closemodalAlertWindow() {
    let modalWindow = document.getElementById("modalWindow");
    modalWindowContent.innerHTML = "";
    modalWindow.style.display = "none";
    modalWindow.style.opacity = 0;
    modalWindow.style.visibility = 'hidden';
};

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
