const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minutes");
const secondEl = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");

function updateClock() {
    const now = new Date();
    let h = now.getHours()
    let m = now.getMinutes()
    let s = now. getSeconds()
    const ampm = h>=12 ? "PM" : "AM";
    h = h % 12 || 12;


    hourEl.innerText = h;
    minuteEl.innerText = String(m).padStart(2, "0");
    secondEl.innerText = String(s).padStart(2, "0");
    ampmEl.innerText = ampm;
}


updateClock();
setInterval(updateClock, 1000);