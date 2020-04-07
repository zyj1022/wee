---
id: button
title:  Button 按钮
sidebar_label: Button 按钮
---

## 按钮使用

按钮标签分为：

`<a>`  、`<button>` 、`<input type="submit">`、`<input type="reset">`

<div class="demo-wrap">
  <a class="wee-btn">Anchor</a>
  <button class="wee-btn">Button</button>
  <input class="wee-btn" type="submit" value="Submit input">
  <input class="wee-btn" type="reset" value="Reset input">
</div>

```
<a class="wee-btn">Anchor</a>
<button class="wee-btn">Button</button>
<input class="wee-btn" type="submit" value="Submit input">
<input class="wee-btn" type="reset" value="Reset input">
```

## 按钮颜色

<div class="demo-wrap">
  <button class="wee-btn">default</button>
  <button class="wee-btn wee-btn-light">light</button>
  <button class="wee-btn wee-btn-dark">dark</button>
  <button class="wee-btn wee-btn-link">btn-link</button>
</div>

```
<button class="wee-btn">default</button>
<button class="wee-btn wee-btn-light">light</button>
<button class="wee-btn wee-btn-dark">dark</button>
<button class="wee-btn wee-btn-link">btn-link</button>
```

<div class="demo-wrap">
  <button class="wee-btn wee-btn-primary">primary</button>
  <button class="wee-btn wee-btn-secondary">secondary</button>
  <button class="wee-btn wee-btn-success">success</button>
  <button class="wee-btn wee-btn-info">info</button>
  <button class="wee-btn wee-btn-warning">warning</button>
  <button class="wee-btn wee-btn-danger">danger</button>
</div>

```
<button class="wee-btn wee-btn-primary">primary</button>
<button class="wee-btn wee-btn-secondary">secondary</button>
<button class="wee-btn wee-btn-success">success</button>
<button class="wee-btn wee-btn-info">info</button>
<button class="wee-btn wee-btn-warning">warning</button>
<button class="wee-btn wee-btn-danger">danger</button>
```

## 按钮尺寸

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

## 按钮类型

按钮类型：默认按钮、胶囊按钮、矩形按钮、圆形按钮、实心按钮、空心按钮、Block按钮。

### 默认按钮

<div class="demo-wrap">
  <button class="wee-btn">default</button>
  <button class="wee-btn wee-btn-primary">primary</button>
  <button class="wee-btn wee-btn-secondary">secondary</button>
  <button class="wee-btn wee-btn-success">success</button>
  <button class="wee-btn wee-btn-info">info</button>
  <button class="wee-btn wee-btn-warning">warning</button>
  <button class="wee-btn wee-btn-danger">danger</button>
  <button class="wee-btn wee-btn-light">light</button>
  <button class="wee-btn wee-btn-dark">dark</button>
</div>

```
<button class="wee-btn">default</button>
<button class="wee-btn wee-btn-primary">primary</button>
<button class="wee-btn wee-btn-secondary">secondary</button>
<button class="wee-btn wee-btn-success">success</button>
<button class="wee-btn wee-btn-info">info</button>
<button class="wee-btn wee-btn-warning">warning</button>
<button class="wee-btn wee-btn-danger">danger</button>
<button class="wee-btn wee-btn-light">light</button>
<button class="wee-btn wee-btn-dark">dark</button>
```
### 胶囊按钮

<div class="demo-wrap">
  <button class="wee-btn wee-btn-round">default</button>
  <button class="wee-btn wee-btn-primary wee-btn-round">primary</button>
  <button class="wee-btn wee-btn-secondary wee-btn-round">secondary</button>
  <button class="wee-btn wee-btn-success wee-btn-round">success</button>
  <button class="wee-btn wee-btn-info wee-btn-round">info</button>
  <button class="wee-btn wee-btn-warning wee-btn-round">warning</button>
  <button class="wee-btn wee-btn-danger wee-btn-round">danger</button>
  <button class="wee-btn wee-btn-light wee-btn-round">light</button>
  <button class="wee-btn wee-btn-dark wee-btn-round">dark</button>
</div>

```
<button class="wee-btn wee-btn-round">default</button>
<button class="wee-btn wee-btn-primary wee-btn-round">primary</button>
<button class="wee-btn wee-btn-secondary wee-btn-round">secondary</button>
<button class="wee-btn wee-btn-success wee-btn-round">success</button>
<button class="wee-btn wee-btn-info wee-btn-round">info</button>
<button class="wee-btn wee-btn-warning wee-btn-round">warning</button>
<button class="wee-btn wee-btn-danger wee-btn-round">danger</button>
<button class="wee-btn wee-btn-light wee-btn-round">light</button>
<button class="wee-btn wee-btn-dark wee-btn-round">dark</button>
```

### 矩形按钮

<div class="demo-wrap">
  <button class="wee-btn wee-btn-square">default</button>
  <button class="wee-btn wee-btn-primary wee-btn-square">primary</button>
  <button class="wee-btn wee-btn-secondary wee-btn-square">secondary</button>
  <button class="wee-btn wee-btn-success wee-btn-square">success</button>
  <button class="wee-btn wee-btn-info wee-btn-square">info</button>
  <button class="wee-btn wee-btn-warning wee-btn-square">warning</button>
  <button class="wee-btn wee-btn-danger wee-btn-square">danger</button>
  <button class="wee-btn wee-btn-light wee-btn-square">light</button>
  <button class="wee-btn wee-btn-dark wee-btn-square">dark</button>
</div>

```
<button class="wee-btn wee-btn-square">default</button>
<button class="wee-btn wee-btn-primary wee-btn-square">primary</button>
<button class="wee-btn wee-btn-secondary wee-btn-square">secondary</button>
<button class="wee-btn wee-btn-success wee-btn-square">success</button>
<button class="wee-btn wee-btn-info wee-btn-square">info</button>
<button class="wee-btn wee-btn-warning wee-btn-square">warning</button>
<button class="wee-btn wee-btn-danger wee-btn-square">danger</button>
<button class="wee-btn wee-btn-light wee-btn-square">light</button>
<button class="wee-btn wee-btn-dark wee-btn-square">dark</button>
```

### 圆形按钮

<div class="demo-wrap">
<Button type="button" class="wee-btn wee-btn-circle">W</Button>
<Button type="button" class="wee-btn wee-btn-primary wee-btn-circle">A</Button>
<Button type="button" class="wee-btn wee-btn-outline-primary wee-btn-sm wee-btn-circle">R</Button>
<Button type="button" class="wee-btn wee-btn-danger wee-btn-lg wee-btn-circle">Z</Button>
</div>

```
<Button type="button" class="wee-btn wee-btn-circle">W</Button>
<Button type="button" class="wee-btn wee-btn-primary wee-btn-circle">A</Button>
<Button type="button" class="wee-btn wee-btn-outline-primary wee-btn-sm wee-btn-circle">R</Button>
<Button type="button" class="wee-btn wee-btn-danger wee-btn-lg wee-btn-circle">Z</Button>
```

### 空心按钮

<div class="demo-wrap">
  <button class="wee-btn">default</button>
  <button class="wee-btn wee-btn-outline-primary">primary</button>
  <button class="wee-btn wee-btn-outline-secondary">secondary</button>
  <button class="wee-btn wee-btn-outline-success">success</button>
  <button class="wee-btn wee-btn-outline-info">info</button>
  <button class="wee-btn wee-btn-outline-warning">warning</button>
  <button class="wee-btn wee-btn-outline-danger">danger</button>
  <button class="wee-btn wee-btn-outline-light">light</button>
  <button class="wee-btn wee-btn-outline-dark">dark</button>
</div>

```
<button class="wee-btn">default</button>
<button class="wee-btn wee-btn-outline-primary">primary</button>
<button class="wee-btn wee-btn-outline-secondary">secondary</button>
<button class="wee-btn wee-btn-outline-success">success</button>
<button class="wee-btn wee-btn-outline-info">info</button>
<button class="wee-btn wee-btn-outline-warning">warning</button>
<button class="wee-btn wee-btn-outline-danger">danger</button>
<button class="wee-btn wee-btn-outline-light">light</button>
<button class="wee-btn wee-btn-outline-dark">dark</button>
```

### Block按钮

<div class="demo-wrap">
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
<button class="wee-btn wee-btn-primary wee-btn-block">primary</button>
<button class="wee-btn wee-btn-outline-success wee-btn-round wee-btn-block">success</button>
<button class="wee-btn wee-btn-danger wee-btn-square wee-btn-block">danger</button>
```
