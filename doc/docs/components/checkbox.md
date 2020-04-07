---
id: checkbox
title:  Checkbox 按钮
sidebar_label: Checkbox 按钮
---

## 使用场景

对原生 checkbox按钮进行了包装美化，通过切换样式展示不同的状态

## 基本用法

<label class="checkbox">
  <input type="checkbox">
  Remember me
</label>

分为：选中状态、未选中、未知状态

<div class="wee-mod-demo">
  <ul>
    <li>
      <label class="wee-checkbox-wrap">
        <span class="wee-checkbox-box wee-checkbox-checked">
          <input type="checkbox" class="wee-checkbox-input" checked="">
          <span class="wee-checkbox-inner"></span>
        </span>
        <span>选中状态</span>
      </label>
      <label class="wee-checkbox-wrap">
        <span class="wee-checkbox-box">
          <input type="checkbox" class="wee-checkbox-input">
          <span class="wee-checkbox-inner"></span>
        </span>
        <span>未选中</span>
      </label>
      <label class="wee-checkbox-wrap">
        <span class="wee-checkbox-box wee-checkbox-indeterminate ">
          <input type="checkbox" class="wee-checkbox-input">
          <span class="wee-checkbox-inner"></span>
        </span>
        <span>未知状态</span>
      </label>
    </li>
  </ul>
</div>

```
<label class="wee-checkbox-wrap">
  <span class="wee-checkbox-box wee-checkbox-checked">
    <input type="checkbox" class="wee-checkbox-input" checked="">
    <span class="wee-checkbox-inner"></span>
  </span>
  <span>选中状态</span>
</label>
<label class="wee-checkbox-wrap">
  <span class="wee-checkbox-box">
    <input type="checkbox" class="wee-checkbox-input">
    <span class="wee-checkbox-inner"></span>
  </span>
  <span>未选中</span>
</label>
<label class="wee-checkbox-wrap">
  <span class="wee-checkbox-box wee-checkbox-indeterminate ">
    <input type="checkbox" class="wee-checkbox-input">
    <span class="wee-checkbox-inner"></span>
  </span>
  <span>未知状态</span>
</label>
```

## 禁用展示

<div class="wee-mod-demo">
  <ul>
    <li>
      <label class="wee-checkbox-wrap wee-checkbox-wrap-disabled">
        <span class="wee-checkbox-box wee-checkbox-disabled">
          <input type="checkbox" disabled="" class="wee-checkbox-input">
          <span class="wee-checkbox-inner"></span>
        </span>
        <span>多选框</span>
      </label>
      <label class="wee-checkbox-wrap wee-checkbox-wrap-disabled">
        <span class="wee-checkbox-box wee-checkbox-checked wee-checkbox-disabled">
          <input type="checkbox" disabled="" class="wee-checkbox-input" checked="">
          <span class="wee-checkbox-inner"></span>
        </span>
        <span>多选框</span>
      </label>
      <label class="wee-checkbox-wrap">
        <span class="wee-checkbox-box wee-checkbox-checked">
          <input type="checkbox" class="wee-checkbox-input" checked="">
          <span class="wee-checkbox-inner"></span>
        </span>
        <span>多选框</span>
      </label>
    </li>
  </ul>
</div>

```
<label class="wee-checkbox-wrap wee-checkbox-wrap-disabled">
  <span class="wee-checkbox-box wee-checkbox-disabled">
    <input type="checkbox" disabled="" class="wee-checkbox-input">
    <span class="wee-checkbox-inner"></span>
  </span>
  <span>多选框</span>
</label>
<label class="wee-checkbox-wrap wee-checkbox-wrap-disabled">
  <span class="wee-checkbox-box wee-checkbox-checked wee-checkbox-disabled">
    <input type="checkbox" disabled="" class="wee-checkbox-input" checked="">
    <span class="wee-checkbox-inner"></span>
  </span>
  <span>多选框</span>
</label>
<label class="wee-checkbox-wrap">
  <span class="wee-checkbox-box wee-checkbox-checked">
    <input type="checkbox" class="wee-checkbox-input" checked="">
    <span class="wee-checkbox-inner"></span>
  </span>
  <span>多选框</span>
</label>
```
