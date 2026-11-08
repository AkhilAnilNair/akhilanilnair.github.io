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
    title: "Translation as a Service (TaaS) using Transformer Architecture",
    period: "August 2022 – March 2023",
    description: "Neural machine translation system for English-Hindi, trained on constrained compute to study translation quality trade-offs.",
    problem:  "Exploring how translation quality degrades under constrained compute, particularly for long and complex sentences.",
    approach: "Led a team of five under the Head of Department; trained a Transformer-based neural translation model on an NVIDIA P100 GPU. Preprocessed English-Hindi corpora (Samanantar, IIT Bombay) through outlier filtering, text normalization, and tokenization.",
    impact:   "Achieved an average sentence-level BLEU-2 score of 0.26; analyzed and documented quality degradation patterns on long, complex sentences.",
    stack: ["Python", "PyTorch", "Transformers", "NVIDIA P100"],
    github: "",
    live: "",
  },
  // [TODO: Add more projects here]
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

export const certifications = [
  {
    title: "Introduction to Java and Object-Oriented Programming",
    issuer: "Coursera",
    issuedBy: "University of Pennsylvania",
    issueDate: "2024",
    credentialId: "XXXXXXXXXXXXXXXX",        // [TODO: Replace with your actual Credential ID]
    credentialUrl: "",                       // [TODO: Add Coursera certificate verification link]
    skills: ["Java", "OOP", "Data Structures"],
  },
  {
    title: "Spring Framework and Spring Boot",
    issuer: "Coursera",
    issuedBy: "LearnQuest",
    issueDate: "2024",
    credentialId: "XXXXXXXXXXXXXXXX",        // [TODO: Replace with your actual Credential ID]
    credentialUrl: "",                       // [TODO: Add Coursera certificate verification link]
    skills: ["Spring Boot", "REST APIs", "Java"],
  },
  {
    title: "Learning Docker",
    issuer: "LinkedIn Learning",
    issuedBy: "LinkedIn Learning",
    issueDate: "2023",
    credentialId: "XXXXXXXXXXXXXXXX",        // [TODO: Replace with your actual Credential ID]
    credentialUrl: "",                       // [TODO: Add LinkedIn Learning certificate link]
    skills: ["Docker", "Containerization", "DevOps"],
  },
  {
    title: "Apache Kafka Essential Training",
    issuer: "LinkedIn Learning",
    issuedBy: "LinkedIn Learning",
    issueDate: "2024",
    credentialId: "XXXXXXXXXXXXXXXX",        // [TODO: Replace with your actual Credential ID]
    credentialUrl: "",                       // [TODO: Add LinkedIn Learning certificate link]
    skills: ["Apache Kafka", "Event-Driven Architecture", "Distributed Systems"],
  },
];

export const achievements = [
  {
    title: "Emerging Leader Award",
    organization: "Jio Platforms Limited",
    location: "Mumbai",
    year: "2025",
    description: "Recognised for exceptional technical contributions, ownership, and leadership within the SIEM platform team.",
    highlight: true,
  },
  {
    title: "Departmental Rank Holder",
    organization: "NBN Sinhgad School of Engineering",
    location: "Pune",
    year: "2023",
    description: "Graduated with top academic distinction in the Information Technology department.",
    highlight: false,
  },
  {
    title: "Student of the Year",
    organization: "NBN Sinhgad School of Engineering",
    location: "Pune",
    year: "2023",
    description: "Awarded for outstanding all-round performance across academics, leadership, and extracurricular activities.",
    highlight: false,
  },
];

export const leadership = [
  {
    role: "Event Anchor",
    organization: "NBN Sinhgad School of Engineering",
    period: "2022 – 2023",
    description: "Led a department-wide career guidance session as anchor; oversaw and guided junior students in managing related programs, fostering collaborative engagement between faculty and students.",
  },
  {
    role: "Chief Editor, Departmental Newsletter",
    organization: "NBN Sinhgad School of Engineering",
    period: "2021 – 2022",
    description: "Led the editorial board in curating, reviewing, and publishing technical articles across multiple editions of the departmental newsletter.",
  },
  {
    role: "Class Representative",
    organization: "NBN Sinhgad School of Engineering",
    period: "2020 – 2023",
    description: "Served as the primary liaison between faculty and 60+ students, coordinating academic schedules, communicating institutional updates, and advocating for student concerns.",
  },
];

export const community = [
  {
    organization: "Bond Socially (NGO)",
    location: "Pune",
    period: "2020 – 2023",
    role: "Volunteer",
    bullets: [
      "Cooked and packed meals across 8 food distribution drives, each serving 100–150 people from underserved communities.",
      "Participated in 5 tree plantation and maintenance drives across two hillside locations.",
      "Collaborated with 12 volunteers on an environmental cleanliness drive at Torna Fort.",
    ],
  },
  {
    organization: "Voluntary Blood Donor",
    location: "Pune & Mumbai",
    period: "2019 – Present",
    role: "Donor",
    bullets: [
      "Participated in 10+ voluntary blood donation campaigns across Pune and Mumbai.",
    ],
  },
];

export const nav = [
  { label: "About",          href: "#about" },
  { label: "Experience",     href: "#experience" },
  { label: "Projects",       href: "#projects" },
  { label: "Skills",         href: "#skills" },
  { label: "Education",      href: "#education" },
  { label: "Certifications", href: "#certifications" },
  { label: "Involvement",    href: "#involvement" },
  { label: "Contact",        href: "#contact" },
];
