---
date: 2024-11-24
layout: default
title: bash
categories: ["papers"]
tags : ['linux']
---
brave > /dev/null 2>&1  
UID , usuario , [ $UID -ne 0 ] , check for super user  
```bash
OLDIFS=$IFS
IFS=$'\n'
-----
IFS=$OLDIFS
```
.xinitrc , lanza el escritorio  

### argumentos
$# numero de argumentos  
$@ todos los argumentos  
!$ ultimo argumento  
$0 nombre del script  
despues del 9: ${10}  
$? valor de retorno de error del ultimo script  
!:1 tab, expande el argumento 1 del comando anterior  

[getopts pelado nerd](https://www.youtube.com/watch?v=0D6MOPyPq-c&list=PLqRCtm0kbeHCyy97BXcArtR0UAQKGmkDk&index=2)  

tail -f xxxxx.log  # seguir el log  

## signals
```bash
#!/bin/bash
# llamar con kill -USR1 60639

echo "pid is $$"
handler(){
    echo "Handler was called"
}

trap handler USR1

while sleep 1
do
    date
done
```


