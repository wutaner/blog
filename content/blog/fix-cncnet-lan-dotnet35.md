---
title: "CnCNet LAN Fix for CrossOver (.NET 3.5 SP1)"
slug: "fix-cncnet-lan-crossover-dotnet35"
date: "2024-04-08"
draft: false
tags: []
---

When playing [CnCNet](https://cncnet.org/) games like [Red Alert](https://www.openra.net/) or [Dune 2000](https://www.d2k.world/) online using CrossOver on macOS, the online and single-player modes usually work fine, but **LAN mode often crashes or shows errors**.

This usually isn't an issue with the game itself or network settings, but rather a missing critical dependency. CnCNet's LAN feature uses a component based on an older version of .NET (specifically 2.0/3.5) to establish the LAN server (IrcD.Net). Simply having a newer .NET 4.x version installed in the CrossOver Bottle (the virtual environment) isn't sufficient for this older component.

**The solution is actually quite simple: just ensure that Microsoft .NET Framework 3.5 Service Pack 1 (SP1) is installed in the *same* CrossOver Bottle where CnCNet is running.**

The steps are straightforward:

1.  Open the CrossOver application and locate the Bottle where you installed CnCNet. If it's a new setup, create a Bottle first.
2.  Select the Bottle, then click the **"Install Windows Software"** button in the interface.
3.  In the software library that appears, search for **".NET 3.5 SP1"** or "Microsoft .NET Framework 3.5 SP1".
4.  Once found, select it and complete the installation process. **It's crucial to ensure it's installed into the correct Bottle.**
5.  After successful installation, restart the CnCNet client. Now, try entering **"LAN"** mode. The previous crashes or errors about failing to start the service should be gone.

**Extra Notes:**

*   While other parts of CnCNet or other Windows programs you run might still require .NET 4.x (like 4.8) or Visual C++ Runtimes, these are not necessary for **fixing the LAN mode**. The key is **.NET 3.5 SP1**.
*   This method also applies if you're using Wine directly or other Wine-based tools (like Whisky); the principle is the same – fulfilling the dependency on the older .NET runtime. 