// let box = document.querySelector('.box')

// let posX = 0
// let posY = 0

// function move() {
//     if (posX <= 445) {
//         posX += 10
//         box.style.left = `${posX}px`
//         setTimeout(move, 110)

//     } else if (posX >= 440 && posY <=440) {
//         posY += 10;
//         box.style.top= `${posY}px`;
//         setTimeout(move, 110)
//     }
// }
// move()

let secondsRemaining

function Timer() {
    let seconds = 0
    let timeCount = setInterval(() => {
        secondsRemaining = (seconds + 1)
        seconds = secondsRemaining
        console.log(seconds);
        if (secondsRemaining >= 5) { //меняем 60 на любое число
            clearInterval(timeCount) // стоп для секундомера
            console.log(' bomb has been defused')
        }
    }, 1000);
}
Timer()

