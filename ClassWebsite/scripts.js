// Apply stored theme as early as possible
(function() {
    const storedTheme = localStorage.getItem('selectedTheme');
    if (storedTheme) {
        document.documentElement.className = storedTheme;
    }
})();

//ABOVE IS EXPERIMENTAL CODE

// Function to set the theme
const setTheme = theme => {
    document.documentElement.className = theme;
    // Store the selected theme in localStorage
    localStorage.setItem('selectedTheme', theme);
};

// Function to apply the stored theme when the page loads
const applyStoredTheme = () => {
    const storedTheme = localStorage.getItem('selectedTheme');
    if (storedTheme) {
        setTheme(storedTheme);
    }
};

// Event listener for theme options
document.getElementById('themeoptions').addEventListener('click', ({target}) => {
    setTheme(target.getAttribute('value'));
});

// Apply stored theme when the page loads
document.addEventListener('DOMContentLoaded', applyStoredTheme);

//for the navbar toggle
document.getElementById('navbar-toggle').addEventListener('click', function() {
    var navbarLinks = document.getElementById('navbar-links');
    navbarLinks.classList.toggle('active');
});