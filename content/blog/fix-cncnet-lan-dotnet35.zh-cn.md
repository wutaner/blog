---
title: "修复 CrossOver 下 CnCNet 局域网模式：安装 .NET 3.5 SP1"
slug: "fix-cncnet-lan-crossover-dotnet35"
date: "2024-04-08"
draft: false
tags: []
---

在 macOS 上用 CrossOver 玩 [CnCNet](https://cncnet.org/) 联机[红警](https://www.openra.net/)、[沙丘 2000](https://www.d2k.world/) 等游戏时，在线和单机模式通常没问题，但**局域网 (LAN) 模式常常会崩溃或报错**。

这通常不是游戏本身或网络设置的问题，而是缺少一个关键的依赖项。CnCNet 的 LAN 功能使用了一个基于旧版 .NET (具体是 2.0/3.5 版本) 的组件来建立局域网服务器 (IrcD.Net)。如果在 CrossOver 的 Bottle（也就是虚拟环境）里只安装了较新的 .NET 4.x 版本，是无法满足这个旧组件的需求的。

**解决方法其实很简单：只需要确保在运行 CnCNet 的同一个 CrossOver Bottle 里安装了 Microsoft .NET Framework 3.5 Service Pack 1 (SP1) 即可。**

操作步骤非常直接：

1.  打开 CrossOver 应用，定位到你安装了 CnCNet 的那个 Bottle。如果你是新安装，就先创建一个 Bottle。
2.  选中这个 Bottle，然后点击界面上的 **"安装 Windows 软件 (Install Windows Software)"** 按钮。
3.  在弹出的软件库中，搜索 **"Microsoft .NET Framework 3.5 SP1"** 或 "Microsoft .NET Framework 3.5 SP1"。
4.  找到后，选择它并完成安装过程。**关键是确保安装到正确的 Bottle 中。**
5.  安装成功后，重新启动 CnCNet 客户端。现在尝试进入 **"局域网 (LAN)"** 模式，之前遇到的崩溃或无法启动服务的问题应该已经解决了。

**额外说明：**

*   虽然 CnCNet 的其他部分或你运行的其他 Windows 程序可能还需要 .NET 4.x（如 4.8）或 Visual C++ 运行库，但这些对于**修复 LAN 模式**来说不是必需的。核心在于 **.NET 3.5 SP1**。
*   这个方法同样适用于直接使用 Wine 或其他 Wine 衍生工具（如 Whisky）的情况，原理都是需要满足旧版 .NET 运行时的依赖。 