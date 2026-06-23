export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
];

export const HERO_ROLES = [
  "Senior Full-Stack Engineer",
  "Frontend Architecture Lead",
  "React / Next.js Specialist",
  "Design Systems Engineer",
  "TypeScript Advocate",
];

export const HERO_STATS = [
  { num: "5+", label: "Years exp." },
  { num: "500+", label: "Users served" },
  { num: "3000+", label: "Extension downloads" },
];

export const SKILLS = [
  {
    category: "Frontend",
    accent: "var(--accent2)",
    items: [
      { label: "React", primary: true },
      { label: "Next.js", primary: true },
      { label: "TypeScript", primary: true },
      { label: "Tailwind CSS", primary: false },
      { label: "Framer Motion", primary: false },
      { label: "Redux", primary: false },
      { label: "Zustand", primary: false },
      { label: "React Query", primary: false },
      { label: "Jest", primary: false },
      { label: "React Testing Library", primary: false },
    ],
  },
  {
    category: "Backend",
    accent: "var(--accent2)",
    items: [
      { label: "Node.js", primary: true },
      { label: "Nest.js", primary: false },
      { label: "GraphQL", primary: false },
      { label: "PostgreSQL", primary: false },
      { label: "MongoDB", primary: false },
      { label: "Redis", primary: false },
      { label: "REST APIs", primary: false },
    ],
  },
  {
    category: "Infrastructure",
    accent: "var(--accent2)",
    items: [
      { label: "AWS", primary: false },
      { label: "Vercel", primary: false },
      { label: "Docker", primary: false },
      { label: "GitHub Actions", primary: false },
      { label: "Terraform", primary: false },
    ],
  },
  {
    category: "Soft Skills",
    accent: "var(--accent2)",
    items: [
      { label: "Ownership", primary: true },
      { label: "Technical Leadership", primary: false },
      { label: "Mentorship", primary: false },
      { label: "Cross-functional Collaboration", primary: false },
    ],
  },
];

export const EXPERIENCE = [
  {
    period: "2026 — Present",
    company: "Unthinkable Solutions",
    type: "Full-time",
    title: "Senior Associate Software Engineer",
    desc: "Senior Full Stack Engineer and Tech Lead responsible for architecting scalable web applications, driving engineering best practices, mentoring developers, and delivering high-impact solutions for global clients.",
    achievements: [
      "Led end-to-end development of multiple client projects, translating business requirements into scalable and maintainable technical solutions",
      "Designed and built reusable <strong>component libraries and shared modules</strong>, accelerating development velocity across engineering teams",
      "Championed <strong>SOLID principles, clean architecture, and design patterns</strong> to improve code quality, maintainability, and scalability",
      "Provided technical leadership through code reviews, architectural guidance, and engineering best practices",
      "Mentored junior developers and conducted training programs for fresh graduates, helping accelerate onboarding and productivity",
      "Conducted technical interviews for both freshers and experienced candidates, contributing to engineering team growth",
      "Collaborated closely with designers, product stakeholders, and developers to ensure transparent communication and successful project delivery",
      "Led rapid prototyping and MVP development initiatives, enabling clients to validate ideas and reduce time-to-market",
    ],
    tech: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "PostgreSQL",
      "AWS",
    ],
  },

  {
    period: "2023 — 2026",
    company: "Unthinkable Solutions",
    type: "Full-time",
    title: "Associate Software Engineer",
    desc: "Full Stack Developer and Team Lead responsible for building production-grade applications while driving code quality, reusability, and team collaboration.",
    achievements: [
      "Delivered scalable frontend and backend solutions for client-facing products across multiple domains",
      "Built reusable UI components and shared development patterns that improved consistency across projects",
      "Introduced and advocated engineering standards focused on maintainability, scalability, and clean code practices",
      "Mentored junior team members through pair programming, technical guidance, and code reviews",
      "Participated in technical hiring processes, evaluating candidates across frontend and full-stack roles",
      "Worked closely with design and backend teams to ensure seamless implementation of complex product requirements",
      "Identified and implemented appropriate architectural and design patterns based on project requirements",
    ],
    tech: [
      "React",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
    ],
  },

  {
    period: "2022 — 2023",
    company: "Unthinkable Solutions",
    type: "Full-time",
    title: "Junior Associate Software Engineer",
    desc: "Frontend Engineer focused on building performant and reusable user interfaces while collaborating closely with cross-functional teams.",
    achievements: [
      "Developed responsive and scalable frontend applications with a strong focus on code quality and user experience",
      "Built reusable UI components that reduced duplication and improved development efficiency",
      "Collaborated proactively with designers and backend developers to deliver seamless product experiences",
      "Contributed to application architecture discussions and frontend best practices",
      "Ensured maintainable code through testing, documentation, and adherence to coding standards",
    ],
    tech: ["React", "JavaScript", "TypeScript", "HTML", "CSS", "Redux"],
  },

  {
    period: "2021 — 2022",
    company: "Unthinkable Solutions",
    type: "Internship",
    title: "Software Engineering Intern",
    desc: "Started my software engineering journey by building frontend features, learning modern development practices, and contributing to production applications.",
    achievements: [
      "Developed reusable frontend components and user-facing features under the guidance of senior engineers",
      "Maintained high code quality standards through peer reviews and continuous feedback",
      "Collaborated with design and backend teams to implement product requirements effectively",
      "Gained hands-on experience with modern frontend frameworks, version control, and agile development practices",
    ],
    tech: ["React", "JavaScript", "HTML", "CSS", "Git"],
  },
];

export const PROJECTS = [
  {
    featured: true,
    badge: { label: "★ Featured", variant: "featured" as const },
    title: "Novadontics",
    desc: "Healthcare appointment and tele-dentistry platform serving patients and providers across multiple locations. Led the architecture and development of the platform end-to-end, spanning scalable backend services, serverless workflows, real-time video consultations, payment processing, and provider management.\n\nBuilt a highly available cloud-native infrastructure on AWS with event-driven processing, automated appointment orchestration, internationalization support, and geolocation-powered provider discovery.",
    tech: [
      "React",
      "Node.js",
      "NestJS",
      "PostgreSQL",
      "AWS ECS",
      "AWS Lambda",
      "Step Functions",
      "SQS",
      "SNS",
      "S3",
      "API Gateway",
      "Twilio Video",
      "Tailwind",
      "Material UI",
    ],
    links: [
      {
        label: "Live Product",
        href: "https://www.carepulse.app/",
        icon: "external" as const,
      },
    ],
    visual: "metrics" as const,
    metrics: [
      { val: "500+", label: "Concurrent users" },
      { val: "100+", label: "Providers onboarded", accent: "var(--accent2)" },
      { val: "22%", label: "Reduced no-shows", accent: "var(--accent3)" },
      { val: "0", label: "Downtime incidents" },
    ],
  },

  {
    featured: false,
    badge: { label: "● Production", variant: "live" as const },
    title: "Segment Inspector - Twilio",
    desc: "Chrome extension built for Twilio Segment that simplifies analytics debugging and event validation. Architected and shipped the product from zero to production as Technical Lead.\n\nImplemented real-time event inspection, user-trait exploration, and automated instrumentation detection, eliminating the need for manual network-tab debugging and significantly reducing integration turnaround time for engineering teams.",
    tech: [
      "React",
      "Node.js",
      "GraphQL",
      "PostgreSQL",
      "Chrome Extensions",
      "Docker",
    ],
    links: [
      {
        label: "Chrome Store",
        href: "https://chromewebstore.google.com/detail/segment-inspector-officia/jfcbmnpfbhhlhfclmiijpldieboendfo?hl=en",
        icon: "external" as const,
      },
    ],
    visual: "metrics" as const,
    metrics: [
      { val: "3,000+", label: "Downloads" },
      { val: "3.5★", label: "Store rating", accent: "var(--accent2)" },
      { val: "Real-time", label: "Event inspection", accent: "var(--accent3)" },
    ],
  },

  {
    featured: false,
    badge: { label: "▲ Scalable Architecture", variant: "oss" as const },
    title: "Sparkl LMS",
    desc: "Learning Management System built using a modern React. Established the project's frontend architecture from scratch and defined scalable engineering patterns adopted across the team.\n\nDeveloped a reusable component library, optimized application performance, and delivered advanced features such as webcam-based assignment submissions with in-browser image editing.",
    tech: ["React", "Next.js", "Tailwind CSS", "Vite", "AWS S3"],
    links: [
      { label: "Project Overview", href: "#", icon: "external" as const },
    ],
    visual: "metrics" as const,
    metrics: [
      { val: "30+", label: "Shared components" },
      { val: "40%", label: "Faster page loads", accent: "var(--accent2)" },
      { val: "100%", label: "Feature ownership", accent: "var(--accent3)" },
      { val: "MVP", label: "Architecture from scratch" },
    ],
  },
];

export const CONTRIBUTIONS = [
  {
    repo: "vercel / next.js",
    stars: "118k",
    desc: "Contributed App Router middleware improvements and fixed a critical memory leak in the dev server hot-reload path. 6 merged PRs.",
    lang: "TypeScript",
    color: "#3178c6",
  },
  {
    repo: "radix-ui / primitives",
    stars: "14k",
    desc: "Added composable Tooltip delay groups and fixed focus-visible regression in Dialog on Safari 16. Core maintainer for 8 months.",
    lang: "TypeScript",
    color: "#3178c6",
  },
  {
    repo: "trpc / trpc",
    stars: "32k",
    desc: "Implemented streaming mutations and contributed to the v11 output transformation API. Wrote the React Query v5 integration guide.",
    lang: "TypeScript",
    color: "#3178c6",
  },
  {
    repo: "microsoft / TypeScript",
    stars: "97k",
    desc: "Fixed generic inference regression with conditional types in mapped object types. One of the more satisfying debugging sessions of my life.",
    lang: "TypeScript",
    color: "#3178c6",
  },
  {
    repo: "pmndrs / zustand",
    stars: "43k",
    desc: "Improved TypeScript inference for the `create` factory with strict generics. Also added the `subscribeWithSelector` middleware docs.",
    lang: "TypeScript",
    color: "#3178c6",
  },
  {
    repo: "tanstack / query",
    stars: "40k",
    desc: "Contributed `placeholderData` carry-over behavior, enabling smoother transitions between paginated queries. Merged in v5.12.",
    lang: "TypeScript",
    color: "#3178c6",
  },
];

export const CONTACT_LINKS = [
  {
    icon: "✉️",
    label: "Email",
    value: "laksh25ay@gmail.com",
    href: "mailto:laksh25ay@gmail.com",
  },
  {
    icon: "💼",
    label: "LinkedIn",
    value: "/in/lakshay-gupta",
    href: "https://www.linkedin.com/in/lakshay-gupta-678ab3202/",
  },
  {
    icon: "⌨️",
    label: "GitHub",
    value: "@laksh25",
    href: "https://github.com/laksh25",
  },
];

export const FOOTER_LINKS = [
  { id: 1, label: "GitHub", href: "https://github.com/laksh25" },
  {
    id: 2,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/lakshay-gupta-678ab3202/",
  },
];
