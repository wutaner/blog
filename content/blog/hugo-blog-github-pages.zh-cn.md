---
title: '使用 GitHub Pages 搭建个人博客'
slug: "hugo-blog-github-pages"
date: '2025-03-20'
draft: true
tags: []
---

今天我成功地使用 GitHub Pages 和 Cloudflare 搭建了这个博客，过程颇有些值得记录的地方。

**选择的技术栈很简单：**

*   静态网站生成器：**Hugo**，因为它快速、强大。
*   主题：**Hugo Bear Blog**，追求简洁、快速和优雅。
*   托管：**GitHub Pages**，免费且稳定。
*   CDN 和 SSL：**Cloudflare**，同样免费且能提供安全保障。

**搭建过程概述：**

首先，在 GitHub 上创建了一个名为 `blog` 的仓库。我选择了普通的仓库名而非 `username.github.io`，主要是为了后续使用自定义域名的灵活性。

接着配置 Hugo，在 `hugo.toml` 文件里最重要的就是设置好 `baseURL` 为我的域名 `https://wutaner.com`。

为了实现自动化部署，我使用了 **GitHub Actions**。在 `.github/workflows/hugo.yaml` 文件中配置了工作流，使用了 `peaceiris/actions-hugo` 这个 Action。这样每次我将新的文章推送到 `main` 分支，GitHub Actions 就会自动使用 Hugo 构建网站并将其部署到 GitHub Pages。

**关键点在于 Cloudflare 的配置。** 要让自定义域名 `wutaner.com` 正确指向 GitHub Pages 并启用 HTTPS，需要两步设置：

1.  **DNS 设置：** 添加一条 `CNAME` 记录将 `www` 指向 `wutaner.github.io`，并添加一条 `A` 记录将根域名 `@` 指向 GitHub Pages 的 IP 地址（可以通过 GitHub 文档查到，例如 `185.199.108.153` 等）。
2.  **SSL/TLS 设置：** 这里遇到了一个核心问题。GitHub Pages 虽然为 `*.github.io` 提供了证书，但对自定义域名的免费证书支持有限。直接使用 Cloudflare 的"完全（严格）"SSL 模式会导致访问错误。**解决方案是选择 Cloudflare 的"灵活 (Flexible)"模式**。这样，用户浏览器到 Cloudflare 的连接是 HTTPS 加密的，而 Cloudflare 到 GitHub Pages 的连接可以是 HTTP，绕过了证书问题，同时保证了用户访问的安全性。

**最终，博客成功上线：**

*   可以通过 `https://wutaner.com` 安全访问。
*   享受 Cloudflare CDN 带来的访问加速。
*   内容更新通过 GitHub Actions 自动部署，非常方便。
*   界面保持了 Bear Blog 的简洁风格。

**接下来的一些想法：**

主要是持续添加内容，可能会考虑优化性能，或者未来添加评论系统，以及对主题样式做一些微调。

这个博客主要用来记录我的技术探索和学习心得。欢迎访问 [wutaner.com](https://wutaner.com)。 