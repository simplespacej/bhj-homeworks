let timeLeft = 59;

const countdownElement = document.getElementById('timer');

const countdown = setInterval (function() {
    if (timeLeft<=0) {
        clearInterval(countdown);
        alert("Вы победили в конкурсе!");
    } else {
        countdownElement.innerHTML = timeLeft;
        timeLeft--;
    }
}, 1000);