---
title: "Markdown 语法指南" 
date: "2020-01-03"
description: "展示基础 Markdown 语法和 HTML 元素格式的示例文章。" 
slug: "markdown-syntax-guide"
tags: []
---

如需快速参考，请查阅 https://simplemde.com/markdown-guide。

---

本文提供了可在 Hugo 内容文件中使用的基础 Markdown 语法的示例，同时也展示了基础 HTML 元素在 Hugo 主题中是否带有 CSS 样式。
<!--more-->

## 标题 (Headings)

以下的 HTML `<h1>`—`<h6>` 元素代表六个级别的章节标题。`<h1>` 是最高级别，`<h6>` 是最低级别。

# H1
## H2
### H3
#### H4
##### H5
###### H6

## 段落 (Paragraph)

Xerum, quo qui aut unt expliquam qui dolut labo. Aque venitatiusda cum, voluptionse latur sitiae dolessi aut parist aut dollo enim qui voluptate ma dolestendit peritin re plis aut quas inctum laceat est volestemque commosa as cus endigna tectur, offic to cor sequas etum rerum idem sintibus eiur? Quianimin porecus evelectur, cum que nis nust voloribus ratem aut omnimi, sitatur? Quiatem. Nam, omnis sum am facea corem alique molestrunt et eos evelece arcillit ut aut eos eos nus, sin conecerem erum fuga. Ri oditatquam, ad quibus unda veliamenimin cusam et facea ipsamus es exerum sitate dolores editium rerore eost, temped molorro ratiae volorro te reribus dolorer sperchicium faceata tiustia prat.

Itatur? Quiatae cullecum rem ent aut odis in re eossequodi nonsequ idebis ne sapicia is sinveli squiatum, core et que aut hariosam ex eat.

## 引用块 (Blockquotes)

引用块元素代表从其他来源引用的内容，可选地带有必须位于 `footer` 或 `cite` 元素内的引文来源，以及可选地带有行内更改，如注释和缩写。

#### 不带署名的引用块

> Tiam, ad mint andaepu dandae nostion secatur sequo quae.
> **注意** 你可以在引用块中使用 *Markdown 语法*。

#### 带署名的引用块

> 不要通过共享内存来通信，而要通过通信来共享内存。<br>
> — <cite>Rob Pike[^1]</cite>

[^1]: 上述引言摘自 Rob Pike 在 2015 年 11 月 18 日 Gopherfest 上的 [演讲](https://www.youtube.com/watch?v=PAAkCSZUG1c)。

## 表格 (Tables)

表格不是核心 Markdown 规范的一部分，但 Hugo 原生支持它们。

   姓名 | 年龄
--------|------
    鲍勃 | 27
  爱丽丝 | 23

#### 表格内的内联 Markdown

| 斜体      | 粗体     | 代码   |
| --------  | -------- | ------ |
| *斜体*    | **粗体** | `代码` |

## 代码块 (Code Blocks)

#### 使用反引号的代码块

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Example HTML5 Document</title>
</head>
<body>
  <p>Test</p>
</body>
</html>
```

#### 使用四个空格缩进的代码块

    <!doctype html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <title>Example HTML5 Document</title>
    </head>
    <body>
      <p>Test</p>
    </body>
    </html>

#### 使用 Hugo 内建 highlight 短代码的代码块
{{< highlight html >}}
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Example HTML5 Document</title>
</head>
<body>
  <p>Test</p>
</body>
</html>
{{< /highlight >}}

## 列表类型 (List Types)

#### 有序列表

1. 第一项
2. 第二项
3. 第三项

#### 无序列表

* 列表项
* 另一项
* 再一项

#### 嵌套列表

* 水果
  * 苹果
  * 橙子
  * 香蕉
* 乳制品
  * 牛奶
  * 奶酪

## 其他元素 — abbr, sub, sup, kbd, mark

<abbr title="图形交换格式">GIF</abbr> 是一种位图图像格式。

H<sub>2</sub>O

X<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>

按 <kbd><kbd>CTRL</kbd>+<kbd>ALT</kbd>+<kbd>Delete</kbd></kbd> 来结束会话。

大多数<mark>蝾螈</mark>是夜行性的，捕食昆虫、蠕虫和其他小生物。 