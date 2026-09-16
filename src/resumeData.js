export default {
  name: "Andre Havasi",
  heroHeadline: "I take your idea to the App Store — or the open web.",
  heroSupport:
    "Web and iOS apps, built end to end and shipped: my own products, and yours.",
  credentials: [
    "Software Engineer at Jamf",
    "5+ years shipping",
    "6 apps built, 3 founded",
  ],
  enquiry: {
    subject: "Project enquiry",
    body: [
      "What you want built:",
      "",
      "Rough timeline:",
      "",
      "Rough budget:",
      "",
      "Any hard deadline:",
      "",
    ].join("\n"),
  },
  about: [
    "I'm Andre Havasi — a software engineer at Jamf and the founder of LiftLogic. For 5+ years I've shipped production software: backend systems and APIs that power enterprise device management, plus a shelf of my own iOS and web apps.",
    "I design, build, and ship complete products end-to-end — SwiftUI apps, React web platforms, and the Firebase and Cloud backends behind them. I also build for clients who need a real product shipped, not a prototype.",
    "Got an app or website idea? Tell me what you're building and I'll tell you how I'd ship it.",
  ],
  services: [
    {
      title: "Websites",
      desc: "Marketing sites, landing pages, and full web apps in React + TypeScript — from a fresh idea to a polished launch.",
      icon: "Globe",
    },
    {
      title: "iOS & Mobile Apps",
      desc: "Native SwiftUI apps that feel at home on your device, with iCloud/CloudKit sync built in.",
      icon: "Smartphone",
    },
    {
      title: "Ship to the App Store",
      desc: "I take your app the last mile — build, TestFlight, App Review, and release management, all the way to live.",
      icon: "Rocket",
    },
    {
      title: "AI Routines & Workflows",
      desc: "Set up AI automations, agents, and workflows that save you hours — tailored to how you already work.",
      icon: "Sparkles",
    },
    {
      title: "Backends & APIs",
      desc: "Firebase, Cloud Functions, and Cloudflare Workers that scale — auth, data, and the integrations behind your product.",
      icon: "Server",
    },
    {
      title: "Consulting & Advice",
      desc: "Architecture reviews, technical direction, and a second set of eyes to get your project unstuck.",
      icon: "Compass",
    },
  ],
  projects: [
    {
      id: 0,
      name: "LiftLogic",
      logoKey: "liftlogic",
      category: "iOS",
      role: "Founder",
      pitch: "AI-assisted workout tracking that feels like a training partner.",
      tags: ["SwiftUI", "Firebase", "Apple Watch", "AI"],
      links: {
        site: "https://liftlogic.fit",
        appStore:
          "https://apps.apple.com/us/app/liftlogic-weightlifting/id6740549754",
      },
    },
    {
      id: 1,
      name: "BodyTree",
      logoKey: "bodytree",
      category: "iOS",
      role: "Founder",
      pitch: "A skill-tree for calisthenics — prove what you can do.",
      tags: ["iOS", "Android", "Firebase"],
      links: {
        site: "https://bodytree.app",
        appStore:
          "https://apps.apple.com/us/app/bodytree-calisthenics/id6760244558",
      },
    },
    {
      id: 2,
      name: "drivway",
      logoKey: "drivway",
      category: "Web",
      role: "Founder",
      pitch:
        "A marketplace connecting drivers with mobile car-repair technicians.",
      tags: ["React", "TypeScript", "SwiftUI", "Firebase", "Cloudflare"],
      links: {
        site: "https://drivway.co",
        appStore:
          "https://apps.apple.com/us/app/drivway-car-repair-near-you/id6794942326",
      },
    },
    {
      id: 3,
      name: "CardOps",
      logoKey: "cardops",
      category: "iOS",
      role: "Personal",
      pitch: "Inventory, pricing, and profit for card vendors who sell at shows.",
      tags: ["SwiftUI", "SwiftData", "CloudKit", "Cloudflare Workers"],
      links: {
        site: "https://cardops.app",
        appStore:
          "https://apps.apple.com/us/app/cardops-tcg-vendor-tracker/id6790439848",
      },
    },
    {
      id: 4,
      name: "Simple Self Budget",
      logoKey: "simpleselfbudget",
      category: "iOS",
      role: "Personal",
      pitch: "Friction-free monthly budgeting that lives on your devices.",
      tags: ["SwiftUI", "SwiftData", "CloudKit"],
      links: {
        appStore: "https://apps.apple.com/us/app/simple-self-budget/id6758739138",
      },
    },
    {
      id: 5,
      name: "Elite Equine Events",
      logoKey: "eliteequine",
      category: "Client",
      role: "Contract",
      pitch: "An event-management platform for an equestrian show series.",
      tags: ["React", "TypeScript", "Firebase", "Square"],
      links: { site: "https://eliteequineevents.com" },
    },
    {
      id: 6,
      name: "Valz Corner",
      logoKey: "valzcorner",
      category: "Client",
      role: "Contract",
      pitch: "A ground-up redesign of an oil painter's portfolio & shop.",
      tags: ["Web Design", "UI/UX", "Frontend", "E-commerce"],
      links: { site: "https://www.valzcorner.com" },
    },
    {
      id: 7,
      name: "Marquee",
      logoKey: "marquee",
      category: "iOS",
      role: "Personal",
      pitch: "Track movies, TV, and anime — and see where to watch them.",
      tags: ["SwiftUI", "SwiftData", "CloudKit", "WidgetKit"],
      links: {
        appStore: "https://apps.apple.com/us/app/marquee-tv-movies/id6794869427",
      },
    },
  ],
  experience: [
    {
      id: 0,
      title: "Software Engineer, Jamf; Remote — 2021-Present",
      desc: "Architected and enhanced a certificate authentication platform using MongoDB, schema validation, and event-driven messaging with dead-letter policies. Delivered a multitude of features and platform upgrades, including Java 25 modernization and Gradle dependency updates across microservices. Strengthened deployment reliability by building CI/CD pipelines (GitHub Actions, Jenkins), containerized test workflows, and observability stacks with Prometheus and Grafana for SLO-driven monitoring. Improved backend modules and APIs while supporting large-scale refactors and cross-application Java upgrades. Mentored new and junior engineers, authored ADRs, and contributed to agile planning and architecture reviews. Leveraged AI-assisted development tools (Claude Code, GitHub Copilot) to accelerate feature delivery, refactoring, test generation, and code quality improvements.",
    },
    {
      id: 1,
      title: "Software Engineer Intern, Jamf; Remote — 2020-2021",
      desc: "Supported modularization and data migration of legacy systems to Spring Boot microservices. Improved data performance and maintainability with JPA, MySQL, and Gradle build automation.",
    },
    {
      id: 2,
      title: "Contract Web Developer, Elite Equine Events; Remote — 2024-Present",
      desc: "Build and maintain the event-management platform for an equestrian show series: event catalog, multi-step rider and horse registration, payments, scoring, and series standings. React + TypeScript SPA on Firebase Auth, Firestore, Storage, and Cloud Functions, with Square payment links and role-based admin permissions.",
    },
  ],
  education:
    "University of Minnesota, Twin Cities — Bachelor of Science in Computer Science, 2017-2020, Minneapolis, MN.",
  skills: [
    {
      label: "Languages",
      items: ["Swift", "Kotlin", "Java", "TypeScript", "JavaScript", "Python", "SQL"],
    },
    {
      label: "Apple / iOS",
      items: ["SwiftUI", "SwiftData", "CloudKit", "WidgetKit", "watchOS", "Fastlane"],
    },
    {
      label: "Web & Frontend",
      items: ["React", "Vite", "Tailwind CSS", "React Router", "Framer Motion"],
    },
    {
      label: "Backend & Data",
      items: [
        "Spring Boot",
        "Node.js",
        "Firebase",
        "MongoDB",
        "REST APIs",
        "Event-driven messaging",
      ],
    },
    {
      label: "Cloud & DevOps",
      items: [
        "Cloudflare Workers",
        "Cloudflare Pages",
        "GitHub Actions",
        "Jenkins",
        "Docker",
        "Prometheus",
        "Grafana",
      ],
    },
    {
      label: "AI & Tooling",
      items: ["MCP server development", "Claude Code", "GitHub Copilot", "Cursor", "Git"],
    },
  ],
  social: {
    linkedin: "https://www.linkedin.com/in/andre-havasi-63952316b/",
    github: "https://github.com/ahavasi",
    appStore: "https://apps.apple.com/us/developer/andre-havasi/id1785545529",
    email: "andre.havasi@icloud.com",
  },
};
