---
date: 2024-11-25
layout: default
title: grub
categories: ["papers"]
---
/etc/default/grub  
/etc/grub.d/  
/boot/grub/grub.cfg  

sudo grub-mkconfig -o /boot/grub/grub.cfg  

## Instalar sin CD
```bash
menuentry "Mint 10 Julia live CD" {
	set root=(hd1,3)
	loopback loop /isos/linuxmint-10-gnome-cd-amd64.iso
	linux (loop)/casper/vmlinuz boot=casper iso-scan/filename=/isos/linuxmint-10-gnome-cd-amd64.iso
	initrd (loop)/casper/initrd.lz
}

menuentry "Debian 12" {
  insmod ext2
  set isofile="/debian12.iso"
  loopback loop (hd1,1)$isofile
  linux (loop)/live/vmlinuz-6.1.0-10-amd64 boot=live findiso=$isofile
  initrd (loop)/live/initrd.img-6.1.0-10-amd64
}

en /etc/mtab borrar linea isodevice ( o sudo umount -l /isodevice)  

```

## write iso to usb
Comprobar que el usb no esta montado:  
sudo lsblk -l  
sudo umount /dev/sd<?><?>  
sudo dd bs=4M if=path/to/input.iso of=/dev/sd<?> conv=fdatasync status=progress  

Otros programas:  
unetbootin  
etcher  
imagewriter, desde manjaro  

sudo lsblk -l  
sudo cp debian12.iso /dev/sdg  
sync  

dd if=debian.iso of=/dev/sdX (no probado)  
sudo dd bs=4M if=full_iso_name.iso of=/dev/<usbdrive> status=progress oflag=sync  #cachyos
