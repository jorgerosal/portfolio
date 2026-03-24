import {
  BarChart3,
  Blocks,
  BriefcaseBusiness,
  CloudCog,
  DatabaseZap,
  Layers3,
  Workflow,
} from "lucide-react";

export const navigation = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export const heroStats = [
  "10+ Years Experience",
  "SaaS & Automation",
  "AWS / React / Node.js",
  "70% Workflow Reduction",
];

export const pillars = [
  {
    title: "SaaS Platforms",
    description:
      "Internal and customer-facing systems built for operational clarity, modular growth, and reliable delivery.",
    icon: Blocks,
  },
  {
    title: "Automation Systems",
    description:
      "Workflow engines and data pipelines that remove repetitive tasks and improve team throughput at scale.",
    icon: Workflow,
  },
  {
    title: "Analytics & API Integrations",
    description:
      "API-driven platforms, reporting layers, and product data systems designed for decision-making and business visibility.",
    icon: BarChart3,
  },
];

export const experience = [
  {
    company: "Amazon",
    role: "Software Developer",
    period: "2021-2023",
    summary:
      "Worked on product advertising infrastructure, combining integration engineering, backend service design, analytics schema planning, and AWS operations.",
    highlights: [
      "Built and published a production NPM package integrating Amazon Product Advertising API 5.0.",
      "Designed RESTful API structures and modular Node.js services for maintainable backend workflows.",
      "Modeled relational SQL schemas for scalable product analytics and reporting.",
      "Deployed and maintained AWS-based infrastructure supporting production services.",
    ],
  },
  {
    company: "Channel Precision",
    role: "Senior Software Developer & Project Manager",
    period: "2017-2021",
    summary:
      "Led full-stack delivery for internal SaaS systems spanning dashboards, integrations, reporting, and operational automation across hybrid teams.",
    highlights: [
      "Led development of internal SaaS platforms using React, Vue, Node.js, and SQL-backed architectures.",
      "Built analytics dashboards integrating sales, inventory, and advertising data into unified operational views.",
      "Designed backend API architecture, integration layers, and relational schemas for multi-source reporting.",
      "Built automation pipelines processing 100,000+ records and reduced manual data processing time by 70%.",
      "Coordinated hybrid engineering teams and owned technical execution from planning through delivery.",
    ],
  },
  {
    company: "Outdoor Equipped",
    role: "Senior Project Manager",
    period: "2015-2021",
    summary:
      "Owned delivery operations across internal and outsourced teams, with a focus on automation, inventory workflows, and scalable execution practices.",
    highlights: [
      "Led Agile sprint planning, backlog prioritization, and technical execution across hybrid teams.",
      "Designed scalable inventory and listing automation systems supporting product lifecycle workflows.",
      "Built internal reporting tools and process improvements across operations.",
      "Delivered robotic process automation that reduced manual processing time by 80%.",
    ],
  },
];

export const skillGroups = [
  {
    title: "Frontend",
    icon: Layers3,
    items: ["JavaScript", "Angular", "React", "Vue", "HTML", "CSS"],
  },
  {
    title: "Backend",
    icon: BriefcaseBusiness,
    items: ["Node.js", "RESTful API design", "Modular service architecture"],
  },
  {
    title: "Databases",
    icon: DatabaseZap,
    items: ["SQL", "Relational schema architecture", "MongoDB"],
  },
  {
    title: "Cloud",
    icon: CloudCog,
    items: ["AWS", "Google Cloud", "Azure"],
  },
  {
    title: "Systems & Tools",
    icon: Workflow,
    items: [
      "Workflow automation",
      "Analytics dashboards",
      "Data processing pipelines",
      "GitHub",
      "Jira",
      "NPM",
    ],
  },
];

export const caseStudies = [
  {
    title: "Amazon Product Advertising API Integration",
    label: "Representative Case Study",
    subtitle: "Amazon Product Advertising API Integration for Node.js Developers",
    summary:
      "Developed and published a Node.js module wrapper for Amazon Product Advertising API workflows, then supported real-world integrations for advertisers and developers building custom product tools, catalog workflows, and related automation.",
    context:
      "This work combined developer tooling with practical production integration support, helping technical teams use Amazon product data more effectively inside internal tools and custom workflows.",
    stack: [
      "Node.js",
      "Amazon Product Advertising API",
      "NPM",
      "REST API patterns",
      "AWS",
      "Elastic Beanstalk",
      "EC2",
    ],
    impact:
      "Improved developer usability for Amazon PA API integrations and enabled faster implementation across custom internal tools and advertiser workflows.",
    link: "https://www.npmjs.com/package/amazon-paapi",
    linkLabel: "View NPM Package",
    imageSrc: null,
    imageAlt: null,
  },
  {
    title: "Multi-Source Analytics Dashboard Platform",
    label: "Representative Case Study",
    subtitle: "Internal Decision-Support SaaS for FBA Inventory and Business Insights",
    summary:
      "Designed and helped build an internal analytics platform that consolidated multi-source operational data into a single decision-support system for FBA inventory management and business insights.",
    context:
      "Built as a scalable internal platform processing more than 1 million records. Before modern AI-assisted workflows became common, the system relied on programmatic rules, criteria-based automation, machine learning, analytics pipelines, and distributed micro-workers to execute background tasks reliably.",
    stack: [
      "Node.js",
      "React",
      "Vue",
      "SQL",
      "MongoDB",
      "AWS",
      "Elastic Beanstalk",
      "EC2",
      "Background workers",
      "Machine learning",
      "Analytics pipelines",
    ],
    impact:
      "Processed 1M+ records, improved business visibility across inventory and operational data, and reduced fragmented reporting and manual analysis.",
    imageSrc: null,
    imageAlt: null,
  },
  {
    title: "High-Volume Workflow Automation Pipeline",
    label: "Representative Case Study",
    subtitle: "MAP Price Monitoring and Enforcement Automation",
    summary:
      "Built a high-volume automation pipeline for MAP price monitoring and enforcement workflows using headless browser automation, rotating proxies, and distributed Node.js workers.",
    context:
      "This was a pre-AI automation system designed to replace manually intensive digital investigation work at operational scale. The platform automated Amazon-focused monitoring workflows using browser automation, scraping infrastructure, and micro-worker orchestration.",
    stack: [
      "Node.js",
      "Web scraping tools",
      "Headless browser automation",
      "ScraperAPI",
      "Distributed micro-workers",
      "Automation pipelines",
      "AWS",
      "EC2",
    ],
    impact:
      "Increased daily processing from roughly 50 manual investigations to 10,000+ automated checks, dramatically improving throughput and reducing repetitive manual work.",
    link: "https://channelprecision.com/our-tech/mapwatcher/",
    linkLabel: "View MAP Watcher",
    imageSrc: "/assets/work/price-watcher.webp",
    imageAlt: "MAP Watcher product illustration for price monitoring workflows",
  },
  {
    title: "Robotic Process Automation for Multi-Channel Order Operations",
    label: "Representative Case Study",
    subtitle: "High-Volume Back-Office Automation Before the AI Automation Era",
    summary:
      "Developed robotic process automation workflows using WinAutomation and custom multi-threaded worker logic to automate high-volume back-office tasks across multiple sales and order channels.",
    context:
      "A key use case included automating repetitive order-entry workflows into supplier and B2B systems for dropshipping operations tied to Amazon order fulfillment. The system relied on structured workflow logic, automation rules, and concurrent workers rather than LLM-based automation.",
    stack: [
      "WinAutomation",
      "Robotic Process Automation",
      "Node.js workers",
      "Multi-threaded processing",
      "Workflow automation",
      "AWS",
      "EC2",
    ],
    impact:
      "Automated tens of thousands of repetitive entries, improved speed and consistency across order operations, and reduced reliance on manual back-office processing.",
    imageSrc: "/assets/work/winautomation.png",
    imageAlt: "WinAutomation platform visual used for robotic process automation workflows",
  },
];

export const profile = {
  name: "Jorge Rosal Jr.",
  title: "Senior Full-Stack Engineer",
  subtitle: "SaaS Systems Builder & Project Manager",
  location: "Cebu, Philippines",
  email: "yortrosal@gmail.com",
  phone: "+639056816082",
  linkedin: "https://www.linkedin.com/in/jorge-rosal/",
  github: "https://github.com/jorgerosal",
  cvHref: "/assets/docs/jorge-rosal-cv.pdf",
  imageSrc: "/assets/images/jorge-rosal.jpg",
  heroHeadline:
    "Building scalable SaaS systems, workflow automation, and data-driven software for real operational impact.",
  heroText:
    "Senior full-stack engineer with 10+ years of experience delivering API-driven platforms, analytics tooling, and cloud-backed systems across engineering and project leadership roles.",
  about:
    "I design and ship software systems that solve operational problems clearly and reliably. My background spans full-stack engineering, automation architecture, analytics tooling, and technical delivery leadership, with a focus on translating business complexity into maintainable systems built with Node.js, React, SQL, and cloud infrastructure.",
  education: "Visayas State University, BS in Computer Science (2006-2010)",
};
