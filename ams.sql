-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 01, 2022 at 09:38 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ams`
--

-- --------------------------------------------------------

--
-- Table structure for table `attendances`
--

CREATE TABLE `attendances` (
  `id` int(11) NOT NULL,
  `s_id` varchar(255) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `present` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `attendances`
--

INSERT INTO `attendances` (`id`, `s_id`, `date`, `present`, `createdAt`, `updatedAt`) VALUES
(10, '[1,2]', '2022-07-31', 'yes', '2022-07-31 21:09:26', '2022-07-31 21:09:26'),
(11, '[1,2]', '2022-08-01', 'yes', '2022-07-31 21:09:52', '2022-07-31 21:09:52');

-- --------------------------------------------------------

--
-- Table structure for table `students`
--

CREATE TABLE `students` (
  `id` int(11) NOT NULL,
  `username` varchar(255) DEFAULT NULL,
  `fullname` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `students`
--

INSERT INTO `students` (`id`, `username`, `fullname`, `createdAt`, `updatedAt`) VALUES
(1, 'numan', 'Numan Ahmed', '2022-07-31 20:30:39', '2022-07-31 20:30:39'),
(2, 'aoun', 'Aoun Shah', '2022-07-31 20:56:09', '2022-07-31 20:56:09'),
(3, 'usman', 'Usman', '2022-08-01 07:17:53', '2022-08-01 07:17:53');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) DEFAULT NULL,
  `fullname` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `role` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `fullname`, `email`, `password`, `role`, `image`, `createdAt`, `updatedAt`) VALUES
(1, 'numan', 'Numan Ahmed', 'numan@gmail.com', '$2b$10$GndrWc0vRRfbuAgrJ5hmb.Bl/xP3uXy5JBggmTJlpl0OkP0/brJVu', 'teacher', 'WhatsApp Image 2022-07-24 at 4.04.44 PM.jpeg', '2022-07-31 19:21:48', '2022-07-31 19:21:48'),
(6, 'aoun', 'Aoun Shah', 'aoun@gmail.com', '$2b$10$Jpe79pAsvKv6mMPwbjZOd.RsesKOdAToFXydQX0Xh5GoVVcGrABdW', 'teacher', 'WhatsApp Image 2022-07-24 at 4.04.44 PM.jpeg', '2022-07-31 19:43:26', '2022-07-31 19:43:26');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `attendances`
--
ALTER TABLE `attendances`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `students`
--
ALTER TABLE `students`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `attendances`
--
ALTER TABLE `attendances`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `students`
--
ALTER TABLE `students`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
