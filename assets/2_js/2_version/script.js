const version = "0.0.1 beta";  // Hier die Versionsnummer anpassen


function updateVersion() {
    
    const versionSpans = document.querySelectorAll('.version');
    versionSpans.forEach(span => {
        span.textContent = version;
    });

    const originalTitle = document.title; 
    document.title = `${originalTitle} | ${version}`;
}

updateVersion();
