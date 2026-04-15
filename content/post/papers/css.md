---
date: 2024-11-30
layout: default
title: css
categories: ["papers"]
---
[w3school](https://www.w3schools.com/css/default.asp)   
### las tres maneras
#### file  
```css
<head>  
<link rel="stylesheet" href="mystyle.css">  
</head>  
```
#### en el head  
```css
<head>  
<style>  
body {  
  background-color: linen;  
}  
  
h1 {  
  color: maroon;  
  margin-left: 40px;  
}  
</style>  
</head>  
```
  
#### inline  
```css
<p style="color:red;">This is a paragraph.</p>  
```

```css
/*  id="para1" */
#para1 {
text-align: center;
color: red;
}

/* class="center" */
.center {
text-align: center;
color: red;
}
/* <p class="center"></p> */
p.center {
text-align: center;
color: red;
}

/* <p class="center large">para los selectores center y los de large</p> */

h1, h2, p {
  text-align: center;
  color: red;
}

```

