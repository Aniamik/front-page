document.addEventListener("DOMContentLoaded", function () {
    const accessCodeInput = document.getElementById("accessCode");
    const submitButton = document.getElementById("submitButton");
    const errorText = document.getElementById("errorText");

    submitButton.addEventListener("click", function () {
        const enteredCode = accessCodeInput.value.trim();

        if (enteredCode === "ME2SOUL") {
            // Correct code, redirect to your website
            window.location.href = "https://curses.melasol2020.com";
        } else {
            // Incorrect code, show error message
            errorText.textContent = "קוד לא נכון, אנא צרו איתנו קשר";
        }
    });
});
