####四种状态
未跟踪 工作区 暂存区 git仓库
####初始化git仓库的
git init（在相应目录右键，git bash here中输入）
####查看文件状态
git status/git status -s
####将所有文件加入暂存区
git add ./
####将暂存区的文件提交到git仓库中
git commit -m "提交的信息"
####将git仓库上传到GitHub仓库的main分支
第一次 git push -u origin main
以后   git push origin main