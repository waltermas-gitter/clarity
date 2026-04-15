---
date: 2024-11-26
layout: default
title: arch
categories: ["papers"]
---
## pacman
```bash
pacman -S package  #install package  
# Manual install
pacman -U _/path/to/package/package_name-version.pkg.tar.xz_
pacman -U http://www.example.com/repo/example.pkg.tar.xz

pacman -R package #remove package
pacman -Rs package #remove package and dependencies

pacman -Syu #update the system
S = sync
y = refresh
u = update

pacman -Ss string #search string
pacman -Qs string #search for installed packages
pacman -Qe #lists all installed packages
pacman -F string #search for package files

pactree package #tree of dependencies

paccache -r #delete database but the last 3 versions, from pacman-contrib
pacman -Sc #remove all unused packages
pacman -Scc #remove all cache files

sudo pacman -Rns $(pacman -Qtdq) #remove orfans packages
```
## mirrors
Edit /etc/pacman.d/mirrorlist uncomment the one you want  
arch mirrorlist generator https://archlinux.org/mirrorlist/  
## yay
```bash
cd /opt
sudo git clone https://aur.archlinux.org/yay-git.git
sudo chown -R waltermas:waltermas ./yay-git
cd yay-git
makepkg -si

```

