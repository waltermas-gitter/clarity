---
date: 2024-11-26
layout: default
title: gnome
categories: ["papers"]
---
### archivos
~/.icons  
~/.themes  
~/.config/autostart  
~/.local/share/applications  
/usr/share/applications  
~/.local/share/gnome-shell/extensions/  

[gnome-look](https://www.gnome-look.org/browse/cat/)  
[desktop entry docs](https://wiki.archlinux.org/title/desktop_entries)   
```bash
[Desktop Entry]
Type=Application
Encoding=UTF-8
Version=1.0
Name=Locker
GenericName=Locker
Comment=my fast lock app
Exec=/home/waltermas/MEGAsync/scripts/locker.sh
Icon=/home/waltermas/.icons/iconfinder_icon-118-lock-rounded_314696.png
Categories=GNOME;Application;

[Desktop Entry]
Encoding=UTF-8
Version=1.0
Name=lubuntu 21
Comment=Starts the VirtualBox machine lubuntu 21
Type=Application
Exec=/usr/lib/virtualbox/VirtualBoxVM --comment "lubuntu 21" --startvm "{9c1f2428-9e1d-43cb-a3f8-3f0967bfa190}"
Icon=lubuntu_logo
StartupWMClass=VirtualBox Machine UUID: {9c1f2428-9e1d-43cb-a3f8-3f0967bfa190}
```
dconf-editor  
gtk-launch  
xprop WM_CLASS  
