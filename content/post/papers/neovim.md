---
date: 2025-06-23
layout: default
title: neovim
categories: ["papers"]
---
# tips
% va al compañero de llave, paréntesis, corchete, etc  
asterisco selecciona todas las palabras que coincidan con la palabra bajo el cursor  
control-v visual block mode  
control-O en insert mode permite ejecutar un comando en normal mode y luego volver al insert mode  
u undo  
control-r redo  
!! en normal mode ejecuta un comando de shell y reemplaza la línea actual con su salida  
g; va a la ultima modificacion  
ciq change inside quotes  
:.! comando de shell para la línea actual ej :.!date   
r !for i in {1..30}; do echo "$i-"; done  

# registers
spc y   
:register o :reg  
para manipular un registro:  
    normal mode: " letra  
    insert mode: control-r letra  
"% registro con el nombre del archivo  
"+ clipboard del sistema
"* clipboard del sistema (seleccion primaria en linux)  
": ultima orden
". ultimo texto escrito  
"/ último texto buscado  
"_ black hole register  
"0 último yank  
"1 último delete o change (para mas de una linea) (va cambiando hasta el 9)  
"- small delete, último delete o change (para menos de una linea)  
a-z registros nombrados, con mayuscula se agrega al registro en vez de reemplazarlo  
## macros
Q letra para grabar macro, luego ejecutar comandos, y Q para salir del modo de grabación.  
@letra para ejecutar macro.  

# folders
zc folder close  
zo folder open  

# oil
g? show help  
g. show hidden files  
gd show file details  
- parent  
C-c close  
C-p preview  

# ex commands
g: global command
  - `g/regex/command` - run command on all lines matching regex
  - `g!/regex/command` - run command on all lines not matching regex
  - `g/regex/d` - delete all lines matching regex
  - `g/regex/s/foo/bar/g` - substitute foo with bar in all lines matching regex
  - `g/lines/normal A perri` - agregar "perri" al final de todas las lineas que coincidan con el regex
v: visual command
  - `v/regex/command` - run command on all lines not matching regex
  - `v/regex/d` - delete all lines not matching regex
  - `v/regex/s/foo/bar/g` - substitute foo with bar in all lines not matching regex
## norm
:1,5norm A textofinal - run command on lines 1 to 5
o seleccionar primero las lineas y luego escribir `:norm A textofinal`
para insertar escape usar control-v escape    
% whole buffer

# quickfix  
:vimgrep /patron/ /archivos/  
:copen - open quickfix window  
:cclose - close quickfix window  
:cnext - go to next match in quickfix window  
:cprev - go to previous match in quickfix window  
:telescope quickfix - open quickfix window with telescope (control-q para pasar la lista de telescope a quickfix) 

# marks
m letra - poner marca  
m letra - mayuscula poner marca global  
' letra - ir a la marca  
spc k -lista de marcas  
M siguiente marca  

# jumplist
m ' - agregar a jumplist  
C-o C-i - navegar jumplist  
spc J - lista de jumplist  

# search and replace
:%s/patron/reemplazo/g - replace all occurrences in the file  
