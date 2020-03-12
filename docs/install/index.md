### 环境准备

---

- 所需软件及插件：<strong>Node、Vuepress</strong>

- 打开 <strong>Node</strong> 官网，根据自己电脑操作系统下载对应系统的长期支持版

### 初始化项目

---

```sh
  # 新建项目目录 并进入
  mkdir vuepress-study
  cd vuepress-study

  # 初始化项目 生成package.json配置文件
  npm init -y
```

```json
{
  "name": "test-demo",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

### 安装 vuepress

---

```sh
  # 全局安装
  npm install -g vuepress
  # 当前项目安装
  npm install -D vuepress
```

### 目录配置

---

```sh
  # 新建文件夹docs
  mkdir docs
  # 新建主页(入口)
  md README.md
  # 目录配置
```

### 配置 package.json

---

```json
  {
    ...
    "scripts":{
      "dev": "vuepress dev docs",
      "build": "vuepress build docs"
    }
  }
```

### .vuepress/config.js

---

```sh
  # 配置目录
  cd docs
  mkdir .vuepress
  md config.js
```

```js
module.exports = {
  title: 'Vue 项目开发随笔', // 大标题
  description: 'vuepress study',
  base: '/', // docs为根目录
  themeConfig: {
    navbar: false, // 禁用导航栏位
    sidebar: [['/', '主页']]
  }
}
```

### 启动&构建项目

---

```sh
# 启动
npm run dev
# 构建
npm run build
```
