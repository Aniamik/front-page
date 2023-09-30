<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Access Code Entry</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body style="text-align: center;">

    <div class="container">
        <h1>ברוכים הבאים</h1>
        <p>אנא הכניסו את הקוד</p>
        <input type="text" id="accessCode" placeholder="הכניסו כאן">
        <button id="submitButton">אישור</button>
        <p id="errorText" class="error"></p>
    </div>

    <script>
        function checkCode() {
            const enteredCode = document.getElementById("accessCode").value.trim();

            if (enteredCode === "ME2SOUL") {
                window.location.href = "https://curses.melasol2020.com";
            } else {
                document.getElementById("errorText").textContent = "הקוד שגוי - אנא צרו קשר עם אניעם או רמון";
            }
        }
    </script>

</body>
</html>
