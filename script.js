import ('./style.css')

// Variables for buttons
const startBtn = document.querySelector('#startBtn')
const pauseBtn = document.querySelector('#pauseBtn')
const resetBtn = document.querySelector('#resetBtn')

// Variables for time values 
let seconds = 0
let minutes = 0
let hours = 0

// Stopwatch function
const stopWatch = () => {
    seconds++

    if (seconds/60 === 1){
        seconds = 0
        minutes++

        if (minutes/60 === 1){
            minutes = 0
            hours++
        }
    }

    let displayTimer = document.getElementById('#timer').innerText = hours + ":" + minutes + ":" + seconds
}