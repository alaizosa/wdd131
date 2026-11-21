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

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Pago Pago American Samoa",
        location: "Pago Pago, American Samoa",
        dedicated: "2026, December, 13",
        area: 17000,
        imageUrl: "https://www.churchofjesuschrist.org/imgs/590f680c74a1b5a7fd8c3001874011953ebb42bf/full/800%2C/0/default"
    },
    {
        templeName: "McAllen Texas",
        location: "McAllen, Texas, United States",
        dedicated: "2023, October, 8",
        area: 27897,
        imageUrl: "https://www.churchofjesuschrist.org/imgs/51edc593152e11ee90afeeeeac1ef99dfe5ba797/full/800%2C/0/default"
    },
    {
        templeName: "Manaus Brazil",
        location: "Manaus, Amazonas, Brazil",
        dedicated: "2012, June, 10",
        area: 32032,
        imageUrl: "https://www.churchofjesuschrist.org/imgs/f758727dc0cd20dc24845be6e5810f81e400d603/full/800%2C/0/default"
    },
];

function displayTemples(templeList) {
    document.querySelector(".album-grid").innerHTML = templeList.map((temple) => `
    <div>
        <h3>${temple.templeName}</h3>
        <p><strong>Location</strong>: ${temple.location}</p>
        <p><strong>Dedicated</strong>: ${temple.dedicated}</p>
        <p><strong>Size</strong>: ${temple.area} sq ft</p>
        <img src="${temple.imageUrl}" alt="${temple.templeName} Temple" loading="lazy" width="400" height="250">
    </div>
    `).join("");
}

// Show all the temples when page loads
displayTemples(temples);

const homeLink = document.querySelector("#home");
homeLink.addEventListener("click", () => {
    displayTemples(temples)
});

const smallLink = document.querySelector("#small");
smallLink.addEventListener("click", () => {
    const smallTemples = temples.filter((temple) => temple.area < 10000);
    displayTemples(smallTemples);
});

const largeLink = document.querySelector("#large");
largeLink.addEventListener("click", () => {
    const largeTemples = temples.filter((temple) => temple.area > 90000);
    displayTemples(largeTemples);
});

const newLink = document.querySelector("#new");
newLink.addEventListener("click", () => {
    const newTemples = temples.filter((temple) => new Date(temple.dedicated).getFullYear() > 2000);
    displayTemples(newTemples)
});

const oldLink = document.querySelector("#old");
oldLink.addEventListener("click", () => {
    const oldTemples = temples.filter((temple) => new Date(temple.dedicated).getFullYear() < 1900);
    displayTemples(oldTemples)
});