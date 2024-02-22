---
sidebar_position: 2
---

## Git基本操作：

### 提交修改：

```bash
git add .   --添加所有修改到暂存区
git add <file>  --添加修改文件到暂存区
git commit -m 'message'  --提交更改到本地仓库
git commit -am 'message'   --将所有已跟踪的文件暂存区，并提交更改到本地仓库（新创建的未跟踪文件，仍要使用git add）
```

### 查看文件状态：

```bash
git status
```

### 查看提交历史：

```bash
git log   --进入后，vim语法操作，q退出。
```

### 分支相关操作：

```bash
git branch <branch-name>   --创建分支
git checkout <branch-name>   --切换分支
git checkout -b <new-branch-name>   --创建并切换到新分支

Git 2.23+ 版本以上
git switch <branch-name>   --切换分支
git switch -c <new-branch-name>   --创建并切换到新分支
```

## 远程仓库：

### 查看远程仓库列表：

```bash
git remote -v
```

