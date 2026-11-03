// Everything on the site that is not a paper lives here.
// Edit this file to update the bio, news, teaching, or contact links.

export const site = {
  name: "Jingtian Hu",
  nameZh: "胡竞天",
  role: "Ph.D. Student, Department of Political Science, Columbia University",
  description:
    "Jingtian Hu is a Ph.D. student in Political Science at Columbia University, studying the political economy of critical minerals, global supply chains, and armed conflict.",
  email: "jh5296@columbia.edu",
  cv: "/cv/Jingtian_Hu_CV.pdf",
  cvUpdated: "November 2026",
  photo: "/images/portrait.jpg",
  lastUpdated: "November 2026",
};

export const links = [
  { label: "Email", href: `mailto:${site.email}`, icon: "mail" },
  { label: "CV", href: site.cv, icon: "file" },
  { label: "GitHub", href: "https://github.com/Jingtian-Hu", icon: "github" },
] as const;

// Newest first. `date` is shown as written.
export const news = [
  { date: "Sep 2026", text: "Began the Ph.D. program in Political Science at Columbia University." },
  { date: "2026", text: 'Paper on <a href="/research/critical-minerals/">critical-mineral value chains and local political order</a> accepted for ISA 2026.' },
  { date: "2025", text: 'Poster on <a href="/research/llm-foreign-policy/">LLM multi-agent experiments in foreign policy</a> at PolMeth 2025; forum talk at NLPCC 2025.' },
  { date: "2024", text: 'Poster on <a href="/research/conflict-diffusion/">physics-informed models of conflict diffusion</a> at PolMeth 2024.' },
];

export const teaching = [
  {
    course: "Introduction to Quantitative Methods in International Relations",
    role: "Teaching Assistant",
    place: "Tsinghua University",
    terms: "Fall 2021, Fall 2023",
  },
  {
    course: "Spatial Analysis for Social Sciences with R",
    role: "Teaching Assistant",
    place: "Tsinghua University",
    terms: "Fall 2022",
  },
  {
    course: "Large Language Models for Social Science Workshop Series",
    role: "Teaching Assistant",
    place: "Peking University",
    terms: "Spring 2025",
  },
];
