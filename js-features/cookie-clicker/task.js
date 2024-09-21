let counter = 0;

const clicker__counter = document.getElementById('clicker__counter');
const cookie = document.getElementById('cookie');
cookie.addEventListener('click',
    function () {
        counter++;
        clicker__counter.innerHTML = counter;

        if (cookie.width === 200) {
            cookie.width += 10;
        } else  {
            cookie.width -= 10;
        }
    });