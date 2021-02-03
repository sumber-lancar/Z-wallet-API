-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Waktu pembuatan: 03 Feb 2021 pada 21.00
-- Versi server: 8.0.13-4
-- Versi PHP: 7.2.24-0ubuntu0.18.04.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `futKIE47dV`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `balance`
--

CREATE TABLE `balance` (
  `id` int(11) NOT NULL,
  `id_user` int(11) NOT NULL DEFAULT '0',
  `balance` int(11) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data untuk tabel `balance`
--

INSERT INTO `balance` (`id`, `id_user`, `balance`) VALUES
(1, 6, 1657000),
(2, 10, 2079830),
(3, 20, 1658000),
(5, 32, 650000),
(8, 35, 750000),
(9, 36, 765000),
(10, 27, 1500000),
(11, 37, 9305000),
(12, 38, 910000),
(13, 39, 650170),
(14, 40, 0),
(15, 41, 0),
(16, 42, 150000);

-- --------------------------------------------------------

--
-- Struktur dari tabel `blocklist_token`
--

CREATE TABLE `blocklist_token` (
  `token` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data untuk tabel `blocklist_token`
--

INSERT INTO `blocklist_token` (`token`) VALUES
('0'),
('0'),
('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImltYmFrYWthayIsImxldmVsIjoxLCJpYXQiOjE2MDczNDYxODN9.6DJR0Qq8AKTPrmDwiUHC-4gH5ZsNkYtO5-oSWQiw1Ss'),
('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImltYmFrYWthayIsImxldmVsIjoxLCJpYXQiOjE2MDczNDYzODB9.9_1L3GTrFRYPAzBNEO4PoSsQK24MmCCt0ti1WbpQ-rI'),
('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImltYmFrYWthayIsImxldmVsIjoxLCJpYXQiOjE2MDczNDY3MTh9.5S6QXs6nirryd1pWsnXx7l5ijcqmfQUl-UTUiPTXfjQ'),
('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImltYmFrYWthayIsImxldmVsIjoxLCJpYXQiOjE2MDczNTUzNTh9.KOA6W4K0iud4LjhKtnYiQiCVQ6yMnBQccFtkctLLhos'),
('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImltYmFrYWthayIsImxldmVsIjoxLCJpYXQiOjE2MDczNTU0NDR9.421PTQnXQ3gGTUlibVe4q1_ix3_vMaUF3hFUFywRudI'),
('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImltYmFrYWthayIsImxldmVsIjoxLCJpYXQiOjE2MDczODMzNDR9.eyawJByOjvK9wMksKVMSJZ__8XqgQjySGnBjwQuFZxM'),
('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImJsYXplIiwibGV2ZWwiOjIsImlhdCI6MTYwNzM4MzcwOX0.v6A1upq8Xsz4ccDaYr7iwb7X8GsJ9tZ08nOjZPT0xv8'),
('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImJsYXplIiwibGV2ZWwiOjIsImlhdCI6MTYwNzQ3MjU4NX0.jZEd9qAT0GiSYCtsJFazjlds2OVf3nDP-aZ5MytojRA'),
('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImJsYXplIiwibGV2ZWwiOjIsImlhdCI6MTYwNzQ3MjU4NX0.jZEd9qAT0GiSYCtsJFazjlds2OVf3nDP-aZ5MytojRA'),
('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImJsYXplIiwibGV2ZWwiOjIsImlhdCI6MTYwNzU4NDk4NCwiZXhwIjoxNjA3NjcxMzg0fQ.UBcgHtiHbMqTMlEu60ZS4XX7jROkhbG-j1iSqGdoJhc'),
('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjozLCJ1c2VybmFtZSI6ImJsYXplIiwibGV2ZWwiOjIsImlhdCI6MTYwODAwMDkyMSwiZXhwIjoxNjA4MDg3MzIxfQ.D9ppqtAwiK68_EgTYGXYNho9z2VBTB9DN385FzyG7CU'),
('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjozLCJ1c2VybmFtZSI6ImJsYXplIiwibGV2ZWwiOjIsImlhdCI6MTYwODAxODkwMiwiZXhwIjoxNjA4MTA1MzAyfQ.LfpB0pwpUVGyR_9dC-lc2p9Ib8Wap1hWW-tdNsFjqfs'),
('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjozLCJ1c2VybmFtZSI6ImJsYXplIiwibGV2ZWwiOjIsImlhdCI6MTYwODAxOTU4NSwiZXhwIjoxNjA4MTA1OTg1fQ.gVWvF2Q_9MiL7OGncqlRzoj0iwzFJgA3_qxNN4BSl6s'),
('null'),
('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjozLCJ1c2VybmFtZSI6ImJsYXplIiwibGV2ZWwiOjIsImlhdCI6MTYwODAxOTgwNywiZXhwIjoxNjA4MTA2MjA3fQ.jaKMJHto63Xsc6cFarNJCSOWrNq9S_JVTOJeBM-cUII'),
('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjozLCJ1c2VybmFtZSI6ImJsYXplIiwibGV2ZWwiOjIsImlhdCI6MTYwODA2MDAwOSwiZXhwIjoxNjA4MTQ2NDA5fQ.A3rvAT2RNJH-l-z8Azo92rdsw-fhyRHHflkCJY2siJY'),
('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjozLCJ1c2VybmFtZSI6ImJsYXplIiwibGV2ZWwiOjIsImlhdCI6MTYwODA3MTk5OSwiZXhwIjoxNjA4MTU4Mzk5fQ.2UsnF3dWKIm6fxlYyvt0y1GtorDbR6uf0Pv0-UzAhNI'),
('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjozLCJ1c2VybmFtZSI6ImJsYXplIiwibGV2ZWwiOjIsImlhdCI6MTYwODA3NjQ3NywiZXhwIjoxNjA4MTYyODc3fQ.hvgaL8NUNuOzoVEL8mIYQMraEaLvOQ_r5MuyQ9CK5Qk'),
('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjozLCJ1c2VybmFtZSI6ImJsYXplIiwibGV2ZWwiOjIsImlhdCI6MTYwODA3NzE4MiwiZXhwIjoxNjA4MTYzNTgyfQ.GXVTGyMMjYCjry-76qXwW98Hg-SMBPg4zLkOiqmsATA'),
('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjozLCJ1c2VybmFtZSI6ImJsYXplIiwibGV2ZWwiOjIsImlhdCI6MTYwODA4NDMwMSwiZXhwIjoxNjA4MTcwNzAxfQ.WypWFOC0fYEnUe9BFi_PLFG6-DWnpuynVJ2rKtDPA88'),
('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjozLCJ1c2VybmFtZSI6ImJsYXplIiwibGV2ZWwiOjIsImlhdCI6MTYwODA4NDgzMCwiZXhwIjoxNjA4MTcxMjMwfQ.uB59IoyTuKfZUSbWPFNE4T0vh0idr2VrNJ0fSxiS3SM'),
('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjozLCJ1c2VybmFtZSI6ImJsYXplIiwibGV2ZWwiOjIsImlhdCI6MTYwODA4NzY0OSwiZXhwIjoxNjA4MTc0MDQ5fQ.kPVgm8gPGNfkUnmi02kN91_nNBwlKVUBUpJaBmLjx9A'),
('null'),
('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjozLCJ1c2VybmFtZSI6ImJsYXplIiwibGV2ZWwiOjIsImlhdCI6MTYwODA4ODA2OCwiZXhwIjoxNjA4MTc0NDY4fQ.psmOGEgPpqZS-mmdd472PLSkvIUDOg3o2AG4zLXtYQQ'),
('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoyLCJ1c2VybmFtZSI6ImltYmFrYWthayIsImxldmVsIjoxLCJpYXQiOjE2MDgwODgxOTQsImV4cCI6MTYwODE3NDU5NH0.NOLUimVLTYqGbD1sEdGWpXay8b3gOFliw_d20Hj-9jE'),
('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoyLCJ1c2VybmFtZSI6ImltYmFrYWthayIsImxldmVsIjoxLCJpYXQiOjE2MDgwODgzMTQsImV4cCI6MTYwODE3NDcxNH0.lmWx-77UvvDamtOY-q_VC7uKMVsxBiO5RhPubfMJFBA'),
('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjozLCJ1c2VybmFtZSI6ImJsYXplIiwibGV2ZWwiOjIsImlhdCI6MTYwODA5MTI4OSwiZXhwIjoxNjA4MTc3Njg5fQ.t2H5N7WZz3sSqTI-4XGZHz1Xw3Ogustb1V5pgz6dhXQ'),
('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjozLCJ1c2VybmFtZSI6ImJsYXplIiwibGV2ZWwiOjIsImlhdCI6MTYwODEwMDc2NiwiZXhwIjoxNjA4MTg3MTY2fQ.QNoF2XvbHiniLnjGSrqiX7XVW82pVaGAyN0rW0XT6jQ'),
('null'),
('null'),
('null'),
('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjozLCJ1c2VybmFtZSI6ImJsYXplIiwibGV2ZWwiOjIsImlhdCI6MTYwODE1NjQ3MSwiZXhwIjoxNjA4MjQyODcxfQ.nXGtcv9c-pPSt0B9zLojNtoYqwZv3hkIvBxGJ2akSys'),
('null'),
('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjozLCJ1c2VybmFtZSI6ImJsYXplIiwibGV2ZWwiOjIsImlhdCI6MTYwODE1ODI5MCwiZXhwIjoxNjA4MjQ0NjkwfQ.vjZYkwyT4CBlLxD2uCyMD9oISqYS9c0p828a6X0tHtA'),
('null'),
('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjozLCJ1c2VybmFtZSI6ImJsYXplIiwibGV2ZWwiOjIsImlhdCI6MTYwODE2NTYwOSwiZXhwIjoxNjA4MjUyMDA5fQ.ksTyrrPvRtoFgRSWGOXj7stKNmtjXAigACymLdDfuNo'),
('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjozLCJ1c2VybmFtZSI6ImJsYXplIiwibGV2ZWwiOjIsImlhdCI6MTYwODE2OTY4OCwiZXhwIjoxNjA4MjU2MDg4fQ.LuGTWhTuX8MW0LcfuCvhClWZkJ55MpjfBSuYUepFOPI'),
('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjozLCJ1c2VybmFtZSI6ImJsYXplIiwibGV2ZWwiOjIsImlhdCI6MTYwODE3NDU5NiwiZXhwIjoxNjA4MjYwOTk2fQ.tBedIEW0cr8HTDAQR5Gj441ouUKyyx_4jzeRzhRfKVo'),
('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjozLCJ1c2VybmFtZSI6ImJsYXplIiwibGV2ZWwiOjIsImlhdCI6MTYwODE3NzE0MSwiZXhwIjoxNjA4MjYzNTQxfQ.G-rB0hSpAjksQop8urgtoCvBiEITz1CojAIbfmD30uo'),
('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjozLCJ1c2VybmFtZSI6ImJsYXplIiwibGV2ZWwiOjIsImlhdCI6MTYwODE3NzUxNCwiZXhwIjoxNjA4MjYzOTE0fQ.TkUpErlIAAPqDgmfALwZNTdzqa6O9UpBquQOHNagiSw'),
('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjozLCJ1c2VybmFtZSI6ImJsYXplIiwibGV2ZWwiOjIsImlhdCI6MTYwODE3NzUxNCwiZXhwIjoxNjA4MjYzOTE0fQ.TkUpErlIAAPqDgmfALwZNTdzqa6O9UpBquQOHNagiSw'),
('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjozLCJ1c2VybmFtZSI6ImJsYXplIiwibGV2ZWwiOjIsImlhdCI6MTYwODE3NzUxNCwiZXhwIjoxNjA4MjYzOTE0fQ.TkUpErlIAAPqDgmfALwZNTdzqa6O9UpBquQOHNagiSw'),
('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjozLCJ1c2VybmFtZSI6ImJsYXplIiwibGV2ZWwiOjIsImlhdCI6MTYwODE3NzUxNCwiZXhwIjoxNjA4MjYzOTE0fQ.TkUpErlIAAPqDgmfALwZNTdzqa6O9UpBquQOHNagiSw');

-- --------------------------------------------------------

--
-- Struktur dari tabel `tb_otp`
--

CREATE TABLE `tb_otp` (
  `id` int(11) NOT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `otp` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data untuk tabel `tb_otp`
--

INSERT INTO `tb_otp` (`id`, `email`, `otp`) VALUES
(48, 'ghalievanhout@gmail.com', 'SE83zh'),
(51, 'mghalyramadhan@gmail.com', 'DOwI54'),
(52, 'mochammadghaly@gmail.com', 'OcmYbK');

-- --------------------------------------------------------

--
-- Struktur dari tabel `tb_otp_activation`
--

CREATE TABLE `tb_otp_activation` (
  `id` int(11) NOT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `otp` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data untuk tabel `tb_otp_activation`
--

INSERT INTO `tb_otp_activation` (`id`, `email`, `otp`) VALUES
(11, 'imbakakak@gmail.com', 'LDQDEk'),
(18, 'imbakakak@gmail.com', 'sAzgKo'),
(19, 'imbakakak@gmail.com', 'dlhM60'),
(20, 'imbakakak@gmail.com', '1xVq5u'),
(24, 'imbakakakv2@gmail.com', 'xh2OP4'),
(25, 'imbakakakv2@gmail.com', 'VAz0yJ'),
(26, 'imbakakakv2@gmail.com', '9sOp3O'),
(27, 'imbakakakv2@gmail.com', 'tJLcgI'),
(28, 'imbakakakv2@gmail.com', '44yz2x'),
(29, 'imbakakakv2@gmail.com', 'JSiPgz'),
(30, 'imbakakakv2@gmail.com', 'gT9JhL'),
(31, 'imbakakakmk2@gmail.com', '6gXP7a'),
(42, 'mochammadghaly@gmail.com', 'lQtynw'),
(47, 'agung.arifnur@gmail.com', 'Xui206');

-- --------------------------------------------------------

--
-- Struktur dari tabel `transfer`
--

CREATE TABLE `transfer` (
  `id` int(11) NOT NULL,
  `sender` int(11) NOT NULL,
  `receiver` int(11) NOT NULL,
  `amount` int(11) NOT NULL,
  `notes` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `type` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data untuk tabel `transfer`
--

INSERT INTO `transfer` (`id`, `sender`, `receiver`, `amount`, `notes`, `type`) VALUES
(3, 20, 10, 5000, 'bayar', 'in'),
(4, 20, 10, 5000, 'bayar', 'out'),
(5, 10, 20, 3000, 'bayar anu', 'in'),
(6, 10, 20, 3000, 'bayar anu', 'out'),
(7, 10, 6, 7000, 'gabi jembut', 'in'),
(8, 10, 6, 7000, 'gabi jembut', 'out'),
(9, 10, 20, 7500, 'sedekah', 'in'),
(10, 10, 20, 7500, 'sedekah', 'out'),
(11, 10, 20, 500, 'anu', 'in'),
(12, 10, 20, 500, 'anu', 'out'),
(13, 20, 29, 5000, 'bayar utang', 'in'),
(14, 20, 29, 5000, 'bayar utang', 'out'),
(15, 37, 36, 100000, 'Buat beli Permen', 'in'),
(16, 37, 36, 100000, 'Buat beli Permen', 'out'),
(17, 37, 27, 250000, 'Buat beli lauk batagor', 'in'),
(18, 37, 27, 250000, 'Buat beli lauk batagor', 'out'),
(19, 36, 37, 10000, 'bagi bagi duit', 'in'),
(20, 36, 37, 10000, 'bagi bagi duit', 'out'),
(21, 27, 37, 25000, 'bayar utang', 'in'),
(22, 27, 37, 25000, 'bayar utang', 'out'),
(23, 10, 20, 7000, 'bayar utang', 'in'),
(24, 10, 20, 7000, 'bayar utang', 'out'),
(25, 1, 10, 75000, 'Topup Balance', 'in'),
(37, 31, 38, 5000, 'TOPUP', 'in'),
(38, 31, 38, 5000, 'TOPUP', 'in'),
(39, 31, 38, 5000, 'TOPUP', 'in'),
(40, 1, 38, 500000, 'Topup Balance', '2'),
(41, 1, 38, 500000, 'Topup Balance', '2'),
(42, 1, 38, 100000, 'Topup Balance', '2'),
(43, 1, 38, 50000, 'Topup Balance', '2'),
(44, 37, 38, 100000, 'Buat beli Kuota', 'in'),
(45, 37, 38, 100000, 'Buat beli Kuota', 'out'),
(46, 27, 10, 5000, 'beli cireng', 'in'),
(47, 27, 10, 5000, 'beli cireng', 'out'),
(48, 27, 10, 10, 'tf 1', 'in'),
(49, 27, 10, 10, 'tf 1', 'out'),
(50, 27, 10, 10, 'tf 2', 'in'),
(51, 27, 10, 10, 'tf 2', 'out'),
(52, 27, 10, 10, 'tf3', 'in'),
(53, 27, 10, 10, 'tf3', 'out'),
(54, 37, 27, 100000, 'Buat beli Kuota', 'in'),
(55, 37, 27, 100000, 'Buat beli Kuota', 'out'),
(56, 27, 10, 10, 'test', 'in'),
(57, 27, 10, 10, 'test', 'out'),
(58, 27, 10, 10, 'test', 'in'),
(59, 27, 10, 10, 'test', 'out'),
(72, 27, 39, 100, 'test 1', 'in'),
(73, 27, 39, 100, 'test 1', 'out'),
(74, 27, 39, 10, 'Hei', 'in'),
(75, 27, 39, 10, 'Hei', 'out'),
(76, 27, 10, 10, 'test', 'in'),
(77, 27, 10, 10, 'test', 'out'),
(78, 27, 10, 25, 'test', 'in'),
(79, 27, 10, 25, 'test', 'out'),
(80, 27, 10, 30, '30', 'in'),
(81, 27, 10, 30, '30', 'out'),
(82, 10, 27, 50, '50', 'in'),
(83, 10, 27, 50, '50', 'out'),
(84, 37, 27, 100000, 'nih buat beli batagor 1minggu', 'in'),
(85, 37, 27, 100000, 'nih buat beli batagor 1minggu', 'out'),
(86, 27, 10, 200, 'transfer', 'in'),
(87, 27, 10, 200, 'transfer', 'out'),
(88, 10, 27, 10000, 'steam wallet', 'in'),
(89, 10, 27, 10000, 'steam wallet', 'out'),
(90, 27, 10, 9565, 'lunch', 'in'),
(91, 27, 10, 9565, 'lunch', 'out'),
(92, 27, 10, 10000, 'beli item', 'in'),
(93, 27, 10, 10000, 'beli item', 'out'),
(94, 37, 10, 10000, 'buat gofood', 'in'),
(95, 37, 10, 10000, 'buat gofood', 'out'),
(96, 1, 10, 75000, 'Topup Balance', 'in'),
(97, 1, 10, 75000, 'Topup Balance', 'in'),
(98, 1, 27, 75000, 'Topup Balance', 'in'),
(99, 1, 27, 75000, 'Topup Balance', 'in'),
(100, 37, 10, 100000, 'ini buat jajan yaa', 'in'),
(101, 37, 10, 100000, 'ini buat jajan yaa', 'out'),
(102, 1, 27, 7500, 'Topup Balance', 'in'),
(103, 1, 27, 7500, 'Topup Balance', 'in'),
(104, 1, 27, 7500, 'Topup Balance', 'in'),
(105, 1, 27, 7500, 'Topup Balance', 'in'),
(106, 1, 27, 7500, 'Topup Balance', 'in'),
(107, 1, 27, 7500, 'Topup Balance', 'in'),
(108, 1, 27, 7500, 'Topup Balance', 'in'),
(109, 37, 27, 50000, 'Beli batagor 2', 'in'),
(110, 1, 27, 7500, 'Topup Balance', 'in'),
(111, 37, 27, 50000, 'Beli batagor 2', 'out'),
(112, 1, 27, 7500, 'Topup Balance', 'in'),
(113, 1, 27, 7500, 'Topup Balance', 'in'),
(114, 1, 27, 7500, 'Topup Balance', 'in'),
(115, 37, 35, 100000, 'Buat beli eskrim', 'in'),
(116, 37, 35, 100000, 'Buat beli eskrim', 'out'),
(117, 37, 36, 25000, 'Nitip mi ayam', 'in'),
(118, 37, 36, 25000, 'Nitip mi ayam', 'out'),
(119, 1, 27, 7500, 'Topup Balance', 'in'),
(120, 37, 38, 50000, 'Bismillah', 'in'),
(121, 37, 38, 50000, 'Bismillah', 'out'),
(122, 1, 27, 7500, 'Topup Balance', 'in'),
(123, 1, 27, 7500, 'Topup Balance', 'in'),
(124, 37, 27, 100000, 'bismillah', 'in'),
(125, 37, 27, 100000, 'bismillah', 'out'),
(126, 37, 42, 150000, 'Buat bekal', 'in'),
(127, 37, 42, 150000, 'Buat bekal', 'out'),
(128, 27, 37, 65000, 'Beli Mesjid', 'in'),
(129, 27, 37, 65000, 'Beli Mesjid', 'out'),
(130, 37, 27, 100000, 'wakaf', 'in'),
(131, 37, 27, 100000, 'wakaf', 'out'),
(132, 37, 38, 10000, 'nitip cilok', 'in'),
(133, 37, 38, 10000, 'nitip cilok', 'out'),
(134, 37, 10, 100000, 'bismillah', 'in'),
(135, 37, 10, 100000, 'bismillah', 'out');

-- --------------------------------------------------------

--
-- Struktur dari tabel `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `firstname` varchar(255) COLLATE utf8_unicode_ci NOT NULL DEFAULT ' ',
  `lastname` varchar(255) COLLATE utf8_unicode_ci NOT NULL DEFAULT ' ',
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL DEFAULT ' ',
  `password` varchar(255) COLLATE utf8_unicode_ci NOT NULL DEFAULT ' ',
  `phone` varchar(15) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL DEFAULT '  ',
  `pin` varchar(6) COLLATE utf8_unicode_ci NOT NULL DEFAULT ' ',
  `photo` varchar(255) COLLATE utf8_unicode_ci NOT NULL DEFAULT '/image/default.png',
  `isActive` int(11) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data untuk tabel `users`
--

INSERT INTO `users` (`id`, `firstname`, `lastname`, `email`, `password`, `phone`, `pin`, `photo`, `isActive`) VALUES
(1, ' Top-Up', ' Center', ' ', ' ', '  ', ' ', '/images/default.png', 0),
(10, 'Jack', 'Eastwood', 'imbakakak@gmail.com', '$2b$08$Mcyb7SCfIRTbKAOFKV7z7.IddrS.w7AfAkk0S73181TYO9O7.oHYu', '+6285155207882', '967401', '/images/img-1612364419742.jpg', 1),
(20, 'johnny', 'sasaki', 'imbakakakv2@gmail.com', '$2b$04$0kupSnX.EJ3FFfAllTny7e6.qAaGzMXm7Zpvf3rzrZ.p2agqqre4m', '  ', '110746', '/images/default.png', 1),
(27, 'hendra', 'Solih', 'hendra.solih.jp@gmail.com', '$2b$06$1N.32OsJGgliFCZUIZ2PyerPRyPmzGAO1.dd2omkL5K9UnHK0g2QS', '+6285722175601', '121212', '/images/img-1612363936477.jpg', 1),
(35, 'johnny', 'sasaki', 'agung.arifnur@gmail.com', '$2b$09$1wZKVUEqkVYjTywFGIa.euN52x0qXMj8tX7Tx8OIJufDQjJPxf9b.', '  ', '967401', '/images/default.png', 1),
(36, 'McClain', 'Gregor', 'verzchseptian@gmail.com', '$2b$08$vXxz8wR1dxzhXxFH6Hgtz.AxK2fZJLrstS5ACdv9O.EaeZ3.rrwQq', '+6287877640848', '112233', '/images/img-1612379185836.jpg', 1),
(37, 'Fachri', 'Ghiffary', 'fachrighiffary@gmail.com', '$2b$09$iQKlC.uY/7ZUSF2inI9Ti.nqzJlqLxU28Elqiif5VsyZ52/sVgNue', '+6282226078782', '123123', '/images/img-1612368780900.jpeg', 1),
(38, 'Rony', 'west', 'mghalyramadhan@gmail.com', '$2b$10$f7lN6/uskgpalR6JbFUVxuaIB80vIC31qCHucsWyG1u9scOX/Ntd6', '08197426666', '170199', '/images/default.png', 1),
(39, 'user', 'baru', 'baru@mail.com', '$2b$04$nhoJOwvtjzmQPYQuZ6BGOeuxfevn34wnXT05dL0pU/PnA/tG6YdI6', '  ', '131313', '/images/default.png', 1),
(40, 'Earen', ' ', 'ghalievanhout@gmail.com', '$2b$06$OM4EmYRnA7raNUL6wAkRK.fcLGcvLGBEw1sqGpKLZdGAjgtg7Zec2', '  ', ' ', '/image/default.png', 1),
(41, 'Eren', 'Jagger', 'mochammadghaly@gmail.com', '$2b$04$0tRxORL1mluvAHW1IWC6T.cAP2mXrKV4nnIPqFPbpiJ3KIURupzeq', '  ', '111186', '/image/default.png', 1),
(42, 'park ji', ' ', 'jisung@mail.com', '$2b$04$mIFtTS92kTa19eFHEEgBNumlTRoyhJatzbspatDvA0wUOI7L9BQrC', '  ', '151515', '/image/default.png', 1);

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `balance`
--
ALTER TABLE `balance`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `tb_otp`
--
ALTER TABLE `tb_otp`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `tb_otp_activation`
--
ALTER TABLE `tb_otp_activation`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `transfer`
--
ALTER TABLE `transfer`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `balance`
--
ALTER TABLE `balance`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT untuk tabel `tb_otp`
--
ALTER TABLE `tb_otp`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=56;

--
-- AUTO_INCREMENT untuk tabel `tb_otp_activation`
--
ALTER TABLE `tb_otp_activation`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=56;

--
-- AUTO_INCREMENT untuk tabel `transfer`
--
ALTER TABLE `transfer`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=136;

--
-- AUTO_INCREMENT untuk tabel `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
