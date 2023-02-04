<?php

$name = $_GET['name'];
$phone = $_GET['phone'];
$message = $_GET['message'];
$text = "Имя: $name \nТелефон: $phone \nТекст: $message";
$subject = "=?utf-8?B?".base64_encode('Message from website')."?=";
$headers = 'From: $email\r\nReply-to: $email\r\nContent-type: text/html; charset=utf-8\r\n';
$success = mail('mstanyukova@gmail.com', $subject, $text, $headers);
echo $success;
?>