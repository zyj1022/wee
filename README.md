# WEE ——— 简单快速的响应式HTML/CSS前端框架

WEE 是一个面向熟悉SASS使用人员的响应式前端框架，以[MUSS](https://github.com/zyj1022/muss) 为基础，
根据实际使用需求，总结概括了常用组件，致力于让你使用最少的代码，用最少的时间创建你所需要的网站。

# [Demo 查看](http://zyj1022.github.io/demos/wee/)

# 使用方法

安装node，之后全局安装wee

	npm install weeui -g

然后进入工作目录

	wee install

在你的CSS文件中引用：

	@import "wee";

或者直接在你的页面中引用

    <link rel="stylesheet" href="css/wee.css">

# 文件描述

WEE 目前涵盖了常用的核心样式及12列栅格化，
- CSS标准化 [normalize](http://necolas.github.io/normalize.css/)

具体文件结构如下

```
  wee/
  └── scss/
      │── [muss](https://github.com/zyj1022/muss)/
      │── partials/
      │   ├── alert.scss
      │   ├── breadcrumb.scss
      │   ├── button.css
      │   ├── code.scss
      │   ├── form.scss
      │   ├── gird.scss
      │   ├── global.css
      │   ├── helper.scss
      │   ├── images.scss
      │   ├── page.css
      │   ├── table.scss
      │   ├── flex.scss [新增flex布局]
      │   └── typography.scss
      ├── normalize.scss
      ├── variables.scss
      └── wee.scss
```

# 功能更新

- 新增 Flex 布局 具体查看 flex.html 说明

# 具体使用说明

当前为初级1.2.0版，部分内容还在完善中，下载包中暂未包含[muss](https://github.com/zyj1022/muss)，
所以在使用时先将muss置入你的下载文件的scss文件夹中，如上目录结构所示即可。
