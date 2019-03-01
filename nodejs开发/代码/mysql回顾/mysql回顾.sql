# 创建数据库
CREATE DATABASE bbs;
# 使用bbs数据库
USE bbs;
# 查看当前正在使用哪个数据库
SELECT DATABASE();
# 查看当前数据库的引擎有哪些
SHOW ENGINES;

# Myisam的引擎它是行锁级别的引擎,不支持事务处理,在select性能上理论上优于Innodb,结构文件，索引文件,数据文件单独分开，优化和压缩myisam更有利
# Myisam不利于数据的完整性体现,Myisam可以实现数据库高级功能range和list等分区技术
# Myisam的应用场景:blog,bbs,新闻,产品,栏目等不太敏感和精确的数据

# Innodb的引擎它是表锁级别的引擎,可以发生事务处理,结构文件单独，索引文件,数据文件共享分开,压缩无法进行但是有利于数据的完整性
# Innodb是适用于安全性较高且敏感度较高的数据，如果写大于读,适用于innodb

# 创建表(用户表)
CREATE TABLE `bbs_users`(
	`id` INT UNSIGNED PRIMARY KEY AUTO_INCREMENT COMMENT '主键',
	`username` VARCHAR(20) NOT NULL COMMENT '论坛账号',
	`password` VARCHAR(32) NOT NULL COMMENT '论坛密码',
	`avatar` VARCHAR(50) DEFAULT NULL COMMENT '头像',
	`nickname` VARCHAR(10) DEFAULT NULL COMMENT '昵称',
	`register_time` DATETIME DEFAULT NULL 
)ENGINE=MYISAM CHARSET=utf8;

# 创建用户名的唯一性索引
CREATE UNIQUE INDEX uname ON bbs_users(username) 


# 插入基本的测试用户
INSERT INTO bbs_users(username,`password`,avatar,nickname,register_time)VALUES('pengjin',MD5('123456'),'upload/1.jpg','风尘剑客',NOW());
INSERT INTO bbs_users(username,`password`,avatar,nickname,register_time)VALUES('lisi',MD5('123456'),'upload/1.jpg','西蒙吹雪',NOW());


# 查询数据表
SELECT * FROM bbs_users;


# 删除数据
DELETE FROM bbs_users WHERE id=2;


# 清除表(会让主键自增从新开始计算)
TRUNCATE TABLE bbs_users;


# 修改表
UPDATE bbs_users SET `password`=MD5('654321') WHERE id=1


# 设计学生库
CREATE DATABASE stus;
USE stus;

# 创建学生用户表
CREATE TABLE students(
	 sid VARCHAR(11) PRIMARY KEY COMMENT '主键，学号',
	`name` VARCHAR(16) NOT NULL COMMENT '姓名',
	`school` VARCHAR(10) NOT NULL COMMENT '学校',
	`age` TINYINT UNSIGNED COMMENT '年龄'
)ENGINE=MYISAM CHARSET=utf8;


# 创建成绩表
CREATE TABLE sorces(
	sid VARCHAR(11) NOT NULL COMMENT '外键，学号',
	sorce TINYINT UNSIGNED DEFAULT 0 COMMENT '分数',
	course VARCHAR(10) COMMENT '学科名称'
)ENGINE=MYISAM CHARSET=utf8;
# 建立外键为普通索引
CREATE INDEX snum ON sorces(sid)


# 插入学生数据
INSERT INTO students(`sid`,`name`,`school`,`age`)VALUES('s123','张三','清华大学',23),('s111','张三','清华大学',23),('s567','李四','北京大学',23)


SELECT * FROM students;


# 插入成绩

INSERT INTO sorces(`sid`,`course`,`sorce`)VALUES('s123','历史',80),('s123','linux',80),('s123','数学',80),('s111','艺术',70),('s111','英语',70),('s567','体育',30)

SELECT * FROM sorces;


# 查出学号s123的姓名，学校，学科各项成绩


SELECT `name` AS 姓名,`school` AS 学校,`course` AS 学科 FROM students AS stu LEFT JOIN sorces AS src ON stu.sid = src.sid WHERE stu.sid='s123'





