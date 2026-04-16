document.addEventListener('DOMContentLoaded', () => {
    
    // Auto update copyright year
    const yearElements = document.querySelectorAll('#year, .year');
    const currentYear = new Date().getFullYear();
    yearElements.forEach(el => el.textContent = currentYear);

    // Hide Header on scroll down, show on scroll up
    let lastScrollY = window.scrollY;
    const header = document.getElementById('header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 80) { // Add blur backing or styling here if you prefer
            if (lastScrollY < window.scrollY) {
                header.classList.add('scroll-down');
            } else {
                header.classList.remove('scroll-down');
            }
        }
        lastScrollY = window.scrollY;
    });

    // Intersection Observer for fade-in animations on scroll
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: Stop observing once faded in
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => observer.observe(el));
});
