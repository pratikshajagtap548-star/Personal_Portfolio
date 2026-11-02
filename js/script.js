
console.log("Welcome to Pratiksha's Portfolio!");

const typingElement = document.getElementById("typing");

const roles = [
    "Computer Technology Student",
    "Aspiring Web Developer",
    "Technology Enthusiast",
    "Future Cyber Security Professional"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {
    const currentRole = roles[roleIndex];

    if (deleting) {
        charIndex--;
    } else {
        charIndex++;
    }

    typingElement.textContent = currentRole.substring(0, charIndex);

    let speed = deleting ? 50 : 100;

    if (!deleting && charIndex === currentRole.length) {
        deleting = true;
        speed = 1200;
    } else if (deleting && charIndex === 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();

// BACK TO TOP BUTTON

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
});

backToTop.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// ACTIVE NAVIGATION LINK

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", function () {
    let currentSection = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active");
        }
    });
});

// MOBILE MENU

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.querySelector(".nav-links");

menuToggle.addEventListener("click", function () {
    navMenu.classList.toggle("show");
});

// Close menu after clicking a navigation link

navMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", function () {
        navMenu.classList.remove("show");
    });
});

// SCROLL REVEAL ANIMATION

const revealElements = document.querySelectorAll(
    ".home-content, .home-image, .about-container, " +
    ".education-card, .skill-card, .interest-card, " +
    ".project-card, .contact-card, .footer"
);

revealElements.forEach(element => {
    element.classList.add("reveal");
});

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
            revealObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15
});

revealElements.forEach(element => {
    revealObserver.observe(element);
});
