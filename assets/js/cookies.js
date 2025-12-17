document.addEventListener("DOMContentLoaded", function () {
    const cookieBanner = document.getElementById("cookie-banner");
    const acceptBtn = document.getElementById("accept-cookies");
    const rejectBtn = document.getElementById("reject-cookies");

    // Si ya hay decisión, ocultamos la barra
    if (localStorage.getItem("cookiesDecision")) {
        cookieBanner.style.display = "none";
    }

    acceptBtn.addEventListener("click", function () {
        localStorage.setItem("cookiesDecision", "accepted");
        cookieBanner.style.display = "none";
    });

    rejectBtn.addEventListener("click", function () {
        localStorage.setItem("cookiesDecision", "rejected");
        cookieBanner.style.display = "none";
    });
});
