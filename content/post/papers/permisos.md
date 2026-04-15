---
date: 2024-11-29
layout: default
title: permisos
categories: ["papers"]
---
r-- 4= lectura  
-w- 2= escritura  
--x 1= ejecución  
6 (4+2)= lectura y escritura  
5 (4+1)= lectura y ejecución  
3 (2+1)= escritura y ejecución  
7 (4+2+1)= lectura, escritura y ejecución  
u owner, g group, o others, a all  
r read access, w write access, x execute access  
ej chmod g+rw miarchivo.txt  
chmod ugo+x programa.sh  
chmod u=rwx g=rw o=r filename  
