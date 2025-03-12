// Grab elements
const hamburger = document.getElementById("hamburger");
const overlay = document.getElementById("overlay");
const closeOverlayBtn = document.getElementById("closeOverlay");

// Toggle overlay and hamburger animation
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active"); // animate lines
    overlay.classList.toggle("show");     // slide in/out overlay
});

// Close button inside overlay
closeOverlayBtn.addEventListener("click", () => {
    hamburger.classList.remove("active");
    overlay.classList.remove("show");
});

// Auto-close overlay if window is resized to desktop
window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
        hamburger.classList.remove("active");
        overlay.classList.remove("show");
    }
});