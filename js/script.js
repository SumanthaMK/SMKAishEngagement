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