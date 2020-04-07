---
id: global-css
title: Global CSS 全局样式
sidebar_label: Global CSS 全局样式
---

# 概览

深入了解 wee 底层结构的关键部分，可以让我们的 web 开发变得更好、更快。

## HTML5 文档类型

wee 使用到的某些 HTML 元素和 CSS 属性需要将页面设置为 HTML5 文档类型。在你项目中的每个页面都要参照下面的格式进行设置。

```
<!DOCTYPE html>
<html lang="zh-CN">
  ...
</html>
```

## 栅格系统

### 设计理念 

采用24栅格体系，支持传统的float布局，也支持flex布局。

布局的栅格化系统，基于行（row）和列（col）来定义信息区块的外部框架，以使页面的每个区块能够整齐排布，
工作原理如下：

- 通过row在水平方向建立一组column（简写col）

- 你的内容应当放置于col内，并且，只有col可以作为row的直接元素

- 栅格系统中的列是指1到24的值来表示其跨越的范围。例如，三个等宽的列可以使用.col-8来创建

- 如果一个row中的col总和超过 24，那么多余的col会作为一个整体另起一行排列

### Float布局

#### 固定宽度布局

使用单一的一组 `Row` 和 `Col` 栅格组件，就可以创建一个基本的栅格系统，所有列 `Col` 必须放在 `Row` 内。

<div class="wee-grid-demo">
  <div class="wee-row">
    <div class="wee-col-4"><span>col-4</span></div>
    <div class="wee-col-20"><span>col-20</span></div>
  </div>
  <div class="wee-row">
    <div class="wee-col-6"><span>col-6</span></div>
    <div class="wee-col-18"><span>col-18</span></div>
  </div>
  <div class="wee-row">
    <div class="wee-col-8"><span>col-8</span></div>
    <div class="wee-col-16"><span>col-16</span></div>
  </div>
  <div class="wee-row">
    <div class="wee-col-10"><span>col-10</span></div>
    <div class="wee-col-14"><span>col-14</span></div>
  </div>
  <div class="wee-row">
    <div class="wee-col-12"><span>col-12</span></div>
    <div class="wee-col-12"><span>col-12</span></div>
  </div>
  <div class="wee-row">
    <div class="wee-col-24"><span>col-24</span></div>
  </div>
</div>

```jsx
<Row>
  <Col col="4">col-4</Col>
  <Col col="20">col-20</Col>
</Row>
```

#### 偏移布局

通过使用 `push` 和 `pull` 就可以改变列（column）的偏移位置。

<div class="wee-grid-demo">
  <div class="wee-row">
    <div class="wee-col-8 wee-col-push-16"><span>col-8 push-16</span></div>
    <div class="wee-col-16 wee-col-pull-8"><span>col-16 pull-8</span></div>
  </div>
  <div class="wee-row">
    <div class="wee-col-16 wee-col-push-4"><span>col-16 push-4</span></div>
  </div>
  <div class="wee-row">
    <div class="wee-col-12 wee-col-push-6"><span>col-12 push-6</span></div>
  </div>
  <div class="wee-row wee-col-push">
    <div class="wee-col-8 wee-col-push-16"><span>col-8 push-16</span></div>
  </div>
  <div class="wee-row wee-col-push">
    <div class="wee-col-10 wee-col-push-14"><span>col-10 push-14</span></div>
  </div>
  <div class="wee-row wee-col-push">
    <div class="wee-col-12 wee-col-push-12"><span>col-12 push-12</span></div>
  </div>
  <div class="wee-row wee-col-push">
    <div class="wee-col-14 col-push-10"><span>col-14 push-10</span></div>
  </div>
</div>

```jsx
<Row>
  <Col col="8" push="16">col-8 push-16</Col>
</Row>
```

### Flex布局

#### 布局用法说明

**容器有两种**

- Col: 容器里的[栅格]以横向排列，与传统栅格化的Row一样
- Row: 容器里的[栅格]以竖向排列，表示一层叠一层的排列方式
- 栅格化为24列，如果单行超过24列，即自动换行

#### 布局

<div class="wee-grid-demo">
  <div class="wee-flex-column">
    <div class="wee-flex-col-12 wee-flex-test"><span>flex-col-12</span></div>
    <div class="wee-flex-col-12 wee-flex-test"><span>flex-col-12</span></div>
    <div class="wee-flex-col-8 wee-flex-test"><span>flex-col-8</span></div>
    <div class="wee-flex-col-16 wee-flex-test"><span>flex-col-16</span></div>
    <div class="wee-flex-col-6 wee-flex-test"><span>flex-col-6</span></div>
    <div class="wee-flex-col wee-flex-test"><span class="even">flex-col 自动填充宽度</span></div>
    <div class="wee-flex-col-6 wee-flex-test"><span>flex-col-6</span></div>
    <div class="wee-flex-col-14 flex-test"><span>flex-col-14</span></div>
    <div class="wee-flex-col wee-flex-test"><span class="even">flex-col 自动填充宽度</span></div>
    <div class="wee-flex-col-16 wee-flex-test"><span>flex-col-16</span></div>
    <div class="wee-flex-col-12 wee-flex-test"><span>flex-col-12</span></div>
    <div class="wee-flex-col-16 wee-flex-row">
      <div class="wee-flex-col"><span>flex-col</span></div>
      <div class="wee-flex-col"><span>flex-col</span></div>
    </div>
    <div class="wee-flex-col-8 wee-flex-row">
      <div class="wee-flex-col wee-flex-test"><span>flex-col</span></div>
      <div class="wee-flex-col wee-flex-test"><span>flex-col</span></div>
      <div class="wee-flex-col wee-flex-test"><span>flex-col</span></div>
    </div>
  </div>
</div>

```jsx
<Row type="flex">
  <Col col="12">col-12</Col>
  <Col col="12">col-12</Col>
</Row>
```

#### 垂直居中/水平居中

<div class="wee-flex-row wee-flex-middle wee-flex-center" style="min-height: 200px;background:#fbfbfb;border:1px solid #e9e9e9">
  <div class="wee-flex-col-6 wee-flex-test"><span>flex-col-6垂直居中</span></div>
  <div class="wee-flex-col-6 wee-flex-test"><span>flex-col-6多行垂直居中</span></div>
</div>

#### 向左偏移

<div class="wee-flex-column" style="background:#fbfbfb;">
  <div class="wee-flex-col-12"><span>flex-col-12</span></div>
</div>
<div class="wee-flex-column" style="background:#fbfbfb;">
  <div class="wee-flex-col-12 wee-flex-push-6"><span class="even">flex-col-12 wee-flex-push-6</span></div>
</div>
<div class="wee-flex-column" style="background:#fbfbfb;">
  <div class="wee-flex-col-10 wee-flex-push-14"><span>flex-col-10 wee-flex-push-14</span></div>
</div>

#### 排序

order越小排在越前面

<div class="wee-flex-column">
  <div class="wee-flex-col-5 wee-flex-order-4"><span>flex-col-4 flex-order-4</span></div>
  <div class="wee-flex-col-5 wee-flex-order-3"><span>flex-col-4 flex-order-3</span></div>
  <div class="wee-flex-col-5 wee-flex-order-2"><span>flex-col-4 flex-order-2</span></div>
  <div class="wee-flex-col-5 wee-flex-order-1"><span>flex-col-4 flex-order-1</span></div>
</div>

#### 左对齐/右对齐

<div class="wee-flex-column" style="background:#fbfbfb;">
  <div class="wee-flex-col-4"><span>flex-col-4</span></div>
  <div class="wee-flex-col-4"><span>flex-col-4</span></div>
  <div class="wee-flex-col-4"><span>flex-col-4</span></div>
</div>

<div class="wee-flex-column wee-flex-right" style="background:#fbfbfb;">
  <div class="wee-flex-col-6"><span>flex-col-6</span></div>
  <div class="wee-flex-col-6"><span>flex-col-6</span></div>
  <div class="wee-flex-col-6"><span>flex-col-6</span></div>
</div>

<div class="wee-flex-row wee-flex-left" style="background:#fbfbfb;">
  <div class="wee-flex-col-4"><span>flex-col-4 左对齐</span></div>
  <div class="wee-flex-col-4 wee-flex-right"><span>flex-col-4 右对齐</span></div>
  <div class="wee-flex-col-4"><span>flex-col-4 左对齐</span></div>
</div>

<div class="wee-flex-row" style="background:#fbfbfb;">
  <div class="wee-flex-col-4 wee-flex-right"><span>flex-col-4 右对齐</span></div>
  <div class="wee-flex-col-4 wee-flex-left"><span>flex-col-4 左对齐</span></div>
  <div class="wee-flex-col-4 wee-flex-right"><span>flex-col-4 右对齐</span></div>
</div>

#### 顶对齐/底对齐

<div class="wee-flex-column wee-flex-bottom" style="background:#fbfbfb;min-height:120px">
  <div class="wee-flex-col-6"><span>flex-col-6 底部对齐</span></div>
  <div class="wee-flex-col-6 wee-flex-top"><span>flex-col-6 顶部对齐</span></div>
  <div class="wee-flex-col-6"><span>flex-col-6 底部对齐</span></div>
</div>

#### 等宽对齐

自动调整栅格间距，保持两边间距相同

<div class="wee-flex-column wee-flex-between" style="background:#fbfbfb;">
  <div class="wee-flex-col-4"><span>flex-col-4 等宽对齐</span></div>
  <div class="wee-flex-col-4"><span>flex-col-4 等宽对齐</span></div>
  <div class="wee-flex-col-4"><span>flex-col-4 等宽对齐</span></div>
  <div class="wee-flex-col-4"><span>flex-col-4 等宽对齐</span></div>
</div>
<div class="wee-flex-row wee-flex-between wee-flex-center" style="background:#fbfbfb;min-height: 300px;">
  <div class="wee-flex-col-4"><span>flex-col-4 等宽对齐</span></div>
  <div class="wee-flex-col-4"><span>flex-col-4 等宽对齐</span></div>
  <div class="wee-flex-col-4"><span>flex-col-4 等宽对齐</span></div>
  <div class="wee-flex-col-4"><span>flex-col-4 等宽对齐</span></div>
</div>

#### 分散排列

与等宽对齐相同，但靠两侧的间距比[栅格]之间的间距大一倍

<div class="wee-flex-column wee-flex-around" style="background:#fbfbfb;">
  <div class="wee-flex-col-3"><span>分散排列</span></div>
  <div class="wee-flex-col-3"><span>分散排列</span></div>
  <div class="wee-flex-col-3"><span>分散排列</span></div>
  <div class="wee-flex-col-3"><span>分散排列</span></div>
</div>
<div class="wee-flex-row wee-flex-around wee-flex-center" style="background:#fbfbfb;min-height: 300px;">
  <div class="wee-flex-col-4"><span>flex-col-4 等宽对齐</span></div>
  <div class="wee-flex-col-4"><span>flex-col-4 等宽对齐</span></div>
  <div class="wee-flex-col-4"><span>flex-col-4 等宽对齐</span></div>
  <div class="wee-flex-col-4"><span>flex-col-4 等宽对齐</span></div>
</div>

## 排版与标题

### 排版样式

<table>
  <caption>排版样式</caption>
  <thead>
    <tr>
      <th>Element / Class</th>
      <th>Example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code>&lt;b&gt;, &lt;strong&gt;</code>
      </td>
      <td>
        <strong>Strong text</strong>
      </td>
    </tr>
    <tr>
      <td>
        <code>&lt;em&gt;</code>
      </td>
      <td>
        <em>Italic text</em>
      </td>
    </tr>
    <tr>
      <td>
        <code>&lt;abbr&gt;</code>
      </td>
      <td>
        <abbr title="As Soon As Possible">ASAP</abbr>
      </td>
    </tr>
    <tr>
      <td>
        <code>&lt;dfn&gt;</code>
      </td>
      <td>
        <dfn>Definition</dfn>
      </td>
    </tr>
    <tr>
      <td>
        <code>&lt;mark&gt;</code>
      </td>
      <td>
        <mark>Mark</mark>
      </td>
    </tr>
    <tr>
      <td>
        <code>&lt;small&gt;</code>
      </td>
      <td>
        <small>Small text</small>
      </td>
    </tr>
    <tr>
      <td>
        <code>&lt;sub&gt;</code>
      </td>
      <td>
        Text with <sub>Sub text</sub>
      </td>
    </tr>
    <tr>
      <td>
        <code>&lt;sup&gt;</code>
      </td>
      <td>
        Text with <sup>Sup text</sup>
      </td>
    </tr>
    <tr>
      <td>
        <code>&lt;del&gt;</code>
      </td>
      <td>
        <del>Deleted text</del>
      </td>
    </tr>
  </tbody>
</table>

### 标题

HTML 中的所有标题标签，`<h1>` 到 `<h6>` 均可使用。另外，还提供了 `.h1` 到 `.h6` 类，为的是给内联（inline）属性的文本赋予标题的样式。

<table class="wee-table-border">
  <caption>标题样式</caption>
  <thead>
    <tr>
      <th>Element / Class</th>
      <th>HTML Output</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        h1
        <br> .h1
      </td>
      <td>
        <h2 class="h1">Heading 1</h2>
      </td>
    </tr>
    <tr>
      <td>
        h2
        <br>.h2
      </td>
      <td>
        <h2>Heading 2</h2>
      </td>
    </tr>
    <tr>
      <td>
        h3
        <br>.h3
      </td>
      <td>
        <h2 class="h3">Heading 3</h2>
      </td>
    </tr>
    <tr>
      <td>
        h4
        <br>.h4
      </td>
      <td>
        <h2 class="h4">Heading 4</h2>
      </td>
    </tr>
    <tr>
      <td>
        h5
        <br>.h5
      </td>
      <td>
        <h2 class="h5">Heading 5</h2>
      </td>
    </tr>
    <tr>
      <td>
        h6
        <br>.h6
      </td>
      <td>
        <h2 class="h6">Heading 6</h2>
      </td>
    </tr>
  </tbody>
</table>

```
<h1>h1. Wee Title heading</h1>
<h2>h2. Wee Title heading</h2>
<h3>h3. Wee Title heading</h3>
<h4>h4. Wee Title heading</h4>
<h5>h5. Wee Title heading</h5>
<h6>h6. Wee Title heading</h6>
```

### 页面主体

WEE 将全局 `font-size` 设置为 `14px`，`line-height` 设置为 `20px`。这些属性直接赋予 `<body>` 元素和所有段落元素。

### 对齐方式

通过文本对齐样式，可以简单方便的将文字重新对齐。

<div class="demo-wrap">
  <p class="text-left">文字左对齐效果.</p>
  <p class="text-center">文字居中对齐效果.</p>
  <p class="text-right">文字右对齐效果.</p>
  <p class="text-justify">实现两端对齐文本效果.</p>
  <p class="text-nowrap">段落中的文本不进行换行.</p>
</div>

```
<p class="text-left">文字左对齐效果.</p>
<p class="text-center">文字居中对齐效果.</p>
<p class="text-right">文字右对齐效果.</p>
<p class="text-justify">实现两端对齐文本效果.</p>
<p class="text-nowrap">段落中的文本不进行换行.</p>
```

### 列表

#### 无序列表

<div class="demo-wrap">
<ul>
  <li>我是列表文字</li>
  <li>我是列表文字</li>
  <li>我是列表文字
    <ul>
      <li>我是列表文字</li>
      <li>我是列表文字</li>
      <li>我是列表文字</li>
      <li>我是列表文字</li>
    </ul>
  </li>
  <li>我是列表文字</li>
  <li>我是列表文字</li>
</ul>
</div>

```
<ul>
  <li>...</li>
</ul>
```
#### 有序列表

<div class="demo-wrap">
<ol>
  <li>我是列表文字</li>
  <li>我是列表文字</li>
  <li>我是列表文字</li>
  <li>我是列表文字</li>
  <li>我是列表文字</li>
</ol>
</div>

```
<ol>
  <li>...</li>
</ol>
```

## 表格

### 基础表格

<table class="wee-table">
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>1</th>
      <td>Mark</td>
      <td>Jacob</td>
      <td>Wasb</td>
    </tr>
    <tr>
      <th>2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>Ked</td>
    </tr>
    <tr>
      <th>3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>Ewe</td>
    </tr>
  </tbody>
</table>

```
<table class="wee-table">
  <thead>
    ....
  </thead>
  <tbody>
    ....
  </tbody>
</table>
```

### 斑马纹表格

通过 `.wee-table-striped` 类可以给 `<tbody>` 之内的每一行增加斑马条纹样式。

<table class="wee-table wee-table-striped">
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>1</th>
      <td>Mark</td>
      <td>Jacob</td>
      <td>Wasb</td>
    </tr>
    <tr>
      <th>2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>Ked</td>
    </tr>
    <tr>
      <th>3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>Ewe</td>
    </tr>
  </tbody>
</table>

```
<table class="wee-table wee-table-striped">
  <thead>
    ....
  </thead>
  <tbody>
    ....
  </tbody>
</table>
```

### 鼠标悬停

通过添加 `.wee-table-hover` 类可以让 `<tbody>` 中的每一行对鼠标悬停状态作出响应。

<table class="wee-table wee-table-hover">
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>1</th>
      <td>Mark</td>
      <td>Jacob</td>
      <td>Wasb</td>
    </tr>
    <tr>
      <th>2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>Ked</td>
    </tr>
    <tr>
      <th>3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>Ewe</td>
    </tr>
  </tbody>
</table>

```
<table class="wee-table wee-table-hover">
  <thead>
    ....
  </thead>
  <tbody>
    ....
  </tbody>
</table>
```

## 按钮

能够作为按钮使用的标签或元素

为 `<a>`、`<button>` 或 `<input>` 标签添加对应的样式。

<div class="demo-wrap">
  <a class="wee-btn" href="#" role="button">Link</a>
  <button class="wee-btn" type="submit">Button</button>
  <input class="wee-btn" type="button" value="Input">
  <input class="wee-btn" type="submit" value="Submit">
</div>

```
<a class="wee-btn" href="#" role="button">Link</a>
<button class="wee-btn" type="submit">Button</button>
<input class="wee-btn" type="button" value="Input">
<input class="wee-btn" type="submit" value="Submit">
```
### 内置样式

<div class="demo-wrap">
  <span class="wee-btn">默认按钮(default)</span>
  <span class="wee-btn wee-btn-primary">Primary</span>
  <span class="wee-btn wee-btn-secondary">Secondary</span>
  <span class="wee-btn wee-btn-success">Success</span>
  <span class="wee-btn wee-btn-danger">Danger</span>
  <span class="wee-btn wee-btn-warning">Warning</span>
  <span class="wee-btn wee-btn-info">Info</span>
  <span class="wee-btn wee-btn-light">Light</span>
  <span class="wee-btn wee-btn-dark">Dark</span>
  <span class="wee-btn wee-btn-link">link</span>
</div>

```
<span class="wee-btn">默认按钮(default)</span>
<span class="wee-btn wee-btn-primary">Primary</span>
<span class="wee-btn wee-btn-secondary">Secondary</span>
<span class="wee-btn wee-btn-success">Success</span>
<span class="wee-btn wee-btn-danger">Danger</span>
<span class="wee-btn wee-btn-warning">Warning</span>
<span class="wee-btn wee-btn-info">Info</span>
<span class="wee-btn wee-btn-light">Light</span>
<span class="wee-btn wee-btn-dark">Dark</span>
<span class="wee-btn wee-btn-link">link</span>
```

### 按钮尺寸

按钮有大、中、小三种尺寸。

- `.wee-btn-lg` 大按钮
- `.wee-btn-sm` 小按钮

分别把按钮设为大、小尺寸，默认为常用中级按钮。

<div class="demo-wrap">
  <p>
    <span class="wee-btn wee-btn-lg">大按钮(lg)</span>
    <span class="wee-btn wee-btn-lg wee-btn-primary">Primary</span>
    <span class="wee-btn wee-btn-lg wee-btn-success">Success</span>
  </p>
  <p>
    <span class="wee-btn">默认按钮</span>
    <span class="wee-btn wee-btn-primary">Primary</span>
    <span class="wee-btn wee-btn-success">Success</span>
  </p>
  <p>
    <span class="wee-btn wee-btn-sm">小按钮(sm)</span>
    <span class="wee-btn wee-btn-sm wee-btn-primary">Primary</span>
    <span class="wee-btn wee-btn-sm wee-btn-success">Success</span>
  </p>
</div>

```
<p>
  <span class="wee-btn wee-btn-lg">大按钮(lg)</span>
  <span class="wee-btn wee-btn-lg wee-btn-primary">Primary</span>
  <span class="wee-btn wee-btn-lg wee-btn-success">Success</span>
</p>
<p>
  <span class="wee-btn">默认按钮</span>
  <span class="wee-btn wee-btn-primary">Primary</span>
  <span class="wee-btn wee-btn-success">Success</span>
</p>
<p>
  <span class="wee-btn wee-btn-sm">小按钮(sm)</span>
  <span class="wee-btn wee-btn-sm wee-btn-primary">Primary</span>
  <span class="wee-btn wee-btn-sm wee-btn-success">Success</span>
</p>
```

### 按钮类型

按钮类型：默认按钮、胶囊按钮、矩形按钮、圆形按钮、实心按钮、空心按钮、Block按钮。

<div class="demo-wrap">
  <p>
    <button class="wee-btn">default</button>
    <button class="wee-btn wee-btn-primary">primary</button>
    <button class="wee-btn wee-btn-primary wee-btn-round">primary</button>
    <button class="wee-btn wee-btn-secondary">secondary</button>
    <button class="wee-btn wee-btn-success">success</button>
    <button class="wee-btn wee-btn-info">info</button>
    <button class="wee-btn wee-btn-warning">warning</button>
    <button class="wee-btn wee-btn-danger">danger</button>
    <button class="wee-btn wee-btn-light">light</button>
    <button class="wee-btn wee-btn-dark">dark</button>
    <button class="wee-btn wee-btn-link">btn-link</button>
  </p>
  <p>
     <Button type="button" class="wee-btn wee-btn-round">Default</Button>
     <Button type="button" class="wee-btn wee-btn-primary wee-btn-round">Primary</Button>
     <Button type="button" class="wee-btn wee-btn-outline-primary wee-btn-round">Outline</Button>
     <Button type="button" class="wee-btn wee-btn-danger wee-btn-round">Danger</Button>
  </p>
  <p>
     <Button type="button" class="wee-btn wee-btn-square">Default</Button>
     <Button type="button" class="wee-btn wee-btn-primary wee-btn-square">Primary</Button>
     <Button type="button" class="wee-btn wee-btn-outline-primary wee-btn-square">Outline</Button>
     <Button type="button" class="wee-btn wee-btn-danger wee-btn-square">Danger</Button>
  </p>
   <p>
     <Button type="button" class="wee-btn wee-btn-circle">W</Button>
     <Button type="button" class="wee-btn wee-btn-primary wee-btn-circle">A</Button>
     <Button type="button" class="wee-btn wee-btn-outline-primary wee-btn-sm wee-btn-circle">R</Button>
     <Button type="button" class="wee-btn wee-btn-danger wee-btn-lg wee-btn-circle">Z</Button>
  </p>
  <p>
      <button class="wee-btn wee-btn-primary">primary</button>
      <button class="wee-btn wee-btn-secondary">secondary</button>
      <button class="wee-btn wee-btn-success">success</button>
      <button class="wee-btn wee-btn-info">info</button>
      <button class="wee-btn wee-btn-warning">warning</button>
      <button class="wee-btn wee-btn-danger">danger</button>
  </p>
  <p>
      <button class="wee-btn wee-btn-outline-primary">primary</button>
      <button class="wee-btn wee-btn-outline-secondary">secondary</button>
      <button class="wee-btn wee-btn-outline-success">success</button>
      <button class="wee-btn wee-btn-outline-info">info</button>
      <button class="wee-btn wee-btn-outline-warning">warning</button>
      <button class="wee-btn wee-btn-outline-danger">danger</button>
  </p>
  <p>
  <div class="wee-row">
    <div class="wee-col-8">
      <button class="wee-btn wee-btn-primary wee-btn-block">primary</button>
    </div>
    <div class="wee-col-8">
      <button class="wee-btn wee-btn-outline-success wee-btn-round wee-btn-block">success</button>
    </div>
    <div class="wee-col-8">
      <button class="wee-btn wee-btn-danger wee-btn-square wee-btn-block">danger</button>
    </div>
  </div>
  </p>
</div>

```
<Button type="button" class="wee-btn">Default</Button>
<span class="wee-btn wee-btn-primary">Primary</span>
<span class="wee-btn wee-btn-success">Success</span>

<button class="wee-btn wee-btn-secondary">secondary</button>

<Button type="button" class="wee-btn wee-btn-round">Default</Button>
<Button type="button" class="wee-btn wee-btn-primary wee-btn-round">Primary</Button>

<Button type="button" class="wee-btn wee-btn-square">Default</Button>
<Button type="button" class="wee-btn wee-btn-primary wee-btn-square">Primary</Button>

<Button type="button" class="wee-btn wee-btn-circle">W</Button>
<Button type="button" class="wee-btn wee-btn-primary wee-btn-circle">A</Button>

<button class="wee-btn wee-btn-outline-primary">primary</button>

<button class="wee-btn wee-btn-primary wee-btn-block">primary</button>
```


## 图片

通过为 `<img>` 元素添加以下相应的类，可以让图片呈现不同的形状。

<div class="demo-wrap">
  	<img class="round" alt="140x140" style="width: 140px; height: 140px;" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTQwIiBoZWlnaHQ9IjE0MCIgdmlld0JveD0iMCAwIDE0MCAxNDAiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiPjwhLS0KU291cmNlIFVSTDogaG9sZGVyLmpzLzE0MHgxNDAKQ3JlYXRlZCB3aXRoIEhvbGRlci5qcyAyLjYuMC4KTGVhcm4gbW9yZSBhdCBodHRwOi8vaG9sZGVyanMuY29tCihjKSAyMDEyLTIwMTUgSXZhbiBNYWxvcGluc2t5IC0gaHR0cDovL2ltc2t5LmNvCi0tPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PCFbQ0RBVEFbI2hvbGRlcl8xNmIzZjQ2NDQyNSB0ZXh0IHsgZmlsbDojQUFBQUFBO2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1mYW1pbHk6QXJpYWwsIEhlbHZldGljYSwgT3BlbiBTYW5zLCBzYW5zLXNlcmlmLCBtb25vc3BhY2U7Zm9udC1zaXplOjEwcHQgfSBdXT48L3N0eWxlPjwvZGVmcz48ZyBpZD0iaG9sZGVyXzE2YjNmNDY0NDI1Ij48cmVjdCB3aWR0aD0iMTQwIiBoZWlnaHQ9IjE0MCIgZmlsbD0iI0VFRUVFRSIvPjxnPjx0ZXh0IHg9IjQ0LjA1NDY4NzUiIHk9Ijc0LjUiPjE0MHgxNDA8L3RleHQ+PC9nPjwvZz48L3N2Zz4="
		data-holder-rendered="true">
  <img class="circle" alt="140x140" style="width: 140px; height: 140px;" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTQwIiBoZWlnaHQ9IjE0MCIgdmlld0JveD0iMCAwIDE0MCAxNDAiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiPjwhLS0KU291cmNlIFVSTDogaG9sZGVyLmpzLzE0MHgxNDAKQ3JlYXRlZCB3aXRoIEhvbGRlci5qcyAyLjYuMC4KTGVhcm4gbW9yZSBhdCBodHRwOi8vaG9sZGVyanMuY29tCihjKSAyMDEyLTIwMTUgSXZhbiBNYWxvcGluc2t5IC0gaHR0cDovL2ltc2t5LmNvCi0tPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PCFbQ0RBVEFbI2hvbGRlcl8xNmIzZjQ2M2YxOCB0ZXh0IHsgZmlsbDojQUFBQUFBO2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1mYW1pbHk6QXJpYWwsIEhlbHZldGljYSwgT3BlbiBTYW5zLCBzYW5zLXNlcmlmLCBtb25vc3BhY2U7Zm9udC1zaXplOjEwcHQgfSBdXT48L3N0eWxlPjwvZGVmcz48ZyBpZD0iaG9sZGVyXzE2YjNmNDYzZjE4Ij48cmVjdCB3aWR0aD0iMTQwIiBoZWlnaHQ9IjE0MCIgZmlsbD0iI0VFRUVFRSIvPjxnPjx0ZXh0IHg9IjQ0LjA1NDY4NzUiIHk9Ijc0LjUiPjE0MHgxNDA8L3RleHQ+PC9nPjwvZz48L3N2Zz4="
    data-holder-rendered="true">
  <img class="thumbnail" alt="140x140" style="width: 140px; height: 140px;" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTQwIiBoZWlnaHQ9IjE0MCIgdmlld0JveD0iMCAwIDE0MCAxNDAiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiPjwhLS0KU291cmNlIFVSTDogaG9sZGVyLmpzLzE0MHgxNDAKQ3JlYXRlZCB3aXRoIEhvbGRlci5qcyAyLjYuMC4KTGVhcm4gbW9yZSBhdCBodHRwOi8vaG9sZGVyanMuY29tCihjKSAyMDEyLTIwMTUgSXZhbiBNYWxvcGluc2t5IC0gaHR0cDovL2ltc2t5LmNvCi0tPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PCFbQ0RBVEFbI2hvbGRlcl8xNmIzZjQ2N2M0YSB0ZXh0IHsgZmlsbDojQUFBQUFBO2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1mYW1pbHk6QXJpYWwsIEhlbHZldGljYSwgT3BlbiBTYW5zLCBzYW5zLXNlcmlmLCBtb25vc3BhY2U7Zm9udC1zaXplOjEwcHQgfSBdXT48L3N0eWxlPjwvZGVmcz48ZyBpZD0iaG9sZGVyXzE2YjNmNDY3YzRhIj48cmVjdCB3aWR0aD0iMTQwIiBoZWlnaHQ9IjE0MCIgZmlsbD0iI0VFRUVFRSIvPjxnPjx0ZXh0IHg9IjQ0LjA1NDY4NzUiIHk9Ijc0LjUiPjE0MHgxNDA8L3RleHQ+PC9nPjwvZz48L3N2Zz4="
    data-holder-rendered="true">
</div>

```
<img src="..." alt="..." class="rounded">
<img src="..." alt="..." class="circle">
<img src="..." alt="..." class="thumbnail">
```

## 头像

有三种尺寸：大(`wee-avatar-lg`)、中(默认)、小(`wee-avatar-sm`)

有两种形状：圆形(默认)、方形(`wee-avatar-square`)

<div class="wee-avatar-demo">
  <p>
    <span class="wee-avatar wee-avatar-lg">A</span>
    <span class="wee-avatar">B</span>
    <span class="wee-avatar wee-avatar-sm">C</span>
    <span class="wee-avatar wee-avatar-lg"><i class="wee-badge wee-badge-danger">99</i>A</span>
    <span class="wee-avatar"><i class="wee-badge wee-badge-success">99</i>B</span>
    <span class="wee-avatar wee-avatar-sm"><i class="wee-badge wee-badge-danger"></i>C</span>
  </p>
  <p>
    <span class="wee-avatar wee-avatar-lg wee-avatar-square">D</span>
    <span class="wee-avatar wee-avatar-square">D</span>
    <span class="wee-avatar wee-avatar-sm wee-avatar-square">D</span>
  </p>
  <p>
    <span class="wee-avatar wee-avatar-lg wee-avatar-square">
      <i class="wee-badge wee-badge-danger">99</i>D
    </span>
    <span class="wee-avatar wee-avatar-lg wee-avatar-square">
      <i class="wee-badge wee-badge-success">99+</i>D
    </span>
    <span class="wee-avatar wee-avatar-lg wee-avatar-square">
      <i class="wee-badge wee-badge-danger">999+</i>D
    </span>
    <span class="wee-avatar wee-avatar-square">
      <i class="wee-badge wee-badge-success">99</i>D
    </span>
    <span class="wee-avatar wee-avatar-sm wee-avatar-square">
      <i class="wee-badge wee-badge-danger"></i>D
    </span>
  </p>
</div>

```
<span class="wee-avatar wee-avatar-lg">A</span>
<span class="wee-avatar">B</span>
<span class="wee-avatar wee-avatar-sm">C</span>
```