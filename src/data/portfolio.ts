/**
 * Single source of truth for all portfolio content.
 * Optional links (linkedin, email, resumePath, screenshot) are hidden
 * automatically when left empty — never put placeholder text here.
 */

export interface ExperienceEntry {
  role?: string;
  company: string;
  period: string;
  context?: string;
  highlights: string[];
}

export interface EducationEntry {
  qualification: string;
  institution: string;
  year: string;
}

export interface ArchitectureStage {
  layer: string;
  steps: { name: string; detail?: string }[];
}

export interface ProjectHighlight {
  icon: IconName;
  title: string;
  detail: string;
}

export interface Project {
  title: string;
  subtitle: string;
  repoUrl: string;
  releaseUrl?: string;
  release?: string;
  status: string;
  problem: string;
  solution: string;
  stack: string[];
  architecture: ArchitectureStage[];
  highlights: ProjectHighlight[];
  caveats: string;
  screenshot?: { src: string; alt: string };
}

export const profile = {
  name: 'Naresh More',
  eyebrow: 'Principal Engineer · Enterprise Integration · Applied AI',
  headline: 'Principal Engineer building reliable enterprise integrations and practical AI-powered solutions.',
  intro:
    "I build backend systems, APIs, and enterprise integrations for laboratory and life sciences workflows, and I'm applying that foundation to practical, testable AI applications.",
  location: 'Mumbai / Thane, Maharashtra, India',
};

export const contact = {
  headline:
    "Let's discuss backend engineering, enterprise integrations, and practical AI solutions.",
  github: 'https://github.com/naresh2482',
  linkedin: '', // add profile URL to show
  email: '', // add approved public email to show
  // Shown automatically when public/resume.pdf exists at build/dev-server start.
  resumePath: __HAS_RESUME__ ? '/resume.pdf' : '',
};

export const about: string[] = [
  "I enjoy solving integration and reliability problems that sit between systems. Over my career, I've worked on enterprise connectors and backend services that bridge instruments, applications, document systems, and laboratory workflows. I focus on clear interfaces, maintainable architecture, careful failure handling, and practical testing.",
  'My current direction is to deepen software architecture and applied AI engineering while continuing to build reliable backend systems. I learn by building end-to-end products, validating real behavior, documenting decisions, and explaining technical trade-offs.',
];

export const highlights: { value: string; label: string }[] = [
  { value: '14+ yrs', label: 'Software engineering experience' },
  { value: 'Principal Engineer', label: 'Scitara · May 2021 – Aug 2026' },
  { value: 'Life sciences', label: 'Laboratory & instrument integrations' },
  { value: 'Applied AI', label: 'Local LLM application development' },
];

export type IconName =
  | 'api' | 'plug' | 'shield' | 'layers' | 'brain' | 'code' | 'tools';

export interface ExpertiseCard {
  title: string;
  tier: 'Core strength' | 'Hands-on' | 'Practice';
  icon: IconName;
  summary: string;
  tags: string[];
  size?: 'wide' | 'tall';
}

/** Tier labels signal depth honestly: core professional work vs. current learning. */
export const expertise: ExpertiseCard[] = [
  {
    title: 'Backend & API engineering',
    tier: 'Core strength',
    icon: 'api',
    summary: 'Backend engineering and REST API integration, primarily in TypeScript / Node.js.',
    tags: ['REST APIs', 'TypeScript', 'Node.js'],
    size: 'wide',
  },
  {
    title: 'Enterprise integrations',
    tier: 'Core strength',
    icon: 'plug',
    summary: 'Instrument integrations and enterprise connectors for laboratory and life sciences applications, across multiple protocols and data sources.',
    tags: ['REST', 'SOAP', 'OPC UA', 'OPC Classic', 'ODBC/SQL', 'File system'],
  },
  {
    title: 'Auth & reliability',
    tier: 'Core strength',
    icon: 'shield',
    summary: 'Authentication, OAuth 2.0, session management, TLS/certificate troubleshooting, error handling, retries, and observability.',
    tags: ['OAuth 2.0', 'TLS', 'Retries', 'Observability'],
  },
  {
    title: 'Software design',
    tier: 'Core strength',
    icon: 'layers',
    summary: 'SOLID, Clean Architecture, dependency injection, and designing for testability.',
    tags: ['SOLID', 'Clean Architecture', 'DI'],
  },
  {
    title: '.NET & frontend',
    tier: 'Core strength',
    icon: 'code',
    summary: 'C# / .NET for instrument integrations and enterprise applications, with React and Angular front ends and automated testing.',
    tags: ['C# / .NET', 'React', 'Angular', 'Jest', 'Vitest'],
  },
  {
    title: 'Applied AI',
    tier: 'Hands-on',
    icon: 'brain',
    summary: 'Local LLM application development with prompt boundaries, structured validation, and sensitive-data minimization.',
    tags: ['Ollama', 'Qwen3', 'Validation'],
    size: 'wide',
  },
  {
    title: 'Tools & practices',
    tier: 'Practice',
    icon: 'tools',
    summary: 'API, unit, and integration testing; AI-assisted development and code review; technical documentation and trade-off analysis.',
    tags: ['Git', 'GitHub', 'Testing', 'Docs'],
  },
];

export const experience: ExperienceEntry[] = [
  {
    role: 'Principal Engineer',
    company: 'Scitara Technologies Private Limited',
    period: 'May 2021 – August 2026',
    highlights: [
      'Developed .NET laboratory instrument integrations.',
      'Built Node.js enterprise connectors for laboratory and life sciences applications.',
      'Worked with REST, SOAP, OPC UA, OPC Classic, ODBC/SQL, and file-system integrations.',
      'Developed reusable framework components.',
      'Investigated authentication, TLS certificate, connectivity, and file-transfer failures.',
      'Contributed to code reviews, documentation, security improvements, and engineering mentorship.',
    ],
  },
  {
    company: 'Mihuru (iTraveleo Pvt. Ltd.)',
    period: 'August 2020 – February 2021',
    highlights: [
      'Re-architected a personal finance platform using Clean Architecture, CQRS, .NET Core, Angular, SQL Server, and Azure.',
    ],
  },
  {
    company: 'LearningMate Solutions',
    period: 'March 2018 – January 2020',
    highlights: [
      'Developed education platforms using React, Angular, ElectronJS, Node.js, AWS Lambda, and C#.',
    ],
  },
  {
    company: 'Eki Communications',
    period: 'January 2013 – March 2018',
    highlights: [
      'Developed survey platforms, dashboards, reporting, and workflow automation.',
    ],
  },
  {
    company: 'Analyze N Control',
    period: 'January 2011 – December 2012',
    highlights: [
      'Developed AML, fraud detection, and enterprise applications using ASP.NET, C#, and SQL Server.',
    ],
  },
];

export const education: EducationEntry[] = [
  { qualification: 'BE, Computer Engineering', institution: 'Mumbai University', year: '2009' },
  { qualification: 'PG Diploma, Embedded System Design', institution: 'CDAC Pune', year: '2010' },
  { qualification: 'Diploma, Computer Engineering', institution: 'MSBTE', year: '2006' },
];

export const featuredProject: Project = {
  title: 'IntegrationOps AI',
  subtitle: 'Local AI-assisted troubleshooting for API and connector logs',
  repoUrl: 'https://github.com/naresh2482/integrationops-ai',
  release: 'v0.1.0',
  releaseUrl: 'https://github.com/naresh2482/integrationops-ai/releases',
  status: 'Published source-code MVP; local application, not a publicly hosted SaaS',
  problem:
    'API and connector failures can be difficult to investigate when errors span authentication, HTTP requests, integration workflows, and incomplete logs.',
  solution:
    'A local full-stack application that accepts synthetic log input, parses diagnostic entries, reports malformed lines, and uses a local language model to suggest plausible causes and next troubleshooting steps.',
  stack: ['React', 'TypeScript', 'Vite', 'Node.js', 'Native HTTP server', 'Vitest', 'Ollama', 'Qwen3:14b'],
  architecture: [
    { layer: 'Browser', steps: [{ name: 'React UI', detail: 'frontend/' }] },
    {
      layer: 'REST API',
      steps: [
        { name: 'Node.js REST API', detail: 'backend/ · /api/analyze via Vite dev proxy' },
        { name: 'Input limits, parsing, validation' },
        { name: 'Minimal diagnostic payload' },
      ],
    },
    {
      layer: 'Local model',
      steps: [
        { name: 'LogAnalysisService' },
        { name: 'OllamaClient' },
        { name: 'Qwen3:14b', detail: 'runs locally' },
      ],
    },
    {
      layer: 'Result',
      steps: [{ name: 'Troubleshooting hypotheses', detail: 'rendered in React' }],
    },
  ],
  highlights: [
    { icon: 'layers', title: 'Clear separation', detail: 'Separate frontend and backend directories in one repository.' },
    { icon: 'api', title: 'Bounded input', detail: 'Explicit API limits, validation, and line-level parsing feedback.' },
    { icon: 'shield', title: 'Data minimization', detail: 'Model receives only selected diagnostic fields rather than complete raw logs.' },
    { icon: 'plug', title: 'Local by design', detail: 'Local-only backend binding for the MVP.' },
    { icon: 'code', title: 'Safe rendering', detail: 'Safe rendering of AI output in React.' },
    { icon: 'tools', title: 'Tested flow', detail: 'Automated frontend/backend tests and a verified local UI-to-model flow.' },
  ],
  caveats:
    'AI suggestions are hypotheses, not proven root causes. This MVP does not offer production authentication, public hosting, or guaranteed removal of all sensitive information from arbitrary logs.',
  // Shown automatically once this file exists in public/images/ (use synthetic data only).
  screenshot: {
    src: '/images/integrationops-ai-screenshot.png',
    alt: 'IntegrationOps AI interface analysing synthetic log input',
  },
};

export const approach: { title: string; body: string }[] = [
  {
    title: 'Understand the failure before designing the fix.',
    body: 'I work from observed behavior and constraints, separate domain logic from infrastructure, and choose abstractions that make systems easier to test and maintain.',
  },
  {
    title: 'Build, verify, explain.',
    body: 'I favor small deliverables, automated tests, real integration checks, and documented trade-offs. AI-assisted tools accelerate implementation, but I remain responsible for reviewing changes and validating outcomes.',
  },
  {
    title: 'Security and reliability are design concerns.',
    body: 'I consider authentication, error boundaries, sensitive-data exposure, retries, timeouts, and observability as part of the system—not as afterthoughts.',
  },
];

export const confidentialityNote =
  'Employer work is described at a capability level; employer-owned code, customer details, and internal metrics are not shared.';

export const currentDirection = {
  title: 'Current direction',
  body: 'Deepening software architecture and applied AI engineering through end-to-end projects, while continuing to build reliable backend systems.',
};
