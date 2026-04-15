---
date: 2025-01-05
layout: default
title: decoradores
categories: ["papers"]
---
```python

def registrar_en_archivo(ruta_archivo):
    def decorador(func):
        def envoltura(*args, **kargs):
            resultado = func(*args, **kargs)
            with open(ruta_archivo, "a") as archivo:
                archivo.write(f"llamada a {func.__name__} con argumentos {args} y {kargs}")
            return resultado
        return envoltura
    return decorador

@registrar_en_archivo("/tmp/registro.txt")
def multiplicar(a, b):
    return a*b

print(multiplicar(3,4))

```
