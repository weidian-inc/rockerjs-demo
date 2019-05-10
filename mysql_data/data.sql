DROP database IF EXISTS `perf`;
create database `perf` default character set utf8 collate utf8_general_ci;
use `perf`; 
DROP TABLE IF EXISTS `app_info`; 
CREATE TABLE `app_info` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `gmt_create` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `appid` varchar(128) NOT NULL COMMENT 'app guid',
  `secrete` varchar(128) NOT NULL,
  `username` varchar(50) NOT NULL COMMENT '开发者名字',
  `appname` varchar(200) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `idx_name` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;

INSERT INTO `app_info` (`appid`,`secrete`,`username`,`appname`) VALUES ("d1cd4fb9-a15c","dad3klvm","tom","shop-service"), 
("d8935425-34d8","vmfl53d","jerry","common-service"), ("794c41f2-adfa","ito6343","peter","buy-service");