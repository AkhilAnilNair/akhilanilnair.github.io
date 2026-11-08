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
  email: "akhil.a.nair760@gmail.com",
  linkedin: "https://www.linkedin.com/in/akhilanilnair/",
  github: "https://github.com/AkhilAnilNair",
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
    title: "Software Development Engineer",
    start: "Dec 2023",
    end: "Present",
    bullets: [
      "Designed and developed end-to-end features for enterprise security products (SIEM) serving government organizations and multinational enterprises, processing over 500 million security event logs daily.",
      "Built fault-tolerant data pipelines using Apache Kafka, Logstash, and Vector to decouple core ingestion services, sustaining peak throughput of 10,000 events per second at 99.9% availability.",
      "Stress-tested system limits, identified edge cases, and resolved production bottlenecks with cross-functional teams, reducing recurring incidents by 25% and average resolution time by 35%.",
      "Mentored newly onboarded associate engineers on system design, code quality standards, and feature implementation.",
      "Received the Emerging Leader Award (2025) and the highest appraisal rating (A*) in every appraisal cycle since joining, placing among the top 5% of performers.",
    ],
    stack: ["Java", "Spring Boot", "Apache Kafka", "Logstash", "Vector", "SIEM", "Distributed Systems"],
  },
  {
    company: "Mandet India",
    location: "Pune, India",
    title: "Software Developer",
    start: "Aug 2023",
    end: "Nov 2023",
    bullets: [
      "Led a group of 5 interns, overseeing sprint planning and task management in an Agile environment while contributing hands-on to feature development.",
      "Enhanced existing product functionality through iterative design and development, driving operational efficiency of the users.",
    ],
    stack: ["Agile", "Sprint Planning", "Feature Development", "Code Reviews"],
  },
  {
    company: "Mandet India",
    location: "Pune, India",
    title: "Frontend Developer Intern",
    start: "Mar 2021",
    end: "Mar 2022",
    bullets: [
      "Developed React components for Learning Management Platform.",
      "Planned and decomposed client requirements into Agile sprints, designing Figma wireframes and conducted peer code reviews to ensure on-schedule releases.",
    ],
    stack: ["React", "JavaScript", "Figma", "Agile", "UI/UX"],
  },
  {
    company: "Mass Technologies LLC",
    location: "Pune, India",
    title: "Machine Learning Intern",
    start: "Oct 2020",
    end: "Nov 2020",
    bullets: [
      "Conducted data preprocessing and exploratory analysis on multi-dimensional public datasets.",
      "Engineered predictive models using Scikit-Learn, utilizing grid and random search hyperparameter tuning to maximize model efficiency and accuracy.",
    ],
    stack: ["Python", "Scikit-Learn", "Machine Learning", "EDA"],
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
    group: "Programming Languages",
    items: ["Java", "Python", "C++", "JavaScript", "SQL", "Bash"],
  },
  {
    group: "Backend & Architecture",
    items: [
      "Spring Boot",
      "Spring Data JPA",
      "REST APIs",
      "Microservices",
      "Distributed Systems",
      "Event-Driven Architecture",
    ],
  },
  {
    group: "Databases",
    items: ["PostgreSQL", "MySQL", "Elasticsearch", "Redis", "MongoDB", "Quickwit"],
  },
  {
    group: "Messaging & Data Pipelines",
    items: ["Kafka", "RabbitMQ", "Logstash", "Vector"],
  },
  {
    group: "AI / ML & LLMs",
    items: [
      "TensorFlow",
      "Scikit-Learn",
      "Keras",
      "Model Context Protocol",
      "Prompt Engineering",
    ],
  },
  {
    group: "Cloud, DevOps & Tools",
    items: [
      "Git",
      "Docker",
      "Kubernetes",
      "AWS (EC2, S3, Lambda)",
      "Figma",
      "Postman",
    ],
  },
  {
    group: "Frontend",
    items: ["React.js", "Bootstrap"],
  },
  {
    group: "Testing & Operating Systems",
    items: ["JUnit", "SonarQube", "Test-Driven Development (TDD)", "Linux", "Windows"],
  },
];

export const education = [
  {
    degree: "Bachelor of Engineering — Information Technology",
    college: "NBN Sinhgad School of Engineering",
    institution: "Savitribai Phule Pune University",
    location: "Pune, India",
    year: "Aug 2019 – May 2023",
  },
];

export const publications = [
  {
    title: "TaaS: Translation as a Service (Transformer Based Translator)",
    authors: "A. A et al.",
    venue: "IEEE ICCUBEA 2023",
    conference: "2023 7th International Conference on Computing, Communication, Control and Automation (ICCUBEA)",
    location: "Pune, India",
    year: "2023",
    pages: "pp. 1-4",
    doi: "10.1109/ICCUBEA58933.2023.10392049",
    url: "https://doi.org/10.1109/ICCUBEA58933.2023.10392049",
    keywords: ["Transformers", "Neural Machine Translation", "TaaS", "Low-Resource Languages"],
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
