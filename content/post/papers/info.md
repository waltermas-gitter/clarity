---
date: 2024-11-24
layout: default
title: info
categories: ["papers"]
---
### impresora
impresora: brother hl-1212w  
driver en carpeta Descargas en Mega  
[driver](https://support.brother.com/g/b/downloadlist.aspx?c=mx&lang=es&prod=hl1212w_us_eu&os=128&flang=English)   

fedora: dnf install printer-driver-brlaser  


### statter video
en debian /etc/pipewire/pipewire.conf  
en fedora /usr/share/pipewire/pipewire.conf  
```bash
default.clock.quantum     = 2048
default.clock.min-quantum = 2048
default.clock.max-quantum = 4096
```
### radios
radiogarden, buscar red y recargar

### lightdm resolution
/etc/lightdm/lightdm.conf  
```bash
[Seat:*]  
display-setup-script=xrandr -s 1680x1050  
#type=local
```
### freeze
dconf write /org/gnome/calculator/refresh-interval 0
