/*
SQLyog 企业版 - MySQL GUI v8.14 
MySQL - 5.5.20 : Database - book-sys
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`book-sys` /*!40100 DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci */;

USE `book-sys`;

/*Table structure for table `book` */

DROP TABLE IF EXISTS `book`;

CREATE TABLE `book` (
  `bookId` int(8) NOT NULL AUTO_INCREMENT,
  `bookNum` varchar(15) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '编号',
  `bookStatus` int(4) DEFAULT NULL COMMENT '1-未卖出 2-已卖出',
  `numbers` int(8) DEFAULT NULL COMMENT '库存数量',
  PRIMARY KEY (`bookId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `book` */

/*Table structure for table `shopping` */

DROP TABLE IF EXISTS `shopping`;

CREATE TABLE `shopping` (
  `shoppingId` int(8) unsigned NOT NULL,
  `stuId` int(8) DEFAULT NULL COMMENT '学生id',
  `bookId` int(8) DEFAULT NULL COMMENT '书本id',
  `booknum` int(8) DEFAULT NULL COMMENT '数量',
  PRIMARY KEY (`shoppingId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `shopping` */

/*Table structure for table `student` */

DROP TABLE IF EXISTS `student`;

CREATE TABLE `student` (
  `stuId` int(8) NOT NULL AUTO_INCREMENT COMMENT '学生Id',
  `stuNo` varchar(15) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '学号',
  `stuName` varchar(15) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '姓名',
  UNIQUE KEY `stuId` (`stuId`)
) ENGINE=InnoDB AUTO_INCREMENT=93 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `student` */

insert  into `student`(`stuId`,`stuNo`,`stuName`) values (1,'201713541001','曾国峰'),(2,'201713541002','曾善鹏'),(3,'201713541003','陈启佳'),(4,'201713541004','陈瑞'),(5,'201713541005','陈犀凌'),(6,'201713541007','杜思远'),(7,'201713541008','樊莉君'),(8,'201713541009','苟军军'),(9,'201713541010','顾诚'),(10,'201713541011','何树芬'),(11,'201713541012','何婉秋'),(12,'201713541013','何悦'),(13,'201713541014','贺玲玲'),(14,'201713541015','侯梦军'),(15,'201713541016','黄梦婷'),(16,'201713541018','吉瓦儿公'),(17,'201713541019','蒋家'),(18,'201713541020','李佳欣'),(19,'201713541021','李佳煜'),(20,'201713541022','李佳烛'),(21,'201713541023','李庆'),(22,'201713541024','李松桂'),(23,'201713541025','刘佳慧'),(24,'201713541026','罗利'),(25,'201713541027','马权'),(26,'201713541028','石梁'),(27,'201713541029','唐朝'),(28,'201713541030','唐君'),(29,'201713541031','滕海怡'),(30,'201713541032','王莉芳'),(31,'201713541033','王茂树'),(32,'201713541034','王银丰'),(33,'201713541035','巫婕'),(34,'201713541036','吴星妮'),(35,'201713541037','向姚'),(36,'201713541038','杨高鹏'),(37,'201713541039','杨杰'),(38,'201713541040','杨鑫'),(39,'201713541041','袁慧玲'),(40,'201713541042','岳海兰'),(41,'201713541043','张欢译'),(42,'201713541044','张义雪'),(43,'201713541045','郑钰'),(44,'201713541046','仲磊'),(45,'201713541047','周忻雷'),(46,'201713541048','祝晓凤'),(47,'201713540901','曹小娇'),(48,'201713540902','陈兰香'),(49,'201713540903 ','陈森林'),(50,'201713540904','陈涛'),(51,'201713540905','邓洪'),(52,'201713540906','邓青松'),(53,'201713540908','董婷婷'),(54,'201713540909','杜润聪'),(55,'201713540910','杜朱灵'),(56,'201713540911','甘洪雯'),(57,'201713540912','郭乙岩'),(58,'201713540913','何博'),(59,'201713540914','何恋'),(60,'201713540915','何柳清'),(61,'201713540916','黄鑫婷'),(62,'201713540917','黄雪莲'),(63,'201713540918','雷洪江'),(64,'201713540919','李炳橙'),(65,'201713540920','李金衡'),(66,'201713540921','李玉玲'),(67,'201713540922','李韵'),(68,'201713540924','刘钰'),(69,'201713540925','龙凤'),(70,'201713540926','陆怡'),(71,'201713540927','罗健康'),(72,'201713540928','罗力文'),(73,'201713540929','罗琪凌'),(74,'201713540930','罗媛媛'),(75,'201713540931','马冀'),(76,'201713540932','毛林'),(77,'201713540933','蒲刘嘉'),(78,'201713540934','瞿小峰'),(79,'201713540935','冉怡茜'),(80,'201713540936','唐红霞'),(81,'201713540937','唐黎明'),(82,'201713540938','王毅'),(83,'201713540939','吴盛国'),(84,'201713540940','伍丽萍'),(85,'201713540942','杨晨曦'),(86,'201713540943','杨钰波'),(87,'201713540944','袁璇'),(88,'201713540945','袁媛'),(89,'201713540946','张梦蝶'),(90,'201713540947','周金源'),(91,'201713540948','卓杨'),(92,'201713540950','刘一帆');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
