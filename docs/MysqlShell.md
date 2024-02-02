---
sidebar_position: 1
---

## MySQlShell 常用命令：

数据库连接： \c name:password@host:port/database(可不指定database)

```mysql
\c root:123456@localhost:3306/koa_test
```

切换语法模式：

```mysql
\sql、\js
```

指定数据库：

```mysql
use database;
```

查看所有表：

```mysql
show tables;
```

查看所有数据库：

```mysql
show databases;
```

查询表的数据结构：

```mysql
desc table_name;
```

修改表名：

```mysql
alter table tab_name rename to new_tab_name; 
```

