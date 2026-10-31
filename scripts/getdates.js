const currentYearSpan = document.querySelector("#currentyear");
const currentYear = new Date().getFullYear();

currentYearSpan.textContent = currentYear;

document.getElementById("lastModified").textContent = document.lastModified;