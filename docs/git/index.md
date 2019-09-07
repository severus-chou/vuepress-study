### Git 常用命令

- mkdir <文件夹名>

- git init 初始化仓库

- git clone /path/to/repository 克隆本地仓库 （/path/to/repository 本地仓库地址）

- git clone username@host:/path/to/repository 克隆远程仓库

- git add <filename\> 添加指定文件到缓存区

- git add \* 添加所有改动文件到缓存区

- git commit -m "代码提交信息" 提交改动

- git push origin master 提交到远程仓库，master 可更换为指定分支名

- git remote add origin <server 地址\> 如还没克隆仓库，并欲将本地仓库连接某个远程服务器，可以使用此命令

- git checkout -b feature\*x 创建一个叫做“feature_x”的分支，并切换过去

- git checkout master 切换回主分支

- git branch -d feature_x 再把新建的分支删掉

- git pull 更新你的本地仓库至最新改动

- git merge <\branch> 合并其他分支到你的当前分支,有冲突时会提示，解决完冲突，执行 git add

- git diff <\source_branch> <\target_branch> 在合并改动之前,可以使用此命令查看区别

- git tag 1.0.0 1b2e1d63ff 打 tag，创建标签，\_1b2e1d63ff\* 是你想要标记的提交 ID 的前 10 位字符

- git log 获取提交 ID

- git checkout -- <filename\> 替换本地改动

- git fetch origin git reset --hard origin/master 丢弃本地改动与提交，到服务器上获取最新的版本并将本地主分支指向到它

- gitk 打开图形化 git

- git config color.ui true 彩色的 git 输出

- git config format.pretty oneline 设置显示历史记录时，只显示一行注释信息

- git add -i 交互地添加文件至缓存区
