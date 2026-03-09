<?php
$host = 'localhost'; // or your host
$dbname = 'u428592730_ratting';
$username = 'u428592730_sorin';
$password = '151219781q2w3e4rA1@';

$conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);

$name = $_POST['name'];
$review = $_POST['review'];
$rating = $_POST['rating'];

$query = "INSERT INTO reviews (name, review, rating) VALUES (?, ?, ?)";
$stmt = $conn->prepare($query);
$stmt->execute([$name, $review, $rating]);

header('Location: customer_reviews.html');
?>