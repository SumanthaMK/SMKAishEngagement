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

});