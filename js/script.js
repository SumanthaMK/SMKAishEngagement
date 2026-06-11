const eventDate = new Date("August 30, 2026 09:00:00");

function updateCountdown(){

const now = new Date();

const diff = eventDate - now;

const days =
Math.floor(diff/(1000*60*60*24));

const hours =
Math.floor((diff%(1000*60*60*24))/(1000*60*60));

const minutes =
Math.floor((diff%(1000*60*60))/(1000*60));

const seconds =
Math.floor((diff%(1000*60))/1000);

document.getElementById("days").textContent = days;
document.getElementById("hours").textContent = hours;
document.getElementById("minutes").textContent = minutes;
document.getElementById("seconds").textContent = seconds;
}

setInterval(updateCountdown,1000);
updateCountdown();