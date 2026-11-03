---
title: "Modeling Collective Foreign Policy Decisions: Randomized Controlled Experiments with AI Multi-Agent Architectures"
coauthors:
  - { name: "Yifei Zhu" }
  - { name: "Zhenhua Tu" }
  - { name: "Yinzhi Lin" }
  - { name: "Xun Pang" }
type: working
order: 3
year: 2025
topics: [ai]
status: "Poster presented at PolMeth 2025; talk at the NLPCC 2025 Workshop on LLMs and Social Science"
summary: "LLM agents reproduce the hawkish biases of human decision-makers, but unstably: persona drift makes them poor stand-ins for human subjects in experiments."
links:
  - { label: "Poster", href: "/files/PolMeth25_Agent.pdf" }
  - { label: "Slides", href: "/files/Slides_Agent.pdf" }
---

Foreign policy decision-making involves unstructured problems, ambiguous goals, and information that is scarce, unreliable, and time-sensitive: conditions under which human decision-makers often rely on cognitive shortcuts and, in turn, display well-documented "hawkish biases." This paper asks whether large language model (LLM)-based agents, when placed in similar decision environments, reproduce or mitigate these tendencies.

Replicating three experiments from Kertzer et al. (2022), we construct a multi-agent environment of 3,973 LLM-based agents, each designed to embody a specific bias underlying hawkish foreign policy preferences. Our results show that AI agents are as susceptible to bias as humans, and that multi-agent interaction does not attenuate these tendencies. Yet the character of machine bias differs qualitatively: it is inconsistent, unstable, and unpredictable, likely due to "persona drift," whereby LLM agents, unlike humans, lack stable internal dispositions, causing experimental interventions to interact with and distort their assigned personas. These results suggest that state-of-the-art LLMs are currently ill-suited to serve as synthetic participants in RCTs, as persona instability introduces substantial post-treatment confounding.
