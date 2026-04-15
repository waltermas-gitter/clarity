---
date: 2025-02-19
layout: default
title: debian
categories: ["papers"]
---
## apt
apt purge program-name # elimina config global del programa  
apt autoremove # elimina dependencias no utilizadas  
## node
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo bash -  
sudo apt-get install -y nodejs  

## repositories
directorio /etc/apt/sources.list.d  

## sonido
alsamixer disable automute

## xcompose 
en ~/.XCompose:  
```bash
include "%L"   # import the default Compose file for your locale
#<Multi_key> <bar> <greater>     : "▸"
#<Multi_key> <a> <b> : "people"
#<a> <b> : "sin multikey"
<Multi_key> <Multi_key> <a> : "ã"
<Multi_key> <Multi_key> <o> : "õ"
<Multi_key> <Multi_key> <e> : "ê"
```

en ~/.config/autostart/xmodmap.desktop
```bash
[Desktop Entry]
Type=Application
Exec=xmodmap -e "keysym Control_R = Multi_key"
X-GNOME-Autostart-enabled=true
NoDisplay=false
Hidden=false
Name[es_AR]=xmodmap
Comment[es_AR]=Sin descripción
X-GNOME-Autostart-Delay=0
```
## deposito de claves
rm /home/tu usuario/.local/share/keyrings/login.keyring  
