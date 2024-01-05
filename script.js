// Function to toggle dark and light theme
function toggleTheme() {
    const body = document.body;
    body.classList.toggle("dark-theme");
}

// Function to display the current year in the footer
function displayCurrentYear() {
    const yearElement = document.getElementById("current-year");
    const currentYear = new Date().getFullYear();
    yearElement.textContent = currentYear;
}

// Event Listener for Theme Toggle Button
const themeToggleButton = document.getElementById("theme-toggle");
if (themeToggleButton) {
    themeToggleButton.addEventListener("click", toggleTheme);
}

// Call the displayCurrentYear function on page load
document.addEventListener("DOMContentLoaded", displayCurrentYear);
