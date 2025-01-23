
document.addEventListener("DOMContentLoaded", () => {
    
    const yearElement = document.querySelector("#copyright-year");
    const currentYear = new Date().getFullYear();
    yearElement.textContent = currentYear;

    
    const lastModifiedElement = document.querySelector("#last-modified");
    const lastModifiedDate = new Date(document.lastModified);
    lastModifiedElement.textContent = lastModifiedDate.toLocaleString();
});


document.addEventListener("DOMContentLoaded", () => {
    const hamburgerButton = document.querySelector("#hamburger-button");
    const navMenu = document.querySelector("nav");

    hamburgerButton.addEventListener("click", () => {
        navMenu.classList.toggle("open");
        hamburgerButton.textContent = navMenu.classList.contains("open") ? "X" : "☰";
    });
});
