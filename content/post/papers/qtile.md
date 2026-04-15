---
date: 2025-03-09
layout: default
title: qtile
categories: ["papers"]
---
## keys  
mod r: spawn app  
mod ctrl r: reload config  
mod enter: terminal  
mod f: fullscreen  
mod t: floating  
mod tab: cycle layout  
mod hjkl: focus window    
mod ctrl hl: prev-next group    
mod n: normalize window  
mod w: kill window  
mod ctrl q: quit qtile  
mod o g: start chrome  

## xephyr
Xephyr -br -ac -noreset -xkb-layout es -fullscreen :1 &  
DISPLAY=:1 qtile start  
ctrl shift grabs keyboard and mouse  
