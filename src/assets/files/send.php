<?php

$username = $_POST['name'];
$usertel = $_POST['tel'];
$useremail = $_POST['email'];
$typeCourse = $_POST['type'];

echo ' username ' . $username;
echo ' usertel ' .  $usertel;
echo ' useremail ' .  $useremail;
echo ' typeCourse ' .  $typeCourse;

// require_once __DIR__ . "/telegram.php"; // Send to Telegram
