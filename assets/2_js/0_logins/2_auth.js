document.addEventListener("DOMContentLoaded", function () {
    const loggedInUser = sessionStorage.getItem("loggedInUser");
    const licenseNumber = sessionStorage.getItem("licenseNumber");
    const loginDate = sessionStorage.getItem("loginDate");

    // Heutiges Datum abrufen
    const today = new Date().toISOString().split("T")[0];

    // Falls kein gültiger Login existiert oder das Datum abgelaufen ist, weiterleiten
    if (!loggedInUser || !licenseNumber || loginDate !== today) {
        window.location.href = "/index.html";
    } else {
        // Alle `span`-Elemente mit der entsprechenden Klasse aktualisieren
        document.querySelectorAll(".username-display").forEach(el => el.textContent = loggedInUser);
        document.querySelectorAll(".license-display").forEach(el => el.textContent = licenseNumber);
    }

    // Logout-Button hinzufügen
    document.getElementById("logout-button").addEventListener("click", function () {
        sessionStorage.clear(); // Alle gespeicherten Login-Daten entfernen
        window.location.href = "/index.html"; // Zur Login-Seite weiterleiten
    });
});
