<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'src/Exception.php';
require 'src/PHPMailer.php';
require 'src/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    exit;
}

$firstname = htmlspecialchars(trim($_POST["firstname"]));
$lastname  = htmlspecialchars(trim($_POST["lastname"]));
$email     = filter_var($_POST["email"], FILTER_VALIDATE_EMAIL);
$message   = htmlspecialchars(trim($_POST["message"]));

if (!$email) {
    exit("Adresse email invalide.");
}

$mail = new PHPMailer(true);

try {

    $mail->isSMTP();

    $mail->Host = 'mail.oceane-groux.com';

    $mail->SMTPAuth = true;

    $mail->Username = 'noreply@groc0948.odns.fr';

    $mail->Password = 'lmW!p;k*HPcUbMti';

    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;

    $mail->Port = 465;

    $mail->CharSet = 'UTF-8';

    $mail->setFrom(
        'noreply@groc0948.odns.fr',
        'Portfolio'
    );

    $mail->addAddress(
        'oceanegroux@gmail.com'
    );

    $mail->addReplyTo(
        $email,
        "$firstname $lastname"
    );

    $mail->isHTML(true);

    $mail->Subject = "Nouveau message depuis le portfolio";

    $mail->Body = "
        <h2>Nouveau message</h2>

        <p><strong>Nom :</strong> $lastname</p>

        <p><strong>Prénom :</strong> $firstname</p>

        <p><strong>Email :</strong> $email</p>

        <p><strong>Message :</strong><br>$message</p>
    ";

    $mail->send();

    header("Location: contacts.html");

} catch (Exception $e) {

    echo "Erreur : {$mail->ErrorInfo}";
}

if (!empty($_POST["website"])) {
    exit;
}