---
date: 2024-11-30
layout: default
title: doom
categories: ["papers"]
---

[install info](https://www.maketecheasier.com/install-doom-emacs/)  

## install
```bash
sudo apt install emacs
git clone --depth 1 https://github.com/doomemacs/doomemacs ~/.config/emacs
~/.config/emacs/bin/doom install
```
rmdir -rf ~/.emacs.d para que arranque doom  
directorios doom:  
- .config/doom #aca está toda la config  
- .config/emacs  
- .config/emacs/bin  
- .emacs.d/.local/straight/repos/themes/themes/  
```bash
[Desktop Entry]
Type=Application
Exec=/usr/bin/emacs --daemon
X-GNOME-Autostart-enabled=true
NoDisplay=false
Hidden=false
Name[es_AR]=emacs server
Comment[es_AR]=emacs server
X-GNOME-Autostart-Delay=0
```
