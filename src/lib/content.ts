export const content = {
  hero: {
    name: "Brad Stewart",
    tagline: "Business Solutions Manager ↔ Programmer",
    subtext:
      "I design efficient operating systems for teams and back them with reliable, maintainable software—turning strategy into shipped results.",
    ctas: [
      { label: "View Projects", href: "#projects" },
      { label: "Contact Me", href: "#contact" }
    ]
  },
  about: `I'm Brad Stewart, a Business Solutions Manager and Programmer who specializes in operational excellence and lightweight software solutions. I align teams around measurable outcomes, design clear processes, and implement tools that remove friction from daily work. My approach combines business rigor with practical engineering—shipping the smallest system that delivers the biggest result.

I work primarily with JavaScript/TypeScript and Python, building dashboards, automations, and service integrations that make data visible and decisions faster. Whether improving a KPI workflow or launching a custom utility, I focus on reliability, clarity, and speed to value.`,
  skills: {
    business: [
      "Process design & SOP governance",
      "Cross-functional program management",
      "Training & enablement at scale",
      "KPI frameworks, dashboards, and reporting",
      "Workforce planning & scheduling optimization",
      "Executive-ready communication & stakeholder alignment",
      "Continuous improvement & change management"
    ],
    technical: [
      "JavaScript/TypeScript, React, Node (Bun)",
      "Python (uv), CLI tooling, Bash/WSL2",
      "Tailwind CSS, component-driven UI",
      "REST/JSON APIs, integrations & automations",
      "Git/GitHub, basic CI/CD pipelines",
      "Data wrangling (CSV/Sheets), ETL into dashboards"
    ],
    tools: [
      "VS Code/Cursor, GitHub",
      "Google Sheets/Looker Studio, Excel",
      "Notion, Zapier/Make",
      "Postman, Insomnia"
    ]
  },
  projects: [
    {
      title: "Operations KPI Control Center",
      what: "Centralized reporting for throughput, quality, on-time %, and staffing vs demand.",
      how: "Google Sheets hub; automated CSV ingestion; Looker Studio dashboards; QA checks.",
      impact: "Reduced weekly reporting effort by ~70% and improved decision cadence.",
      links: { demo: "#", repo: "#" }
    },
    {
      title: "Shift & Capacity Planner",
      what: "Planning tool aligning staffing with forecasted workload.",
      how: "Python recommendation engine; React UI for uploads and scenario modeling.",
      impact: "Fewer under/over-staffed hours and higher scheduling confidence.",
      links: { demo: "#", repo: "#" }
    },
    {
      title: "Call Summary & Action Extractor",
      what: "Upload a call recording and receive a structured summary with owners and due dates.",
      how: "Local speech-to-text pipeline, lightweight summarization, React front end.",
      impact: "Consistent notes in minutes; clearer follow-through and accountability.",
      links: { demo: "#", repo: "#" }
    },
    {
      title: "Data Hygiene Utilities",
      what: "Utilities that deduplicate rows, normalize dates, and flag anomalies pre-reporting.",
      how: "Node/TypeScript CLI set packaged for Bun; configurable rules.",
      impact: "Cleaner inputs and fewer downstream corrections.",
      links: { demo: null, repo: "#" }
    }
  ],
  contact: {
    blurb:
      "If you're scaling operations or modernizing processes with targeted software, I'd be glad to help.",
    email: "bradmichaelstewart@gmail.com",
    linkedin: "https://www.linkedin.com/in/brad-stewart-/",
    github: "https://github.com/Brad-Stewart"
  }
};