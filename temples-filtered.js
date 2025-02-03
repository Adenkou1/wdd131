
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
// Array of Temple Objects
const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Salt Lake City Utah",
      location: "Salt Lake City, Utah, United States",
      dedicated: "1893, April, 6",
      area: 253015,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-temple/400x250/salt-lake-temple-261188-wallpaper.jpg"
    },
    {
      templeName: "Rio de Janeiro Brazil",
      location: "Rio de Janeiro, Brazil",
      dedicated: "2022, May, 8",
      area: 29000,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/rio-de-janeiro-brazil/400x250/rio-de-janeiro-brazil-temple.jpg"
    },
    {
      templeName: "Tokyo Japan",
      location: "Tokyo, Japan",
      dedicated: "1980, October, 27",
      area: 52000,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/tokyo-japan/400x250/tokyo-japan-temple-lds-1037276-wallpaper.jpg"
    },
    {
      templeName: "Frankfurt Germany",
      location: "Frankfurt, Germany",
      dedicated: "1987, August, 28",
      area: 21500,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/frankfurt-germany/400x250/frankfurt-germany-temple-lds-178349-wallpaper.jpg"
    }
  ];
  
  // Function to display temples
  function displayTemples(templeArray) {
    const container = document.getElementById("temple-container");
    container.innerHTML = ""; // Clear previous content
  
    templeArray.forEach(temple => {
      const templeCard = document.createElement("div");
      templeCard.classList.add("temple-card");
  
      templeCard.innerHTML = `
        <h2>${temple.templeName}</h2>
        <p><strong>Location:</strong> ${temple.location}</p>
        <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
        <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq. ft.</p>
        <img src="${temple.imageUrl}" alt="Image of ${temple.templeName}" loading="lazy">
      `;
  
      container.appendChild(templeCard);
    });
  }
  
  // Function to filter temples
  function filterTemples(criteria) {
    let filteredTemples;
  
    switch (criteria) {
      case "old":
        filteredTemples = temples.filter(temple => parseInt(temple.dedicated.split(",")[0]) < 1900);
        break;
      case "new":
        filteredTemples = temples.filter(temple => parseInt(temple.dedicated.split(",")[0]) > 2000);
        break;
      case "large":
        filteredTemples = temples.filter(temple => temple.area > 90000);
        break;
      case "small":
        filteredTemples = temples.filter(temple => temple.area < 10000);
        break;
      default:
        filteredTemples = temples; // Show all temples
    }
  
    displayTemples(filteredTemples);
  }
  
  // Add event listeners
  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("nav button").forEach(button => {
      button.addEventListener("click", () => {
        filterTemples(button.getAttribute("data-filter"));
      });
    });
  
    // Display all temples on page load
    displayTemples(temples);
  });
  
  // Update footer with current year and last modified date
  document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("year").textContent = new Date().getFullYear();
    document.getElementById("last-modified").textContent = document.lastModified;
  });
  