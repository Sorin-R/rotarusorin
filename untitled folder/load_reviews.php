<?php

$host = 'localhost'; // or your host
$dbname = 'u428592730_ratting';
$username = 'u428592730_sorin';
$password = '151219781q2w3e4rA1@';

$conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);

// Fetch reviews
$query = "SELECT * FROM reviews ORDER BY review_date DESC";
$stmt = $conn->prepare($query);
$stmt->execute();
$reviews = $stmt->fetchAll(PDO::FETCH_ASSOC);

// Calculate average rating
$averageQuery = "SELECT AVG(rating) as average_rating FROM reviews";
$averageStmt = $conn->prepare($averageQuery);
$averageStmt->execute();
$averageResult = $averageStmt->fetch(PDO::FETCH_ASSOC);
$averageRating = round($averageResult['average_rating'], 1); // Round to one decimal place

// Combine reviews and average rating
$result = [
    'reviews' => $reviews,
    'averageRating' => $averageRating
];

echo json_encode($result);
?>