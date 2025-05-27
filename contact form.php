<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="weird.css">
    <title>Contact Form</title>
</head>
<body>

<div class="contactcontainer">
    <form id="contactForm" action="process.php" method="post">
        <label for="message">Message:</label>
        <textarea id="message" name="message" rows="4" required></textarea>

        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>

        <button type="submit" id="submitBtn">Submit</button>
    </form>
</div>

<script src="weird.js"></script>
</body>
</html>
