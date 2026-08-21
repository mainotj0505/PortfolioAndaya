/* ==========================================================
   GENERAL VIRTUAL ASSISTANT PORTFOLIO
   FILE: script.js

   TABLE OF CONTENTS

   1. Mobile Navigation
   2. Close Menu on Link Click
   3. Scroll Reveal Animation
   4. Active Navigation on Scroll
   5. Header Background on Scroll
   6. Smooth Fade-in Loader
========================================================== */


/* ==========================================================
   1. MOBILE NAVIGATION
========================================================== */

const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("active");

    // Change icon
    if (nav.classList.contains("active")) {
        menuBtn.innerHTML = "✕";
    } else {
        menuBtn.innerHTML = "☰";
    }
});


/* ==========================================================
   2. CLOSE MENU WHEN LINK IS CLICKED
========================================================== */

const navLinks = document.querySelectorAll("#nav a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");
        menuBtn.innerHTML = "☰";

    });

});


/* ==========================================================
   3. SCROLL REVEAL ANIMATION
========================================================== */

// Select all sections and cards

const hiddenElements = document.querySelectorAll(`
    .hero-content,
    .hero-image,
    .section-title,
    .about-image,
    .about-content,
    .service-card,
    .skill-box,
    .project-card,
    .contact-box
`);

hiddenElements.forEach(el => {
    el.classList.add("hidden");
});

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.15
});

hiddenElements.forEach(el => observer.observe(el));


/* ==========================================================
   4. ACTIVE NAVIGATION WHILE SCROLLING
========================================================== */

const sections = document.querySelectorAll("section");
const links = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop &&
            pageYOffset < sectionTop + sectionHeight) {

            current = section.getAttribute("id");

        }

    });

    links.forEach(link => {

        link.classList.remove("active-link");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active-link");

        }

    });

});


/* ==========================================================
   5. HEADER BACKGROUND EFFECT
========================================================== */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {

        header.style.background = "rgba(247,241,235,.96)";
        header.style.boxShadow = "0 8px 25px rgba(0,0,0,.06)";

    } else {

        header.style.background = "rgba(247,241,235,.85)";
        header.style.boxShadow = "none";

    }

});


/* ==========================================================
   6. SMOOTH PAGE LOADER
========================================================== */

// Prevent the browser from restoring the previous scroll position
if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
}

// Force the page to start at the very top
window.addEventListener("beforeunload", () => {
    window.scrollTo(0, 0);
});

window.addEventListener("load", () => {

    // Reset scroll position before showing the page
    window.scrollTo(0, 0);

    document.body.style.opacity = "0";

    requestAnimationFrame(() => {

        document.body.style.transition = "opacity .6s ease";
        document.body.style.opacity = "1";

        // Make sure it stays at the top after the fade-in
        window.scrollTo(0, 0);

    });

    /* ==========================================================
   7. PROJECT IMAGE LIGHTBOX
========================================================== */

const previewButtons = document.querySelectorAll(".preview-btn");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const closeLightbox = document.getElementById("closeLightbox");

// Open image
previewButtons.forEach(button => {

    button.addEventListener("click", () => {

        const imageSrc = button.getAttribute("data-image");

        lightboxImage.src = imageSrc;
        lightbox.classList.add("active");

        document.body.style.overflow = "hidden";

    });

});

// Close button
closeLightbox.addEventListener("click", closePreview);

// Click outside image
lightbox.addEventListener("click", (e) => {

    if (e.target === lightbox) {
        closePreview();
    }

});

// ESC key
document.addEventListener("keydown", (e) => {

    if (e.key === "Escape") {
        closePreview();
    }

});

function closePreview(){

    lightbox.classList.remove("active");
    document.body.style.overflow = "auto";

}

});