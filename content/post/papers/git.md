---
date: 2024-11-22
layout: default
title: git
categories: ["papers"]
---
## comandos basicos
git init  
git status  
git add -u , git add ., git add -A  
git commit -m "mensaje"  
git push  
git log --oneline  
git remote show origin #info del remote  
git diff --word-diff=color 

## ramas
git branch mirama #crea mirama
git checkout mirama  #switch to mirama  
git push -u origin mirama  
git merge mirama #desde master  
git push origin --delete mirama #borra rama en gitlab  
git push -d <remote_name> <branchname>   # Delete remote  
git branch -d <branchname>               # Delete local  

git branch --list #local  
git branch -r #remotes  
git branch -a #all  

## restore  
git restore file # deshace los cambios al ultimo commit  
git reset --hard nrocommit  
git push --force  

reset-revert: [muy capo el tipo](https://www.youtube.com/watch?v=mSrxBJaJwGA)  

git checkout 1c57771 -- perri.txt #restaura un archivo a un commit especifico

## stash
git stash  # guarda el trabajo y limpia  
git stash list  
git stash apply <nombre>  
git stash drop <nombre>  

## tag
git tag v1.0.0  
git tag --list  
git tag -d v1.0.0 # borra  
