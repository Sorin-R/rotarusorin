-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: pdb1049.awardspace.net
-- Generation Time: Mar 01, 2024 at 11:47 PM
-- Server version: 8.0.32
-- PHP Version: 8.1.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `u428592730_ratting`
--
CREATE DATABASE IF NOT EXISTS `u428592730_ratting` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci;
USE `u428592730_ratting`;

-- --------------------------------------------------------

--
-- Table structure for table `reviews`
--

CREATE TABLE `reviews` (
  `id` int NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `review` text,
  `rating` int DEFAULT NULL,
  `review_date` timestamp NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `reviews`
--

INSERT INTO `reviews` (`id`, `name`, `review`, `rating`, `review_date`) VALUES
(87, 'Ivan', 'Sorin is an amazing communicator, an efficient and fast producer, and a pleasure to work with. He completed in less than a day what would have taken me a couple of weeks. I highly recommend Sorin for all of your Amazon needs pertaining to optimizing your listings. I will be using him in the future for my Amazon projects. A stellar job!', 5, '2023-05-30 15:02:16'),
(88, 'Vlas D.', 'Very patient and helpful, Sorin knows all about the stress involved in fixing errors and listings. He was there and fixed the errors on the same day. Very fast delivery and great communication. I truly recommend his service.', 5, '2023-05-21 15:04:34'),
(89, 'agusdoelli', 'Very professional and responsive. I will definitely hire again in the future to help with other projects. Thank you :-)', 5, '2023-06-08 15:06:12'),
(90, 'Khan', 'Serious and professional', 5, '2023-07-29 15:11:06');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `reviews`
--
ALTER TABLE `reviews`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `reviews`
--
ALTER TABLE `reviews`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=96;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
