document.body.classList.add("lock-scroll");
document.addEventListener("DOMContentLoaded", () => {

    const music = document.getElementById("bgMusic");
    const enterBtn = document.getElementById("enterBtn");
    const overlay = document.getElementById("welcomeOverlay");
    const musicToggle = document.getElementById("musicToggle");

    /* Enter Invitation */

    if (enterBtn) {

        enterBtn.addEventListener("click", async () => {

            try {
                music.volume = 0.50;
                await music.play();
            } catch (err) {
                console.log("Music autoplay blocked:", err);
            }

            overlay.classList.add("hide");

document.body.classList.remove("lock-scroll");

setTimeout(() => {
    overlay.remove();
}, 600);

        });

    }

    /* Mute / Unmute */

    if (musicToggle) {

        musicToggle.addEventListener("click", () => {

            music.muted = !music.muted;

            musicToggle.textContent =
                music.muted ? "🔇" : "🔊";

        });

    }

    /* Countdown */

    const eventDate =
        new Date("August 30, 2026 11:00:00");

    function updateCountdown() {

        const now = new Date();
        const diff = eventDate - now;

        if (diff < 0) return;

        const days =
            Math.floor(diff / (1000 * 60 * 60 * 24));

        const hours =
            Math.floor(
                (diff % (1000 * 60 * 60 * 24))
                / (1000 * 60 * 60)
            );

        const minutes =
            Math.floor(
                (diff % (1000 * 60 * 60))
                / (1000 * 60)
            );

        const seconds =
            Math.floor(
                (diff % (1000 * 60))
                / 1000
            );

        document.getElementById("days").textContent = days;
        document.getElementById("hours").textContent = hours;
        document.getElementById("minutes").textContent = minutes;
        document.getElementById("seconds").textContent = seconds;
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);

    const venueLat = 13.3412887;
    const venueLng = 77.1076298;


    


    /* =========================
   ADD TO CALENDAR
========================= */

const title =
"Engagement Ceremony - Sumantha & Aishwarya";

const location =
"SriKrishna Mandira, Tumakuru, Karnataka";

const details =
"We are delighted to invite you to celebrate our engagement.";

const startDate =
"20260830T110000";

const endDate =
"20260830T140000";

/* GOOGLE CALENDAR */

const googleUrl =
`https://calendar.google.com/calendar/render?action=TEMPLATE
&text=${encodeURIComponent(title)}
&dates=${startDate}/${endDate}
&details=${encodeURIComponent(details)}
&location=${encodeURIComponent(location)}`;

document
.getElementById("googleCalendarBtn")
.href = googleUrl;

/* ICS FILE */

document
.getElementById("icsBtn")
.addEventListener("click", () => {

    const icsContent =
`BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
SUMMARY:${title}
DESCRIPTION:${details}
LOCATION:${location}
DTSTART:20260830T110000
DTEND:20260830T140000
END:VEVENT
END:VCALENDAR`;

    const blob =
        new Blob([icsContent],
        { type:'text/calendar' });

    const url =
        window.URL.createObjectURL(blob);

    const link =
        document.createElement("a");

    link.href = url;

    link.download =
        "Engagement.ics";

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);

});



});

/* ==========================
   TRAVEL DIRECTIONS
========================== */

function openDirections(mode) {

    const destination =
        "13.3412887,77.1076298";

    let url = "";

    switch(mode){

        case "driving":

            url =
            `https://www.google.com/maps/dir/?api=1&destination=${destination}&travelmode=driving`;

            break;

        case "train":

            url =
            `https://www.google.com/maps/dir/?api=1&destination=${destination}&travelmode=transit`;

            break;

        case "bus":

            url =
            `https://www.google.com/maps/dir/?api=1&destination=${destination}&travelmode=transit`;

            break;

        case "flight":

            url =
            `https://www.google.com/maps/search/?api=1&query=airport+near+Tumakuru`;

            break;
    }

    console.log("Opening:", url);

    window.open(url, "_blank");
}

if (typeof VanillaTilt !== "undefined") {

    VanillaTilt.init(
        document.querySelectorAll(
            ".travel-box, .calendar-btn"
        ),
        {
            max: 4,
            speed: 500,
            scale: 1.02,
            glare: false
        }
    );

}


/* ==========================
   FLOWING PETALS
========================== */

const petalsContainer =
document.querySelector(".petals");

if (petalsContainer) {

    for (let i = 0; i < 25; i++) {

        const petal =
            document.createElement("div");

        petal.classList.add("petal");

        petal.innerHTML = "🌸";

        petal.style.left =
            Math.random() * 100 + "%";

        petal.style.animationDuration =
            (8 + Math.random() * 8) + "s";

        petal.style.animationDelay =
            Math.random() * 5 + "s";

        petal.style.opacity =
            Math.random();

        petalsContainer.appendChild(petal);
    }

}

AOS.init({
    duration: 1200,
    once: true,
    offset: 100,
    easing: "ease-out-cubic"
});