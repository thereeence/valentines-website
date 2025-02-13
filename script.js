document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll(".image-container img");
    images.forEach(img => {
        img.style.opacity = 0;
        setTimeout(() => { img.style.opacity = 1; img.style.transition = "opacity 1s ease-in"; }, 500);
    });

    // Envelope pop-up functionality
    window.openLetter = function() {
        document.getElementById("love-letter").style.display = "block";
    };

    window.closeLetter = function() {
        document.getElementById("love-letter").style.display = "none";
    };
});
