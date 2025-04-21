---
title: 'Building a Personal Blog with GitHub Pages'
slug: "hugo-blog-github-pages"
date: '2025-03-20'
draft: true
tags: []
---

Today I successfully set up this blog using GitHub Pages and Cloudflare. The process had some points worth documenting.

**The chosen tech stack is simple:**

*   Static Site Generator: **Hugo**, because it's fast and powerful.
*   Theme: **Hugo Bear Blog**, aiming for simplicity, speed, and elegance.
*   Hosting: **GitHub Pages**, free and stable.
*   CDN and SSL: **Cloudflare**, also free and provides security.

**Setup Process Overview:**

First, I created a repository named `blog` on GitHub. I chose a regular repository name instead of `username.github.io` mainly for flexibility in using a custom domain later.

Next was configuring Hugo. The most important setting in the `hugo.toml` file was setting the `baseURL` to my domain `https://wutaner.com`.

For automated deployment, I used **GitHub Actions**. I configured the workflow in the `.github/workflows/hugo.yaml` file, using the `peaceiris/actions-hugo` action. This way, every time I push new articles to the `main` branch, GitHub Actions automatically builds the site with Hugo and deploys it to GitHub Pages.

**The key point was the Cloudflare configuration.** To make the custom domain `wutaner.com` correctly point to GitHub Pages and enable HTTPS, two steps were needed:

1.  **DNS Settings:** Add a `CNAME` record pointing `www` to `wutaner.github.io`, and add an `A` record pointing the root domain `@` to GitHub Pages' IP addresses (which can be found in GitHub documentation, e.g., `185.199.108.153`, etc.).
2.  **SSL/TLS Settings:** This is where the core issue arose. While GitHub Pages provides certificates for `*.github.io`, its support for free certificates on custom domains is limited. Directly using Cloudflare's "Full (Strict)" SSL mode would cause access errors. **The solution was to choose Cloudflare's "Flexible" mode.** This way, the connection from the user's browser to Cloudflare is HTTPS encrypted, while the connection from Cloudflare to GitHub Pages can be HTTP, bypassing the certificate issue while still ensuring user access security.

**Finally, the blog went live successfully:**

*   Accessible securely via `https://wutaner.com`.
*   Benefits from Cloudflare CDN's access acceleration.
*   Content updates are automatically deployed via GitHub Actions, which is very convenient.
*   The interface maintains the minimalist style of Bear Blog.

**Some future ideas:**

Mainly to keep adding content, possibly consider performance optimization, maybe add a comment system in the future, and make some minor tweaks to the theme's style.

This blog is primarily used to record my technical explorations and learnings. Feel free to visit [wutaner.com](https://wutaner.com). 