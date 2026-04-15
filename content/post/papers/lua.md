---
date: 2024-12-05
layout: default
title: lua
categories: ["papers"]
---
[tutorial](https://www.youtube.com/watch?v=CuWfgiwI73Q)   
### Variables
```lua
local number = 5 
local stringa = "hello, world"
local single = 'also works'
local multi = [[ this
is multi line and literal ]]
local truth, lies = true, false
local nothing = nil
MyGlobalVar = "perri"
```
### functions
```lua
local function hello(name)
    print("hello", name)
    return "ok" -- pueden tener varios returns
end

local greet = function(name)
    print("Greetings, " .. name .. "!")
end

local M = {}

M.alpha = function(...) -- todos los parametros
    print("hola", ...)
end

M.alpha("hola", "youtube", 2)
```
### tables
```lua
--lists
local list = {"first", 2, false, function() print("Fourth") end }
print("yup, 1-indexed", list[1])

table.insert(list, "alpha")
table.insert(list, 2, "alpha")
table.remove(list, 3)


--maps
local t = {
    literal_key = "a string",
    ["an expression"] = "also works",
}
print("literal key :", t.literal_key)
```
### for
```lua
local favoritos = { "teej", "the primagen", "terminaldoshop"}
for index = 1, #favoritos do
    print(index, favoritos[index])
end

for index, value in ipairs(favoritos) do
    print(index, value)
end

local scores = { teej = 9.5, theprimagen = "dd"}
for key, value in pairs(scores) do
    print(key, value)
end
```
### if
```lua
if condicion then
    print("true")
else
    print("false")
end
-- toma como false: nil, false. Todo lo demas es true
and -- and
or -- or
~= -- es diferente
```
### modules
```lua
-- foo.lua
local M = {}
M.cool_function = function() end
return M

-- bar.lua
local foo = require('foo')
foo.cool_function()
```

### lua para vim
[tutorial](https://www.youtube.com/watch?v=UuTQVKZ6PXM) 
:source %  
:messages  
```lua
vim.notify("hola perri")
print(vim.inspect(variable)) -- para ver el contenido de una tabla

vim.tbl_... -- funciones para tablas
os -- para funciones del sistema (bloqueante)
vim.system -- para funciones del sistema (no bloqueante)
vim.system(vim.split("ls -la", " "), {}, function(out)
    print("output:", out.stdout)
end)

```
#### strings
```lua
local name = "alpha"
name::gsub("al", "xx") es igual a string.gsub(name, "al", "xx")
local res = string.format("hola %s", name)
print ("hola " .. name)

```
#### user commands
[tutorial](https://www.youtube.com/watch?v=Px3C4i7YHxo&list=WL&index=1&ab_channel=AlphaDeveloper) 
```lua
vim.api.nvim_create_user_command('Prueba',  function()
  vim.notify('Creating prueba.txt with a greeting', vim.log.levels.INFO, { title = 'Prueba Command' })
  end,
  { desc = 'Notify test' }
)
:Prueba

-- con argumentos
vim.api.nvim_create_user_command('Argumento',  function(args)
  vim.print(vim.inspect(args.fargs[1]))
  end,
  { desc = 'Notify test', nargs=1, 
    complete= function () return {"alpha", "beta"} end
  } 
)
-- autocommands
local group = vim.api.nvim_create_augroup("MyAutoCommands", { clear = true })
vim.api.nvim_create_autocmd("Colorscheme", {
  group = group,
  callback = function()
    vim.notify("Colorscheme changed to: " .. vim.g.colors_name)
  end,
})
```

