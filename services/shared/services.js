/* ============ SynapseGrid Services Registry ============ */
const I = {
  "code": "M8 8l-4 4 4 4M16 8l4 4-4 4M14 5l-4 14",
  "cloud": "M7 18a4 4 0 010-8 5 5 0 019.6-1A4.5 4.5 0 0117 18z",
  "shield": "M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6zM9 12l2 2 4-4",
  "chart": "M4 20V4M4 20h16M8 16v-5M13 16V8M18 16v-9",
  "compass": "M3 12a9 9 0 1018 0 9 9 0 10-18 0M15.5 8.5l-2 5-5 2 2-5z",
  "headset": "M4 14v-2a8 8 0 0116 0v2M4 14h3v5H4zM17 14h3v5h-3z",
  "layers": "M12 3l9 5-9 5-9-5zM3 13l9 5 9-5",
  "phone": "M8 2h8a2 2 0 012 2v16a2 2 0 01-2 2H8a2 2 0 01-2-2V4a2 2 0 012-2zM11 18h2",
  "plug": "M9 2v6M15 2v6M6 8h12v3a6 6 0 01-12 0zM12 17v5",
  "refresh": "M21 12a9 9 0 11-3-6.7M21 4v5h-5",
  "gauge": "M12 14l4-4M3.5 18a9 9 0 1117 0",
  "lock": "M6 11h12v10H6zM8 11V7a4 4 0 018 0v4",
  "eye": "M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12zM9 12a3 3 0 106 0 3 3 0 10-6 0",
  "key": "M3 15a4 4 0 108 0 4 4 0 10-8 0M10 12l9-9M16 6l3 3M13 9l2 2",
  "bell": "M6 16v-5a6 6 0 0112 0v5l2 2H4zM10 21h4",
  "db": "M4 6c0-1.7 3.6-3 8-3s8 1.3 8 3-3.6 3-8 3-8-1.3-8-3zM4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3",
  "spark": "M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5L18 18M6 18l2.5-2.5M15.5 8.5L18 6",
  "branch": "M6 3v18M15 6a3 3 0 106 0 3 3 0 10-6 0M18 9c0 5-12 4-12 9",
  "server": "M4 4h16v6H4zM4 14h16v6H4zM8 7h.01M8 17h.01",
  "doc": "M9 4h6v3H9zM7 5H5v16h14V5h-2M9 12h6M9 16h4",
  "users": "M16 11a4 4 0 10-8 0M4 20a8 8 0 0116 0",
  "clock": "M3 12a9 9 0 1018 0 9 9 0 10-18 0M12 7v5l3 2",
  "target": "M3 12a9 9 0 1018 0 9 9 0 10-18 0M8 12a4 4 0 108 0 4 4 0 10-8 0M12 12h.01",
  "rocket": "M5 15c-1.5 1.5-2 5-2 5s3.5-.5 5-2M9 15l-3-3c2-6 7-9 13-9 0 6-3 11-9 13zM15 9h.01",
  "coins": "M12 3v18M17 7H9.5a3 3 0 000 6h5a3 3 0 010 6H6",
  "monitor": "M3 4h18v12H3zM8 20h8M12 16v4",
  "search": "M5 11a6 6 0 1012 0 6 6 0 10-12 0M20 20l-4.5-4.5",
  "pen": "M12 20h9M16.5 3.5a2.1 2.1 0 013 3L7 19l-4 1 1-4z",
  "check": "M5 12l4 4L19 7",
  "arrow": "M5 12h14M13 6l6 6-6 6"
};
const svg = (k, cls = '') => `<svg viewBox="0 0 24 24" class="${cls}" aria-hidden="true"><path d="${I[k]}"/></svg>`;

const SERVICES = {
  "software": {
    "name": "Custom software development",
    "short": "Custom software",
    "topic": "Custom software",
    "icon": "code",
    "accent": "blue",
    "title": "Software shaped around *how* *you* *work.*",
    "sub": "Web platforms, mobile apps and internal tools engineered around your real workflows. Built clean, tested properly and designed to scale with you.",
    "stats": [
      {
        "n": 2,
        "s": " wk",
        "l": "Release cycles"
      },
      {
        "n": 100,
        "s": "%",
        "l": "Code ownership is yours"
      },
      {
        "n": 1,
        "s": " day",
        "l": "Reply to every enquiry"
      },
      {
        "t": "24/7",
        "l": "Post-launch monitoring"
      }
    ],
    "features": [
      [
        "layers",
        "Web platforms",
        "Customer portals, SaaS products and marketplaces with fast, accessible front ends."
      ],
      [
        "phone",
        "Mobile apps",
        "iOS and Android apps from one codebase, published and maintained for you."
      ],
      [
        "plug",
        "APIs & integrations",
        "Connect your CRM, ERP, payments and the tools your team already relies on."
      ],
      [
        "refresh",
        "Legacy modernisation",
        "Move ageing systems to modern stacks in safe steps, without stopping the business."
      ],
      [
        "monitor",
        "Internal tools",
        "Admin panels, workflows and dashboards that replace spreadsheet chaos."
      ],
      [
        "check",
        "QA & automated testing",
        "Automated test suites so every release ships with confidence."
      ]
    ],
    "outcomes": [
      "Full source code and documentation handed over",
      "Automated tests running on every release",
      "A staging environment you can click through anytime",
      "A clear support plan after go-live"
    ],
    "term": [
      "$ git push origin release/v1.4",
      "→ running 312 tests…",
      "✓ all tests passed",
      "→ deploying to staging",
      "✓ live at staging.yourapp.com"
    ],
    "steps": [
      [
        "search",
        "Discovery workshop",
        "We map users, workflows and must-haves before writing code."
      ],
      [
        "pen",
        "Prototype & UX",
        "Clickable designs you can test with real people."
      ],
      [
        "code",
        "Agile build",
        "Two-week sprints with a working demo at the end of each."
      ],
      [
        "rocket",
        "Launch & handover",
        "Go-live, training, docs and ongoing support."
      ]
    ],
    "stack": [
      "React",
      "Next.js",
      "Node.js",
      "TypeScript",
      "Python",
      "Django",
      "Flutter",
      "React Native",
      "PostgreSQL",
      "GraphQL"
    ],
    "faqs": [
      [
        "How long does a typical project take?",
        "Smaller tools often ship in a couple of months. Larger platforms are delivered in phases, so you get something usable early rather than waiting for one big launch."
      ],
      [
        "Who owns the code?",
        "You do. Source code, documentation and all account access are handed over to you."
      ],
      [
        "Can you work with our existing systems?",
        "Yes. Most projects involve integrating with tools you already use, and we plan for that from day one."
      ]
    ]
  },
  "cloud": {
    "name": "Cloud & DevOps",
    "short": "Cloud & DevOps",
    "topic": "Cloud & DevOps",
    "icon": "cloud",
    "accent": "green",
    "title": "Cloud that *scales* *quietly.*",
    "sub": "Migration, infrastructure and automated delivery pipelines that make deployments boring, in the best way.",
    "stats": [
      {
        "n": 99.9,
        "d": 1,
        "s": "%",
        "l": "Uptime target"
      },
      {
        "n": 100,
        "s": "%",
        "l": "Infrastructure as code"
      },
      {
        "t": "24/7",
        "l": "Alerting & on-call"
      },
      {
        "t": "Monthly",
        "l": "Cost reviews"
      }
    ],
    "features": [
      [
        "cloud",
        "Cloud migration",
        "Move workloads to AWS, Azure or GCP in planned waves with rollback ready."
      ],
      [
        "doc",
        "Infrastructure as code",
        "Every environment defined in Terraform, versioned and repeatable."
      ],
      [
        "branch",
        "CI/CD pipelines",
        "Automated build, test and deploy so releases take minutes, not days."
      ],
      [
        "server",
        "Containers & Kubernetes",
        "Containerised apps that scale up with traffic and back down to save cost."
      ],
      [
        "coins",
        "Cost optimisation",
        "Right-sizing, reserved capacity and clean-up of forgotten resources."
      ],
      [
        "gauge",
        "Monitoring & observability",
        "Logs, metrics and alerts that tell you what broke before users do."
      ]
    ],
    "outcomes": [
      "A documented, secure landing zone",
      "Pipelines that deploy with one merge",
      "Dashboards and alerts for every critical service",
      "A monthly cost and performance report"
    ],
    "steps": [
      [
        "search",
        "Assess",
        "Inventory workloads, dependencies, costs and risks."
      ],
      [
        "pen",
        "Design the landing zone",
        "Accounts, networking, security and IaC foundations."
      ],
      [
        "refresh",
        "Migrate in waves",
        "Low-risk services first, with tested rollback plans."
      ],
      [
        "gauge",
        "Operate & optimise",
        "Monitor, tune and keep costs honest."
      ]
    ],
    "stack": [
      "AWS",
      "Azure",
      "Google Cloud",
      "Kubernetes",
      "Docker",
      "Terraform",
      "GitHub Actions",
      "GitLab CI",
      "Prometheus",
      "Grafana"
    ],
    "faqs": [
      [
        "Will migration cause downtime?",
        "We plan migrations to avoid it wherever possible, using parallel environments and scheduled cut-overs agreed with you in advance."
      ],
      [
        "Which cloud should we choose?",
        "It depends on your existing tools, skills and budget. We compare options honestly and recommend what fits, not what we prefer."
      ],
      [
        "Can you manage the cloud after migration?",
        "Yes. We can run it fully, or hand over to your team with training and runbooks."
      ]
    ]
  },
  "security": {
    "name": "Cybersecurity",
    "short": "Cybersecurity",
    "topic": "Cybersecurity",
    "icon": "shield",
    "accent": "brown",
    "title": "Security that is *built* *in,* not bolted on.",
    "sub": "Audits, monitoring and protection for your data and people, with findings explained in plain language and fixed in priority order.",
    "stats": [
      {
        "t": "24/7",
        "l": "Threat monitoring"
      },
      {
        "n": 1,
        "s": " day",
        "l": "Critical findings reported"
      },
      {
        "t": "OWASP",
        "l": "Testing methodology"
      },
      {
        "t": "DPDP",
        "l": "Compliance-ready"
      }
    ],
    "features": [
      [
        "search",
        "Audits & VAPT",
        "Vulnerability assessments and penetration tests on apps, networks and cloud."
      ],
      [
        "eye",
        "24/7 monitoring",
        "Continuous detection and response, with humans reviewing real alerts."
      ],
      [
        "key",
        "Identity & access",
        "SSO, MFA and least-privilege access that people actually use."
      ],
      [
        "cloud",
        "Cloud security posture",
        "Find misconfigurations across AWS, Azure and GCP before attackers do."
      ],
      [
        "doc",
        "Compliance readiness",
        "Prepare for ISO 27001, SOC 2 and India's DPDP Act with clear evidence."
      ],
      [
        "users",
        "Awareness training",
        "Short, practical training and phishing drills for your whole team."
      ]
    ],
    "outcomes": [
      "A prioritised risk report in plain language",
      "Fixes verified with a re-test",
      "Policies and evidence ready for auditors",
      "Ongoing monitoring with clear escalation"
    ],
    "steps": [
      [
        "search",
        "Assess",
        "Test systems and review policies to find real risk."
      ],
      [
        "target",
        "Prioritise",
        "Rank issues by impact so effort goes where it matters."
      ],
      [
        "lock",
        "Harden",
        "Fix, configure and verify with re-testing."
      ],
      [
        "eye",
        "Monitor",
        "Watch continuously and respond fast."
      ]
    ],
    "stack": [
      "Burp Suite",
      "OWASP ZAP",
      "Nessus",
      "Wazuh",
      "Splunk",
      "Microsoft Defender",
      "CrowdStrike",
      "Okta",
      "Cloudflare",
      "HashiCorp Vault"
    ],
    "faqs": [
      [
        "Will testing disrupt our systems?",
        "Tests are scoped and scheduled with you, and anything risky is run in agreed windows or against staging."
      ],
      [
        "How often should we test?",
        "At least yearly, and after any major release or infrastructure change."
      ],
      [
        "Can you help us pass an audit?",
        "Yes. We help prepare controls, policies and evidence so the audit itself goes smoothly."
      ]
    ]
  },
  "data": {
    "name": "Data & AI",
    "short": "Data & AI",
    "topic": "Data & AI",
    "icon": "chart",
    "accent": "blue",
    "title": "Turn raw data into *better* *decisions.*",
    "sub": "Dashboards, pipelines and practical machine learning that answer real business questions, not science projects that never ship.",
    "stats": [
      {
        "t": "Weeks",
        "l": "To your first dashboard"
      },
      {
        "n": 1,
        "l": "Single source of truth"
      },
      {
        "n": 100,
        "s": "%",
        "l": "Data stays in your cloud"
      },
      {
        "t": "Weekly",
        "l": "Model & data checks"
      }
    ],
    "features": [
      [
        "db",
        "Pipelines & warehousing",
        "Reliable pipelines that bring all your data into one clean warehouse."
      ],
      [
        "chart",
        "BI dashboards",
        "Live dashboards your leadership actually opens every morning."
      ],
      [
        "target",
        "Predictive analytics",
        "Forecast demand, churn and risk with models you can explain."
      ],
      [
        "spark",
        "Practical AI & LLM apps",
        "Assistants and search over your own documents, deployed securely."
      ],
      [
        "refresh",
        "Process automation",
        "Automate document handling, data entry and repetitive reporting."
      ],
      [
        "lock",
        "Data governance",
        "Access controls, lineage and quality checks you can audit."
      ]
    ],
    "outcomes": [
      "One trusted source for your key numbers",
      "Dashboards that refresh automatically",
      "Models monitored for accuracy and drift",
      "Documentation your team can maintain"
    ],
    "steps": [
      [
        "search",
        "Audit your data",
        "What exists, where it lives and how reliable it is."
      ],
      [
        "db",
        "Build the foundation",
        "Pipelines, warehouse and quality checks."
      ],
      [
        "chart",
        "Ship insights",
        "Dashboards and reports for real decisions."
      ],
      [
        "spark",
        "Add intelligence",
        "Forecasting and AI where it clearly pays off."
      ]
    ],
    "stack": [
      "Python",
      "SQL",
      "dbt",
      "Airflow",
      "Snowflake",
      "BigQuery",
      "Power BI",
      "Tableau",
      "PyTorch",
      "LangChain"
    ],
    "faqs": [
      [
        "Our data is messy. Can you still help?",
        "Almost everyone's is. Cleaning and connecting data is usually the first and most valuable step."
      ],
      [
        "Is our data safe with AI tools?",
        "We design solutions so your data stays in your own environment, with clear controls on what any model can access."
      ],
      [
        "Do we need a data team?",
        "Not to start. We build it so a small team, or us on a support plan, can run it."
      ]
    ]
  },
  "consulting": {
    "name": "IT consulting",
    "short": "IT consulting",
    "topic": "IT consulting",
    "icon": "compass",
    "accent": "green",
    "title": "Technology decisions you can *act* *on.*",
    "sub": "Roadmaps, vendor selection and architecture reviews that end in a clear plan, not a slide deck that gathers dust.",
    "stats": [
      {
        "n": 90,
        "s": "-day",
        "l": "Action plans"
      },
      {
        "t": "Neutral",
        "l": "Vendor-independent advice"
      },
      {
        "n": 4,
        "s": " wk",
        "l": "Typical assessment"
      },
      {
        "t": "Plain",
        "l": "Language, no jargon"
      }
    ],
    "features": [
      [
        "compass",
        "Technology roadmaps",
        "A phased plan linking every IT investment to a business goal."
      ],
      [
        "layers",
        "Architecture reviews",
        "Independent review of your systems for scale, cost and risk."
      ],
      [
        "target",
        "Vendor & tool selection",
        "Structured comparisons so you buy the right tool the first time."
      ],
      [
        "rocket",
        "Digital transformation",
        "Practical steps to move manual processes to modern systems."
      ],
      [
        "search",
        "Technical due diligence",
        "Clear-eyed assessment for investors and acquisitions."
      ],
      [
        "users",
        "Fractional CTO",
        "Senior technology leadership, part-time, without a full-time hire."
      ]
    ],
    "outcomes": [
      "A current-state map of your IT estate",
      "Risks and quick wins ranked by impact",
      "A costed roadmap you can present to the board",
      "Optional support while you deliver it"
    ],
    "steps": [
      [
        "users",
        "Listen",
        "Interviews with leadership and the people doing the work."
      ],
      [
        "search",
        "Analyse",
        "Systems, costs, risks and gaps, all mapped."
      ],
      [
        "compass",
        "Recommend",
        "A prioritised, costed roadmap."
      ],
      [
        "rocket",
        "Support delivery",
        "Stay on to help execute, if you want us to."
      ]
    ],
    "stack": [
      "AWS Well-Architected",
      "TOGAF",
      "ITIL",
      "Jira",
      "Confluence",
      "Notion",
      "Miro",
      "Lucidchart",
      "Power BI",
      "Microsoft 365"
    ],
    "faqs": [
      [
        "Do you sell the tools you recommend?",
        "Our advice is independent. We recommend what fits your needs and budget."
      ],
      [
        "What do we get at the end?",
        "A written report and roadmap in plain language, plus a walkthrough session with your team."
      ],
      [
        "Can you help implement the plan?",
        "Yes. Our engineering teams can deliver it, or we can support your chosen partners."
      ]
    ]
  },
  "support": {
    "name": "Managed IT support",
    "short": "Managed IT support",
    "topic": "Managed IT support",
    "icon": "headset",
    "accent": "brown",
    "title": "IT that *just* *works.*",
    "sub": "A responsive help desk and proactive monitoring that fix problems before your team notices them.",
    "stats": [
      {
        "t": "24/7",
        "l": "Monitoring"
      },
      {
        "p": "< ",
        "n": 1,
        "s": " hr",
        "l": "Priority response target"
      },
      {
        "t": "Monthly",
        "l": "Health reports"
      },
      {
        "n": 1,
        "l": "Point of contact"
      }
    ],
    "features": [
      [
        "headset",
        "Responsive help desk",
        "Real people on chat, email and phone who know your setup."
      ],
      [
        "bell",
        "Proactive monitoring",
        "Servers, networks and devices watched around the clock."
      ],
      [
        "refresh",
        "Patch management",
        "Updates tested and rolled out overnight, not mid-meeting."
      ],
      [
        "db",
        "Backup & recovery",
        "Backups verified regularly, with tested restore plans."
      ],
      [
        "monitor",
        "Device & user management",
        "Onboarding, offboarding and laptops configured in minutes."
      ],
      [
        "cloud",
        "Microsoft 365 & Workspace",
        "Email, licences and collaboration tools set up properly."
      ]
    ],
    "outcomes": [
      "A named engineer who knows your business",
      "Clear response times for every priority",
      "Monthly reports on health, tickets and risks",
      "Predictable monthly pricing"
    ],
    "steps": [
      [
        "search",
        "Onboard",
        "Document every device, account and system."
      ],
      [
        "lock",
        "Stabilise",
        "Fix the urgent issues and close security gaps."
      ],
      [
        "bell",
        "Monitor",
        "Proactive monitoring and fast help desk."
      ],
      [
        "chart",
        "Review monthly",
        "Reports and recommendations, every month."
      ]
    ],
    "stack": [
      "Microsoft 365",
      "Google Workspace",
      "Intune",
      "Jamf",
      "NinjaOne",
      "Veeam",
      "Freshdesk",
      "Zoho Desk",
      "Fortinet",
      "Sophos"
    ],
    "faqs": [
      [
        "What happens outside office hours?",
        "Monitoring runs 24/7, and critical issues are escalated to on-call engineers."
      ],
      [
        "Can you support remote and hybrid teams?",
        "Yes. Devices are managed remotely wherever your people work."
      ],
      [
        "How is pricing structured?",
        "Usually a predictable monthly fee per user or device, agreed upfront."
      ]
    ]
  }
};

const CFG = {
  "cloudSaving": [
    0.15,
    0.3
  ],
  "supportRate": {
    "essential": 1200,
    "complete": 1900
  },
  "sla": [
    [
      "P1",
      "Critical",
      "Business stopped or security incident",
      "< 1 hr",
      "var(--red)"
    ],
    [
      "P2",
      "High",
      "A team is blocked with no workaround",
      "< 4 hr",
      "var(--brown)"
    ],
    [
      "P3",
      "Normal",
      "Something is broken but a workaround exists",
      "1 business day",
      "var(--blue)"
    ],
    [
      "P4",
      "Request",
      "New setups, changes and questions",
      "3 business days",
      "var(--green)"
    ]
  ]
};

const SLUGS = {
  "software": "custom-software",
  "cloud": "cloud-devops",
  "security": "cybersecurity",
  "data": "data-ai",
  "consulting": "it-consulting",
  "support": "managed-it-support"
};
const ORDER = [
  "software",
  "cloud",
  "security",
  "data",
  "consulting",
  "support"
];

const ACC = {
  blue: ['var(--blue)', 'var(--bt)'],
  green: ['var(--green)', 'var(--gt)'],
  brown: ['var(--brown)', 'var(--rt)']
};

const ICON = `<svg viewBox="215 56 352 284" aria-hidden="true"><g transform="translate(194.89,38.04) scale(.4279)">
<defs><radialGradient id="hf" gradientUnits="userSpaceOnUse" cx="182" cy="455" r="57"><stop offset="0" stop-color="#EDE7DF"/><stop offset=".28" stop-color="#EDE7DF"/><stop offset="1" stop-color="#A67C52"/></radialGradient></defs>
<g><line class="c-line" x1="182" y1="455" x2="203" y2="292"/><line class="c-line" x1="182" y1="455" x2="99" y2="397"/><line class="c-line" x1="182" y1="455" x2="304" y2="427"/><line class="c-line" x1="182" y1="455" x2="72" y2="549"/><line class="c-line" x1="182" y1="455" x2="266" y2="605"/></g>
<circle class="c-brown" cx="203" cy="292" r="32"/><circle class="c-brown" cx="99" cy="397" r="26"/><circle class="c-brown" cx="72" cy="549" r="32"/><circle class="c-brown" cx="266" cy="605" r="32"/><circle class="c-hub" cx="304" cy="427" r="26"/>
<path class="hubshape" d="M137.7,424.1 Q179.6,449.5 188.9,401.4 Q186.0,450.6 234.6,442.9 Q187.5,457.4 208.4,502.1 Q180.9,460.9 140.9,490.1 Q176.0,455.3 137.7,424.1 Z" fill="url(#hf)" stroke="url(#hf)" stroke-width="6" stroke-linejoin="round"/>
<g class="mono"><path class="c-blue" d="M765,56 H450 A157,157 0 0 0 450,370 H650 L688,292 H450 A79,79 0 0 1 450,134 H712 Z"/><path class="c-green" d="M688,292 A156,156 0 0 1 844,448 H766 A78,78 0 0 0 688,370 H650 Z"/><path class="c-dark" d="M360.2,448 A253,253 0 0 0 783.9,690.9 L729.5,636.5 A176,176 0 0 1 441,448 Z"/><path class="c-brown" d="M600,497 H857.6 A253,253 0 0 1 783.9,690.9 L729.5,636.5 A176,176 0 0 0 771.9,568 H600 Z"/></g>
</g></svg>`;
const LOCKUP = ICON + `<span><span class="word">Synapse<b>Grid</b></span><span class="sub">SOLUTIONS</span></span>`;
const withId = (s, id) => s.replace('id="hf"', `id="${id}"`).replace(/url\(#hf\)/g, `url(#${id})`);

const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;');
const sleep = ms => new Promise(r => setTimeout(r, ms));
const inr = n => '₹' + Math.round(n).toLocaleString('en-IN');
const lakh = n => n >= 1e7 ? '₹' + (n / 1e7).toFixed(2) + ' Cr' : n >= 1e5 ? '₹' + (n / 1e5).toFixed(1) + ' L' : '₹' + Math.round(n / 1e3) + 'k';
