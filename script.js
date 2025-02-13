document.addEventListener("DOMContentLoaded", function () {
    // Create password popup dynamically
    const passwordPopup = document.createElement("div");
    passwordPopup.classList.add("password-popup");
    passwordPopup.innerHTML = `
        <h2>🔒 Enter Password</h2>
        <p>Hint: My favorite color</p>
        <input type="text" id="passwordInput" placeholder="Type here..." />
        <br>
        <button id="unlockButton">Unlock</button>
        <button id="closePasswordPopup">Close</button>
        <p id="password-error" style="color: red; font-weight: bold;"></p>
    `;
    document.body.appendChild(passwordPopup);

    // Select elements
    const loveLetter = document.getElementById("love-letter");
    const envelope = document.querySelector(".envelope-icon"); // Ensure correct envelope selection
    const passwordInput = document.getElementById("passwordInput");
    const passwordError = document.getElementById("password-error");

    // Open password popup when envelope is clicked
    envelope.addEventListener("click", function (event) {
        event.stopPropagation(); // Prevents unwanted propagation
        passwordPopup.style.display = "block";
        passwordPopup.classList.add("show");
    });

    // Check password and unlock letter
    document.getElementById("unlockButton").addEventListener("click", function (event) {
        event.stopPropagation();
        const password = passwordInput.value.toLowerCase().trim();
        if (password === "navy blue") {
            passwordPopup.style.display = "none"; // Hide password popup
            loveLetter.style.display = "block"; // Show love letter
            passwordInput.value = ""; // Clear input field
            passwordError.textContent = ""; // Clear error message
        } else {
            passwordError.textContent = "❌ Incorrect password! Try again.";
        }
    });

    // Close password popup
    document.getElementById("closePasswordPopup").addEventListener("click", function (event) {
        event.stopPropagation();
        passwordPopup.style.display = "none";
        passwordInput.value = ""; // Clear input field
        passwordError.textContent = ""; // Clear error message
    });

    // Close love letter
    document.getElementById("closeLetterButton").addEventListener("click", function (event) {
        event.stopPropagation();
        loveLetter.style.display = "none";
    });
});
