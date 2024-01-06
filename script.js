import ('./style.css')

// Variables for buttons
const startBtn = document.querySelector('#startBtn')
const pauseBtn = document.querySelector('#pauseBtn')
const resetBtn = document.querySelector('#resetBtn')

// Variables for time values 
let seconds = 0
let minutes = 0
let hours = 0

// Variables for leading zero
let leadingSeconds = 0
let leadingMinutes = 0
let leadingHours = 0

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

    if (seconds < 10){
        leadingSeconds = "0" + seconds
    } else {
        leadingSeconds = seconds
    }

    if (minutes < 10){
        leadingMinutes = "0" + minutes
    } else {
        leadingMinutes = minutes
    }

    if (hours < 10){
        leadingHours = "0" + hours
    } else {
        leadingHours = hours
    }


    let displayTimer = document.getElementById('timer').innerText = leadingHours + ":" + leadingMinutes + ":" + leadingSeconds
    console.log(displayTimer)
}

window.setInterval(stopWatch, 1000)