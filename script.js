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
    viewCvBtn.onclick = function(e) {
        e.preventDefault();
        cvModal.style.display = "flex";
    }
}

if (closeCvBtn) {
    closeCvBtn.onclick = function() {
        cvModal.style.display = "none";
    }
}

// Close CV modal on outside click
window.addEventListener('click', function(event) {
    if (event.target == cvModal) {
        cvModal.style.display = "none";
    }
});

// Close CV modal on Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === "Escape" && cvModal.style.display === "flex") {
        cvModal.style.display = "none";
    }
});
