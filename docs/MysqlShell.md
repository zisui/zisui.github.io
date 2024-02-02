---
sidebar_position: 1
---

## MySQlShell 常用命令：

```mysql
数据库连接：\c name:password@host:port/database(可不指定database)
例：\c root:123456@localhost:3306/koa_test
切换语法模式：\sql、\js
指定数据库：use database;
查看所有表：show tables;
查看所有数据库：show databases;
查询表的数据结构：desc table_name;
修改表名：alter table tab_name rename to new_tab_name; 
```

