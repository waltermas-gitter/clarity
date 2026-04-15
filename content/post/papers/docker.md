---
date: 2024-12-18
layout: default
title: docker
categories: ["papers"]
---
Como cambiar la carpeta donde guarda las imagenes docker por default.  
sudo nvim /etc/docker/daemon.json  
 
Crear el archivo si no existe.  
{  
  "data-root": "/run/media/SATURN/docker-images"  
}  

Copiar data:  
sudo rsync -aP /var/lib/docker/ /discos/SDB1/docker  

docker images  
docker ps -a  

docker pull ubuntu:kinetic  
docker run -t -i ubuntu:latest /bin/bash  
docker run -t -i [imageid] /bin/bash  
-t terminal  
-i interactive  
press CTRL+P followed by CTRL+Q para salir sin liquidar el container  
docker run -ti --entrypoint /bin/sh rclone/rclone #cambiando el entrypoint  

parar el container: docker stop <container-id>  
parar el container desde dentro: exit  
volver al container: sudo docker attach <container-id>  
rm <container-id>  
docker container prune  ,para borrar todos los containers detenidos  
borrar una imagen: docker rmi <image-id>  

crear una imagen propia, (no parar el container):  
docker commit 3d24b3de0bfc waltermas/ubuntu_apache  

docker build -t kine:v0 .  
docker build -t <tag-name> -f <file-name> .

docker system df -v # espacio que ocupa en disco  

### Dockerfile
```bash
FROM debian:12.8
RUN apt update && apt install -y wget curl neovim zsh git unzip
RUN apt install -y libpci3 libegl1 libcubeb0
RUN apt install -y firefox-esr
RUN adduser --disabled-password --gecos '' waltermas
RUN apt install -y software-properties-common apt-transport-https ca-certificates
RUN apt install -y fonts-liberation libvulkan1 xdg-utils
WORKDIR /root/sharing
RUN curl https://downloads.vivaldi.com/stable/vivaldi-stable_7.0.3495.15-1_amd64.deb -o vivaldi.deb
RUN dpkg -i vivaldi.deb
CMD [ "/bin/zsh" ]
# apt install build-essential
# apt install nodejs npm -y
# cambiar /root/sharing a /sharing por los permisos
```


docker exec -t con terminal=false en .desktop  
sudo /etc/init.d/dbus  

### arranca aplicacion sin terminal
```bash
[Desktop Entry]
Version=1.0
Type=Application
Name=google-chrome-stable
GenericName=google-chrome-stable
Comment=google-chrome-stable
TryExec=/home/waltermas/scripts/docker/arch/chrome.sh
Exec=/home/waltermas/scripts/docker/arch/chrome.sh
Terminal=false
Icon=google-chrome-stable
Categories=Application;
StartupWMClass=google-chrome
Hidden=false
NoDisplay=false
StartupNotify=true


```
