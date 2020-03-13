module.exports = {
  title: '开发知识点', // 大标题
  description: 'vuepress study',
  base: '/', // docs为根目录
  themeConfig: {
    navbar: false, // 禁用导航栏位
    sidebar: [
      ['/', '主页'],
      ['/install/', '安装'],
      ['/npm/', 'npm命令'],
      ['/git/', 'git命令'],
      ['/express/', 'express'],
      ['/mongo/', 'mongo']
      // ['/js/', 'JS']
    ]
  }
}
