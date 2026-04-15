---
date: 2024-11-25
layout: default
title: zsh
categories: ["papers"]
---
[manual](https://zsh.sourceforge.io/Guide/zshguide04.html)  
[zle tutorial](https://www.youtube.com/watch?v=R8-y9l0Fgyg) 
zle -la #lista de comandos(list all)  
bindkey #lista de atajos  
bindkey  "^[[H"   beginning-of-line  
bindkey  "^[[F"   end-of-line  
bindkey  "^[[3~"  delete-char  

change default shell: chsh -s $(which zsh)  
funciona en docker: (como sudo) chsh -s /bin/zsh waltermas  

para saber el codigo de las teclas:  
cat y enter para ver los keys  
ctrl-v y despues la tecla  
