document.addEventListener("DOMContentLoaded", function () {
    // Select all necessary elements
    const loveLetter = document.getElementById("love-letter");
    const envelope = document.getElementById("envelope"); 
    const passwordPopup = document.getElementById("password-popup");
    const unlockButton = document.getElementById("unlockButton");
    const closePasswordPopup = document.getElementById("closePasswordPopup");
    const closeLetterButton = document.getElementById("closeLetterButton");
    const passwordInput = document.getElementById("passwordInput");
    const passwordError = document.getElementById("password-error");

    // Open password popup when clicking the envelope
    envelope.addEventListener("click", function () {
        passwordPopup.style.display = "block";
        passwordPopup.classList.add("show");
    });

    // Check password and unlock the letter
    unlockButton.addEventListener("click", function () {
        const password = passwordInput.value.toLowerCase().trim();
        if (password === "navy blue") {
            passwordPopup.style.display = "none"; // Hide password popup
            loveLetter.style.display = "block"; // Show love letter
            passwordInput.value = ""; // Clear input field
            passwordError.textContent = ""; // Clear error message
        } else {
            passwordError.textContent = "❌ Kabaw!";
        }
    });

    // Close password popup
    closePasswordPopup.addEventListener("click", function () {
        passwordPopup.style.display = "none";
        passwordInput.value = ""; // Clear input field
        passwordError.textContent = ""; // Clear error message
    });

    // Close love letter
    closeLetterButton.addEventListener("click", function () {
        loveLetter.style.display = "none";
    });
});
