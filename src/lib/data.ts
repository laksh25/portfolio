export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const HERO_ROLES = [
  "Senior Frontend Engineer",
  "Full-Stack Capable Engineer",
  "React / Next.js Architect",
  "Design Systems Engineer",
  "Performance & Accessibility Advocate",
];

export const HERO_STATS = [
  { num: "5+", label: "Years exp." },
  { num: "40%", label: "Faster page loads" },
  { num: "3,000+", label: "Extension downloads" },
];

export const SKILLS = [
  {
    category: "Frontend",
    accent: "var(--accent2)",
    items: [
      { label: "React.js", primary: true },
      { label: "Next.js (SSR/ISR/SSG, App Router)", primary: true },
      { label: "TypeScript", primary: true },
      { label: "JavaScript (ES6+)", primary: false },
      { label: "Redux / Context API", primary: false },
      { label: "Tailwind CSS", primary: false },
      { label: "Material UI", primary: false },
      { label: "HTML5 / CSS3", primary: false },
      { label: "Component Architecture", primary: false },
      { label: "Micro-Frontend Architecture", primary: false },
      {
        label: "Web Performance (Web Vitals: LCP, FID/INP, CLS)",
        primary: false,
      },
      { label: "Accessibility (WCAG 2.1 AA, ARIA)", primary: false },
      { label: "Jest", primary: false },
      { label: "React Testing Library", primary: false },
    ],
  },
  {
    category: "Design Systems & Tooling",
    accent: "var(--accent2)",
    items: [
      { label: "Storybook", primary: true },
      { label: "Atomic Design", primary: false },
      { label: "Figma (Design-to-Code Handoff)", primary: false },
      { label: "Webpack", primary: false },
      { label: "Vite", primary: false },
      { label: "Babel", primary: false },
      { label: "Module Federation", primary: false },
    ],
  },
  {
    category: "Backend",
    accent: "var(--accent2)",
    items: [
      { label: "Node.js", primary: true },
      { label: "Nest.js", primary: false },
      { label: "GraphQL", primary: false },
      { label: "REST APIs", primary: false },
    ],
  },
  {
    category: "Databases & Caching",
    accent: "var(--accent2)",
    items: [
      { label: "PostgreSQL", primary: false },
      { label: "MongoDB", primary: false },
      { label: "Redis", primary: false },
    ],
  },
  {
    category: "Cloud & DevOps",
    accent: "var(--accent2)",
    items: [
      { label: "AWS Lambda", primary: false },
      { label: "AWS ECS", primary: false },
      { label: "AWS EC2", primary: false },
      { label: "SQS / SNS", primary: false },
      { label: "S3", primary: false },
      { label: "API Gateway", primary: false },
      { label: "CloudWatch", primary: false },
      { label: "Docker", primary: false },
      { label: "Kubernetes", primary: false },
      { label: "GitHub Actions / CI/CD", primary: false },
      { label: "Terraform", primary: false },
      { label: "Git", primary: false },
    ],
  },
  {
    category: "AI & Modern Dev",
    accent: "var(--accent2)",
    items: [
      { label: "GitHub Copilot", primary: false },
      { label: "Claude Code", primary: false },
      { label: "Applied AI in Development", primary: false },
    ],
  },
  {
    category: "Soft Skills",
    accent: "var(--accent2)",
    items: [
      { label: "Technical Leadership", primary: true },
      { label: "Engineering Mentorship", primary: false },
      { label: "Cross-functional Collaboration", primary: false },
      { label: "Ownership", primary: false },
      { label: "Stakeholder Management", primary: false },
    ],
  },
];

export const EXPERIENCE = [
  {
    period: "2026 — Present",
    company: "Unthinkable Solutions LLP",
    type: "Full-time",
    title: "Senior Associate Software Engineer",
    desc: "Senior Frontend-Focused Engineer and Tech Lead responsible for architecting scalable web applications, driving engineering best practices, mentoring developers, and delivering high-impact solutions for global clients across Healthcare, Analytics, and EdTech platforms.",
    achievements: [
      "Led end-to-end development of multiple client projects, translating business requirements into scalable and maintainable technical solutions",
      "Designed and built a <strong>30+ component design system</strong>, following atomic design principles and documented in <strong>Storybook</strong>, accelerating development velocity and cutting per-feature UI build time across teams",
      "Championed <strong>SOLID principles, clean architecture, and design patterns</strong>, including micro-frontend-ready module boundaries, to improve code quality, maintainability, and scalability",
      "Ensured <strong>WCAG 2.1 AA accessibility compliance</strong> (semantic HTML, ARIA roles/labels, keyboard navigation, focus management) across shared design systems",
      "Provided technical leadership through code reviews, architectural guidance, and Figma-to-code design handoff processes",
      "Mentored junior developers and conducted training programs for fresh graduates, helping accelerate onboarding and productivity",
      "Conducted technical interviews for both freshers and experienced candidates, contributing to engineering team growth",
      "Led rapid prototyping and MVP development initiatives, enabling clients to validate ideas and reduce time-to-market",
    ],
    tech: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "NestJS",
      "MongoDB",
      "PostgreSQL",
      "AWS",
    ],
  },

  {
    period: "2023 — 2026",
    company: "Unthinkable Solutions LLP",
    type: "Full-time",
    title: "Associate Software Engineer",
    desc: "Full Stack Developer and Team Lead responsible for building production-grade applications while driving code quality, reusability, and team collaboration.",
    achievements: [
      "Cut initial page-load time by <strong>40%</strong> through code splitting, lazy loading, React.memo, and Webpack/Vite bundle optimization (tree-shaking, dependency auditing)",
      "Adopted <strong>Next.js SSR/ISR</strong> for high-traffic content pages, improving SEO discoverability and perceived load performance over a pure client-side-rendered baseline",
      "Built reusable UI components and shared development patterns that improved consistency and reuse across projects",
      "Introduced and advocated engineering standards focused on maintainability, scalability, and clean code practices",
      "Mentored junior team members through pair programming, technical guidance, and code reviews",
      "Participated in technical hiring processes, evaluating candidates across frontend and full-stack roles",
      "Worked closely with design and backend teams to ensure seamless implementation of complex product requirements",
    ],
    tech: [
      "React",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "Node.js",
      "NestJS",
      "MongoDB",
      "REST APIs",
    ],
  },

  {
    period: "2022 — 2023",
    company: "Unthinkable Solutions LLP",
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
    company: "Unthinkable Solutions LLP",
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
    desc: "Healthcare appointment and tele-dentistry platform serving patients and providers across multiple locations. Led the architecture and development of the platform end-to-end as Technical Lead — spanning the patient-facing booking UI, geolocation provider-discovery, PCI-compliant payment flows, Twilio-powered video consultations, and a scalable AWS backend.\n\nDrove full internationalization (English/Spanish) across the React front end and API layer, and architected an event-driven AWS backend (ECS, Lambda, Step Functions, API Gateway, CloudWatch) to serve high concurrency with zero downtime.",
    tech: [
      "React",
      "TypeScript",
      "Tailwind",
      "Material UI",
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
    badge: { label: "▲ Scalable Architecture", variant: "oss" as const },
    title: "Sparkl LMS",
    desc: "Learning Management System built on React and Next.js (SSR/ISR). Architected the frontend from scratch as Technical Lead, establishing scalable component and state-management patterns — including micro-frontend-ready module boundaries — adopted across the team.\n\nBuilt a 30+ component, WCAG 2.1 AA-compliant design system documented in Storybook using atomic design principles, cut page-load time by 40% via code splitting and bundle optimization, and shipped a webcam-based assignment submission feature with in-browser image editing.",
    tech: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Vite",
      "Webpack",
      "Storybook",
      "AWS S3",
    ],
    links: [
      { label: "Project Overview", href: "#", icon: "external" as const },
    ],
    visual: "metrics" as const,
    metrics: [
      { val: "30+", label: "Design system components" },
      { val: "40%", label: "Faster page loads", accent: "var(--accent2)" },
      { val: "100%", label: "Feature ownership", accent: "var(--accent3)" },
      { val: "WCAG 2.1 AA", label: "Accessibility compliant" },
    ],
  },

  {
    featured: false,
    badge: { label: "● Production", variant: "live" as const },
    title: "Segment Inspector - Twilio",
    desc: "Chrome extension built for Twilio Segment that simplifies analytics debugging and event validation. Architected and shipped the product from zero to production as Technical Lead.\n\nBuilt a real-time event-monitoring and user-trait exploration interface with auto-instrumentation detection, eliminating the need for manual network-tab debugging and significantly reducing integration turnaround time for engineering teams.",
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
];

export const EDUCATION = [
  {
    degree: "Master of Computer Applications (MCA)",
    school:
      "Bharati Vidyapeeth's Institute of Computer Applications and Management, Delhi",
    period: "2020 — 2022",
  },
  {
    degree: "B.Sc (Honours) in Computer Science",
    school: "Sri Guru Gobind Singh College of Commerce, Delhi",
    period: "2017 — 2020",
  },
];

export const AWARDS = [
  {
    title: '"New Star on the Block"',
    org: "Unthinkable Solutions LLP",
    desc: "Recognised for consistently delivering high-quality projects, driving initiatives beyond assigned scope, and strengthening the engineering team by conducting technical hiring interviews.",
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
    value: "lakshay250407@gmail.com",
    href: "mailto:lakshay250407@gmail.com",
  },
  {
    icon: "📞",
    label: "Phone",
    value: "+91 9582963105",
    href: "tel:+919582963105",
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
