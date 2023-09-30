<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Access Code Entry</title>
    <style>
        /* Reset some default styles for better consistency */
        body, h1, p, input, button {
            margin: 0;
            padding: 0;
        }

        body {
            font-family: Arial, sans-serif;
            background-color: #f5f5f5;
            text-align: center;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }

        .container {
            max-width: 400px;
            background-color: #ffffff;
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
            text-align: center;
        }

        h1 {
            font-size: 24px;
            margin-bottom: 20px;
        }

        p {
            font-size: 16px;
            margin-bottom: 10px;
        }

        input[type="text"] {
            width: 100%;
            padding: 10px;
            margin-bottom: 20px;
            border: 1px solid #ccc;
            border-radius: 5px;
            font-size: 16px;
        }

        button {
            background-color: #007bff;
            color: #fff;
            border: none;
            border-radius: 5px;
            padding: 10px 20px;
            font-size: 16px;
            cursor: pointer;
        }

        button:hover {
            background-color: #0056b3;
        }

        .error {
            color: #ff0000;
            font-size: 14px;
        }
    </style>
</head>
<body>

    <div class="container">
        <h1>ברוכים הבאים</h1>
        <p>אנא מלאו את קוד הגישה</p>
        <input type="text" id="accessCode" placeholder="מלאו כאן">
        <button id="submitButton">אישור</button>
        <p id="errorText" class="error"></p>
    </div>

    <script>
        document.addEventListener("DOMContentLoaded", function () {
            const accessCodeInput = document.getElementById("accessCode");
            const submitButton = document.getElementById("submitButton");
            const errorText = document.getElementById("errorText");

            submitButton.addEventListener("click", function () {
                const enteredCode = accessCodeInput.value.trim();

                if (enteredCode === "ME2SOUL") {
                    window.location.href = "https://curses.melasol2020.com";
                } else {
                    errorText.textContent = "קוד שגוי - אנא צרו קשר עם אניעם או רמון";
                }
            });
        });
    </script>

</body>
</html>
