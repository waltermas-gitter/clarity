---
date: 2025-09-02
layout: default
title: systemd-nspawn
categories: ["papers"]
---
[debian wiki](https://wiki-debian-org.translate.goog/nspawn?_x_tr_sl=en&_x_tr_tl=es&_x_tr_hl=es&_x_tr_pto=tc) 
creacion:
debootstrap --include=systemd,dbus stable /var/lib/machines/debian  
boot:  
systemd-nspawn --boot -U -D /var/lib/machines/debian 
machinectl list  
machinectl login  
