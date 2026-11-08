// src/data/content.js
// -------------------
// Edit ONLY this file to update all site content.
// Placeholders marked [TODO] must be filled in before going live.

export const site = {
  title: "Akhil Anil Nair — Backend Software Engineer",
  description:
    "Backend Software Engineer specialising in Java, Spring Boot, and distributed microservices systems.",
  url: "https://akhilanilnair.dev", // [TODO: update to your actual domain]
  ogImage: "/og-image.png",         // [TODO: add an og-image to public/]
};

export const person = {
  name: "Akhil Anil Nair",
  role: "Backend Software Engineer",
  tagline:
    "I build secure, distributed backend systems — microservices, APIs, and event-driven pipelines that run at scale.",
  email: "hello@example.com",               // [TODO: replace with your email]
  linkedin: "https://linkedin.com/in/your-handle", // [TODO]
  github: "https://github.com/your-handle",         // [TODO]
  resumeUrl: "/resume.pdf",                 // drop resume.pdf in public/
};

export const about = [
  "Backend Software Engineer (SDE 1) at Jio Platforms Limited, working on the security/SIEM platform since December 2023.",
  "Day-to-day work involves designing and maintaining Java microservices, building internal APIs, and improving the reliability and observability of distributed systems.",
  "Published a research paper at IEEE ICCUBEA 2023 on neural machine translation using Transformer models.",
  // [TODO: add one more line if needed]
];

export const experience = [
  {
    company: "Jio Platforms Limited",
    location: "Mumbai, India",
    title: "Software Development Engineer 1 (SDE 1)",
    start: "Dec 2023",
    end: "Present",
    bullets: [
      "[TODO: Describe your primary responsibility — e.g., 'Designed and owned the X microservice, reducing Y latency by Z%.']",
      "[TODO: Second bullet — architecture decision, API design, data pipeline, reliability improvement, etc.]",
      "[TODO: Third bullet — optional; drop if you only have two strong ones.]",
    ],
    stack: ["Java", "Spring Boot", "Microservices", "SIEM"],
  },
];

export const projects = [
  {
    title: "[TODO: Project Name]",
    description: "[TODO: One-line description of what the project does.]",
    problem:  "[TODO: What problem does it solve?]",
    approach: "[TODO: Architecture or key technical decisions.]",
    impact:   "[TODO: Measurable outcome — latency, throughput, reliability, etc.]",
    stack: ["Java", "Spring Boot"],         // [TODO: actual stack]
    github: "",                             // [TODO: GitHub URL or leave empty]
    live: "",                               // [TODO: live URL or leave empty]
  },
  {
    title: "[TODO: Project Name]",
    description: "[TODO: One-line description.]",
    problem:  "[TODO: Problem statement.]",
    approach: "[TODO: Approach.]",
    impact:   "[TODO: Measurable outcome.]",
    stack: [],
    github: "",
    live: "",
  },
  {
    title: "[TODO: Project Name]",
    description: "[TODO: One-line description.]",
    problem:  "[TODO: Problem statement.]",
    approach: "[TODO: Approach.]",
    impact:   "[TODO: Measurable outcome.]",
    stack: [],
    github: "",
    live: "",
  },
];

export const skills = [
  {
    group: "Languages",
    items: ["Java", "SQL", "Bash"],
    // [TODO: add others you use, e.g. Python, Go]
  },
  {
    group: "Backend & Frameworks",
    items: ["Spring Boot", "Spring Security", "REST APIs", "Microservices"],
    // [TODO: add e.g. gRPC, Kafka Streams]
  },
  {
    group: "Databases & Messaging",
    items: ["[TODO]", "[TODO]"],
    // e.g. PostgreSQL, MySQL, Redis, Kafka, RabbitMQ
  },
  {
    group: "Cloud & DevOps",
    items: ["[TODO]", "[TODO]"],
    // e.g. AWS, Docker, Kubernetes, CI/CD
  },
  {
    group: "Tools",
    items: ["Git", "IntelliJ IDEA", "Postman", "[TODO]"],
  },
];

export const education = [
  {
    degree: "Bachelor of Engineering — Information Technology",
    institution: "Savitribai Phule Pune University",
    year: "2023",
  },
];

export const publications = [
  {
    title:
      "English-to-Hindi Neural Machine Translation Using Transformer Models",
    venue: "IEEE ICCUBEA 2023",
    year: "2023",
    url: "", // [TODO: add IEEE DOI/link if available]
  },
];

export const nav = [
  { label: "About",      href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects",   href: "#projects" },
  { label: "Skills",     href: "#skills" },
  { label: "Education",  href: "#education" },
  { label: "Contact",    href: "#contact" },
];
