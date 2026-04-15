---
date: 2024-11-27
layout: default
title: pro user
categories: ["papers"]
---
## emacs - vim
### regYsters
[registers](https://www.youtube.com/watch?v=D2kuVoURGmg)  
:registers o :reg  
para manipular un registro:  
        normal mode: " letra  
        insert mode: control-r letra  
por ejemplo:  
"a yiw, copia la palabra en el registro a  
"a p, pega el registro a  
spc y, lista de registros  
(EM) spc Y, lista de kill ring ( todo lo copiado )  
letras mayusculas append lo que copia  
"0 guarda el texto copiado
(V) "1 a "9 guarda el texto borrado  
"% file name  
"+ maneja el clipboard del sistema  
### marKs
:marks  
(EM) consult-mark, consult-global-mark  
m letra, para establecer mark  
' letra, para ir al mark, M keymap agregado por mi
spc k, lista de marks  
letra mayuscula para un mark global  
### Jumplist
spc J , jumplist  
m '                     agregar a jumplist  
C-o C-i                 navegar jumplist  
(V) :telescope jumplist  
(EM) :evil-collection-consult-jump-list  
### edicion
:e! reload file perdiendo los cambios  
spc j, hop to char  
snipe f-F t-T s-S(2 chars), ; busca la siguiente , busca la anterior  
spc s, seach text  
spc u, undo (V aceptar con control-enter) (EM moverse con flechas)  
J,K en visual mode drag text up or down  
S y tecla, en visual mode surround  
asterisco, resalta la palabra bajo el cursor, buscar con n-N  
% jump to matching (  
gx open link at point  
spc . archivos en el directorio  
### visual block
C-V entra visual block  
J,K selecciona  
I o A para insertar  
ESC aplica a todas las lineas 
g control-g, para contar letras y palabras  
### filter commands
% es todo el texto  
:! ,shell command, ej: :!date, :!echo % , print filename, :!cp % %.backup, output en info  
:r insert output, ej: :r !date, output en texto (:read)  
ej: :r! for i in $(seq 0 99); do echo "${i}"; done  
:w todo el buffer como entrada del comando, ej: :w !wc -l, output en info  
:.! input linea, output text, ej: :.!wc -w, reemplaza la linea por la cantidad de palabras  
:normal como comando  
### translate
seleccionar una palabra  
tes, english-spanish  
tse, spanish-english  
tsb, spanish-brasilero  
tbs, brasilero-spanish  
### keyboard tricks
I qq mover a la derecha  
I qc corchete  
I qy llave  
NV qh mover al principio  
NV ql mover al final  

### fd
default: recursive  
-H hidden  
fd example ~ ,busca example en home  
fd -e png, extension png  

### rg
default: recursive, hidden  
-i, ignore case  
### br
espacio o : para el verbo  
alt-right, alt-left cambiar de panel  
:e editar con wvim  
:em editar con emacs  
alt h, toggle hidden  
p parent  
home  
j jump to directory  
c/example busca dentro del contenido  
e/example nombre exacto  
br -s, incluye sizes  
cd o alt-enter, cd directory  
verbos: cp, mv, chmod, preview, panel, stage, copy_path, sort, toggle sizes  
### zsh
control-o autosuggestions  
control-e edit in wvim  
,,tab search files in directory  
### fzf
control-R, busca en el historial de comandos  
,,tab para buscar archivo ya usado (fasd)  
**tab busca recursivamente, ej kill -9 **tab  
control-T busca archivo (recursive)  
alt-c cd into directory (recursive)  
### kitty
control n, new tab  
control h l, moverse en tabs  
alt n, new window  
alt v, new vertical window  
alt hjkl, moverse en windows  
F1 dump in neovim buffer  
kitten panel --margin-top=30 bash -c 'watch -n 2 -t /home/waltermas/scripts/bash/net-monitor.sh'  

