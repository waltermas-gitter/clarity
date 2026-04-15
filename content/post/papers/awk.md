---
date: 2024-12-24
layout: default
title: awk
categories: ["papers"]
---
[tutorial](https://low-orbit.net/awk-tutorial)   
[yt](https://www.youtube.com/watch?v=KZ9Oj4XZ8d8&t=1486s)   
### imprime la primer columna
```bash
ls -l / | awk '{print $1}'
cat /etc/passwd | awk -F ':' '{print $1}'
```
$0: todo  
$NF: ultima columna  
-F: delimitador  
### usando un archivo
```bash
ps -ef | awk -f comandos.awk
awk -f comandos.awk test1.txt
```
### bucle for
```bash
echo 11 22 33 | awk '{total=0; for(i=0; i<NF; i++) total+=$i; print total}'
echo "buenas tardes perri" | awk '{for(i=1;i<=NF;i++) {print $i; system("sleep 1")}}'
```
### begin, end
```bash
ls -l / | awk 'BEGIN {print "tamaño de los archivos"} {print $9, $5} END{print "chau"}'
awk 'BEGIN{printf "Col1\tCol2\tCol3\n"} {print $2"\t"$3"\t"$7} END{print "Done"}' test1.txt
```
### while
```bash
echo | awk '{i=0; while(i<10){ print i; i++}}'
awk 'BEGIN{c=0; do {print c; c++} while(c<10)}'

```
### variables
```bash
awk -v var1=xyz 'BEGIN{printf "var1 = %s\n", var1}'
ps -ef | awk '{print NF}'  #NF = number of fields(columnas)
ps -ef | awk '{print NR}'  #NR = record number 

```
### patterns
```bash
ps -ef | awk ' /tty/ {print}'
ps -ef | awk ' !/root/ {print}'
ps -ef | awk ' /root|user/ {print}'
ps -ef | awk ' /walter/ {c++} END{print "total ", c}'
ps -ef | awk 'length($0) < 100 {print}'
```
### funciones
```bash
ps -ef | awk '{print length($0)}'
ps -ef | awk '{sub(/walter/,"waltermas"); print}'
awk 'BEGIN{ x=3; if(x*2 == 10) printf "%d matched", x; else printf "no match"}'
awk 'BEGIN{a=3; b=6; (a<3)? c="menor": c="mayor"; print c }'
awk 'function cuadrado(x) {return x*x} BEGIN{ print cuadrado(4)}'
awk 'BEGIN{a="hello "; b="world"; print a b}' #concatenation
awk 'BEGIN{print rand()}'
```
