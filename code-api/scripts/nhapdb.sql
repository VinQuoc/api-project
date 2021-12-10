-- MySQL dump 10.13  Distrib 8.0.22, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: blogdb
-- ------------------------------------------------------
-- Server version	8.0.22

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `token`
--

DROP TABLE IF EXISTS `token`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `token` (
  `id` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `token`
--

LOCK TABLES `token` WRITE;
/*!40000 ALTER TABLE `token` DISABLE KEYS */;
INSERT INTO `token` VALUES ('2b7befb0-1078-4918-bb0d-6aa006486713','31d73fca-d230-48dd-97d3-6bd1359f71dd','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjMxZDczZmNhLWQyMzAtNDhkZC05N2QzLTZiZDEzNTlmNzFkZCIsInVzZXJuYW1lIjoienhjNSIsInN0YXR1cyI6IkFDVElWRSIsImlhdCI6MTYzOTE0NDY3MywiZXhwIjoxNjM5MTczNDczfQ.TU6yxj_9mdjKf5M1yaoenSbUu3LLn892SSzEaH5rsNs'),('3153874b-0587-483b-8cef-06136972e6a7','48d0e6bb-690a-4c29-87f0-aa03235d6008','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQ4ZDBlNmJiLTY5MGEtNGMyOS04N2YwLWFhMDMyMzVkNjAwOCIsInVzZXJuYW1lIjoienhjMiIsInN0YXR1cyI6IkFDVElWRSIsImlhdCI6MTYzOTE0MzkxMywiZXhwIjoxNjM5MTcyNzEzfQ.XpC0KGYbdSMj-1O2n0y02d2-isMiE1f4HvjPtTu_E5I'),('e53845fa-b2b9-436d-874b-de44ed680eeb','a9b9969c-a079-4897-bf40-bac453826977','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImE5Yjk5NjljLWEwNzktNDg5Ny1iZjQwLWJhYzQ1MzgyNjk3NyIsInVzZXJuYW1lIjoienhjMTMiLCJzdGF0dXMiOiJBQ1RJVkUiLCJpYXQiOjE2MzkxNDM5MzYsImV4cCI6MTYzOTE3MjczNn0.PppDGSAgpfO8yk1SgXP-7RNbTj8tdofTdzCkWgq2lEc'),('ac397b6b-5b0b-4698-9739-d9f01bb803ca','ccfc2f10-f4b9-4e5e-b350-da9b1552722b','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNjZmMyZjEwLWY0YjktNGU1ZS1iMzUwLWRhOWIxNTUyNzIyYiIsInVzZXJuYW1lIjoienhjMyIsInN0YXR1cyI6IkFDVElWRSIsImlhdCI6MTYzOTE0MzkyMCwiZXhwIjoxNjM5MTcyNzIwfQ.4eQ0X-xX1xoyVoglNecwwMlIjGaPdtplR8c1PusaXUE');
/*!40000 ALTER TABLE `token` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `username` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `password` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES ('0e412c22-1b59-49c2-8159-2f85c02a210a','zxc','$2b$10$Tu6dj.9UEGnT9zXKwUM5C.NNKGoB6mgh4wNzcIKkfRBrpzNQCMK1K','ACTIVE'),('1','zxc1','$2b$10$mdq37RqUxeKW/YStI.cxoeFBlldFASHKWK4ILo3UOkDrmmHcfH2wW','ACTIVE'),('31d73fca-d230-48dd-97d3-6bd1359f71dd','zxc5','$2b$10$Y4M34B2VcsskbIC4XaXUO.j7jHXc0VxSbVfkvLD9Th/rd6s.L5Hz2','ACTIVE'),('48d0e6bb-690a-4c29-87f0-aa03235d6008','zxc2','$2b$10$RWUD.j4KQt27NjMD1Smy/etESR/gXhtvZtlfNpIsiBoP5evY8Ewu2','ACTIVE'),('6b4c685e-9a5d-4185-a70e-a6d11f25c6cf','zxc6','$2b$10$zanVJjGohFUa5MneXoVwa.1lZEwJjm3FErSwlZ78OzNgXmxeZHd0G','ACTIVE'),('a9b9969c-a079-4897-bf40-bac453826977','zxc13','$2b$10$mqFRSUYEo5oZw4S2yriOJeo4OGrTA/NTduq7sY3oDugTrT8DuhRZ6','ACTIVE'),('b64695dd-98e3-495b-a452-70a2b7908c2d','zxc','$2b$10$TCMeOoow9zb2IzXQz3rxzONhrbjK5/MsCC.aQNRHqp2A2ZpN/Y3Ca','ACTIVE'),('ccfc2f10-f4b9-4e5e-b350-da9b1552722b','zxc3','$2b$10$jZPqlejRiSjRLdf8B73.keizb/bInis.H2f0NWUmL73e9/G1v4kHG','ACTIVE');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-12-10 21:02:43
