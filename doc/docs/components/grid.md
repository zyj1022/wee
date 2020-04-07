---
id: grid
title: Grid 栅格
sidebar_label: Grid 栅格
---


## 设计理念 

采用24栅格体系，支持传统的float布局，也支持flex布局。

布局的栅格化系统，基于行（row）和列（col）来定义信息区块的外部框架，以使页面的每个区块能够整齐排布，
工作原理如下：

- 通过row在水平方向建立一组column（简写col）

- 你的内容应当放置于col内，并且，只有col可以作为row的直接元素

- 栅格系统中的列是指1到24的值来表示其跨越的范围。例如，三个等宽的列可以使用.col-8来创建

- 如果一个row中的col总和超过 24，那么多余的col会作为一个整体另起一行排列

## Float布局

### 固定宽度布局

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

### 偏移布局

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

## Flex布局

### 布局用法说明

**容器有两种**

- Col: 容器里的[栅格]以横向排列，与传统栅格化的Row一样
- Row: 容器里的[栅格]以竖向排列，表示一层叠一层的排列方式
- 栅格化为24列，如果单行超过24列，即自动换行

### 布局

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

### 垂直居中/水平居中

<div class="wee-flex-row wee-flex-middle wee-flex-center" style="min-height: 200px;background:#fbfbfb;border:1px solid #e9e9e9">
  <div class="wee-flex-col-6 wee-flex-test"><span>flex-col-6垂直居中</span></div>
  <div class="wee-flex-col-6 wee-flex-test"><span>flex-col-6多行垂直居中</span></div>
</div>

### 向左偏移

<div class="wee-flex-column" style="background:#fbfbfb;">
  <div class="wee-flex-col-12"><span>flex-col-12</span></div>
</div>
<div class="wee-flex-column" style="background:#fbfbfb;">
  <div class="wee-flex-col-12 wee-flex-push-6"><span class="even">flex-col-12 wee-flex-push-6</span></div>
</div>
<div class="wee-flex-column" style="background:#fbfbfb;">
  <div class="wee-flex-col-10 wee-flex-push-14"><span>flex-col-10 wee-flex-push-14</span></div>
</div>

### 排序

order越小排在越前面

<div class="wee-flex-column">
  <div class="wee-flex-col-5 wee-flex-order-4"><span>flex-col-4 flex-order-4</span></div>
  <div class="wee-flex-col-5 wee-flex-order-3"><span>flex-col-4 flex-order-3</span></div>
  <div class="wee-flex-col-5 wee-flex-order-2"><span>flex-col-4 flex-order-2</span></div>
  <div class="wee-flex-col-5 wee-flex-order-1"><span>flex-col-4 flex-order-1</span></div>
</div>

### 左对齐/右对齐

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

### 顶对齐/底对齐

<div class="wee-flex-column wee-flex-bottom" style="background:#fbfbfb;min-height:120px">
  <div class="wee-flex-col-6"><span>flex-col-6 底部对齐</span></div>
  <div class="wee-flex-col-6 wee-flex-top"><span>flex-col-6 顶部对齐</span></div>
  <div class="wee-flex-col-6"><span>flex-col-6 底部对齐</span></div>
</div>

### 等宽对齐

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

### 分散排列

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