// Theme Toggle Functionality
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    
    if (body.classList.contains('dark-theme')) {
        themeToggle.textContent = 'Switch to Light Theme';
    } else {
        themeToggle.textContent = 'Switch to Dark Theme';
    }
});
