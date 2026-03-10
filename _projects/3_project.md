---
layout: page
title: Edge Intelligence & Neuromorphic Computing
description: In-memory computing with PCM and memristor crossbars for edge AI, threshold switch neuron circuits, and bio-inspired spiking architectures.
img: assets/img/12.jpg
importance: 3
category: research
related_publications: true
---

The proliferation of IoT devices and the growing demand for real-time inference at the network edge motivates hardware that performs computation where data is generated — without the latency and energy cost of cloud offloading. This research line investigates **memristive and phase-change memory (PCM) crossbar arrays** as substrates for in-memory computing, where matrix–vector multiplications central to neural network inference are performed directly within the memory array, eliminating costly data movement.

A key focus is the circuit-level design of **threshold switch neuron circuits** using volatile memristive devices (e.g., NbO₂, VO₂-based selectors), which naturally implement integrate-and-fire dynamics analogous to biological neurons. These are combined with synaptic memristive elements to realize spiking neural network (SNN) hardware blocks compatible with bio-inspired learning rules. Cellular automata-inspired architectures are also explored as alternative massively parallel computing substrates for pattern recognition and spatiotemporal processing tasks.

The overarching goal is to develop scalable, energy-efficient neuromorphic hardware solutions for edge AI — from compact sensor nodes to embedded inference accelerators — grounded in experimentally validated device models and co-design methodologies that account for non-ideal device behavior including noise, variability, and drift.
