# Stopwatch-Application
### NAME : ASHWIN KUMAR A
### REGISTER NUMBER : 212222100006
## index.html
```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Stopwatch</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="stopwatch">
    <div id="display">00 : 00 : 000</div>
    <div class="buttons">
      <button id="start">Start</button>
      <button id="pause">Pause</button>
      <button id="reset">Reset</button>
    </div>
  </div>
  <script src="script.js"></script>
</body>
</html>
```
## style.css
```
body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #202020;
  font-family: Arial, sans-serif;
  color: #fff;
}

.stopwatch {
  text-align: center;
  background: #2c2c2c;
  padding: 20px 40px;
  border-radius: 5px;
}

#display {
  font-size: 2.5em;
  margin-bottom: 20px;
}

.buttons button {
  padding: 10px 20px;
  margin: 5px;
  font-size: 1em;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

#start { background: #1fff27; color: white; }
#pause { background: #fff200; color: white; }
#reset { background: #ff3b2d; color: white; }
```
## script.js
```
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
```
