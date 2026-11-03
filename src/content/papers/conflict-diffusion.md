---
title: "Modeling Spatiotemporal Armed Conflict Dynamics via Physics-Informed Diffusion"
coauthors:
  - { name: "Hao Sha" }
  - { name: "Pengfei Tian" }
  - { name: "Yue He" }
  - { name: "Chong Chen", url: "https://cc458.github.io/" }
  - { name: "Fan Yang" }
  - { name: "Peng Cui" }
type: working
order: 2
year: 2025
topics: [conflict, methods, ai]
tags: ["Poster · PolMeth 2024"]
summary: "A physics-informed deep-learning model of how violence spreads across space, with a 56% accuracy gain on the ViEWS forecasting benchmark."
featured: true
links:
  - { label: "PDF", href: "/files/Paper_PhysicsInformed.pdf" }
  - { label: "Poster", href: "/files/PolMeth24_PhysicsInformed.pdf" }
  - { label: "Slides", href: "/files/Slides_PhysicsInformed.pdf" }
---

Accurate early warning of armed violence requires models that capture how conflict spreads, not just where it has happened. We propose a physics-informed diffusion partial differential equation (diffusion-PDE) framework that models the evolution of latent conflict drivers across a learned, spatially heterogeneous potential field. Crucially, our framework accounts not only for smooth diffusion but also for complex dynamics like collective relocation and endogenous conflict generation.

We implement this framework in ConflictNet, an end-to-end, three-stage solver composed of a spatiotemporal encoder, a diffusion-PDE solving block, and a predictive decoder. Evaluated on the ViEWS gold-standard benchmark, ConflictNet yields a 56% relative accuracy gain over strong baselines and reveals interpretable diffusion patterns that align with social science theory. By linking a sophisticated process model with data-driven inference, our work bridges the gap between machine learning and social science theory, offering a new path to build more mechanistic and accurate forecasting systems.
