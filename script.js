// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
            // Close mobile menu if open
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
            }
        }
    });
});

// Scroll Reveal Animation
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in-up').forEach(element => {
    observer.observe(element);
});

// Typing Effect for Hero Section
const textElement = document.querySelector('.typing-effect');
const textToType = "Graphic & Multimedia Designer";
let index = 0;

function typeText() {
    if (textElement && index < textToType.length) {
        // Clear text initially if it's the first character (fallback safely)
        if (index === 0) textElement.textContent = "";

        textElement.textContent += textToType.charAt(index);
        index++;
        setTimeout(typeText, 100);
    }
}

// Start typing effect when page loads
window.addEventListener('load', typeText);

// Lightbox Functionality
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const captionText = document.getElementById('caption');
const closeBtn = document.getElementsByClassName('close')[0];

function openLightbox(src, alt) {
    lightbox.style.display = "flex";
    lightboxImg.src = src;
    captionText.innerHTML = alt;
    lightboxImg.classList.add('zoomIn');
}

// Attach click event to all portfolio images
document.querySelectorAll('.portfolio-item img').forEach(img => {
    img.addEventListener('click', function () {
        openLightbox(this.src, this.alt);
    });
});

// Close Lightbox
if (closeBtn) {
    closeBtn.onclick = function () {
        lightbox.style.display = "none";
        lightboxImg.classList.remove('zoomIn');
    }
}

// Close on outside click
window.onclick = function (event) {
    if (event.target == lightbox) {
        lightbox.style.display = "none";
        lightboxImg.classList.remove('zoomIn');
    }
}

// Close on Escape key
document.addEventListener('keydown', function (event) {
    if (event.key === "Escape" && lightbox.style.display === "flex") {
        lightbox.style.display = "none";
        lightboxImg.classList.remove('zoomIn');
    }
});

// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
}

// CV Modal Functionality
const cvModal = document.getElementById('cv-modal');
const viewCvBtn = document.getElementById('view-cv-btn');
const closeCvBtn = document.getElementsByClassName('close-cv')[0];

if (viewCvBtn) {
    viewCvBtn.onclick = function (e) {
        e.preventDefault();
        cvModal.style.display = "flex";
    }
}

if (closeCvBtn) {
    closeCvBtn.onclick = function () {
        cvModal.style.display = "none";
    }
}

// Close CV modal on outside click
window.addEventListener('click', function (event) {
    if (event.target == cvModal) {
        cvModal.style.display = "none";
    }
});

// Close CV modal on Escape key
document.addEventListener('keydown', function (event) {
    if (event.key === "Escape" && cvModal.style.display === "flex") {
        cvModal.style.display = "none";
    }
});
// Portfolio Filtering
const filterBtns = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

if (filterBtns.length > 0) {
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            portfolioItems.forEach(item => {
                const category = item.getAttribute('data-category');

                if (filterValue === 'all' || filterValue === category) {
                    item.classList.remove('hide');
                    item.style.display = 'block'; // Ensure it's visible before opacity transition
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                    }, 50);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        item.classList.add('hide');
                        item.style.display = 'none'; // Hide after transition
                    }, 500); // Match CSS transition duration
                }
            });
        });
    });
}

// Dynamic Hero Parallax Effect
const heroSection = document.getElementById('hero');
const shapes = document.querySelectorAll('.bg-shape');

if (heroSection && shapes.length > 0) {
    document.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;

        shapes.forEach((shape, index) => {
            const speed = (index + 1) * 20; // Different speed for each shape
            const xOffset = (window.innerWidth / 2 - e.clientX) / speed;
            const yOffset = (window.innerHeight / 2 - e.clientY) / speed;

            shape.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
        });
    });
}
