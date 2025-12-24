document.addEventListener("DOMContentLoaded", () => {

    /* ---------------- RESUME TABS ---------------- */
    const resumeBtns = document.querySelectorAll(".resume-btn");
    const resumeDetails = document.querySelectorAll(".resume-detail");

    resumeBtns.forEach((btn, idx) => {
        btn.addEventListener("click", () => {
            resumeBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            resumeDetails.forEach(detail => detail.classList.remove("active"));
            if(resumeDetails[idx]) resumeDetails[idx].classList.add("active");
        });
    });

    /* ---------------- MOBILE MENU ---------------- */
    const menuIcon = document.getElementById("menu-icon");
    const nav = document.querySelector("nav");

    menuIcon.addEventListener("click", () => {
        nav.classList.toggle("active");
    });

    /* ---------------- NAVIGATION ---------------- */
    const navLinks = document.querySelectorAll("nav a");
    const sections = document.querySelectorAll("section");

    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();

            const targetId = link.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            sections.forEach(sec => sec.classList.remove("active"));
            if(targetSection) targetSection.classList.add("active");

            navLinks.forEach(l => l.classList.remove("active"));
            link.classList.add("active");

            nav.classList.remove("active");
        });
    });

    /* ---------------- PORTFOLIO SLIDER ---------------- */
    /* ---------------- PORTFOLIO SLIDER - Updated ---------------- */
const carousel = document.querySelector(".portfolio-carousel");
if (carousel) {
    const slides = carousel.querySelectorAll(".img-item");
    const details = document.querySelectorAll(".portfolio-detail");
    const arrowRight = document.querySelector(".arrow-right");
    const arrowLeft = document.querySelector(".arrow-left");

    let index = 0;

    function updateSlider() {
        slides[index].scrollIntoView({ behavior: 'smooth', inline: 'start' });

        // Show correct detail
        details.forEach(d => d.classList.remove("active"));
        if (details[index]) details[index].classList.add("active");

        // Arrow disable state
        if (arrowLeft) arrowLeft.classList.toggle("disabled", index === 0);
        if (arrowRight) arrowRight.classList.toggle("disabled", index === slides.length - 1);
    }

    if (arrowRight) arrowRight.addEventListener("click", () => {
        if (index < slides.length - 1) index++;
        updateSlider();
    });

    if (arrowLeft) arrowLeft.addEventListener("click", () => {
        if (index > 0) index--;
        updateSlider();
    });

    // Swipe for mobile
    let startX = 0;
    let isDragging = false;

    carousel.addEventListener("touchstart", e => {
        startX = e.touches[0].clientX;
        isDragging = true;
    });

    carousel.addEventListener("touchmove", e => {
        if (!isDragging) return;
        const diff = e.touches[0].clientX - startX;
        carousel.scrollLeft -= diff;
        startX = e.touches[0].clientX;
    });

    carousel.addEventListener("touchend", () => {
        isDragging = false;
    });

    window.addEventListener("resize", updateSlider);
    updateSlider();
}

    /* ---------------- CONTACT FORM ---------------- */
    const contactForm = document.getElementById("contact-form");
    if(contactForm) {
        emailjs.init("Ny1bd_QwMaxayP2Gl");

        contactForm.addEventListener("submit", function(e) {
            e.preventDefault();

            const serviceID = "service_u6ggo4v";
            const templateID = "template_8v8u0g7";

            emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                alert("Message sent successfully!");
                contactForm.reset();
            }, (error) => {
                console.error("FAILED...", error);
                alert("Oops! Something went wrong, please try again.");
            });
        });
    }

});
