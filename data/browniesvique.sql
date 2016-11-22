-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Nov 22, 2016 at 01:54 AM
-- Server version: 5.6.28
-- PHP Version: 7.0.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `BrowniesVique`
--

-- --------------------------------------------------------

--
-- Table structure for table `Comment`
--

CREATE TABLE `Comment` (
  `id` int(100) NOT NULL,
  `userid` int(100) NOT NULL,
  `body` varchar(500) NOT NULL,
  `dateCom` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Comment`
--

INSERT INTO `Comment` (`id`, `userid`, `body`, `dateCom`) VALUES
(3, 18, 'Me encantan estos brownies!', '2016-11-17'),
(5, 18, 'Reitero que me encantas estos brownies caidos del cielo!!!', '2016-11-17'),
(6, 18, 'hola', '2016-11-17'),
(7, 18, 'Hi', '2016-11-17');

-- --------------------------------------------------------

--
-- Table structure for table `ContactMsgs`
--

CREATE TABLE `ContactMsgs` (
  `id` int(100) NOT NULL,
  `mail` varchar(100) NOT NULL,
  `name` varchar(250) NOT NULL,
  `body` varchar(5000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `ContactMsgs`
--

INSERT INTO `ContactMsgs` (`id`, `mail`, `name`, `body`) VALUES
(1, 'zareek99@gmail.com', 'Armando Valles', 'Hola, me podrian informar más si hacen descuentos para eventos grandes? Muchas Gracias!'),
(2, 'zareek@gmail.com', 'Zareek', 'Hola, podrian ayudarme con un evento? gracias!');

-- --------------------------------------------------------

--
-- Table structure for table `Orders`
--

CREATE TABLE `Orders` (
  `id` int(100) NOT NULL,
  `userid` int(100) NOT NULL,
  `body` varchar(500) NOT NULL,
  `dateCom` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Orders`
--

INSERT INTO `Orders` (`id`, `userid`, `body`, `dateCom`) VALUES
(1, 18, 'Sprinkles x8\nWhite chocolate x9\n', '2016-11-17'),
(2, 0, 'Cheesecake x1\n', '2016-11-17'),
(3, 18, 'Sugar Glass x100\nWhite chocolate x15\nSprinkles x20\n', '2016-11-17'),
(4, 18, 'Sprinkles x5\nSugar Glass x20\n', '2016-11-17');

-- --------------------------------------------------------

--
-- Table structure for table `User`
--

CREATE TABLE `User` (
  `id` int(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `name` varchar(250) NOT NULL,
  `pass` varchar(256) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `User`
--

INSERT INTO `User` (`id`, `email`, `name`, `pass`) VALUES
(9, 'a@g.c', 'a', 'X8VabsJXEzkfZuKV7SaJslBAcmO8jo++/XjwWoXaHpo='),
(15, 'b@g.c', 'b', 's/Q0ryYjvQEEmAQwVh3rbU8L6Erea8bTGq/ALxV58Gc='),
(16, 'c@g.c', 'c', 'UnQAdQccPfdoUh6UG9rp6vBfbnugTmhuaDRTpdJU1io='),
(17, 'd@g.c', 'd', '2Dt8tJv+1wZPDqygHwFFn3RFcSV9Z8BscCRXasinmhs='),
(18, 'armandocgv@gmail.com', 'Armando Galvan', 'I9MEWFHHt7jqt00rx1LRtR/niEBwGd0AZultkrDqgQI=');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Comment`
--
ALTER TABLE `Comment`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ContactMsgs`
--
ALTER TABLE `ContactMsgs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Orders`
--
ALTER TABLE `Orders`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `User`
--
ALTER TABLE `User`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Comment`
--
ALTER TABLE `Comment`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
--
-- AUTO_INCREMENT for table `ContactMsgs`
--
ALTER TABLE `ContactMsgs`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `Orders`
--
ALTER TABLE `Orders`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `User`
--
ALTER TABLE `User`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;