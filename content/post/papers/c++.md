---
date: 2025-05-29
layout: default
title: c++
categories: ["papers"]
---
[tutorial](https://www.youtube.com/watch?v=8jLOx1hD3_o) 
## build
```c++
CMakeLists.txt
mkdir build
cd build
cmake ..
cmake --build .

archivo.pro
qmake
make        # En Linux/macOS
nmake       # En Windows con Visual Studio
mingw32-make # En Windows con MinGW

```
[cppreference](https://cppreference.com/) 
```c
int main(int argc, char* argv[]){
// comment
/* multi
line
comment */ 
    int numero1 = 10;
    int numero2 {20}
}


```
## libraries
include <iostream>  
include <ios>  
include <iomanip>  
include <cmath>  
include <cctype>  
include <cstring>  
include <string>  

std::cout << "hello world" << std::endl;  

## booleans
true (1)  
false (0)  
bool red_light {true};  

## switch
solo para integer y enum?  
switch(variable) {  
    case algo : { }  
    break;
    case algo :{ }  
    break;
    default : { }
    break;
}  

## ternary operator
result = (condition)? option1 : option2;  

## loops
### for
for (size_t i{0}; i<10;++i) {  
....  
}  
### while
cont unsigned int COUNT {10};  
unsigned int i {0};  
while (i < COUNT) {  
codigo....  
++i;  
}  

do {  
i++;  
} while (i < COUNT);  

## arrays
int scores[] {1, 222, 33, 44};  
for (int element : scores) {  
std::cout << element std::endl;  
}  
std::size(scores)  
### c strings
char message [] {"Hello"};  
\0 null character  
std::cout << message << std::endl;  

## pointers
int* null_pointer {};  
int* null_pointer {nullptr};  

int int_var {43};  
int* p_int {&int_var};  
std::cout << p_int << std::endl;  imprime address  
std::cout << *p_int << std::endl;  imprime 43  (dereference)  
### string literal
const char* p_message {"hello world"};  pointer a la h  
std::cout << *p_message << std::endl;  imprime hello world  
### new (dynamic heap memory)
int* p_number4{nullptr};  
int* p_number5 {new int {88}};  
p_number4 = new int;  
*p_number4 = 44;  
delete p_number4;  
p_number4 = nullptr;  
### references
int int_value {35};  
int& refe {int_value}; alias de int_value  
## lambda funcions
```c++
[](){};
[capture list] (parameters) -> return type {body};

auto func = [](){
std::cout << "hello world" << std::endl;
};
func();
}

[=] capture all by value
[&] capture all by reference

```
## function templates
```c++
template <typename T> T maximun(T a, T b);

template <typename T> T maximun(T a, T b){
    return (a>b)? a : b;
}

auto max = maximum<double>(a,b); //exclicit arguments

template <typename T> const T& maximun(const T& a, const T& b); //por referencia
```
## classes
```c++
Cylinder* p_cylinder1 = &cylinder1;
Cylinder* p_cylinder2 = new Cylinder(100,2); // heap memory
...
delete p_cylinder2;


(*p_cylinder1).volume() //equivalentes
p_cylinder1->volume() //equivalentes


```
