document.getElementById("login-form").addEventListener("submit", function (event) {
    event.preventDefault();

    // Feste Benutzerdaten mit Lizenznummern
    const users = {
        "flo": { password: "Sweb_09322#F", license: "SGI-09322X00013174", age: "", city: "", memberId: "M-001" },
        "user1": { password: "1234", license: "ALG-123456", age: "", city: "", memberId: "M-002" }
    };

    // Lizenznummer → Vereinsname bestimmen
    function getClubName(license) {
        if (license.startsWith("SGI")) return "Schützenverein SGI";
        if (license.startsWith("ALG")) return "Allgemeiner Sportverein";
        return "Unbekannter Verein";
    }

    // Eingaben auslesen
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Heutiges Datum speichern
    const today = new Date().toISOString().split("T")[0];

    // Überprüfung der Anmeldedaten
    if (users[username] && users[username].password === password) {
        const user = users[username];

        // Login-Daten in `sessionStorage` speichern
        sessionStorage.setItem("loggedInUser", username);
        sessionStorage.setItem("licenseNumber", user.license);
        sessionStorage.setItem("loginDate", today);
        sessionStorage.setItem("age", user.age || "Nicht angegeben");
        sessionStorage.setItem("city", user.city || "Nicht angegeben");
        sessionStorage.setItem("memberId", user.memberId);
        sessionStorage.setItem("clubName", getClubName(user.license));

        // Weiterleitung zu `web/index.html`
        window.location.href = "web/index.html";
    } else {
        alert("Falscher Benutzername oder Passwort!");
    }
});
