---
date: 2024-11-30
layout: default
title: javascript
categories: ["papers"]
---
[w3school](https://www.w3schools.com/js/default.asp)   
```html
<!DOCTYPE html>
<html>

<body>

  <h1>My First Web Page</h1>
  <p>My First Paragraph</p>

  <p id="demo"></p>

  <!-- con innerHTML -->
  <script>
    document.getElementById("demo").innerHTML = 5 + 6;
  </script>

  <!-- con document.write -->
  <script>
    document.write(5 + 6);
  </script>

  <!-- con window alert -->
  <script>
    window.alert(5 + 6);
  </script>

  <!-- con console.log F12 para debbuging -->
  <script>
    console.log(5 + 6);
  </script>

</body>

</html>


<!-- variables -->
// no se permite guiones
// How to create variables:
var x;
let y;

// How to use variables:
x = 5;
y = 6;
let z = x + y;

<!-- objetos -->
const person = {
firstName: "John",
lastName: "Doe",
age: 50,
eyeColor: "blue"
};

person.lastName;
person["lastName"];

<!-- strings -->
let text = `Welcome ${firstName}, ${lastName}!`;

<!-- arrays -->
const cars = ["Saab", "Volvo", "BMW"];

<!-- array.forEach -->
<script>
  const numbers = [45, 4, 9, 16, 25];

  let txt = "";
  numbers.forEach(myFunction);
  document.getElementById("demo").innerHTML = txt;

  function myFunction(value, index, array) {
    txt += value + "<br>";
  }
</script>

<!-- array.map crea un nuevo array -->
const numbers1 = [45, 4, 9, 16, 25];
const numbers2 = numbers1.map(myFunction);

function myFunction(value, index, array) {
return value * 2;
}

```
# map
``` javascript
["a", "b", "c"].map(x => x.toUpperCase())
// resultado: ["A", "B", "C"]
```
# funciones flecha
``` javascript
const sumar = (a, b) => a + b;
es igual a:
function sumar(a, b) {
  return a + b;
}

