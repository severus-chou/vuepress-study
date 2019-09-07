### npm 常用命令

- npm init 初始化一个项目,需要确认一些步骤才能生成 package.json 文件

- npm init -y 默认初始化，直接生成 package.json 文件

- npm install 安装所有依赖

- npm install <包名> 安装指定包依赖

- npm install -g <包名> 安装全局指定包依赖

- npm install -s <包名> 安装并保存指定依赖到当前项目，会将依赖一起打包

- npm install -D <包名> 安装指定包依赖到当前项目的本地

- npm update <包名> 更新指定依赖

- npm uninstall <包名> 卸载指定依赖，或删除 package.json 文件中的依赖名

- npm run <命令名> 运行项目,（不同项目命令名可能不同，可在 package.json 中 scripts 对象中找到）

- npm run build 打包项目,（不同项目，可能存在多个 build 跟不同后缀的命令,例如:npm run build-sit）
