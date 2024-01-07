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

    document.getElementById('timer').innerText = leadingHours + ":" + leadingMinutes + ":" + leadingSeconds
}

// window.setInterval(stopWatch, 1000)

// Variables for set Internal
let timerInterval = null

startBtn.addEventListener('click', () => {
    if (timerInterval === null) {
        timerInterval = setInterval(stopWatch, 1000)
        startBtn.classList.remove('start')
        startBtn.classList.add('pause')
        startBtn.innerHTML = '<i class="ri-pause-line ri-xl"></i>'
    } else {
        clearInterval(timerInterval)
        startBtn.classList.remove('pause')
        startBtn.classList.add('start')
        startBtn.innerHTML = '<i class="ri-play-fill ri-xl"></i>'
        timerInterval = null
    }
})

/*pauseBtn.addEventListener('click', () => {
    clearInterval(timerInterval)
    timerInterval = null
})*/

resetBtn.addEventListener('click', () => {
    clearInterval(timerInterval)
    timerInterval = null
    seconds = 0
    minutes = 0
    hours = 0
    document.getElementById('timer').innerText = "00:00:00";
    startBtn.classList.remove('pause')
    startBtn.classList.add('start')
    startBtn.innerHTML = '<i class="ri-play-fill ri-xl"></i>'
})