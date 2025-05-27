<?php

echo("hi");
if ($_SERVER["REQUEST_METHOD"] === "POST") {




    $message = $_POST["message"];
    $email = $_POST["email"];

    // Send email (replace 'your_email@example.com' with your email)
    $to = "anandkumar9473182722@gmail.com";
    $subject = "New Contact Form Submission";
    $headers = "From: $email";

    mail($to, $subject, $message, $headers);

    // Return a JSON response
    echo json_encode(["success" => true]);
} else {
    // Return a JSON response
    echo json_encode(["success" => false]);
}
?>
