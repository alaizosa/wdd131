// Get the current year and last modified date
document.querySelector("#currentYear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Calculating the wind chill factor
const windChill = document.querySelector("#windChill");
const temp = 18;
const speed = 5;

function calculateWindChill(temp, speed) {
    return 13.12 + (0.6215 * temp) - (11.37 * (speed ** 0.16)) + (0.3965 * temp * (speed ** 0.16))
}

if (temp <= 10 && speed > 4.8) {
    windChill.textContent = `${Math.round(calculateWindChill(temp, speed))} °C`
}

else {
    windChill.textContent = 'N/A'
}


