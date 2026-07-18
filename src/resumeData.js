export default {
  name: "Andre Havasi",
  title: "Software Engineer · Founder · Builder-for-hire",
  heroHeadline: "I build web & iOS apps — for my products, and for yours.",
  taglines: [
    "Software Engineer @ Jamf",
    "Founder of LiftLogic",
    "iOS & Web Developer",
    "Builder-for-hire",
  ],
  about: [
    "I'm Andre Havasi — a software engineer at Jamf and the founder of LiftLogic. For 5+ years I've shipped production software: backend systems and APIs that power enterprise device management, plus a shelf of my own iOS and web apps.",
    "I design, build, and ship complete products end-to-end — SwiftUI apps, React web platforms, and the Firebase and Cloud backends behind them. I also build for clients who need a real product shipped, not a prototype.",
    "Got an app or website idea? I can take it from concept to the App Store or the open web. Let's build something.",
  ],
  stats: [
    { value: "5+", label: "Years shipping software" },
    { value: "6", label: "Apps & platforms built" },
    { value: "3", label: "Products founded" },
  ],
  services: [
    {
      title: "Web Apps",
      desc: "React + TypeScript web platforms, from marketing sites to full SaaS dashboards.",
      icon: "Globe",
    },
    {
      title: "iOS Apps",
      desc: "Native SwiftUI apps built and shipped to the App Store, with iCloud/CloudKit sync.",
      icon: "Smartphone",
    },
    {
      title: "Backends & APIs",
      desc: "Firebase, Cloud Functions, and Cloudflare Workers that scale — auth, data, and integrations.",
      icon: "Server",
    },
  ],
  projects: [
    {
      id: 0,
      name: "LiftLogic",
      logoKey: "liftlogic",
      role: "Founder",
      pitch: "AI-assisted workout tracking that feels like a training partner.",
      tags: ["SwiftUI", "Firebase", "Apple Watch", "AI"],
      bullets: [
        "Built an AI-assisted fitness platform in SwiftUI with a Firebase backend, Apple Watch verification, and analytics dashboards.",
        "Architected services for workout logging, performance metrics, and dynamic exercise updates.",
        "Own end-to-end product, UI/UX, and growth.",
      ],
      links: {
        site: "https://liftlogic.fit",
        appStore:
          "https://apps.apple.com/us/app/liftlogic-train-with-purpose/id6740549754",
      },
    },
    {
      id: 1,
      name: "BodyTree",
      logoKey: "bodytree",
      role: "Founder",
      pitch: "A skill-tree for calisthenics — prove what you can do.",
      tags: ["iOS", "Android", "Firebase"],
      bullets: [
        "Native iOS + Android app for tracking calisthenics skill progression and proving mastered movements.",
        "Designed a video-game-style skill tree grounded in real physical achievement.",
        "Shared data pipeline exports exercise and branch data to both native apps.",
      ],
      links: {
        site: "https://bodytree.app",
        appStore: "https://apps.apple.com/us/app/bodytree/id6760244558",
      },
    },
    {
      id: 2,
      name: "drivway",
      logoKey: "drivway",
      role: "Founder",
      pitch:
        "A marketplace connecting drivers with mobile car-repair technicians.",
      tags: ["React", "TypeScript", "Firebase", "Cloudflare"],
      bullets: [
        "Marketplace matching customers with local, often mobile, repair technicians at upfront per-service prices.",
        "React + TypeScript + Vite frontend on Cloudflare Pages; Firebase auth, data, and functions backend.",
        "Role-based flows for customers vs technicians, with reviews and area search.",
      ],
      links: { site: "https://drivway.co" },
    },
    {
      id: 3,
      name: "CardStock",
      logoKey: "cardstock",
      role: "Personal",
      pitch: "Scan, price, and sell Pokémon cards at shows.",
      tags: ["SwiftUI", "SwiftData", "CloudKit", "Cloudflare Workers"],
      bullets: [
        "iOS app for card vendors: scan cards, track inventory, and sell fast with live market pricing.",
        "SwiftData + CloudKit sync; a Cloudflare Worker aggregates catalog and price data.",
        "Real-time pricing from TCGplayer market prices and PriceCharting sold history.",
      ],
      links: {},
    },
    {
      id: 4,
      name: "SimpleSelfBudget",
      logoKey: "simpleselfbudget",
      role: "Personal",
      pitch: "Friction-free monthly budgeting that lives on your devices.",
      tags: ["SwiftUI", "SwiftData", "CloudKit"],
      bullets: [
        "A private, single-user budget tracker: log an expense in under 10 seconds and see budget impact instantly.",
        "SwiftData + CloudKit private sync — no bank feeds, no third-party servers.",
        "Focused on one job: monthly category budgeting, done well.",
      ],
      links: {},
    },
    {
      id: 5,
      name: "Equine Logistics LLC",
      logoKey: "equine",
      role: "Contract",
      pitch: "A custom web platform for a logistics company.",
      tags: ["React", "Vite", "Firebase"],
      bullets: [
        "Built and maintain company web systems: scheduling, data tracking, and client management.",
        "Improved operational efficiency with dynamic interfaces and automated workflows across microservices.",
      ],
      links: { site: "https://www.equinelogisticsllc.com" },
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
      title: "Contract Web Developer, Equine Logistics LLC; Remote — 2024-Present",
      desc: "Developed and maintain company web systems, including scheduling, data tracking, and client management tools. Improved operational efficiency through dynamic interfaces and automated workflows across multiple microservices.",
    },
  ],
  education:
    "University of Minnesota, Twin Cities — Bachelor of Science in Computer Science, 2017-2020, Minneapolis, MN.",
  skills: {
    languages: ["Java", "SQL", "Swift / SwiftUI", "Python", "JavaScript", "TypeScript"],
    frameworks: ["Spring Boot", "React", "Firebase", "MongoDB", "Node.js"],
    tools: [
      "Git",
      "GitHub Actions",
      "Jenkins",
      "Prometheus",
      "Grafana",
      "Cloudflare",
      "Claude Code",
      "Copilot",
      "Cursor",
    ],
  },
  social: {
    linkedin: "https://www.linkedin.com/in/andre-havasi-63952316b/",
    github: "https://github.com/ahavasi",
    email: "andre.havasi@icloud.com",
  },
};
