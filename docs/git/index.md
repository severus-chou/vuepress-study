### Git 常用命令

```sh
  # 初始化Git
  git init

  # 克隆本地仓库 （/path/to/repository 本地仓库地址）
  git clone /path/to/repository

  # 克隆远程仓库
  git clone username@host:/path/to/repository

  # 添加指定文件到缓存区
  git add ${filename}

  # 添加所有改动文件到缓存区
  git add .

  # 提交改动
  git commit -m ${message}

  # 提交到远程仓库，master 可更换为指定分支名
  git push origin master

  # 如还没克隆仓库，并欲将本地仓库连接某个远程服务器，可以使用此命令
  git remote add origin ${path}

  # 创建一个叫做“feature_x”的分支，并切换过去
  git checkout -b feature_x

  # 切换到master分支
  git checkout master

  # 删除本地feature_x分支
  git branch -d feature_x

  # 更新你的本地仓库至最新改动
  git pull

  # 合并其他分支到你的当前分支
  git merge ${other branchName}

  # 在合并改动之前,可以使用此命令查看区别
  git diff ${source_branch} ${target_branch}

  # 打 tag，创建标签，\_1b2e1d63ff\* 是你想要标记的提交 ID 的前 10 位字符
  git tag 1.0.0 1b2e1d63ff

  # 获取日志
  git log

  # 切换分支
  git checkout ${branchName}

  #  丢弃本地改动与提交，到服务器上获取最新的版本并将本地主分支指向到它
  git fetch origin  git reset --hard origin/master

  # 打开图形化Git
  gitk

  # 彩色的Git输出
  git config color.ui true

  #  设置显示历史记录时，只显示一行注释信息
  git config format.pretty oneline

  # 交互地添加文件至缓存区
  git add -i
```
