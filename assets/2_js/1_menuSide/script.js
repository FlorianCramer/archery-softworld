function toggleMenu() {
    const menu = document.getElementById("menuPanel");
    const content = document.getElementById("mainContent");

    if (menu.classList.contains("visible")) {
        // Zuerst border-left entfernen
        menu.classList.remove("border-left");
        
        // Dann nach kurzer Verzögerung das Menü ausblenden
        setTimeout(() => {
            menu.classList.remove("visible");
            content.classList.remove("expanded");
        }, 300);
    } else {
        // Erst das Menü einblenden
        menu.classList.add("visible");
        content.classList.add("expanded");

        // Nach 300ms den border-left hinzufügen
        setTimeout(() => {
            menu.classList.add("border-left");
        }, 300);
    }
}
