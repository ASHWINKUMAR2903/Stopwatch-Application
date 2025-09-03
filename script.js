let startTime = 0
let elapsedTime = 0
let timerInterval = null
let isRunning = false

const display = document.getElementById("display")
const startBtn = document.getElementById("start")
const pauseBtn = document.getElementById("pause")
const resetBtn = document.getElementById("reset")

function timeToString(time) {
  let minutes = Math.floor(time / 60000)
  let seconds = Math.floor((time % 60000) / 1000)
  let milliseconds = Math.floor((time % 1000))
  let formattedMinutes = minutes.toString().padStart(2, "0")
  let formattedSeconds = seconds.toString().padStart(2, "0")
  let formattedMilliseconds = milliseconds.toString().padStart(3, "0")
  return `${formattedMinutes} : ${formattedSeconds} : ${formattedMilliseconds}`
}

function startTimer() {
  if (!isRunning) {
    startTime = Date.now() - elapsedTime
    timerInterval = setInterval(() => {
      elapsedTime = Date.now() - startTime
      display.textContent = timeToString(elapsedTime)
    }, 100) 
    isRunning = true
  }
}

function pauseTimer() {
  if (isRunning) {
    clearInterval(timerInterval)
    isRunning = false
  }
}

function resetTimer() {
  clearInterval(timerInterval)
  display.textContent = "00 : 00 : 000"
  elapsedTime = 0
  isRunning = false
}

startBtn.addEventListener("click", startTimer)
pauseBtn.addEventListener("click", pauseTimer)
resetBtn.addEventListener("click", resetTimer)