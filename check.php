<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Retrieve form input
    $firstName = htmlspecialchars($_POST['first_name']);
    $lastName = htmlspecialchars($_POST['last_name']);
    $email = htmlspecialchars($_POST['email']);
    $phone = htmlspecialchars($_POST['phone']);
    $message = htmlspecialchars($_POST['message']);

    // Prepare email
    $to = 'zafarali.pg@gmail.com'; 
    $subject = 'Career Page (CRAFTSWIZ)';
    $messageBody = "First Name: $firstName\nLast Name: $lastName\nEmail: $email\nPhone: $phone\nMessage:\n$message";
    $headers = "From: $email";

    // Send email
    if (mail($to, $subject, $messageBody, $headers)) {
        echo "Message sent successfully.";
    } else {
        echo "There was an error sending your message. Please try again.";
    }
} else {
    echo "Invalid request.";
}
?>
