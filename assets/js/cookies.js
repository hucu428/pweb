document.addEventListener("DOMContentLoaded", function () {
    const banner = document.getElementById("cookie-banner");
    const acceptBtn = document.getElementById("accept-cookies");
    const rejectBtn = document.getElementById("reject-cookies");

    // Si el banner no existe, no hacemos nada (evita romper la web)
    if (!banner || !acceptBtn || !rejectBtn) {
        return;
    }

    // Si ya hay decisión guardada, ocultamos la barra
    if (localStorage.getItem("cookiesDecision")) {
        banner.style.display = "none";
    }

    acceptBtn.addEventListener("click", function () {
        localStorage.setItem("cookiesDecision", "accepted");
        banner.style.display = "none";
    });

    rejectBtn.addEventListener("click", function () {
        localStorage.setItem("cookiesDecision", "rejected");
        banner.style.display = "none";
    });
});
