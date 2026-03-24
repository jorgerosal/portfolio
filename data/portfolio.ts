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
  "1M+ Records Processed",
  "AWS / Node.js / React",
  "70-80% Manual Work Reduction",
];

export const heroHighlights = [
  {
    label: "Focus",
    value: "SaaS platforms, analytics systems, automation pipelines",
  },
  {
    label: "Strength",
    value: "Architecture thinking paired with hands-on delivery",
  },
  {
    label: "Recent edge",
    value: "AI-assisted workflows for faster implementation and iteration",
  },
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
    company: "Career Break",
    role: "Field Missionary Work",
    period: "September 2023-January 2026",
    summary:
      "Took a purposeful career break for full-time field missionary work, helping people learn about the Bible in the Philippines and Hong Kong while further developing communication, discipline, empathy, and community engagement.",
    highlights: [
      "Now returning to software and systems work with core engineering fundamentals, architecture experience, and systems thinking intact.",
      "Using modern AI-assisted workflows to accelerate implementation, iteration, and delivery while building on prior full-stack and automation experience.",
    ],
    emphasis: "transition",
  },
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
    emphasis: "primary",
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
    emphasis: "primary",
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
    emphasis: "primary",
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
    category: "API integration tooling",
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
    metadata: [
      { label: "System", value: "API wrapper + service integration" },
      { label: "Delivery", value: "Published npm package" },
      { label: "Primary signal", value: "Faster partner implementation" },
    ],
    link: "https://www.npmjs.com/package/amazon-paapi",
    linkLabel: "View NPM Package",
    imageSrc: "/assets/uncategorized/npm amazon paapi.png",
    imageAlt: "Amazon Product Advertising API integration screenshot",
  },
  {
    title: "Multi-Source Analytics Dashboard Platform",
    label: "Representative Case Study",
    category: "Analytics SaaS platform",
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
    metadata: [
      { label: "System", value: "Internal analytics command center" },
      { label: "Scale", value: "1M+ records processed" },
      { label: "Primary signal", value: "Unified business visibility" },
    ],
    imageSrc: null,
    imageAlt: null,
  },
  {
    title: "High-Volume Workflow Automation Pipeline",
    label: "Representative Case Study",
    category: "Automation pipeline",
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
    metadata: [
      { label: "System", value: "Distributed monitoring pipeline" },
      { label: "Scale", value: "10,000+ checks per day" },
      { label: "Primary signal", value: "Massive throughput gains" },
    ],
    link: "https://channelprecision.com/our-tech/mapwatcher/",
    linkLabel: "View MAP Watcher",
    imageSrc: "/assets/work/price-watcher.webp",
    imageAlt: "MAP Watcher product illustration for price monitoring workflows",
  },
  {
    title: "Robotic Process Automation for Multi-Channel Order Operations",
    label: "Representative Case Study",
    category: "RPA operations system",
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
    metadata: [
      { label: "System", value: "RPA workflows + worker threads" },
      { label: "Delivery", value: "Order ops automation" },
      { label: "Primary signal", value: "Higher speed and consistency" },
    ],
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
    "Senior full-stack engineer building SaaS systems, automation workflows, and data-driven platforms with measurable operational impact.",
  heroText:
    "I build production systems that improve visibility, remove manual work, and support better decisions. My background spans API integrations, analytics platforms, AWS-backed services, and technical delivery leadership across internal SaaS and operational software.",
  about:
    "I design and deliver software systems that solve operational problems clearly and reliably. My work sits at the intersection of full-stack engineering, automation architecture, analytics tooling, and delivery leadership, with a consistent focus on turning business complexity into maintainable systems built with Node.js, React, SQL, and cloud infrastructure.",
  careerBreak:
    "After a purposeful period of full-time field missionary work from September 2023 to January 2026, I am now re-engaging with software and systems development with strong engineering fundamentals, architecture experience, and an AI-assisted workflow that helps accelerate implementation and delivery.",
  currentFocus:
    "Currently focused on senior engineering, systems, and technical delivery roles where architecture clarity, execution speed, and business impact matter.",
  education: "Visayas State University, BS in Computer Science (2006-2010)",
};
