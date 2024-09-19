function currentTime() {
    const now = new Date();
    const time = now.toLocaleTimeString();
    document.getElementById("clock").textContent = time;
}

setInterval(currentTime, 1000);