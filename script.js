function updateTimerDisplay(minutes, seconds) {
    const timeLeft = document.getElementById("time-left")
    timeLeft.innerText = `${minutes}:${seconds.toString().padStart(2, "0")}`;
}

function startTimer(duration) {
    let minutes = Math.floor(duration / 60);
    let seconds = duration % 60;
    updateTimerDisplay(minutes, seconds)

    const timeLeft = setInterval(() => {
        duration --;
        let minutes = Math.floor(duration / 60);
        let seconds = duration % 60;
        updateTimerDisplay(minutes, seconds)
    }, 1000);


    setTimeout(() => {
        clearInterval(timeLeft)
    }, duration * 1000)
}


startTimer(2100)
