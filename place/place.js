

document.addEventListener("DOMContentLoaded", () => {
    updateFooter();
    calculateWindChill();
});

function updateFooter() {
    document.getElementById("year").textContent = new Date().getFullYear();
    document.getElementById("last-modified").textContent = document.lastModified;
}

function calculateWindChill() {
    const temperature = parseFloat(document.getElementById("temperature").textContent);
    const windSpeed = parseFloat(document.getElementById("wind-speed").textContent);
    let windChill = "N/A";

    if (temperature <= 10 && windSpeed > 4.8) {
        windChill = (13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16)).toFixed(1);
    }

    document.getElementById("wind-chill").textContent = windChill;
}
