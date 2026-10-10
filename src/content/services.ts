export type ServiceFeature = {
  title: string;
  body?: string;
  image?: string;
  notes?: readonly string[];
};

export type ServiceDetailContent = {
  title: string;
  description: string;
  banner: {
    title: string;
    image: string;
    mobileImage: string;
    tone?: "inverse" | "ink";
    titlePlacement?: "overlay" | "below";
  };
  intro: {
    id: string;
    title?: string;
    emphasis?: readonly string[];
    paragraphs: readonly string[];
    image?: string;
    imageAlt?: string;
  };
  features: {
    id: string;
    title: string;
    items: readonly ServiceFeature[];
  };
  showProjects?: boolean;
};

const enquire = {
  title: "Let’s Build the Future of Data Infrastructure",
  label: "Enquire Now",
  href: "/contact/",
} as const;

export const designBuildPage = {
  title: "Design & Build – Sterling & Wilson Data Center",
  description:
    "Turnkey design and build solutions that combine engineering excellence with execution speed, from greenfield projects to brownfield upgrades.",
  banner: {
    title: "Design & Build",
    image: "/assets/images/1-Design-Build-0ae69b.jpg",
    mobileImage: "/assets/images/Design-Build_V1-M-cd6c43.jpg",
  },
  intro: {
    id: "design-build-intro",
    title: "Built for PERFORMANCE. Delivered with PRECISION.",
    emphasis: ["PERFORMANCE.", "PRECISION."],
    paragraphs: [
      "At Sterling & Wilson Data Center, we deliver turnkey design and build solutions that combine engineering excellence with execution speed. From greenfield projects to brownfield upgrades, our integrated approach ensures every element – from Civil Works and MEP to HVAC, IBMS, and Fire Safety – is seamlessly designed, installed, and commissioned.",
      "With dedicated in-house experts and trusted partners, we manage the full project lifecycle – design, procurement, construction, testing, and handover – ensuring every data center is built to perform from day one. Our solutions are scalable, compliant, and future-ready – tailored to meet the growing demands of hyperscale, edge, enterprise, and colocation facilities. From concept to commissioning, we build data centers that deliver reliability, efficiency, and long-term value.",
    ],
  },
  features: {
    id: "design-build-advantage",
    title: "Our EPC Advantage",
    items: [
      {
        title: "Certified Design Excellence",
        body: "for Tier-IV compliant designs",
        image: "/assets/images/1-Certified-Design-Excellence-feac96.png",
      },
      {
        title: "Complete EPC Ownership",
        body: "from concept to commissioning",
        image: "/assets/images/2-Complete-EPC-Ownership-64d6ad.png",
      },
      {
        title: "Seamless MEP + Civil Integration",
        body: "under one roof",
        image: "/assets/images/3-Seamless-MEP-Civil-Integration-405d39.png",
      },
      {
        title: "Accelerated Build Timelines",
        body: "with modular delivery",
        image: "/assets/images/4-Accelerated-Build-Timelines-36f560.png",
      },
      {
        title: "Future-Ready Infrastructure",
        body: "that scales with your growth",
        image: "/assets/images/5-Future-Ready-Infrastructure-d148b0.png",
      },
    ],
  },
  showProjects: true,
  cta: {
    ...enquire,
    id: "design-build-cta",
    subtitle: "From concept to completion — our experts are here to guide you",
  },
} satisfies ServiceDetailContent & { cta: { id: string; subtitle: string } };

export const modularConstructionPage = {
  title: "Modular Construction – Sterling & Wilson Data Center",
  description:
    "Modular data center delivery built on DfMA principles, with prefabricated MEP systems for faster execution, greater safety, and consistent quality.",
  banner: {
    title: "Modular Construction",
    image: "/assets/images/2-Modular-Construction_4-D-bca6c5.jpg",
    mobileImage: "/assets/images/2-Modular-Construction_4-M-d26bbc.jpg",
  },
  intro: {
    id: "modular-construction-intro",
    title: "Faster BUILDS. Smarter INTEGRATION.",
    emphasis: ["BUILDS.", "INTEGRATION."],
    paragraphs: [
      "We redefine data center delivery through modular construction built on DfMA (Design for Manufacturing and Assembly) principles. By prefabricating MEP systems in factory-controlled environments, we ensure faster execution, greater safety, and consistent quality across projects.",
      "Modules are delivered in a ready-to-install state, reducing on-site work, labour intensity, and material wastage. This accelerates project timelines, especially in high-density or fast-track deployments, while ensuring seamless integration with existing systems and minimal disruption to operations.",
      "Our approach brings efficiency, repeatability, and sustainability to every build – making it ideal for scalable rollouts across diverse geographies.",
    ],
  },
  features: {
    id: "modular-construction-benefits",
    title: "Key Benefits",
    items: [
      {
        title: "DfMA-Based Prefabrication",
        body: "for precision-engineered modules",
        image: "/assets/images/1-DfMA-Based-Prefabrication-a2b56a.png",
      },
      {
        title: "Intelligent Design Coordination",
        body: "using BIM and AI for early clash resolution",
        image: "/assets/images/2-Intelligent-Design-Coordination-51b521.png",
      },
      {
        title: "Faster Deployment",
        body: "with up to 50% reduction in build time",
        image: "/assets/images/3-Faster-Deployment-4afbad.png",
      },
      {
        title: "Lower On-Site Risk",
        body: "with reduced manpower and complexity",
        image: "/assets/images/4-Lower-On-Site-Risk-144fe7.png",
      },
      {
        title: "High-Quality Installation",
        body: "driven by factory-grade consistency",
        image: "/assets/images/5-High-Quality-Installation-411e75.png",
      },
      {
        title: "Sustainable Construction",
        body: "to ensure minimal wastage and cleaner execution",
        image: "/assets/images/6-Sustainable-Construction-7d3ad7.png",
      },
    ],
  },
  cta: {
    ...enquire,
    id: "modular-construction-cta",
    subtitle: "From concept to completion — our experts are here to guide you.",
  },
} satisfies ServiceDetailContent & { cta: { id: string; subtitle: string } };

export const sustainableExecutionPage = {
  title: "Sustainable Execution – Sterling & Wilson Data Center",
  description:
    "ESG services with TechknowGreen Solutions, from gap assessments and framework reporting to life cycle assessment, net-zero roadmaps, and environmental compliance.",
  banner: {
    title: "Sustainable Execution",
    image: "/assets/images/Web-banner-technogreen-2026-fe1c1b.jpg",
    mobileImage: "/assets/images/Web-banner-technogreen-2026-mobile-bbe686.jpg",
    tone: "ink",
    titlePlacement: "below",
  },
  intro: {
    id: "sustainable-execution-intro",
    paragraphs: [
      "Environmental, Social, and Governance (ESG) principles are no longer optional. They are fundamental to building future-ready data centres, factories, commercial buildings, and large campuses. As organisations prioritise energy optimisation and efficient use of resources such as power and water, the need to operate sustainably, reduce emissions, and maintain stakeholder trust continues to grow.",
      "In partnership with TechknowGreen Solutions (TSL), we integrate ESG thinking across the entire lifecycle — from design and construction to operations and compliance. Our approach helps organisations align with global sustainability benchmarks while reducing environmental impact and strengthening long-term resilience.",
      "Our services enable carbon reduction, regulatory compliance, risk mitigation, and progress towards sustainable development goals.",
    ],
    image: "/assets/images/Sustainable-Execution-1-5525f3.jpg",
    imageAlt: "Illustration of environmental, social, and governance themes",
  },
  features: {
    id: "sustainable-execution-services",
    title: "Key Services",
    items: [
      {
        title: "ESG Gap Assessments",
        body: "to benchmark and improve sustainability posture",
        image: "/assets/images/1-ESG-Gap-Assessments-2b89c4.png",
      },
      {
        title: "Framework-Based Reporting",
        body: "(BRSR, GRI, TCFD, SASB)",
        image: "/assets/images/2-Framework-Based-Reporting-abacf3.png",
      },
      {
        title: "Life Cycle Assessment",
        body: "to evaluate and optimize impact",
        image: "/assets/images/3-Life-Cycle-Assessment-ce4b24.png",
      },
      {
        title: "Net-Zero Roadmaps",
        body: "to transition toward cleaner operations",
        image: "/assets/images/3-Net-Zero-Roadmaps-d7046b.png",
      },
      {
        title: "Environmental Monitoring & Compliance",
        body: "to track air quality and site risk",
        image: "/assets/images/4-Environmental-Monitoring-Compliance-9d3f4b.png",
        notes: [
          "Miyawaki Forest",
          "Circular Economic Wetland Technology (Waste Water)",
          "Noise Analysis",
        ],
      },
      {
        title: "IAQ",
        body: "monitoring & improvement",
      },
    ],
  },
  cta: {
    ...enquire,
    id: "sustainable-execution-cta",
    subtitle: "From concept to completion — our experts are here to guide you.",
  },
} satisfies ServiceDetailContent & { cta: { id: string; subtitle: string } };

export const omServicesPage = {
  title: "O&M Services – Sterling & Wilson Data Center",
  description:
    "Operations and maintenance for peak performance across the data center lifecycle, with round-the-clock support, preventive care, and emergency response.",
  banner: {
    title: "O&M Services",
    image: "/assets/images/om1-b9d6e9.jpg",
    mobileImage: "/assets/images/om1-ed65e7.png",
  },
  intro: {
    id: "om-services-intro",
    title: "Always ON. Always OPTIMISED.",
    emphasis: ["ON.", "OPTIMISED."],
    paragraphs: [
      "Our Operations & Maintenance services are built to ensure peak performance and zero disruption across your data center’s lifecycle. From round-the-clock infrastructure support to preventive care and emergency response, we offer seamless and reliable support backed by certified experts.",
      "With advanced diagnostics, smart tools, and robust spares management, we proactively manage risk, extend asset life, and reduce total cost of ownership. Whether it’s a single facility or a multi-site network, our uptime-first approach keeps your critical systems running securely, efficiently, and continuously.",
    ],
  },
  features: {
    id: "om-services-benefits",
    title: "Key Benefits",
    items: [
      {
        title: "24x7 Infrastructure Support",
        body: "with certified on-ground and remote teams",
        image: "/assets/images/1-24x7-Infrastructure-Support-2100a0.png",
      },
      {
        title: "Predictive & Preventive Maintenance",
        body: "for proactive asset care",
        image: "/assets/images/2-Predictive-Preventive-Maintenance-12dcde.png",
      },
      {
        title: "Remote Monitoring & Diagnostics",
        body: "to resolve issues faster",
        image: "/assets/images/3-Remote-Monitoring-Diagnostics-6f7651.png",
      },
      {
        title: "Customisable AMC Contracts",
        body: "tailored to your operational needs",
        image: "/assets/images/4-Customizable-AMC-Contracts-e45e3e.png",
      },
      {
        title: "Uptime-Focused Service Delivery",
        body: "that minimises downtime and disruptions",
        image: "/assets/images/5-Uptime-Focused-Service-Delivery-257733.png",
      },
    ],
  },
  cta: {
    ...enquire,
    id: "om-services-cta",
    subtitle: "From concept to completion — our experts are here to guide you.",
  },
} satisfies ServiceDetailContent & { cta: { id: string; subtitle: string } };

export type SmartCard = {
  title: string;
  body?: string;
  image?: string;
  imageAlt?: string;
};

export const smartOperationsPage = {
  title: "Smart Operations – Sterling & Wilson Data Center",
  description:
    "AI-powered Smart Operations for critical infrastructure, with SmartSense monitoring across India, the Middle East, and Africa.",
  hero: {
    id: "smart-operations-title",
    title: "AI-Powered Smart Operations for Critical Infrastructure",
    emphasis: ["Smart Operations"],
    lead: "Monitor, analyse, and optimise facility performance with AI, machine learning, and +IoT across India, the Middle East, and Africa.",
    cta: { label: "Request a Demo", href: "/contact/" },
    image: "/assets/images/hero-24b9ac.jpg",
    imageAlt: "Data centre aisle with a SmartSense monitoring display",
    highlights: [
      "Predictive Maintenance",
      "Real-Time Monitoring",
      "Energy Optimisation",
      "Multi-Site Visibility",
    ],
  },
  transform: {
    id: "smart-operations-transform",
    title: "Transform Facility Management into Intelligent Operations",
    paragraphs: [
      "Sterling & Wilson Data Center Smart Operations helps organisations move from reactive monitoring to intelligent, data-driven operations.",
      "Powered by SmartSense, an AI-based monitoring platform delivered by Sterling & Wilson Data Center in partnership with Ecolibrium, the solution provides real-time visibility into critical assets, energy consumption, equipment health, and carbon footprint.",
      "This enables organizations to identify anomalies, predict potential failures before they occur, improve operational efficiency, reduce downtime, and make faster, data-driven decisions across multiple facilities.",
    ],
  },
  delivers: {
    id: "smart-operations-delivers",
    title: "What Smart Operations Delivers",
    lead: "Smart Operations brings together analytics, AI, machine learning, and IoT to improve how critical infrastructure is monitored and managed.",
    items: [
      {
        title: "Monitor Power & Cooling",
        body: "Monitor power and cooling performance in real time.",
        image: "/assets/images/POWER-a0ca21.png",
      },
      {
        title: "Monitor Water",
        body: "Monitor water systems and consumption",
        image: "/assets/images/drop1-45a41f.png",
      },
      {
        title: "Customised Dashboards",
        body: "Personalised dashboards with live KPIs.",
        image: "/assets/images/BAR-c73cca.png",
      },
      {
        title: "Carbon Emissions",
        body: "Track and manage carbon emissions and impact",
        image: "/assets/images/cloud-c6843e.png",
      },
      {
        title: "Real Time Visibility",
        body: "Gain real time visibility across assets and operation",
        image: "/assets/images/EYES1-0dda44.png",
      },
      {
        title: "Identify Anomalies",
        body: "Detect anomalies early and take action faster",
        image: "/assets/images/GLASS-29ab4b.png",
      },
      {
        title: "Predictive Maintenance",
        body: "Predict failures and plan maintainance in advance",
        image: "/assets/images/SPANER-fe6263.png",
      },
    ] satisfies SmartCard[],
  },
  capabilities: {
    id: "smart-operations-capabilities",
    title: "Key Capabilities",
    items: [
      {
        title: "Predictive Maintenance",
        body: "Identify patterns and predict failures before they affect operations. Reduce unplanned downtime, extend asset life, and improve maintenance planning.",
        image: "/assets/images/s1-13d64f.png",
      },
      {
        title: "Real-Time Monitoring",
        body: "Gain live visibility across critical infrastructure through centralised dashboards and automated alerts.",
        image: "/assets/images/m1-7a0afb.png",
      },
      {
        title: "Energy and Water Optimisation",
        body: "Track consumption patterns, identify inefficiencies, and improve resource performance across sites.",
        image: "/assets/images/l1-710a16.png",
      },
      {
        title: "Equipment Health Analytics",
        body: "Monitor asset condition continuously and detect early signs of abnormal performance.",
        image: "/assets/images/b1-1553f8.png",
      },
      {
        title: "Carbon Footprint Visibility",
        body: "Measure and monitor carbon impact with clearer sustainability insights and reporting.",
        image: "/assets/images/c1-527125.png",
      },
      {
        title: "Root Cause Analysis",
        body: "Use data-driven insights to identify issues faster and improve decision-making at site and portfolio level.",
        image: "/assets/images/a1-2cb6aa.png",
      },
    ] satisfies SmartCard[],
  },
  sectors: {
    id: "smart-operations-sectors",
    title: "Built for Critical Sectors",
    items: [
      {
        title: "Data Centres",
        body: "Improve uptime, monitor critical assets, and optimise infrastructure performance in mission-critical environments.",
        image: "/assets/images/11-d735f3.webp",
        imageAlt: "Rows of equipment cabinets in a data centre aisle",
      },
      {
        title: "Telecom Towers",
        body: "Track distributed assets for manned & unmanned sites, monitor site health remotely, and gain visibility across wide-area operations.",
        image: "/assets/images/22-3c2347.png",
        imageAlt: "Telecommunications tower against a clear sky",
      },
      {
        title: "Commercial Buildings",
        body: "Improve facility efficiency, manage energy use, and centralise performance monitoring across building portfolios.",
        image: "/assets/images/33-3d024b.png",
        imageAlt: "Glass commercial building exterior",
      },
      {
        title: "Connected Factories",
        body: "Monitor equipment health, reduce downtime, and support smarter plant operations through predictive intelligence.",
        image: "/assets/images/44-3e6599.png",
        imageAlt: "Factory production floor with machinery",
      },
      {
        title: "Retail Chains",
        body: "Gain multi-site visibility, standardise performance, and improve operational consistency across locations.",
        image: "/assets/images/55-3bee7d.png",
        imageAlt: "Retail store interior with stocked shelves",
      },
    ] satisfies SmartCard[],
  },
  impact: {
    id: "smart-operations-impact",
    title: "Business Impact",
    lead: "Smart Operations helps organisations",
    items: [
      { title: "Reduce Unplanned Downtime", image: "/assets/images/001-6fa85d.png" },
      { title: "Improve Asset Reliability", image: "/assets/images/002-07ab1e.png" },
      { title: "Lower Energy And Operational Waste", image: "/assets/images/003-5d34c9.png" },
      { title: "Extend Equipment Life", image: "/assets/images/004-559bed.png" },
      { title: "Speed Up Fault Detection And Root Cause Analysis", image: "/assets/images/005-0660a6.png" },
      { title: "Improve Decision-Making Across Multiple Sites", image: "/assets/images/006-49c8df.png" },
      { title: "Support Sustainability And ESG Reporting", image: "/assets/images/007-9ab495.png" },
      { title: "Deliver Stronger Operational Efficiency", image: "/assets/images/008-d7b091.png" },
    ] satisfies SmartCard[],
  },
  platform: {
    id: "smart-operations-platform",
    title: "Powered by SmartSense",
    paragraphs: [
      "SmartSense is the intelligent monitoring platform behind our Smart Operations offering.",
      "The platform enables organisations to:",
    ],
    points: [
      "Track facility health in real time",
      "Analyse patterns across critical systems",
      "Prioritise alerts more effectively",
      "Predict maintenance needs",
      "Monitor long-term trends",
      "Generate automated reports",
      "Improve system efficiency across sites",
    ],
    diagram: "/assets/images/new-22dada.png",
    diagramAlt:
      "How SmartSense Works: IoT devices and sensors, the SmartSense platform, an AI and analytics engine, then insights and actions",
    monitor: "/assets/images/computer-888275.png",
    monitorAlt: "Desktop monitor showing an operations dashboard",
  },
  why: {
    id: "smart-operations-why",
    title: "Why SWDC",
    points: [
      "Deep experience in mission-critical infrastructure",
      "AI-enabled monitoring and analytics",
      "Centralised visibility across assets and sites",
      "Scalable solution for multiple industries",
      "Focus on efficiency, uptime, and sustainability",
      "Backed by the SmartSense platform and Ecolibrium partnership",
    ],
  },
  geography: {
    id: "smart-operations-geography",
    title: "Supporting Operations Across India, the Middle East, and Africa",
    paragraphs: [
      "Sterling & Wilson Data Center delivers Smart Operations capabilities across diverse geographies and infrastructure environments.",
      "Whether the challenge is scale, uptime, energy efficiency, or distributed asset monitoring, SmartSense helps teams operate with more clarity, control, and confidence.",
    ],
    image: "/assets/images/main-banner-89357e.jpg",
  },
  faqs: {
    id: "smart-operations-faq",
    title: "Frequently Asked Questions",
    items: [
      {
        question: "What is a Smart Operations platform?",
        answer:
          "A Smart Operations platform uses AI, machine learning, analytics, and IoT to monitor critical infrastructure, predict issues, and improve operational performance.",
      },
      {
        question: "Which industries can benefit from Smart Operations?",
        answer:
          "Data centres, Telecom towers, Commercial buildings, Hospitals, Connected factories, Large campuses and retail chains can all benefit from better monitoring and predictive intelligence.",
      },
      {
        question: "How does predictive maintenance help?",
        answer:
          "It identifies patterns and risks before equipment fails, helping reduce downtime, improve planning, and lower maintenance costs.",
      },
      {
        question: "Can Smart Operations support sustainability goals?",
        answer:
          "Yes. It helps track energy, water, and carbon performance, which supports ESG and sustainability reporting.",
      },
      {
        question: "Is Smart Operations suitable for multi-site operations?",
        answer: "Yes. The platform is designed for centralised visibility across multiple assets and sites.",
      },
    ],
  },
  cta: {
    id: "smart-operations-cta",
    title: "Ready to transform your operations?",
    subtitle:
      "Gain the visibility, intelligence, and control you need to improve performance across critical infrastructure.",
    label: "Request a Demo",
    href: "/contact/",
  },
};
