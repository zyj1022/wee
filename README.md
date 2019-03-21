# WEE ——— 简单快速的响应式HTML/CSS前端框架

WEE 是一个面向熟悉SASS使用人员的响应式前端框架，以[MUSS](https://github.com/zyj1022/muss) 为基础，
根据实际使用需求，总结概括了常用组件，致力于让你使用最少的代码，用最少的时间创建你所需要的网站。

# [Demo 查看](http://zyj1022.github.io/demos/wee/)

## 使用方法

安装node，之后全局安装wee

	npm install weeui -g

然后进入工作目录

	wee install

在你的CSS文件中引用：

	@import "wee";

或者直接在你的页面中引用

    <link rel="stylesheet" href="css/wee.css">

## 文件描述

WEE 目前涵盖了常用的核心样式, 更为更灵活的24列栅格化，

- CSS标准化 [normalize](http://necolas.github.io/normalize.css/)

具体文件结构如下

```
  wee/
  └── scss/
      │── [muss](https://github.com/zyj1022/muss)/
      │── partials/
      │   ├── global.scss
      │   ├── affix.scss
      │   ├── alert.scss
      │   ├── avatar.scss
      │   ├── badge.scss
      │   ├── breadcrumb.scss
      │   ├── button.scss
      │   ├── buttonGroup.scss
      │   ├── calendar.scss
      │   ├── card.scss
      │   ├── carousel.scss
      │   ├── cascader.scss
      │   ├── checkbox.scss
      │   ├── code.scss
      │   ├── comment.scss
      │   ├── datepicker.scss
      │   ├── drawer.scss
      │   ├── dropdown.scss
      │   ├── empty.scss
      │   ├── flex.scss
      │   ├── form.scss
      │   ├── gird.scss
      │   ├── helper.scss
      │   ├── icon.scss
      │   ├── images.scss
      │   ├── input.scss
      │   ├── list.scss
      │   ├── menu.scss
      │   ├── message.scss
      │   ├── modal.scss
      │   ├── notification.scss
      │   ├── pagination.scss
      │   ├── popover.scss
      │   ├── progress.scss
      │   ├── radio.scss
      │   ├── rate.scss
      │   ├── select.scss
      │   ├── slider.scss
      │   ├── spin.scss
      │   ├── step.scss
      │   ├── switch.scss
      │   ├── table.scss
      │   ├── tabs.scss
      │   ├── tag.scss
      │   ├── timeline.scss
      │   ├── timepicker.scss
      │   ├── transfer.scss
      │   ├── tree.scss
      │   └── typography.scss
      ├── colors-ufe.scss [ufe-design-colors]
      ├── colors.scss
      ├── normalize.scss
      ├── variables.scss
      └── wee.scss
```

## 功能更新

- 1.2 全面组件化按照 [WeeKit](https://github.com/weeui/weekit) 样式，配合对应的 [react-wee](https://github.com/weeui/react-wee) 版本进行组件化开发。
- 1.1 新增 Flex 布局 具体查看 [flex.html](http://zyj1022.github.io/demos/wee/flex.html) 说明。

## 具体使用说明

当前为初级1.2.0版，部分内容还在完善中，下载包中暂未包含[muss](https://github.com/zyj1022/muss)，
所以在使用时先将muss置入你的下载文件的scss文件夹中，如上目录结构所示即可。
