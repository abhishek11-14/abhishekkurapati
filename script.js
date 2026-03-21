// Set the current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Optional: Subtle navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(15, 23, 42, 0.9)';
        navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.5)';
    } else {
        navbar.style.background = 'rgba(15, 23, 42, 0.7)';
        navbar.style.boxShadow = 'none';
    }
});
