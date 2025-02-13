document.addEventListener("DOMContentLoaded", function () {
    const passwordPopup = document.createElement("div");
    passwordPopup.classList.add("password-popup");
    passwordPopup.innerHTML = `
        <h2>🔒 Enter Password</h2>
        <p>Hint: My favorite color</p>
        <input type="text" id="passwordInput" placeholder="Type here..." />
        <br>
        <button onclick="checkPassword()">Unlock</button>
    `;
    document.body.appendChild(passwordPopup);

    window.openLetter = function () {
        passwordPopup.style.display = "block";
        setTimeout(() => passwordPopup.classList.add("show"), 10); // Smooth fade-in
    };

    window.checkPassword = function () {
        const password = document.getElementById("passwordInput").value.toLowerCase();
        if (password === "navy blue") {
            passwordPopup.style.display = "none";
            document.getElementById("love-letter").style.display = "block";
        } else {
            alert("Incorrect password! Try again.");
        }
    };
});
