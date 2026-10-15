# Personal Portfolio Website — Specification & Content

**Owner:** Naresh More  
**Version:** 1.0 — 15 October 2026  
**Purpose:** Recruiter-facing personal website and software engineering portfolio  
**Status:** Ready for implementation; review placeholders before publishing

## 1. Objective

Build a clean, fast, responsive personal portfolio that communicates my engineering experience, architectural thinking, and practical AI application development. The website should help recruiters and hiring managers understand my strengths within 30–60 seconds and find my resume, GitHub, LinkedIn, and contact information easily.

**Target roles:** Senior Software Engineer, Principal Software Engineer, Technical Lead; progressing toward Software Architect / AI Solutions Architect roles. **Do not claim that I have previously held a formal Software Architect title.**

**Primary audience:** Recruiters, hiring managers, engineering leaders, and potential collaborators.

**Positioning:** Experienced software engineer with approximately 15 years of software development experience, specializing in enterprise backend systems, application/instrument integrations, API reliability, and life sciences/laboratory informatics; expanding into applied AI engineering through working projects.

## 2. Site map

A single-page website for the first release:

1. Home / Hero
2. About Me
3. Expertise / Technical Skills
4. Professional Experience
5. Featured Projects
6. Engineering Approach
7. Contact

Top navigation: **Home · About · Skills · Experience · Projects · Contact**. Include a visible **Download Resume** action when the PDF is provided.

## 3. Copy ready for the website

### Hero

**Eyebrow:** Senior Software Engineer · Enterprise Integrations · Applied AI

**Headline:** Building reliable enterprise software and practical AI-powered solutions.

**Introduction:**

> I'm Naresh More, a software engineer with approximately 15 years of experience building backend applications, APIs, and enterprise integrations. My work spans laboratory informatics, instrument connectivity, authentication, secure data exchange, and troubleshooting complex distributed workflows. I'm now combining that foundation with hands-on AI engineering to build useful, testable applications.

**Primary CTA:** Explore My Projects  
**Secondary CTA:** View GitHub  
**Additional CTA:** Download Resume (only when resume file is available)

**GitHub:** https://github.com/naresh2482  
**Location:** Mumbai / Thane, Maharashtra, India (regional location only; optional to display)

### About Me

I enjoy solving integration and reliability problems that sit between systems. Over my career, I've worked on enterprise connectors and backend services that bridge instruments, applications, document systems, and laboratory workflows. I focus on clear interfaces, maintainable architecture, careful failure handling, and practical testing.

My current direction is to deepen software architecture and applied AI engineering while continuing to build reliable backend systems. I learn by building end-to-end products, validating real behavior, documenting decisions, and explaining technical trade-offs.

### Expertise / Technical Skills

Group skills clearly; do not imply equal depth or mastery in every technology.

**Core professional strengths**
- Backend engineering and REST API integration
- TypeScript / Node.js
- Enterprise integration design and connector development
- Authentication, OAuth 2.0, session management, and TLS/certificate troubleshooting
- File exchange, error handling, retries, observability, and troubleshooting
- Software design principles: SOLID, Clean Architecture, dependency injection, and testability
- Laboratory informatics and life sciences software integrations

**Hands-on / current development**
- React and modern frontend development
- C# / .NET
- Automated testing (Jest, Vitest)
- Local LLM application development with Ollama and Qwen3
- Prompt boundaries, structured validation, and sensitive-data minimization for AI features

**Tools and practices**
- Git and GitHub
- API testing, unit testing, integration testing
- AI-assisted development and code review
- Technical documentation and architecture trade-off analysis

**Important:** Verify exact skills against the latest resume before publishing; do not invent proficiency levels, certifications, or years per technology.

### Professional Experience

#### Software Developer / Senior Software Engineer — Scitara Technology Ltd.

**Period:** Approximately five years; exact start/end dates to confirm from resume.

**Context:** Enterprise connectors and integration services for laboratory and life sciences workflows.

**Selected experience:**
- Developed and maintained connectors linking enterprise applications, document systems, and laboratory tools.
- Worked on Microsoft 365/SharePoint file integration and upload workflows.
- Contributed to integrations involving BIOVIA ONE Lab, Veeva QualityDocs, and LabWare environments.
- Investigated session expiration, authentication failures, network/certificate issues, and file transfer reliability.
- Worked with testing, logging, performance checks, and maintainable service components.

**Confidentiality:** Describe work at a capability level. Do not disclose employer-owned code, private architecture diagrams, credentials, customer details, proprietary logs, or unapproved performance metrics.

#### Earlier Professional Experience

**Placeholder:** Add earlier employer names, roles, dates, and verified accomplishments from the latest resume. Do not fabricate a timeline.

### Featured Project — IntegrationOps AI

**Title:** IntegrationOps AI  
**Subtitle:** Local AI-assisted troubleshooting for API and connector logs  
**Repository:** https://github.com/naresh2482/integrationops-ai  
**Release:** v0.1.0  
**Status:** Published source-code MVP; local application, not a publicly hosted SaaS

**Problem:** API and connector failures can be difficult to investigate when errors span authentication, HTTP requests, integration workflows, and incomplete logs.

**Solution:** A local full-stack application that accepts synthetic log input, parses diagnostic entries, reports malformed lines, and uses a local language model to suggest plausible causes and next troubleshooting steps.

**Stack:** React, TypeScript, Vite, Node.js, native HTTP server, Vitest, Ollama, Qwen3:14b.

**Architecture:**

```text
React UI (frontend/)
       |
       | /api/analyze (Vite development proxy)
       v
Node.js REST API (backend/)
       |
       v
Input limits + parsing + validation
       |
       v
Minimal diagnostic payload
       |
       v
LogAnalysisService -> OllamaClient -> Local Qwen3:14b
       |
       v
Troubleshooting hypotheses -> React results
```

**Engineering highlights:**
- Separate frontend and backend directories in one repository.
- Explicit API limits, validation, and line-level parsing feedback.
- Model receives only selected diagnostic fields rather than complete raw logs.
- Local-only backend binding for the MVP.
- Safe rendering of AI output in React.
- Automated frontend/backend tests and a verified local UI-to-model flow.

**Caveats:** AI suggestions are hypotheses, not proven root causes. This MVP does not offer production authentication, public hosting, or guaranteed removal of all sensitive information from arbitrary logs. Do not describe it as production-ready.

**CTA:** View Source on GitHub  
**Optional:** View v0.1.0 release and screenshots when available.

### Other Projects

Use these only if repositories or demos are sufficiently complete and public:

- **Doctor Appointment System** — TypeScript backend learning project exploring search use cases, validation, repositories, and Clean Architecture. **Status: in progress / not yet portfolio-ready.**
- **Email Management Agent** — provider-independent email classification prototype with a safety-first, dry-run approach. **Status: prototype / not yet portfolio-ready.**

**First release recommendation:** Show **IntegrationOps AI prominently** rather than presenting unfinished work as shipped products. Add further projects later when verified.

### Engineering Approach

**Understand the failure before designing the fix.** I work from observed behavior and constraints, separate domain logic from infrastructure, and choose abstractions that make systems easier to test and maintain.

**Build, verify, explain.** I favor small deliverables, automated tests, real integration checks, and documented trade-offs. AI-assisted tools accelerate implementation, but I remain responsible for reviewing changes and validating outcomes.

**Security and reliability are design concerns.** I consider authentication, error boundaries, sensitive-data exposure, retries, timeouts, and observability as part of the system—not as afterthoughts.

### Contact

**Headline:** Let's discuss backend engineering, enterprise integrations, and practical AI solutions.

- GitHub: https://github.com/naresh2482
- LinkedIn: **[ADD_LINKEDIN_PROFILE_URL]**
- Email: **[ADD_PUBLIC_CONTACT_EMAIL]**
- Resume: **[ADD_RESUME_PDF_PATH]**

Do not publish a personal phone number, home address, or email without explicit approval. If no public email is supplied, show GitHub and LinkedIn instead.

## 4. Visual and UX direction

- **Style:** Modern, restrained, technical, professional; suitable for senior engineering roles.
- **Palette:** Dark navy/charcoal with a restrained teal or blue accent; accessible contrast. Offer light-mode support only if it does not delay launch.
- **Typography:** Clear sans-serif with a strong heading hierarchy; code-style labels sparingly.
- **Layout:** Single-page responsive site; desktop and mobile navigation; generous whitespace.
- **Hero:** Clear value proposition, not generic stock imagery or exaggerated animated graphics.
- **Projects:** One strong featured case-study card with screenshot, stack, architecture highlights, and GitHub link.
- **Interactions:** Smooth section navigation, keyboard focus indicators, subtle hover effects; respect reduced-motion preferences.
- **Accessibility:** Semantic HTML, labeled links/buttons, visible focus states, image alt text, sufficient contrast.
- **Performance:** Static frontend; optimize assets and avoid large UI frameworks unless needed.
- **SEO:** Page title, meta description, Open Graph basics, meaningful headings.

## 5. Implementation recommendation

**Technology:** React + TypeScript + Vite, CSS (or a minimal styling approach already familiar to the developer). Static site; no backend or database required for version 1.

**Suggested repository:** `personal-portfolio` (separate from `integrationops-ai`).

```text
personal-portfolio/
  public/
    images/
      integrationops-ai-screenshot.png  # add real screenshot later
    resume.pdf                          # only after approval
  src/
    components/
      Header.tsx
      Hero.tsx
      About.tsx
      Skills.tsx
      Experience.tsx
      Projects.tsx
      Contact.tsx
      Footer.tsx
    App.tsx
    main.tsx
    styles.css
  index.html
  package.json
  README.md
```

**Content maintenance:** Put experience, project, skill, and contact details in a single typed data file (for example `src/data/portfolio.ts`) rather than scattering them throughout components.

**Deployment:** GitHub Pages, Vercel, or Netlify are reasonable options for a static portfolio. Select one after the local version is reviewed; don't claim a live URL until deployed.

## 6. Acceptance criteria (version 1)

- [ ] Website loads locally on desktop and mobile.
- [ ] Clear role positioning without claiming a formal architect title.
- [ ] About, Skills, Experience, Projects, and Contact sections complete.
- [ ] IntegrationOps AI links to the correct public repository.
- [ ] External links open correctly and are accessible.
- [ ] No invented employers, dates, metrics, certifications, or project outcomes.
- [ ] No placeholders visible on the public site (hide missing links instead).
- [ ] Responsive layout verified in a real browser.
- [ ] Production build succeeds.
- [ ] No sensitive or confidential information included.
- [ ] README explains setup and deployment.
- [ ] Published portfolio URL verified before sharing with recruiters.

## 7. One-session Claude Code implementation prompt

> Build my personal software engineering portfolio website from `PERSONAL_PORTFOLIO_WEBSITE.md`.
>
> First read the full specification. Create a React + TypeScript + Vite single-page website with a polished responsive design and accessible navigation. Use the copy and factual boundaries from the document; do not invent employment dates, achievements, certifications, links, or architect titles. Make IntegrationOps AI the featured project with a working GitHub link. Keep editable content in one typed data file. If LinkedIn, email, resume, or screenshots are missing, leave them configurable and hide unavailable public links rather than displaying placeholders. Include basic tests where useful, run typecheck and production build, and provide local startup instructions. Do not add a backend, CMS, authentication, analytics, or unnecessary dependencies. Do not commit until I review the site in a real browser. Report completed work and any information needed from me.

## 8. Information to confirm before publishing

1. Latest resume and exact employer/role dates.
2. Preferred professional headline (Senior Software Engineer vs Principal Engineer candidate).
3. LinkedIn profile URL.
4. Public contact email and whether to show it.
5. Resume PDF for download.
6. Approved professional photo (optional; not required).
7. Approved IntegrationOps AI screenshot using synthetic data.
8. Desired domain name or initial hosting choice.

---

**Scope discipline:** Ship a credible, simple portfolio first. Improve visuals and add verified case studies after it is published. Avoid turning this into another large application.
