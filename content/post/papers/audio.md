---
date: 2024-11-28
layout: default
title: audio
categories: ["papers"]
---
pactl list short  
pactl set-default-sink 'alsa_output.pci-0000_01_00.1.hdmi-stereo-extra1'  
pactl set-default-sink 'alsa_output.pci-0000_00_1f.3.analog-stereo' && pactl set-sink-port 0 analog-output-lineout  
pactl set-default-sink 'alsa_output.pci-0000_00_1f.3.analog-stereo' && pactl set-sink-port 0 analog-output-headphones  

