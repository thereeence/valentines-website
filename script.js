document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll(".image-container img");
    images.forEach(img => {
        img.style.opacity = 0;
        setTimeout(() => { 
            img.style.opacity = 1; 
            img.style.transition = "opacity 1s ease-in"; 
        }, 500);
    });

    // Envelope pop-up functionality with password protection
    window.openLetter = function() {
        let password = prompt("Enter the password to open the letter (Hint: My favorite color)");
        if (password && password.toLowerCase() === "navy blue") {
            document.getElementById("love-letter").style.display = "block";
        } else {
            alert("Incorrect password! Try again.");
        }
    };

    window.closeLetter = function() {
        document.getElementById("love-letter").style.display = "none";
    };
});
