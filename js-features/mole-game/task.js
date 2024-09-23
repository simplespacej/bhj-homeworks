let deadCount = 0;
let lostCount = 0;
const totalMolesToKill = 10;
const maxMisses = 5;

function getHole(index) {
    return document.getElementById(`hole${index}`);
}

for (let i = 1; i <= 9; i++) {
    const hole = getHole(i);
    hole.addEventListener('click', function() {
        if (this.classList.contains('hole_has-mole')) {
            deadCount++;
            document.getElementById('dead').textContent = deadCount;
            this.classList.remove('hole_has-mole');
        } else {
            lostCount++;
            document.getElementById('lost').textContent = lostCount;
        }

        if (deadCount >= totalMolesToKill) {
            alert('Поздравляем! Вы убили 10 кротов и выиграли!');
            resetGame();
        } else if (lostCount >= maxMisses) {
            alert('Игра окончена! Вы промахнулись 5 раз.');
            resetGame();
        }
    });
}

function resetGame() {
    deadCount = 0;
    lostCount = 0;
    document.getElementById('dead').textContent = deadCount;
    document.getElementById('lost').textContent = lostCount;

    // Убираем всех кротов
    for (let i = 1; i <= 9; i++) {
        const hole = getHole(i);
        hole.classList.remove('hole_has-mole');
    }
}
