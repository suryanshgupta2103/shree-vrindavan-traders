// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// Mobile menu toggle
const toggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const navClose = document.querySelector('.nav-close');
const backdrop = document.querySelector('.nav-backdrop');

function openMenu() {
    navLinks.classList.add('active');
    backdrop.classList.add('active');
    toggle.setAttribute('aria-expanded', 'true');
    toggle.style.display = 'none';
}

function closeMenu() {
    navLinks.classList.remove('active');
    backdrop.classList.remove('active');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.style.display = 'flex';
}

toggle.addEventListener('click', openMenu);
navClose.addEventListener('click', closeMenu);
backdrop.addEventListener('click', closeMenu);

// Close menu on link click
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
});

// Animate elements on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.product-card, .feature, .contact-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});
