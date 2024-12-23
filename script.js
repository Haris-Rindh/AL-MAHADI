document.addEventListener("DOMContentLoaded", function () {
    const toggleMenu = document.querySelector('.toggle-menu');
    const navLinks = document.querySelector('.nav-links');

    toggleMenu.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });
});
