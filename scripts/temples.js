// Get the current year and last modified date
const currentYearSpan = document.querySelector("#currentyear");
const currentYear = new Date().getFullYear();

currentYearSpan.textContent = currentYear;
document.getElementById("lastModified").textContent = document.lastModified;

// Responsive navigation hamburger menu button
const hamButton = document.querySelector('#menu')
const navMenu = document.querySelector('.navigation')

hamButton.addEventListener('click', () => {
    navMenu.classList.toggle('open');
    hamButton.classList.toggle('open')
});