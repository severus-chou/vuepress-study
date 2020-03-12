### npm 常用命令

```sh
# 初始化项目
npm init

# 初始化项目,默认package.json
npm init -y

# 安装依赖
npm instal

# 安装插件
npm install ${packageName}

# 全局安装
npm install -g ${packageName}

# 安装并保存指定依赖到当前项目，会将依赖一起打包
npm install -s ${packageName}

# 安装插件到本地环境
npm install -D ${packageName}

# 更新指定插件
npm update ${packageName}

# 卸载插件
npm uninstall ${packageName}

# 运行项目,对应package.json内scripts
npm run ${命令}

# 打包项目,对应package.json内scripts
npm run ${命令}
```
