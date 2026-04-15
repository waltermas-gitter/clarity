---
date: 2024-12-09
layout: default
title: python
categories: ["papers"]
---

### argumentos
sys.argv[1]  

### sublista a partir de lista
resultados = [a['title'] for a in r['result']]  

### list to string
busqueda = ' '.join(lista)  

print(f"la variable es {variable}")  
## virtualenv
```python
python3 -m venv env
source env/bin/activate
pip install ....
which python
pip freeze > requirements.txt
pip list
deactivate
pip install -r requirements.txt
```

### list comprenhension
```python
fruits = ["apple", "banana", "cherry", "kiwi", "mango"]
newlist = [x for x in fruits if "a" in x]
print(newlist)

```
