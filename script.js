document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll(".image-container img");
    images.forEach(img => {
        img.style.opacity = 0;
        setTimeout(() => { img.style.opacity = 1; img.style.transition = "opacity 1s ease-in"; }, 500);
    });
});