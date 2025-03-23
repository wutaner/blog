---
title: "使用 GitHub Pages 和 Cloudflare 搭建个人博客"
date: 2024-03-20
---

今天我成功地使用 GitHub Pages 和 Cloudflare 搭建了这个博客。在这篇文章中，我将分享整个过程中的经验和注意事项。

## 技术栈选择

- 静态网站生成器：Hugo
- 主题：Hugo Bear Blog（简洁、快速、优雅）
- 托管平台：GitHub Pages（免费、可靠）
- CDN 和 SSL：Cloudflare（免费、安全）

## 搭建步骤

### 1. 创建 GitHub 仓库

首先创建一个名为 `blog` 的仓库。这里有两个选择：
- `username.github.io`：个人站点
- 普通仓库名：项目站点

我选择了普通仓库名 `blog`，因为这样更灵活，而且计划使用自定义域名。

### 2. 配置 Hugo

Hugo 配置文件 `hugo.toml` 中的关键设置：

```toml
baseURL = "https://wutaner.com"
title = "wutaner"
theme = 'hugo-bearblog-testlongzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz'
languageCode = "zh-CN"
```

### 3. GitHub Actions 自动部署

创建了 `.github/workflows/hugo.yaml` 工作流文件，实现推送代码后自动构建和部署：

```yaml
name: Deploy Hugo site to Pages
on:
  push:
    branches: [ main ]
  workflow_dispatch:

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Setup Hugo
        uses: peaceiris/actions-hugo@v2
        with:
          hugo-version: '0.121.2'
          extended: true
      # 构建和部署步骤...
```

### 4. Cloudflare 配置

这是最关键的部分，需要正确配置 DNS 和 SSL：

1. **DNS 设置**：
   ```
   CNAME www -> wutaner.github.io
   A @ -> 185.199.108.153
   ```

2. **SSL/TLS 设置**：
   - 选择"灵活"模式
   - 原因：GitHub Pages 免费版对自定义域名的 SSL 证书有限制
   - "灵活"模式确保用户访问时使用 HTTPS

### 遇到的问题和解决方案

1. **HTTPS 访问问题**：
   - 最初尝试使用"完全（严格）"模式
   - 发现无法访问，因为 GitHub Pages 的证书是 `*.github.io`
   - 解决方案：使用"灵活"模式，保证用户端 HTTPS 访问

2. **域名解析**：
   - GitHub Pages 的 DNS 检查成功
   - 但 SSL 证书验证是独立的问题
   - 使用 Cloudflare 的"灵活"模式完美解决

## 最终成果

- 博客可通过 HTTPS 安全访问
- 使用 Cloudflare CDN 加速
- GitHub Actions 自动部署
- 简洁优雅的界面

## 后续计划

1. 添加更多博客内容
2. 优化网站性能
3. 添加评论系统
4. 自定义主题样式

这个博客将记录我的技术探索和学习心得。欢迎访问 [wutaner.com](https://wutaner.com) 了解更多内容。 