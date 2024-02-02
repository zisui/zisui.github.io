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

yarn config set registry https://registry.npmmirror.com -g

yarn config set sass_binary_site https://cdn.npmmirror.com/dist/node-sass -g





 url: 'https://zisui.github.io',

 baseUrl: '/zisui.github.io/',

 onBrokenLinks: 'throw',

 onBrokenMarkdownLinks: 'warn',



 // GitHub pages deployment config.

 // If you aren't using GitHub pages, you don't need these.

 organizationName: 'zisui', // Usually your GitHub org/user name.

 projectName: 'zisui.github.io', // Usually your repo name.

 deploymentBranch: 'docusaurus',

 trailingSlash: false,