// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Console easter egg for curious developers
console.log("%c Welcome to Simone's Portfolio! 🚀", "color: #38bdf8; font-size: 16px; font-weight: bold;");
console.log("Feel free to explore the code.");