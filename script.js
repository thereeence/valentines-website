document.addEventListener("DOMContentLoaded", function () {
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

    const loveLetter = document.getElementById("love-letter");
    const envelope = document.querySelector(".letter-container");

    window.openLetter = function (event) {
        event.stopPropagation(); // Prevents envelope click from affecting other elements
        passwordPopup.style.display = "block";
        setTimeout(() => passwordPopup.classList.add("show"), 10); // Smooth fade-in
    };

    document.getElementById("unlockButton").addEventListener("click", function (event) {
        event.stopPropagation();
        const password = document.getElementById("passwordInput").value.toLowerCase();
        if (password === "navy blue") {
            passwordPopup.style.display = "none";
            loveLetter.style.display = "block";
        } else {
            document.getElementById("password-error").textContent = "Incorrect password! Try again.";
        }
    });

    document.getElementById("closePasswordPopup").addEventListener("click", function (event) {
        event.stopPropagation();
        passwordPopup.style.display = "none";
    });

    document.getElementById("closeLetterButton").addEventListener("click", function (event) {
        event.stopPropagation();
        loveLetter.style.display = "none";
    });
});
