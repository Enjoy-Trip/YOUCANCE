-- API로 받아올 수 있는 것
-- - 지역 코드 (시도, 구군)
-- - 서비스 코드 (대, 중, 소)
-- - 현재 위치 기반 검색
-- - 키워드 기반 검색
-- - 지역/분류 기반 검색
-- - 관광지 상세 검색
-- - 관광지 이미지 검색
-- 
-- 해야될 것
-- - 사용자 관리
-- - 게시판
-- - 여행 계획
-- - 좋아요한 여행지
-- - 사용자 설정 여행지
-- - 검색 결과
-- - 뉴스
-- 

-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: enjoytrips
-- ------------------------------------------------------
-- Server version	8.0.31

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
-- Init database `trip`
--
DROP DATABASE IF EXISTS `trip`;
CREATE DATABASE `trip`;
USE `trip`;


--
-- Table structure for table `attraction_info`
--
DROP TABLE IF EXISTS `attraction_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `attraction_info` (
	`contentid` int NOT NULL AUTO_INCREMENT,
   	`user_no` int NOT NULL,
	`contenttypeid` int DEFAULT NULL,
	`title` varchar(100) DEFAULT NULL,
	`addr1` varchar(100) DEFAULT NULL,
	`addr2` varchar(50) DEFAULT NULL,
	`zipcode` varchar(50) DEFAULT NULL,
	`tel` varchar(50) DEFAULT NULL,
	`firstimage` varchar(200) DEFAULT NULL,
	`firstimage2` varchar(200) DEFAULT NULL,
	`areacode` int DEFAULT NULL,
	`sigungucode` int DEFAULT NULL,
	`mapx` decimal(20, 17) DEFAULT NULL,
	`mapy` decimal(20, 17) DEFAULT NULL,
	`mlevel` varchar(2) DEFAULT NULL,
	PRIMARY KEY (`contentid`),
    	CONSTRAINT `user_to_attraction_info_user_no_fk` FOREIGN KEY (`user_no`) REFERENCES `user` (`user_no`) ON DELETE CASCADE
) 	ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;


--
-- Table structure for table `attraction_detail_info`
--
DROP TABLE IF EXISTS `attraction_detail_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `attraction_detail_info` (
	`contentid` int NOT NULL,
	`cat1` varchar(3) DEFAULT NULL,
	`cat2` varchar(5) DEFAULT NULL,
	`cat3` varchar(9) DEFAULT NULL,
	`createdtime` DATETIME DEFAULT CURRENT_TIMESTAMP,
	`modifiedtime` DATETIME DEFAULT CURRENT_TIMESTAMP,
	`booktour` varchar(5) DEFAULT NULL,
	PRIMARY KEY (`contentid`)
) 	ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;


--
-- Table structure for table `attraction_description`;
--
DROP TABLE IF EXISTS `attraction_description`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `attraction_description` (
	`contentid` int NOT NULL,
	`homepage` varchar(100) DEFAULT NULL,
	`overview` varchar(10000) DEFAULT NULL,
	`telname` varchar(45) DEFAULT NULL,
	PRIMARY KEY (`contentid`)
) 	ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;


--
-- Table structure for table `attraction_comment`
--
DROP TABLE IF EXISTS `attraction_comment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `attraction_comment` (
	`attraction_comment_no` INT auto_increment NOT NULL,
	`user_no` INT NOT NULL,
	`contentid` INT NOT NULL,
	`attraction_comment_content` VARCHAR(1000) DEFAULT NULL,
	`attraction_comment_time` DATETIME DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (`attraction_comment_no`),
	CONSTRAINT `user_to_attraction_comment_user_no_fk` FOREIGN KEY (`user_no`) REFERENCES `user` (`user_no`)
)	ENGINE=innodb DEFAULT charset=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;


--
-- Table structure for table `user`
--
DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
	`user_no`  INT auto_increment NOT NULL,
	`user_id`       VARCHAR(40) NOT NULL,
	`user_password` VARCHAR(40) NOT NULL,
	`user_name`     VARCHAR(40) NOT NULL,
	`user_profile`  VARCHAR(100) DEFAULT NULL,
	`user_nickname` VARCHAR(40) NOT NULL,
  	`token` VARCHAR(1000) NULL DEFAULT NULL,
	PRIMARY KEY (`user_no`)
) 	ENGINE=innodb DEFAULT charset=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;


--
-- Table structure for table `board`
--
DROP TABLE IF EXISTS `board`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `board` (
	`board_no` INT auto_increment NOT NULL,
    `board_type` INT default 0,
	`user_no`  INT NOT NULL,
	`board_title`    VARCHAR(100) NOT NULL,
	`board_time`     DATETIME DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (`board_no`),
	CONSTRAINT `user_to_board_board_no_fk` FOREIGN KEY (`user_no`) REFERENCES `user` (`user_no`) ON DELETE CASCADE
) 	ENGINE=innodb DEFAULT charset=utf8mb3;


--
-- Table structure for table `board_detail`
--
DROP TABLE IF EXISTS `board_detail`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `board_detail` (
	`board_no` INT NOT NULL,
	`board_content`  VARCHAR(1000) DEFAULT NULL,
	PRIMARY KEY (`board_no`),
	CONSTRAINT `board_to_board_detail_board_no_fk` FOREIGN KEY (`board_no`) REFERENCES `board` (`board_no`) ON DELETE CASCADE
)	ENGINE=innodb DEFAULT charset=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `board_image`
--
DROP TABLE IF EXISTS `board_image`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `board_image`(
	`image_no` INT NOT NULL AUTO_INCREMENT,
	`board_no` INT NOT NULL,
	`board_image` MEDIUMTEXT NOT NULL,
	PRIMARY KEY (`image_no`),
	CONSTRAINT `board_to_board_image_board_no_fk` FOREIGN KEY (`board_no`) REFERENCES `board` (`board_no`) ON DELETE CASCADE
) 	ENGINE=innodb DEFAULT charset=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;


--
-- Table structure for table `comment`
--
DROP TABLE IF EXISTS `board_comment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `board_comment`(
	`board_comment_no` INT auto_increment NOT NULL,
	`user_no`    INT NOT NULL,
	`board_no`   INT NOT NULL,
	`board_comment_content`    VARCHAR(1000) DEFAULT NULL,
	`board_comment_time`       DATETIME DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (`board_comment_no`),
	CONSTRAINT `user_to_board_comment_user_no_fk` FOREIGN KEY (`user_no`) REFERENCES `user` (`user_no`) ON DELETE CASCADE,
	CONSTRAINT `board_to_board_comment_user_no_fk` FOREIGN KEY (`board_no`) REFERENCES `board` (`board_no`) ON DELETE CASCADE
) 	ENGINE=innodb DEFAULT charset=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;


--
-- Table structure for table `plan`
--
DROP TABLE IF EXISTS `plan`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `plan`(
	`plan_no`    INT auto_increment NOT NULL,
	`user_no`    INT NOT NULL,
	`plan_title`      VARCHAR(100) NOT NULL,
	`plan_time` DATETIME DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (`plan_no`),
	CONSTRAINT `user_to_plan_user_no_fk` FOREIGN KEY (`user_no`) REFERENCES `user` (`user_no`) ON DELETE CASCADE
) 	ENGINE=innodb DEFAULT charset=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;


--
-- Table structure for table `plan_detail`
--
DROP TABLE IF EXISTS `plan_detail`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `plan_detail` (
	`plan_no`    INT NOT NULL,
	`plan_start_date` DATETIME DEFAULT NULL,
	`plan_end_date`   DATETIME DEFAULT NULL,
	`plan_content`    VARCHAR(1000) DEFAULT NULL,
	PRIMARY KEY (`plan_no`),
	CONSTRAINT `plan_to_plan_detail_plan_no_fk` FOREIGN KEY (`plan_no`) REFERENCES `plan` (`plan_no`) ON DELETE CASCADE
) 	ENGINE=innodb DEFAULT charset=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;


--
-- Table structure for table `plan_place_list`
--
DROP TABLE IF EXISTS `plan_place_list`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `plan_place_list`(
	`plan_no`    INT NOT NULL,
	`contentid` INT NOT NULL,
	`plan_day` INT DEFAULT -1,
	PRIMARY KEY (`plan_no`, `contentid`),
	CONSTRAINT `plan_to_plan_place_list_plan_no_fk` FOREIGN KEY (`plan_no`) REFERENCES `plan` (`plan_no`) ON DELETE CASCADE
)	ENGINE=innodb DEFAULT charset=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;


--
-- Table structure for table `like_place`
--
DROP TABLE IF EXISTS `like_place`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `like_place`(
	`user_no`    INT NOT NULL,
	`contentid` INT NOT NULL,
	`like_time`  DATETIME DEFAULT CURRENT_TIMESTAMP,
	`like_comment`    VARCHAR(100) DEFAULT NULL,
	PRIMARY KEY (`user_no`, `contentid`),
	CONSTRAINT `user_to_like_place_user_no_fk` FOREIGN KEY (`user_no`) REFERENCES `user` (`user_no`) ON DELETE CASCADE
)	ENGINE=innodb DEFAULT charset=utf8mb3; 
/*!40101 SET character_set_client = @saved_cs_client */;


--
-- Table structure for table `search_result`
--
DROP TABLE IF EXISTS `search_result`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `search_result`(
	`search_word` varchar(255) NOT NULL,
	`search_count` INT DEFAULT 0,
	PRIMARY KEY (`search_word`)
)	ENGINE=innodb DEFAULT charset=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;


--
-- Table structure for table `news`
--
DROP TABLE IF EXISTS `news`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `news` (
	`news_no` INT auto_increment NOT NULL,
	`news_title`   VARCHAR(100) NOT NULL,
	`news_content` VARCHAR(1000) DEFAULT NULL,
	`news_link`    VARCHAR(100) NOT NULL,
	`news_image`   VARCHAR(100) DEFAULT NULL,
	`news_time`    VARCHAR(100) DEFAULT NULL,
	PRIMARY KEY (`news_no`)
) 	ENGINE=innodb DEFAULT charset=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;



/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
