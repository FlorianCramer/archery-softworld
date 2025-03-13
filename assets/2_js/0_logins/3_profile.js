document.addEventListener("DOMContentLoaded", function () {
    const loggedInUser = sessionStorage.getItem("loggedInUser");

    // Falls kein Benutzer eingeloggt ist, weiterleiten
    if (!loggedInUser) {
        window.location.href = "/index.html";
        return;
    }

    // Werte abrufen & in Felder setzen
    document.getElementById("age").value = sessionStorage.getItem("age") || "";
    document.getElementById("city").value = sessionStorage.getItem("city") || "";

    // Speichern-Button
    document.getElementById("save-profile").addEventListener("click", function () {
        const newAge = document.getElementById("age").value;
        const newCity = document.getElementById("city").value;

        // Neue Werte in `sessionStorage` speichern
        sessionStorage.setItem("age", newAge);
        sessionStorage.setItem("city", newCity);

        alert("Profil gespeichert!");
    });
});
